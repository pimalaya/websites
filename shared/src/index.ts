/*
 * @pimalaya/shared: the common layer of the Pimalaya websites. One theme
 * (styles/theme.css + styles/global.css, imported by each site's entry), the
 * site chrome (Nav, Footer), and the ui primitives (Button, Icon, Logo,
 * Container), all extracted from pimalaya.org and blog.pimalaya.org so every
 * property reads as one family. The prerender machinery lives beside it in
 * src/prerender.js, exported as @pimalaya/shared/prerender.
 */

export { Nav } from './components/Nav'
export type { NavLink } from './components/Nav'
export { Footer } from './components/Footer'
export type { FooterColumn, FooterLink } from './components/Footer'
export { Button } from './components/ui/Button'
export { Container } from './components/ui/Container'
export { Icon } from './components/ui/Icon'
export type { IconName } from './components/ui/Icon'
export { Logo } from './components/ui/Logo'
