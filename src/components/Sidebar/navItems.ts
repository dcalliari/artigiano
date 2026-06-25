export type NavItem = {
  name: string
  path: string
}

export const navItems: NavItem[] = [
  { name: 'RESERVAS', path: '/reserve' },
  { name: 'PEÇA AGORA!', path: '/order' },
  { name: 'CARDÁPIOS', path: '/menus' },
  { name: 'NOSSA HISTÓRIA', path: '/about' },
  { name: 'HORARIOS & LOCALIZAÇÃO', path: '/location' },
  { name: 'COMUNIDADE', path: '/community' },
  { name: 'CONTATO', path: '/contact' },
]
