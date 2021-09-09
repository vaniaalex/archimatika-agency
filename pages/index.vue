<template>
  <div ref="trigger" class="home">
    <div class="fixed-video">
      <video autoplay loop muted src="@/assets/video/main.mp4" />
    </div>
    <div class="home-content">
      <div class="one-screen">
        <div class="one-screen-offer container">
          <div class="absolute">
            <h1>
              We are a one-stop agency for
              <span>
                real estate
                <s-svg class="line" name="line-1" />
              </span>
              developers and industrial companies.
            </h1>
          </div>

          <translate-wrapper>
            <h1 class="f-stroke">
              Our team specialized in providing branding, visual and digital
              data-driven solutions
            </h1>
          </translate-wrapper>
        </div>
      </div>
      <div class="two-screen">
        <div class="container">
          <div class="row">
            <div class="left">
              <translate-wrapper>
                <h3>
                  Archimatika is a full-service brand & digital marketing
                  studio.
                </h3>
              </translate-wrapper>
            </div>
            <div class="right">
              <translate-wrapper :delay="0.3">
                <h5>
                  We work with real estate and industrial companies looking to
                  embrace the digital age and step up their business.
                </h5>
              </translate-wrapper>
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
        <check-card-wrapper :data="cardData">
          <template #item="{ card, next, prev }">
            <check-card
              :index="card.idx"
              :data="card.data"
              :length="card.length"
              @next-click="next"
              @prev-click="prev"
              @change-check="cardDataModel[`step_${card.idx + 1}`] = $event"
            >
              <template v-if="card.idx === 3" #form>
                <div class="three-screen-form">
                  <h4>Send request</h4>
                  <div class="row">
                    <div class="col">
                      <s-input
                        v-model="cardDataModel.name"
                        placeholder="Enter your name"
                      />
                      <s-input
                        v-model="cardDataModel.email"
                        placeholder="Enter your email"
                      />
                      <s-input
                        v-model="cardDataModel.phone"
                        placeholder="Enter your phone number (optional)"
                      />
                    </div>
                    <div class="col">
                      <s-button
                        color="green"
                        f-width
                        @click="sendFormThreeScreen"
                      >
                        Get a quote
                      </s-button>
                    </div>
                  </div>
                </div>
              </template>
            </check-card>
          </template>
        </check-card-wrapper>
      </div>
      <div class="four-block">
        <div class="container">
          <translate-wrapper>
            <h2>
              Bringing the high-end technology To accomplish tasks and
              <span>
                exceed expectations.
                <s-svg class="line" name="line-2" />
              </span>
            </h2>
          </translate-wrapper>
          <translate-wrapper>
            <h5>
              Whether it is a multinational industrial company or a real estate
              developer with a couple of crescents, we have all it takes to
              provide our clients with the creative, technical, and business
              solutions they need to succeed.
            </h5>
          </translate-wrapper>
          <service-links :data="serviceLinks" />
          <s-button ref="btnBig" size="big">Let’s Discuss</s-button>
        </div>
      </div>
      <div class="five-screen">
        <s-svg ref="circleText" name="circle-text" />
        <div class="container">
          <translate-wrapper>
            <h4>
              We work with real estate and industrial companies looking to
              embrace the digital age and step up their business.
            </h4>
          </translate-wrapper>

          <div class="row">
            <translate-wrapper start="center" y="100px" :duration="0.5">
              <div class="card">
                <div class="card-shadow blue">
                  <h3>Real estate</h3>
                  <h5>Interactive real estate selling & leasing tool</h5>
                  <s-button f-width color="blue">See product</s-button>
                </div>
              </div>
            </translate-wrapper>
            <translate-wrapper
              start="center"
              y="100px"
              :duration="0.5"
              :delay="0.3"
            >
              <div class="card">
                <div class="card-shadow green">
                  <h3>Industrial</h3>
                  <h5>Interactive visualization for industrial processes</h5>
                  <s-button f-width color="green">See product</s-button>
                </div>
              </div>
            </translate-wrapper>
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
          <translate-wrapper :duration="0.5">
            <h2>Our Services</h2>
          </translate-wrapper>
          <translate-wrapper :duration="0.5">
            <h4>How we'll kickstart your digital project.</h4>
          </translate-wrapper>

          <div ref="listNumber" class="list-number">
            <s-svg ref="arrGrad" name="arr-grad" class="arrow-gradient" />
            <template v-for="(item, idx) in listNumber">
              <translate-wrapper :key="idx">
                <div class="list-number-item">
                  <span class="f-stroke">0{{ idx + 1 }}</span>
                  <s-svg :name="`services-${idx + 1}`" />
                  <div>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </translate-wrapper>
            </template>
          </div>
          <div class="group">
            <translate-wrapper y="0" x="-100px" :duration="0.5">
              <h3>
                We are happy to help you with your next business accomplishment!
              </h3>
              <translate-wrapper
                y="0"
                x="-100px"
                opacity="1"
                :delay="0.2"
                :duration="0.3"
              >
                <s-svg name="arr-long" class="arrow-long" />
              </translate-wrapper>
            </translate-wrapper>
          </div>
        </div>
      </div>
      <div class="eight-screen">
        <div class="container">
          <div class="row">
            <div class="left">
              <translate-wrapper>
                <h2>Why do our clients choose us?</h2>
              </translate-wrapper>
              <div class="lists">
                <template v-for="(item, idx) in lists">
                  <translate-wrapper :key="idx">
                    <div class="lists-item">
                      <h3>{{ item.title }}</h3>
                      <h5>
                        {{ item.desc }}
                      </h5>
                    </div>
                  </translate-wrapper>
                </template>
              </div>
            </div>
            <div class="right">
              <anim-vertical />
            </div>
          </div>
        </div>
      </div>
      <div class="nine-screen">
        <div ref="readyToGet" class="container">
          <translate-wrapper>
            <h1>Ready to get going?</h1>
          </translate-wrapper>
          <translate-wrapper>
            <h1 class="f-stroke">Let’s work together!</h1>
          </translate-wrapper>
          <translate-wrapper y="0" x="-10%" :delay="0.5">
            <div class="row">
              <s-button color="green" @click="toggleCheckCard(1)"
                >Schedule a call</s-button
              >
              <translate-wrapper :delay="0.8" y="0" x="-30px">
                <s-button color="green" border @click="toggleCheckCard(2)">
                  Request a proposal
                </s-button>
              </translate-wrapper>
            </div>
          </translate-wrapper>
        </div>
        <check-card-wrapper
          ref="checkCard"
          :data="
            toggleCardData ? cardDataScheduleACall : cardDataRequestAProposal
          "
          :autoplay="false"
        >
          <template #item="{ card, next, prev }">
            <check-card
              :index="card.idx"
              :data="card.data"
              :length="card.length"
              first-back
              @next-click="next"
              @prev-click="$event ? prev($event) : toggleCheckCard($event)"
            >
              <template v-if="card.idx === 3 && toggleCardData" #form>
                <div class="three-screen-form">
                  <h4>Send request</h4>
                  <div class="row">
                    <div class="col">
                      <s-input
                        v-model="cardDataModel.name"
                        placeholder="Enter your name"
                      />
                      <s-input
                        v-model="cardDataModel.email"
                        placeholder="Enter your email"
                      />
                      <s-input
                        v-model="cardDataModel.phone"
                        placeholder="Enter your phone number (optional)"
                      />
                    </div>
                    <div class="col">
                      <s-button
                        color="green"
                        f-width
                        @click="sendFormThreeScreen"
                      >
                        Get a quote
                      </s-button>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else #form>
                <div class="plug">
                  <s-image src="plug.jpg" />
                </div>
              </template>
            </check-card>
          </template>
        </check-card-wrapper>
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
  </div>
