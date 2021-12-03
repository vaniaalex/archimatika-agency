<template>
  <div ref='trigger' class='home'>
    <div class='fixed-video'>
      <video autoplay loop muted preload='auto' playsinline src='~/assets/video/main.mp4' />
    </div>
    <div class='home-content'>
      <div class='one-screen'>
        <div class='one-screen-offer container'>
          <div class='absolute header-trigger'>
            <h1>
              We are a one-stop agency<br class='small-to-big-mobile'> for
              <span>
                real estate
                <s-line
                  :autoplay='$store.state.loaded'
                  :scroll='false'
                  :delay='1.5'
                  line='line-1'
                />
              </span>
              developers<br class='small-to-big-mobile'> and industrial companies.
            </h1>
          </div>

          <translate-wrapper start='center'>
            <h1 class='f-stroke'>
              Our team specialized<br class='medium-to-mobile'> in providing branding,<br class='medium-to-mobile'>
              visual and digital
              data-driven solutions
            </h1>
          </translate-wrapper>
        </div>
      </div>
      <div class='two-screen'>
        <div class='container'>
          <div class='row'>
            <div class='left'>
              <translate-wrapper>
                <h3>
                  Archimatika is a full-service<br class='small-to-mobile'> brand & digital marketing
                  studio.
                </h3>
              </translate-wrapper>
            </div>
            <div class='right'>
              <translate-wrapper :delay='0.5' opacity='0'>
                <h5>
                  We work with real estate and industrial companies looking to
                  embrace the digital age and step up their business.
                </h5>
              </translate-wrapper>
            </div>
          </div>
          <div class='row'>
            <div class='play'>
              <s-animation name='btnPlay' image-name='home-one.jpg' @click.native='modalVideo = true'>
                <div class='btn' data-name='animationBtn'>
                  <span class='btn-text'>Play</span>
                  <span class='btn-bg' />
                </div>
              </s-animation>
            </div>
          </div>
        </div>
      </div>
      <div v-if='home.cardData' class='three-screen'>
        <check-card-wrapper ref='threeForm' :data='home.cardData'>
          <template #item='{ card, next, prev }'>
            <check-card
              :index='card.idx'
              :data='card.data'
              :length='card.length'
              @next-click='next'
              @prev-click='prev'
              @change-check='cardDataModel[`step_${card.idx + 1}`] = $event'
            >
              <template v-if='card.idx === 3' #form>
                <div class='three-screen-form'>
                  <h4>Send request</h4>
                  <div class='row'>
                    <div class='col'>
                      <s-input
                        ref='name'
                        v-model='cardDataModel.name'
                        :error='$v.cardDataModel.name'
                        :label='`Name`'
                      />
                      <s-input
                        ref='email'
                        v-model='cardDataModel.email'
                        :error='$v.cardDataModel.email'
                        :label='`Email`'
                      />
                      <s-input
                        ref='phone'
                        v-model='cardDataModel.phone'
                        :error='$v.cardDataModel.phone'
                        :label='`Phone (optional)`'
                      />
                    </div>
                    <div class='col'>
                      <s-button
                        class='notMobile'
                        color='green'
                        f-width
                        @click='sendFormThreeScreen'
                      >
                        Get a quote
                      </s-button>
                      <div class='buttons'>
                        <!--                        <s-button-->
                        <!--                          icon="arr-back"-->
                        <!--                          icon-position="left"-->
                        <!--                          size="small"-->
                        <!--                          @click="$refs.threeForm.prev(3)"-->
                        <!--                        >-->
                        <!--                          Back-->
                        <!--                        </s-button>-->
                        <s-button
                          color='green'
                          f-width
                          @click='sendFormThreeScreen'
                        >
                          Get a quote
                        </s-button>
                      </div>

                    </div>
                  </div>
                </div>
              </template>
            </check-card>
          </template>
        </check-card-wrapper>
      </div>
      <div class='four-screen'>
        <div class='container'>
          <translate-wrapper start='center'>
            <h2>
              Bringing the high-end technology<br> To accomplish tasks and
              <span>
                exceed expectations.
                <s-line line='line-2' />
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
          <service-links :data='home.serviceLinks' />
          <s-button size='big' @click='openDiscuss'>Let’s Discuss</s-button>
        </div>
      </div>
      <div class='five-screen'>
        <s-svg ref='circleText' name='circle-text' />
        <div class='container'>
          <translate-wrapper start='center' opacity='0'>
            <h4>
              We work with real estate and industrial companies looking to
              embrace the digital age and step up their business.
            </h4>
          </translate-wrapper>

          <div class='row'>
            <translate-wrapper start='bottom' :duration='0.5' opacity='0'>
              <div class='card'>
                <div class='card-shadow blue'>
                  <h3>Real estate</h3>
                  <h5>Interactive real estate selling & leasing tool</h5>
                  <s-button f-width color='blue' @click.native='goToPage("/products/real-estate")'>See product
                  </s-button>
                </div>
              </div>
            </translate-wrapper>
            <translate-wrapper start='bottom' :duration='0.5' :delay='0.3' opacity='0'>
              <div class='card'>
                <div class='card-shadow green'>
                  <h3>Industrial</h3>
                  <h5>Interactive visualization for industrial processes</h5>
                  <s-button f-width color='green' @click.native='goToPage("/products/industrial-process")'>See product
                  </s-button>
                </div>
              </div>
            </translate-wrapper>
          </div>
        </div>
      </div>
      <div class='six-screen'>
        <div class='container'>
          <s-animation
            name='learnMore'
            :count-item='4'
            image-name='home-three.jpg'
          >
            <template #item>
              <div class='learn-content'>
                <h3>Openness to innovation<br> From sketch to launch</h3>
                <h5>
                  Setting up a good plan, adjusting it throughout the project,
                  and sharing the same vision within the whole team is the key
                  to the successful and smooth launch.
                </h5>
                <s-button class='link' color='green' @click.native='goToPage("/services")'>Learn more about our
                  services
                </s-button>
              </div>
            </template>
          </s-animation>
        </div>
      </div>
      <div class='seven-screen'>
        <div class='container'>
          <translate-wrapper :duration='0.5'>
            <h2>Our Approach</h2>
          </translate-wrapper>
          <translate-wrapper :duration='0.5'>
            <h4>How we'll kickstart your digital project.</h4>
          </translate-wrapper>

          <div ref='listNumber' class='list-number'>
            <s-svg ref='arrGrad' name='arr-grad' class='arrow-gradient' />
            <template v-for='(item, idx) in home.listNumber'>
              <translate-wrapper :key='idx'>
                <div class='list-number-item'>
                  <span class='f-stroke'>0{{ idx + 1 }}</span>
                  <s-svg :name='`services-${idx + 1}`' />
                  <div>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </translate-wrapper>
            </template>
          </div>
          <div class='group'>
            <translate-wrapper y='0' x='-100px' :duration='0.5'>
              <h3>
                We are happy to help you with your next business accomplishment!
              </h3>
              <translate-wrapper
                y='0'
                x='-100px'
                opacity='1'
                :delay='0.3'
                :duration='0.5'
              >
                <s-svg name='arr-long' class='arrow-long' @click.native='openDiscuss' />
              </translate-wrapper>
              <translate-wrapper
                y='0'
                x='-100%'
                opacity='0'
                :delay='0.3'
                :duration='1'
              >
                <s-button color='green' @click.native='openDiscuss'>Learn more</s-button>
              </translate-wrapper>
            </translate-wrapper>
          </div>
        </div>
      </div>
      <div class='eight-screen'>
        <div class='container'>
          <div class='row'>
            <div class='left'>
              <translate-wrapper start='bottom'>
                <h2>Why do our clients choose us?</h2>
              </translate-wrapper>
              <div class='lists'>
                <template v-for='(item, idx) in home.lists'>
                  <translate-wrapper :key='idx' start='center'>
                    <div class='lists-item'>
                      <h3>{{ item.title }}</h3>
                      <h5>
                        {{ item.desc }}
                      </h5>
                    </div>
                  </translate-wrapper>
                </template>
              </div>
            </div>
            <div class='right'>
              <s-animation image-name='home-four.jpg' name='vertical' />
            </div>
          </div>
        </div>
      </div>
      <div v-if='home.cardDataScheduleACall' class='nine-screen'>
        <div ref='readyToGet' class='container'>
          <translate-wrapper>
            <h1>Ready to get going?</h1>
          </translate-wrapper>
          <translate-wrapper>
            <h1 class='f-stroke'>Let’s work together!</h1>
          </translate-wrapper>
          <translate-wrapper y='0' x='-10%' :delay='0.5'>
            <div class='row'>
              <s-button color='green' @click='openProject'>
                Request a proposal
              </s-button>
              <translate-wrapper :delay='0.8' y='0' x='-30px'>
                <s-button
                  color='green'
                  border
                  @click='openDiscuss'
                >
                  Schedule a call
                </s-button>
              </translate-wrapper>
            </div>
          </translate-wrapper>
        </div>
        <check-card-wrapper
          ref='checkCard1'
          :data='home.cardDataScheduleACall'
          :autoplay='false'
          @reverse-start='delay = $event'
        >
          <template #item='{ card, next, prev }'>
            <check-card
              :index='card.idx'
              :data='card.data'
              :length='card.length'
              first-back
              @next-click='next'
              @prev-click='
                prev(card.idx);
                card.idx === 0 ? toggleCheckCard() : ""
              '
            ><!--$event === idx-->
              <template v-if='card.idx === 3' #form>
                <div class='three-screen-form'>
                  <h4>Send request</h4>
                  <div class='row'>
                    <div class='col'>
                      <s-input
                        v-model='cardDataModel.name'
                        placeholder='Name'
                      />
                      <s-input
                        v-model='cardDataModel.email'
                        placeholder='Email'
                      />
                      <s-input
                        v-model='cardDataModel.phone'
                        placeholder='Phone (optional)'
                      />
                    </div>
                    <div class='col'>
                      <s-button
                        color='green'
                        f-width
                        @click='sendFormThreeScreen'
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
          ref='checkCard2'
          :data='home.cardDataRequestAProposal'
          :autoplay='false'
          @reverse-start='delay = $event'
        >
          <template #item='{ card, next, prev }'>
            <check-card
              :index='card.idx'
              :data='card.data'
              :length='card.length'
              first-back
              @next-click='next'
              @prev-click='
                prev($event)
                toggleCheckCard()
              '
            ><!--$event === idx-->
              <template #form>
                <div
                  class='calendly-inline-widget'
                  data-url='https://calendly.com/al-dwynn-jobs/test?hide_event_type_details=1&hide_gdpr_banner=1'
                />
                <script
                  type='text/javascript'
                  src='https://assets.calendly.com/assets/external/widget.js'
                  async
                />
              </template>
            </check-card>
          </template>
        </check-card-wrapper>
      </div>
      <transition name='videoModal'>
        <div v-if='modalVideo' class='modalVideo'>
          <video autoplay preload='auto' playsinline src='~/assets/video/Promo-video.mp4'>
          </video>
          <img src='~/assets/images/svg/close-video.svg' alt='' @click='modalVideo = false'>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

