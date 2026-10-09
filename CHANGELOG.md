# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added the websites monorepo.

  An npm workspace sharing one theme, one chrome, one prerender machinery and one nix shell across the Pimalaya sites.

- Added the pimalaya.org site at sites/www, migrated from the standalone website repository.

- Added the blog site at sites/blog, migrated from the standalone blog repository.

  Posts, RSS feed and the manual Buttondown newsletter script included.

- Added the `www` and `blog` flake packages, `www` being the default.

- Added the /business/ page.

  Provider and integrator partnerships with their prices, pain first.

- Added the /sign-in/ page.

  Announces the planned one-step Gmail and Microsoft 365 sign-in subscription.

- Added the /community/ page.

  Gathers chat, news, contributing and integrating.

- Added the /sponsor/ page.

  States the funding model, credits the grants and lists every donation route.

- Added the business and community bands to the home page.

- Added a call to action to the ecosystem page at the end of the home tools grid.

- Added the "From the community" section to the ecosystem page.

  Credits third-party projects built on the Pimalaya tools, without grading them.

- Added a partner badge to the community catalogue.

- Added a dark palette, following the system preference.

- Added Source Serif 4 as the self-hosted display face.

- Added new entries to the catalogue.

  pimalaya-linux, carillon, ical-rs, io-gcal, io-managesieve, io-pimdir, io-proxy, io-sasl, and io-replica as retired.

### Changed

- Changed the home page layout.

  Hero beside the Himalaya terminal, tools grouped by domain, developers and business side by side, community and newsletter in one band.

- Changed the nav to Tools, Ecosystem, Business, Community and Blog.

  Chat and News moved to the community page.

- Changed the theme contrast so every text pair reaches 4.5:1.

- Changed the ecosystem, business, sign-in, community and sponsor page layouts.

  Built on one shared page vocabulary: header, facts strip, panels, row lists, points.

- Changed the blog index to feature the newest post and list the others with their reading time.

- Changed the blog posts to show their reading time and link to the older and newer posts.

- Changed the blog nav to Website, Matrix and Mastodon.

- Changed the ecosystem page to list the libraries before the apps.

- Changed the ecosystem tables to sort rows by name.

- Changed calendula, tcard and tcal to early, following their releases.

- Changed the home grid to include Himalaya, calendula, tcard and tcal.

- Moved io-pim-discovery from the apps to the libraries.

- Renamed cardamum-android to pimalaya-android.

  Rescoped to mail, contacts and calendars in one app.

- Renamed mirador to carillon and io-people to io-gpeople.
