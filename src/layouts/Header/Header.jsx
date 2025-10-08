import './Header.scss'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import Socials from '@/components/Socials'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props

  const menuItems = [
    {label: 'Home', href: '/'},
    {label: 'Recipes', href: '/recipes'},
    {label: 'Blog', href: '/blog'},
    {label: 'Contact', href: '/contact'},
    {label: 'About us', href: '/about'},
  ]

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({label, href}) => (
              <li className="header__menu-item">
                <a
                  class={clsx('header__menu-link',
                    href === url && 'is-active'
                  )}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Socials className="header__soc1als"/>
        <BurgerButton className="visible-mobile" />
      </div>
    </header>
  )
}
