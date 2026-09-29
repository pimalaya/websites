{
  description = "Pimalaya websites";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        # One workspace, one lockfile, one npmDepsHash. Each site builds to a
        # static `dist/` (index.html at its top level, plus sitemap.xml and
        # robots.txt; the blog adds feed.xml), for local checks or
        # self-hosting. Static sites: no runtime API, no build-time env. Copy
        # and outward links are baked into the source.
        mkSite = { name, description }: pkgs.buildNpmPackage {
          pname = "${name}-website";
          version = "0.1.0";
          src = ./.;
          npmDepsHash = "sha256-w8pVp+zEd+F9dlk8LuK0NCU8ck0F0l2QUlyJ1dxZz7c=";
          npmBuildScript = "build:${name}";

          installPhase = ''
            runHook preInstall
            cp -r sites/${name}/dist $out
            runHook postInstall
          '';

          meta.description = description;
        };
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            typescript-language-server
          ];
        };

        # One package per site; packages.default is pimalaya.org, so
        # `nix build github:pimalaya/websites` builds the front door.
        packages = rec {
          www = mkSite {
            name = "www";
            description = "The Pimalaya website (pimalaya.org), static pages";
          };
          blog = mkSite {
            name = "blog";
            description = "The Pimalaya blog (blog.pimalaya.org), static pages plus RSS";
          };
          default = www;
        };
      });
}
