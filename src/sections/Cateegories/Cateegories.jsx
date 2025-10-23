import './Cateegories.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'

export default (props) => {
  const {
    className,
  } = props

  return (
   <Section
     title="Categories"
     titleId="categories"
     linkLabel="View All Categories"
   >
     Section Card
   </Section>
  )
}