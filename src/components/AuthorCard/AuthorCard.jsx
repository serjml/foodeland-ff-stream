import './AuthorCard.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    imgSrc,
    name,
    date,
  } = props

  return (
    <div
      className={clsx('author-card', className)}
    >
      <Image
        className="author-card__image"
        src={imgSrc}
      />
      <h3 className="author-card__title">{name}</h3>
      <time className="author-card__date" dateTime={date.dateTime}>{date.label}</time>
    </div>
  )
}