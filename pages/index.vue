<template>
  <div ref="trigger" class="home">
    <div class="fixed-video">
      <video autoplay loop muted src="@/assets/video/main.mp4" />
    </div>
    <div class="home-content">
      <div class="one-screen">
        <div class="one-screen-offer container">
          <div class="absolute header-trigger">
            <h1>
              We are a one-stop agency for
              <span>
                real estate
                <s-svg class="line" name="line-1" />
              </span>
              developers and industrial companies.
            </h1>
          </div>

          <translate-wrapper start="center">
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
              <translate-wrapper :delay="0.5">
                <h5>
                  We work with real estate and industrial companies looking to
                  embrace the digital age and step up their business.
                </h5>
              </translate-wrapper>
            </div>
          </div>
          <div class="row">
            <div class="play">
              <s-animation name="btnPlay" image-name="home-one.jpg">
                <div class="btn" data-name="animationBtn">
                  <span class="btn-text">Play</span>
                  <span class="btn-bg" />
                </div>
              </s-animation>
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
      <div class="four-screen">
        <div class="container">
          <translate-wrapper start="center">
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
          <translate-wrapper start="center">
            <h4>
              We work with real estate and industrial companies looking to
              embrace the digital age and step up their business.
            </h4>
          </translate-wrapper>

          <div class="row">
            <translate-wrapper start="bottom" :duration="0.5">
              <div class="card">
                <div class="card-shadow blue">
                  <h3>Real estate</h3>
                  <h5>Interactive real estate selling & leasing tool</h5>
                  <s-button f-width color="blue">See product</s-button>
                </div>
              </div>
            </translate-wrapper>
            <translate-wrapper start="bottom" :duration="0.5" :delay="0.3">
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
          <s-animation name="learn" :count-item="4" image-name="home-three.jpg">
            <template #item>
              <div class="learn-content">
                <h3>Openness to innovation From sketch to launch</h3>
                <h5>
                  Setting up a good plan, adjusting it throughout the project,
                  and sharing the same vision within the whole team is the key
                  to the successful and smooth launch.
                </h5>
                <s-button color="green">Learn more about our services</s-button>
              </div>
            </template>
          </s-animation>
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
                :delay="0.3"
                :duration="0.5"
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
              <translate-wrapper start="bottom">
                <h2>Why do our clients choose us?</h2>
              </translate-wrapper>
              <div class="lists">
                <template v-for="(item, idx) in lists">
                  <translate-wrapper :key="idx" start="center">
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
              <s-animation image-name="home-four.jpg" name="vertical" />
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
              <s-button color="green" @click="toggleCheckCard('checkCard1')">
                Schedule a call
              </s-button>
              <translate-wrapper :delay="0.8" y="0" x="-30px">
                <s-button
                  color="green"
                  border
                  @click="toggleCheckCard('checkCard2')"
                >
                  Request a proposal
                </s-button>
              </translate-wrapper>
            </div>
          </translate-wrapper>
        </div>
        <check-card-wrapper
          ref="checkCard1"
          :data="cardDataScheduleACall"
          :autoplay="false"
          @reverse-start="delay = $event"
        >
          <template #item="{ card, next, prev }">
            <check-card
              :index="card.idx"
              :data="card.data"
              :length="card.length"
              first-back
              @next-click="next"
              @prev-click="
                prev($event)
                toggleCheckCard()
              "
              ><!--$event === idx-->
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
        <check-card-wrapper
          ref="checkCard2"
          :data="cardDataRequestAProposal"
          :autoplay="false"
          @reverse-start="delay = $event"
        >
          <template #item="{ card, next, prev }">
            <check-card
              :index="card.idx"
              :data="card.data"
              :length="card.length"
              first-back
              @next-click="next"
              @prev-click="
                prev($event)
                toggleCheckCard()
              "
              ><!--$event === idx-->
              <template #form>
                <div
                  class="calendly-inline-widget"
                  data-url="https://calendly.com/al-dwynn-jobs/test?hide_event_type_details=1&hide_gdpr_banner=1"
                />
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                />
              </template>
            </check-card>
          </template>
        </check-card-wrapper>
      </div>
    </div>
  </div>
</template>

<script>
import SSvg from '../components/ui/SSvg'
import SAnimation from '../components/SAnimation'
import CheckCard from '../components/CheckCard'
import CheckCardWrapper from '../components/CheckCardWrapper'
import SButton from '../components/ui/SButton'
import ServiceLinks from '../components/ServiceLinks'
import TranslateWrapper from '../components/TranslateWrapper'
import SInput from '../components/ui/SInput'
export default {
  name: 'Home',
  components: {
    SInput,
    TranslateWrapper,
    ServiceLinks,
    SButton,
    CheckCardWrapper,
    CheckCard,
    SAnimation,
    SSvg,
  },
  data() {
    return {
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
      delay: 0, // Toggle last block
    }
  },
  mounted() {
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
        scrollTrigger: {
          trigger: this.$refs.btnBig.$el,
          start: 'bottom bottom',
        },
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
      ease: 'defaultEase',
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
    toggleCheckCard(refName) {
      const anim = this.gsap
        .timeline({ paused: true })
        .fromTo(this.$refs.readyToGet, 1, { x: 0 }, { x: '-100vw' })

      if (refName) {
        anim.play()
        this.$refs[refName].play()
      } else {
        anim.reverse(true).delay(this.delay - 1)
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
<style lang="scss" scoped>
@import '../assets/scss/pages/home';
</style>
