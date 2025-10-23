import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    mode = '',
    type = 'button',
    href,
    children
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = {href}
  const buttonAttributes = {type}
  const attributesByTag = isLink ? linkAttributes : buttonAttributes

  return (
    <Component
      className={clsx('button', className, mode && `button--${mode}`)}
      {...attributesByTag}
    >
      {children}
    </Component>
  )
}
