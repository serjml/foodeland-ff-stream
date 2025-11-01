import './Tags.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    items,
    type = '',
  } = props

  return (
    <div className={clsx(
      'tags',
      type === 'rounded' && 'tags--rounded',
      className
    )}>
      <ul className="tags__list" >
        {items.map(({iconName, label}, index) => (
          <li className="tags__item" key={index}>
            <Icon name={iconName} hasFill/>
            <span className="tags__label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}