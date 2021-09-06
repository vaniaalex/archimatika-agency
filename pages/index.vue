<template>
  <div class="home">
    <div class="one-screen">
      <div class="one-screen-video">
        <video autoplay loop muted src="@/assets/video/main.mp4" />
      </div>
      <div class="one-screen-offer container">
        <h1>
          We are a one-stop agency for
          <span> real estate <s-svg name="line-1" /></span> developers and
          industrial companies.
        </h1>
        <h1 class="f-stroke">
          Our team specialized in providing branding, visual and digital
          data-driven solutions
        </h1>
      </div>
    </div>
    <div class="two-screen">
      <div class="container">
        <div class="row">
          <div class="left">
            <h3>
              Archimatika is a full-service brand & digital marketing studio.
            </h3>
          </div>
          <div class="right">
            <h5>
              We work with real estate and industrial companies looking to
              embrace the digital age and step up their business.
            </h5>
          </div>
        </div>
        <div class="row">
          <div class="play">
            <anim-play />
          </div>
        </div>
      </div>
    </div>
    <div class="three-screen">
      <check-cart-wrapper>
        <template #default="{ next, prev, length }">
          <check-cart
            v-for="(card, idx) in cartData"
            :key="idx"
            :index="idx"
            :data="card"
            :length="length"
            @next-click="next"
            @prev-click="prev"
          />
        </template>
      </check-cart-wrapper>
    </div>
  </div>
</template>

<script>
import SSvg from '../components/SSvg'
import AnimPlay from '../components/AnimPlay'
import CheckCart from '../components/CheckCard'
import CheckCartWrapper from '../components/CheckCardWrapper'
export default {
  components: { CheckCartWrapper, CheckCart, AnimPlay, SSvg },
  data() {
    return {
      tests: {},
      cartData: [
        {
          type: 'column',
          title: 'Let us show you how we can help you reach your goals 1',
          subTitle:
            'Please answer the three following questions to help us match our expertise and best solutions to your sector.',
          checkTitle: 'Pick your industry:',
          checkList: [
            'Real estate',
            'Industrial process',
            'Engineering',
            'Manufacturing',
            'Oil, gas & energy',
            'Retail',
            'Automotive',
            'Logistics',
          ],
        },
        {
          type: 'column',
          title: 'Let us show you how we can help you reach your goals 2',
          subTitle:
            'Please answer the three following questions to help us match our expertise and best solutions to your sector.',
          checkTitle: 'Pick your industry:',
          checkList: [
            'Real estate',
            'Industrial process',
            'Engineering',
            'Manufacturing',
            'Oil, gas & energy',
            'Retail',
            'Automotive',
            'Logistics',
          ],
        },
        {
          type: 'column',
          title: 'Let us show you how we can help you reach your goals 3',
          subTitle:
            'Please answer the three following questions to help us match our expertise and best solutions to your sector.',
          checkTitle: 'Pick your industry:',
          checkList: [
            'Real estate',
            'Industrial process',
            'Engineering',
            'Manufacturing',
            'Oil, gas & energy',
            'Retail',
            'Automotive',
            'Logistics',
          ],
        },
      ],
    }
  },

  methods: {
    test(e) {
      console.log(e)
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/homeBlock/oneScreen';
body {
  padding-bottom: 2000px;
}

.home {
  overflow-x: hidden;
}
</style>
