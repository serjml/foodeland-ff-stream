import './Hero.scss'

export default () => {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
    >
      <div
        className="hero__slider swiper"
        data-js-slider={JSON.stringify({
          spaceBetween: 40,
        })}
      >
        <ul className="hero__slider-list swiper-wrapper">
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa illum nihil ratione voluptatibus. Asperiores pariatur, repellendus! Ab aut delectus, distinctio eos omnis quas voluptas. A alias aliquam aliquid architecto atque blanditiis cum debitis dolor dolorum eaque eius error, est excepturi explicabo, illum ipsa modi molestias mollitia numquam, officiis perspiciatis placeat porro provident quae quaerat quam quia ratione repellendus saepe similique tempore tenetur totam voluptate. Ab ea eveniet incidunt perferendis. Adipisci atque deleniti dolorum enim facilis in iure laudantium similique soluta. Cupiditate doloribus error et illo itaque laudantium maiores minus nisi numquam placeat provident quam quis rem repudiandae, similique velit.</div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa illum nihil ratione voluptatibus. Asperiores pariatur, repellendus! Ab aut delectus, distinctio eos omnis quas voluptas. A alias aliquam aliquid architecto atque blanditiis cum debitis dolor dolorum eaque eius error, est excepturi explicabo, illum ipsa modi molestias mollitia numquam, officiis perspiciatis placeat porro provident quae quaerat quam quia ratione repellendus saepe similique tempore tenetur totam voluptate. Ab ea eveniet incidunt perferendis. Adipisci atque deleniti dolorum enim facilis in iure laudantium similique soluta. Cupiditate doloribus error et illo itaque laudantium maiores minus nisi numquam placeat provident quam quis rem repudiandae, similique velit.</div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa illum nihil ratione voluptatibus. Asperiores pariatur, repellendus! Ab aut delectus, distinctio eos omnis quas voluptas. A alias aliquam aliquid architecto atque blanditiis cum debitis dolor dolorum eaque eius error, est excepturi explicabo, illum ipsa modi molestias mollitia numquam, officiis perspiciatis placeat porro provident quae quaerat quam quia ratione repellendus saepe similique tempore tenetur totam voluptate. Ab ea eveniet incidunt perferendis. Adipisci atque deleniti dolorum enim facilis in iure laudantium similique soluta. Cupiditate doloribus error et illo itaque laudantium maiores minus nisi numquam placeat provident quam quis rem repudiandae, similique velit.</div>
          </li>
        </ul>
      </div>
    </section>
  )
}
