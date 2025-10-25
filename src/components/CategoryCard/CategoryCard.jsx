import './CategoryCard.scss'
import clsx from 'clsx'
import {Image} from 'minista'

export default (props) => {
  const {
    className,
    title,
    imgSrc,
    color,
  } = props

  return (
    <article className={clsx('category-card', className)} >
      <div
        className="category-card__body"
        style={{ '--categoryCardColor': color }}
      >
        <div
          className="category-card__image-wrapper"
          style={{'--categoryCardImage': `url('${imgSrc}')`}}
        >
          <Image className="category-card__image" src={imgSrc} />
        </div>
        <h3 className="category-card__title h6">{title}</h3>
      </div>
      </article>
  )
}