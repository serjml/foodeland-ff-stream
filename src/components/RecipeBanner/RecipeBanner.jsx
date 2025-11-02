import './RecipeBanner.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    site,
    bgImgSrc,
  } = props

  return (
    <a
      className={clsx('recipe-banner', className)}
      href="/"
      style={{ backgroundImage: `url('${bgImgSrc}')` }}
    >
      <img
        className="recipe-banner__title-image"
        src="/images/title.svg"
        alt={title}
        width={172}
        height={60}
        loading="lazy"
      />
      <div className="recipe-banner__site">{site}</div>
    </a>
  )
}