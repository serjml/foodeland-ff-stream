import './Categories.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import CategoryCard from '@/components/CategoryCard'

export default (props) => {
  const {
    className,
  } = props

  const categories = [
    {
      title: 'Breakfast',
      imgSrc: '/src/assets/images/catigories/breakfast.png',
      color: 'rgba(112, 130, 70)',
    },
    {
      title: 'Vegan',
      imgSrc: '/src/assets/images/catigories/vegan.png',
      color: 'rgba(108, 198, 63)',
    },
    {
      title: 'Meat',
      imgSrc: '/src/assets/images/catigories/meat.png',
      color: 'rgba(204, 38, 27)',
    },
    {
      title: 'Dessert',
      imgSrc: '/src/assets/images/catigories/Dessert.png',
      color: 'rgba(240, 158, 0)',
    },
    {
      title: 'Lunch',
      imgSrc: '/src/assets/images/catigories/lunch.png',
      color: 'rgba(0, 0, 0)',
    },
    {
      title: 'Chocolate',
      imgSrc: '/src/assets/images/catigories/chocolate.png',
      color: 'rgba(0, 0, 0)',
    },

  ]

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