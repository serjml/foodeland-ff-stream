import './Categories.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import CategoryCard from '@/components/CategoryCard'
import categories from './data.json'

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
     <Grid columns={6}>
       {categories.map((category, index) => (
         <CategoryCard {...category} key={index} />
       ))}
     </Grid>
   </Section>
  )
}