</template>

<script>
import SSvg from '../components/SSvg'
import AnimPlay from '../components/AnimPlay'
import CheckCard from '../components/CheckCard'
import CheckCardWrapper from '../components/CheckCardWrapper'
import SButton from '../components/ui/SButton'
import ServiceLinks from '../components/ServiceLinks'
import AnimSquare from '../components/AnimSquare'
import AnimVertical from '../components/AnimVertical'
import TranslateWrapper from '../components/TranslateWrapper'
import SInput from '../components/ui/SInput'
import SImage from '../components/ui/SImage'
export default {
  components: {
    SImage,
    SInput,
    TranslateWrapper,
    AnimVertical,
    AnimSquare,
    ServiceLinks,
    SButton,
    CheckCardWrapper,
    CheckCard,
    AnimPlay,
    SSvg,
  },
  data() {
    return {
      gsap: null,
      tl: null,
      lists: [
        {
          title: 'Beyond Technology',
          desc: 'Our team consists of experts in modern programming with plenty of experience in managing complex projects. ',
        },
        {
          title: 'Time-to-Market',
          desc: 'Knowing the all the process from the ground up, we distribute the tasks for maximum parallel execution while maintaining the high quality.',
        },
        {
          title: 'Business goals oriented',
          desc: 'We do our best to hit both branding and financial goals and bring your product to the top.',
        },
      ],
      listNumber: [
        {
          title: 'Our planning starts by setting a vision. ',
          desc: 'Innovate',
        },
        {
          title: 'We do the research and gather the data. ',
          desc: 'Understand',
        },
        {
          title: 'Then the process of idea generation starts.',
          desc: 'Engage',
        },
        {
          title: 'When the strongest solution is found, we launch the project.',
          desc: 'Execute',
        },
      ],
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
      cardDataModel: {
        step_1: '',
        step_2: '',
        step_3: '',
        name: '',
        email: '',
        phone: '',
      },
      cardData: [
        {
          type: 'column',
          title: 'Let us show you how we can help you reach your goals',
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
          title: 'Let us show you how we can help you reach your goals',
          subTitle:
            'Please answer the three following questions to help us match our expertise and best solutions to your sector.',
          checkTitle: 'Pick your business need:',
          checkList: [
            'Real estate selling & leasing tool',
            '3D real-time visualization for industrial processes',
            'Interactive Custom Map',
            'Property Website',
            'WOW website',
            'Web Design & Development',
            'Branding & Identity',
            'Digital Strategy ',
          ],
        },
        {
          type: 'column',
          title: 'Let us show you how we can help you reach your goals',
          subTitle:
            'Please answer the three following questions to help us match our expertise and best solutions to your sector.',
          checkTitle: 'What is your potential budget for this project?',
          checkList: [' $ 10-30к', '$ 30-50к', '$ 50-100к', '$ 100к+'],
        },
        {
          type: 'column',
          title: 'Let us show you how we can help you reach your goals',
          subTitle:
            'Please answer the three following questions to help us match our expertise and best solutions to your sector.',
        },
      ],
      cardDataScheduleACall: [
        {
          type: 'row',
          title: 'What does the project involve?',
          subTitle: "Let's take the first step towards the new you...",
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
          type: 'row',
          title: 'What’s you’re budget for this project?',
          subTitle: 'Nice one! Now, without wanting to seem too forward...',
          checkList: ['$ 10-30к', '$ 30-50к', '$ 50-100к', '$ 100к+'],
        },
        {
          type: 'row',
          title: 'How did you find out about us?',
          subTitle: 'Who should we thank for sending you here?',
          checkList: [
            'Aproject of ours',
            'Bussines referal',
            'An advert',
            'Search engine',
            'Word of mouth',
          ],
        },
        {
          type: 'column',
          title: 'And finally, tell us a little bit about you...',
        },
      ],
      cardDataRequestAProposal: [
        {
          type: 'column',
          title: 'When suits you best?',
          subTitle: 'Time to make this thing official...',
        },
      ],
      toggleCardData: true,
    }
  },

  mounted() {
    this.gsap = this.$gsap
    this.tl = this.gsap.timeline({ paused: true })
    const lines = [...document.querySelectorAll('.line path')]

    this.gsap.set(lines, this.setLineOptions())

    lines.forEach((line) => this.gsap.to(line, this.getLineOptions(line)))

    this.gsap.fromTo(
      this.$refs.btnBig.$el,
      { opacity: 0 },
      {
        width: '100%',
        opacity: 1,
        duration: 1,
        scrollTrigger: this.$refs.btnBig.$el,
      }
    )

    this.gsap.to(this.$refs.circleText.$el, {
      rotate: '90deg',
      duration: 1,
      scrollTrigger: {
        trigger: this.$refs.circleText.$el,
        scrub: true,
      },
    })

    this.gsap.to(this.$refs.arrGrad.$el, {
      height: '100%',
      duration: 1,
      scrollTrigger: {
        trigger: this.$refs.listNumber,
        start: '100px bottom',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })
  },
  methods: {
    setLineOptions() {
      return {
        strokeDashoffset: (idx, target) => target.getTotalLength(),
        strokeDasharray: (idx, target) => target.getTotalLength(),
        opacity: 1,
      }
    },
    getLineOptions(target) {
      return {
        strokeDashoffset: 0,
        delay: 1,
        duration: 1,
        scrollTrigger: target,
      }
    },
    toggleCheckCard(event) {
      const anim = this.tl.to(this.$refs.readyToGet, {
        x: '-100%',
        duration: 1,
      })
      if (event === 1) {
        this.toggleCardData = true
        anim.play()
        this.$refs.checkCard.play()
      } else if (event === 2) {
        this.toggleCardData = false
        anim.play()
        this.$refs.checkCard.play()
      } else {
        anim.timeScale(0.6).delay(1).reverse(true)
        this.$refs.checkCard.reverse()
      }
    },
    sendFormThreeScreen() {
      // eslint-disable-next-line no-console
      console.log(this.cardDataModel)
    },
    test(e) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/homeBlock/home';
</style>
