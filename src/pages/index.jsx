import Hero from '@/sections/Hero'
import Cateegories from '@/sections/Categories'
import Recipes from '@/sections/Recipes'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Cateegories />
      <Recipes />
    </>
  )
}
