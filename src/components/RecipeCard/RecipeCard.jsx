import './RecipeCard.jsx.scss'
import {Image} from 'minista'
import Tags from '@/components/Tags'

export default (props) => {
  const {
    title,
    tags,
    imgSrc,
  } = props

  return (
    <article className="recipe-card" >
      <a
        className="recipe-card__link"
        href="/"
      >
        <Image className="recipe-card__image" src={imgSrc} />
        <h3 className="recipe-card__title h4">{title}</h3>
        <Tags
          className="recipe-card__tags"
          items={tags}
        />
      </a>
    </article>
  )
}