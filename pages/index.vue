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
    <div class="four-block">
      <div class="container">
        <h2>
          Bringing the high-end technology To accomplish tasks and
          <span>
            exceed expectations.
            <s-svg name="line-2" />
          </span>
        </h2>
        <h5>
          Whether it is a multinational industrial company or a real estate
          developer with a couple of crescents, we have all it takes to provide
          our clients with the creative, technical, and business solutions they
          need to succeed.
        </h5>
        <service-links :data="serviceLinks" />
        <s-button size="big">Let’s Discuss</s-button>
      </div>
    </div>
    <div class="five-screen">
      <s-svg name="circle-text" />
      <div class="container">
        <h4>
          We work with real estate and industrial companies looking to embrace
          the digital age and step up their business.
        </h4>

        <div class="row">
          <div class="card">
            <div class="card-shadow blue">
              <h3>Real estate</h3>
              <h5>Interactive real estate selling & leasing tool</h5>
              <s-button f-width color="blue">See product</s-button>
            </div>
          </div>
          <div class="card">
            <div class="card-shadow green">
              <h3>Industrial</h3>
              <h5>Interactive visualization for industrial processes</h5>
              <s-button f-width color="green">See product</s-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="six-screen">
      <div class="container">
        <anim-square />
      </div>
    </div>
    <div class="seven-screen">
      <div class="container">
        <h2>Our Services</h2>
        <h4>How we'll kickstart your digital project.</h4>

        <div class="list-number">
          <s-svg name="arr-grad" class="arrow-gradient" />
          <div class="list-number-item">
            <span class="f-stroke">01</span>
            <s-svg name="services-1" />
            <div>
              <h4>Our planning starts by setting a vision.</h4>
              <p>Innovate</p>
            </div>
          </div>
          <div class="list-number-item">
            <span class="f-stroke">02</span>
            <s-svg name="services-2" />
            <div>
              <h4>We do the research and gather the data.</h4>
              <p>Understand</p>
            </div>
          </div>
          <div class="list-number-item">
            <span class="f-stroke">03</span>
            <s-svg name="services-3" />
            <div>
              <h4>Then the process of idea generation starts.</h4>
              <p>Engage</p>
            </div>
          </div>
          <div class="list-number-item">
            <span class="f-stroke">04</span>
            <s-svg name="services-4" />
            <div>
              <h4>
                When the strongest solution is found, we launch the project.
              </h4>
              <p>Execute</p>
            </div>
          </div>
        </div>

        <div class="group">
          <h3>
            We are happy to help you with your next business accomplishment!
          </h3>
          <s-svg name="arr-long" class="arrow-long" />
        </div>
      </div>
    </div>
    <div class="eight-screen">
      <div class="container">
        <div class="row">
          <div class="left">
            <h2>Why do our clients choose us?</h2>
            <div class="lists">
              <div class="lists-item">
                <h3>Beyond Technology</h3>
                <h5>
                  Our team consists of experts in modern programming with plenty
                  of experience in managing complex projects.
                </h5>
              </div>
              <div class="lists-item">
                <h3>Time-to-Market</h3>
                <h5>
                  Knowing the all the process from the ground up, we distribute
                  the tasks for maximum parallel execution while maintaining the
                  high quality.
                </h5>
              </div>
              <div class="lists-item">
                <h3>Business goals oriented</h3>
                <h5>
                  We do our best to hit both branding and financial goals and
                  bring your product to the top.
                </h5>
              </div>
            </div>
          </div>
          <div class="right">
            <anim-vertical />
          </div>
        </div>
      </div>
    </div>
    <div class="nine-screen">
      <div class="container">
        <h1>Ready to get going?</h1>
        <h1 class="f-stroke">Let’s work together!</h1>
        <div class="row">
          <s-button color="green">Schedule a call</s-button>
          <s-button color="green" border>Request a proposal</s-button>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col">
            <s-svg name="logo-top" />
            <h4>Phone</h4>
            <a class="tel" href="tel:+375 33 62 5555 6">+375 33 62 5555 6</a>
            <h4>General</h4>
            <a class="mail" href="mailto:hallo@archimatika.agency">
              hallo@archimatika.agency
            </a>
            <h4>New Business</h4>
            <a class="mail" href="mailto:thomas@archimatika.agency">
              thomas@archimatika.agency
            </a>
          </div>
          <div class="col">
            <h4>Services</h4>
            <div class="row">
              <div class="col">
                <router-link to="#">Web Design & Development</router-link>
                <router-link to="#">Real estate</router-link>
                <router-link to="#">Industrial</router-link>
                <router-link to="#">Custom map</router-link>
                <router-link to="#">Property Websites</router-link>
              </div>
              <div class="col">
                <router-link to="#">WOW sites</router-link>
                <router-link to="#">Digital Strategy</router-link>
                <router-link to="#">Branding & Identity</router-link>
                <router-link to="#">Renderings</router-link>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row">
              <div class="col">
                <h4>Products</h4>
                <router-link to="#">Real estate</router-link>
                <router-link to="#">Industrial</router-link>
              </div>
              <div class="col">
                <h4><br /></h4>
                <router-link to="#">Expertise</router-link>
                <router-link to="#">Contacts</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SSvg from '../components/SSvg'
import AnimPlay from '../components/AnimPlay'
import CheckCart from '../components/CheckCard'
import CheckCartWrapper from '../components/CheckCardWrapper'
import SButton from '../components/ui/SButton'
import ServiceLinks from '../components/ServiceLinks'
import AnimSquare from '../components/AnimSquare'
import AnimVertical from '../components/AnimVertical'
export default {
  components: {
    AnimVertical,
    AnimSquare,
    ServiceLinks,
    SButton,
    CheckCartWrapper,
    CheckCart,
    AnimPlay,
    SSvg,
  },
  data() {
    return {
      tests: {},
      serviceLinks: [
        {
          to: '#',
          label: 'Interactive real estate selling & leasing tool',
          src: 'preview.jpg',
        },
        {
          to: '#',
          label: '3D real-time visualization for industrial processes',
          src: 'preview.jpg',
        },
        {
          to: '#',
          label: 'Interactive Custom Map',
          src: 'preview.jpg',
        },
        {
          to: '#',
          label: 'Web Design & Development',
          src: 'preview.jpg',
        },
        {
          to: '#',
          label: 'Property Websites',
          src: 'preview.jpg',
        },
        {
          to: '#',
          label: 'WOW websites',
          src: 'preview.jpg',
        },
        {
          to: '#',
          label: 'Branding & Identity',
          src: 'preview.jpg',
        },
        {
          to: '#',
          label: 'Renderings',
          src: 'preview.jpg',
        },
      ],
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
@import '../assets/scss/homeBlock/home';
</style>
