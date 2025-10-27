import './Tag.scss'
import Icon from '@/components/Icon'

export default (props) => {
  const { tags } = props

  return (
    <div className="tags">
      <ul className="tags__list">
        {tags.map(({iconName, label}, index) => (
          <li className="tags__item" key={index}>
            <Icon name={iconName} hasFill/>
            <span className="tags__label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}