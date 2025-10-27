import './RecipeCard.jsx.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
  } = props
  
  return (
    <div
      className={clsx('recipe-card.jsx', className)}
    >
      RecipeCard.jsx
    </div>
  )
}