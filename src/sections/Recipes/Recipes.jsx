import './Recipes.scss'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import RecipeCard from '@/components/RecipeCard'
import items from './data.json'
import RecipeBanner from '@/components/RecipeBanner'

export default () => {
  return (
    <Section
      title="Simple and tasty recipes"
      titleId="recipes"
      isHeaderVertical
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
    >
      <Grid columns={3}>
        {items.map((item, index) => {
          const {type, ...rest} = item

          if (type === 'banner') {
            return (
              <RecipeBanner {...rest} key={item.title} />
            )
          }

          return (
            <RecipeCard {...rest} key={item.title} />
          )
        })}
      </Grid>
    </Section>
  )
}