import SSvg from '../components/ui/SSvg'
import SAnimation from '../components/SAnimation/SAnimation'
import CheckCard from '../components/CheckCard'
import CheckCardWrapper from '../components/CheckCardWrapper'
import SButton from '../components/ui/SButton'
import ServiceLinks from '../components/ServiceLinks'
import TranslateWrapper from '../components/TranslateWrapper'
import SInput from '../components/ui/SInput'
import SLine from '../components/SLine'
import { isPhone } from '../helpers'

export default {
  name: 'Home',
  components: {
    SLine,
    SInput,
    TranslateWrapper,
    ServiceLinks,
    SButton,
    CheckCardWrapper,
    CheckCard,
    SAnimation,
    SSvg
  },
  mixins: [validationMixin],
  data() {
    return {
      tl: null,
      tlCIrcleText: null,
      modalVideo: false,
      cardDataModel: {
        step_1: '',
        step_2: '',
        step_3: '',
        name: '',
        email: '',
        phone: ''
      },
      delay: 0 // Toggle last block
    }
  },
  validations: {
    cardDataModel: {
      name: { required },
      email: { email, required },
      phone: {
        phone: isPhone
      }
    }
  },
  computed: {
    home() {
      return this.$store.state.home
    },
    loaded() {
      return this.$store.state.loaded
    }
  },
  watch: {
    modalVideo(newValue) {
      this.toggleOverflow(newValue)
    },
    loaded(newValue) {
      const self = this
      if (newValue === true) {
        this.tlcircleText = this.gsap.to(this.$refs.circleText.$el, {
          rotate: '90deg',
          duration: 1,
          scrollTrigger: {
            trigger: this.$refs.circleText.$el,
            scrub: true,
            invalidateOnResize: true
          }
        })

        const arrGrad = this.gsap.to(this.$refs.arrGrad.$el, {
          height: '100%',
          duration: 1,
          ease: 'defaultEase',
          scrollTrigger: {
            trigger: this.$refs.listNumber,
            start: '100px bottom',
            end: 'bottom center',
            scrub: true,
            once: true
          }
        })
        setTimeout(() => {
          self.tlcircleText.scrollTrigger.refresh()
          if (arrGrad) {
            arrGrad.scrollTrigger.refresh()
          }
        }, 200)
      }
    }
  },
  created() {
    if (process.client) {
      const self = this
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', function() {
        self.tlcircleText.scrollTrigger.refresh()
      })
    }
  },
  beforeDestroy() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const self = this
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', function() {
        self.tlcircleText.scrollTrigger.refresh()
      })
    }
  },
  mounted() {
    this.tl = this.gsap.timeline({ paused: true })

    if (this.loaded === true) {
      this.tlcircleText = this.gsap.to(this.$refs.circleText.$el, {
        rotate: '90deg',
        duration: 1,
        scrollTrigger: {
          trigger: this.$refs.circleText.$el,
          scrub: true,
          invalidateOnResize: true
        }
      })

      const arrGrad = this.gsap.to(this.$refs.arrGrad.$el, {
        height: '100%',
        duration: 1,
        ease: 'defaultEase',
        scrollTrigger: {
          trigger: this.$refs.listNumber,
          start: '100px bottom',
          end: 'bottom center',
          scrub: true,
          once: true
        }
      })
      setTimeout(() => {
        this.tlcircleText.scrollTrigger.refresh()
        arrGrad.scrollTrigger.refresh()
      }, 200)
    }
  },

  methods: {
    toggleOverflow(bool) {
      if (process.client) {
        if (bool) {
          document.getElementsByTagName('body')[0].classList.add('touch')
          document.getElementsByTagName('body')[0].style.overflow = 'hidden'
          document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        } else {
          document.getElementsByTagName('body')[0].classList.remove('touch')
          document.getElementsByTagName('body')[0].style.overflow = ''
          document.getElementsByTagName('html')[0].style.overflow = ''
        }
      }
    },
    openDiscuss() {
      this.$store.dispatch('setDiscuss', true)
    },
    openProject() {
      this.$store.dispatch('setProject', true)
    },
    toggleCheckCard(refName) {
      const anim = this.gsap
        .timeline({ paused: true })
        .fromTo(this.$refs.readyToGet, 1, { x: 0 }, { x: '-100vw' }).delay(this.delay)

      if (refName) {
        anim.play()
        this.$refs[refName].play()
      } else {
        anim.reverse(true)
      }
    },
    async sendFormThreeScreen() {
      this.$v.$touch()
      this.$refs.email.setErrorMessage()
      this.$refs.name.setErrorMessage()
      this.$refs.phone.setErrorMessage()
      if (this.$v.$invalid === false) {
        try {
          await this.$mail.send({
            from: 'alexvanvich@yandex.by',
            subject: 'ARH. Contact Form Home Page',
            text: 'Name: ' + this.cardDataModel.name + '\nPhone: ' + this.cardDataModel.phone + '\nEmail: ' + this.cardDataModel.email + '\nIndustry: ' + this.cardDataModel.step_1 + '\nService: ' + this.cardDataModel.step_2 + '\nBudget: ' + this.cardDataModel.step_3 + '\nMessage: ' + this.cardDataModel.message
          })
        } catch (e) {
          await this.$store.dispatch('setToastMessage', { title: 'Error', desc: e.toString().replace('Error: ', '') })
          await this.$store.dispatch('setToast', 'error')
          return
        }
        this.cardDataModel.step_1 = ''
        this.cardDataModel.step_2 = ''
        this.cardDataModel.step_3 = ''
        this.cardDataModel.name = ''
        this.cardDataModel.email = ''
        this.cardDataModel.phone = ''
        this.cardDataModel.message = ''
        await this.$store.dispatch('setToastMessage', {
          title: 'Your request has been sent',
          desc: 'We will contact you shortly, regarding your project!'
        })
        await this.$store.dispatch('setToast', 'ok')
      } else {
        await this.$store.dispatch('setToastMessage', { title: 'Please fill out the necessary fields', desc: '' })
        await this.$store.dispatch('setToast', 'warn')
      }
    },
    goToPage(page) {
      this.$store.dispatch('setNextPage', page)
      this.$store.dispatch('setPageTransition', true)
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/scss/pages/home';
</style>
