<template>
  <div ref='trigger' class='home'>
    <div class='fixed-video'>
      <video autoplay loop muted preload='auto' playsinline src='~/assets/video/main.mp4'/>
    </div>
    <div class='home-content'>
      <div class='one-screen'>
        <div class='one-screen-offer container'>
          <div class='absolute header-trigger'>
            <h1>
              <div v-html='home.oneScreen.heading1'></div>
              <span>
                {{ home.oneScreen.line }}
                <s-line
                  :autoplay='$store.state.loaded'
                  :scroll='false'
                  :delay='0.5'
                  :line='`line-1${$store.state.lang === 0 ? "" : "-ru"}`'
                />
              </span>
              <div v-html='home.oneScreen.heading3'></div>
            </h1>
          </div>

          <translate-wrapper>
            <h1 class='f-stroke' v-html='home.oneScreen.desc'>
            </h1>
          </translate-wrapper>
        </div>
      </div>
      <div class='two-screen'>
        <div class='container'>
          <div class='row'>
            <div class='left'>
              <translate-wrapper>
                <h3 v-html='home.twoScreen.title'>
                </h3>
              </translate-wrapper>
            </div>
            <div class='right'>
              <translate-wrapper :delay='0.5' opacity='0'>
                <h5 v-html='home.twoScreen.desc'>
                </h5>
              </translate-wrapper>
            </div>
          </div>
          <div class='row'>
            <div class='play'>
                <s-animation name='btnPlay' image-name='home-one.jpg'
                             @click.native='modalVideo = true; $gtm.push({ event: "open_home_video"});$yandexMetrika.reachGoal("open_home_video")'>
                  <div class='btn' data-name='animationBtn'>
                    <span class='btn-text'>{{ $store.state.lang === 0 ? 'Play' : 'Смотреть' }}</span>
                    <span class='btn-bg' />
                  </div>
                </s-animation>
            </div>
          </div>
        </div>
      </div>
      <div class='three-screen'>
        <check-card-wrapper ref='threeForm' :data='home.cardData'>
          <template #item='{ card, next, prev }'>
            <check-card
              :data='card.data'
              :home='home'
              :index='card.idx'
              :length='card.length'
              @next-click='next'
              @prev-click='prev'
              @change-check='cardDataModel[`step_${card.idx + 1}`] = $event'
            >
              <template v-if='card.idx === 3' #form>
                <div class='three-screen-form'>
                  <h4>{{ home.form.sendRequest }}</h4>
                  <div class='row'>
                    <div class='col'>
                      <s-input
                        ref='name'
                        v-model='cardDataModel.name'
                        :error='$v.cardDataModel.name'
                        :label='home.form.name'
                      />
                      <s-input
                        ref='email'
                        v-model='cardDataModel.email'
                        :error='$v.cardDataModel.email'
                        :label='home.form.email'
                        :valid='validEmail'
                      />
                      <s-input
                        ref='phone'
                        v-model='cardDataModel.phone'
                        :error='$v.cardDataModel.phone'
                        :label='home.form.phone'
                      />
                    </div>
                    <div class='col'>
                      <s-button
                        class='notMobile'
                        color='green'
                        f-width
                        @click='formSending === false ? sendFormThreeScreen() : ""'
                      >
                        {{ home.form.quote }}
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
                          @click='formSending === false ? sendFormThreeScreen() : ""'
                        >
                          {{ home.form.quote }}
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
          <translate-wrapper >
            <h2>
              <div v-html='home.fourScreen.title'></div>
              <span>
                {{ home.fourScreen.line }}
                <s-line line='line-2' />
              </span>
            </h2>
          </translate-wrapper>
          <translate-wrapper>
            <h5 v-html='home.fourScreen.desc'>
            </h5>
          </translate-wrapper>
          <service-links :data='home.serviceLinks' />
          <translate-wrapper>
          <s-button size='big' @click='openDiscuss'>{{ home.fourScreen.button }}</s-button>
          </translate-wrapper>
        </div>
      </div>
      <div class='five-screen'>
        <translate-wrapper>
        <s-svg ref='circleText' name='circle-text' />
        </translate-wrapper>
        <div class='container'>
          <translate-wrapper>
            <h4 v-html='home.fiveScreen.title'>
            </h4>
          </translate-wrapper>

          <div class='row'>
            <translate-wrapper start='center' :duration='0.5' opacity='0'>
              <div class='card'>
                <div class='card-shadow blue'>
                  <h3 v-html='home.fiveScreen.realEstate.title'></h3>
                  <h5 v-html='home.fiveScreen.realEstate.desc'></h5>
                  <s-button f-width color='blue' @click.native='goToPage("/products/real-estate")'>
                    {{ home.fiveScreen.realEstate.button }}
                  </s-button>
                </div>
              </div>
            </translate-wrapper>
            <translate-wrapper start='center' :duration='0.5' :delay='0.3' opacity='0'>
              <div class='card'>
                <div class='card-shadow green'>
                  <h3 v-html='home.fiveScreen.industrial.title'></h3>
                  <h5 v-html='home.fiveScreen.industrial.desc'></h5>
                  <s-button f-width color='green' @click.native='goToPage("/products/industrial-process")'>
                    {{ home.fiveScreen.industrial.button }}
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
                <h3 v-html='home.sixScreen.title'></h3>
                <h5 v-html='home.sixScreen.desc'>
                </h5>
                <s-button class='link' color='green' @click.native='goToPage("/services")'>{{ home.sixScreen.button }}
                </s-button>
              </div>
            </template>
          </s-animation>
        </div>
      </div>
      <div class='seven-screen'>
        <div class='container'>
          <translate-wrapper :duration='0.5'>
            <h2 v-html='home.sevenScreen.title'></h2>
          </translate-wrapper>
          <translate-wrapper :duration='0.5'>
            <h4 v-html='home.sevenScreen.subtitle'></h4>
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
              <h3 v-html='home.sevenScreen.desc'>
              </h3>
              <translate-wrapper
                y='0px'
                x='-100px'
                opacity='1'
                :delay='0.3'
                :duration='0.5'
              >
                <s-svg name='arr-long' class='arrow-long' @click.native='openDiscuss' />
              </translate-wrapper>
              <translate-wrapper
                y='0px'
                x='-100%'
                opacity='0'
                :delay='0.3'
                :duration='1'
              >
                <s-button color='green' @click.native='openDiscuss;'>{{ home.sevenScreen.button }}</s-button>
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
                <h2 v-html='home.eightScreen.title'></h2>
              </translate-wrapper>
              <div class='lists'>
                <template v-for='(item, idx) in home.lists'>
                  <translate-wrapper :key='idx' >
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
            <h1 v-html='home.nineScreen.title'></h1>
          </translate-wrapper>
          <translate-wrapper>
            <h1 class='f-stroke' v-html='home.nineScreen.subtitle'></h1>
          </translate-wrapper>
          <translate-wrapper y='0' x='-10%' :delay='0.5'>
            <div class='row'>
              <s-button color='green' @click='openProject'>
                {{ home.nineScreen.buttonProject }}
              </s-button>
              <translate-wrapper :delay='0.8' y='0' x='-30px'>
                <s-button
                  color='green'
                  border
                  @click='openDiscuss'
                >
                  {{ home.nineScreen.buttonDiscuss }}
                </s-button>
              </translate-wrapper>
            </div>
          </translate-wrapper>
        </div>
      </div>
      <transition name='videoModal'>
        <div v-if='modalVideo' class='modalVideo'>
          <video autoplay preload='auto' playsinline src='~/assets/video/output2.mp4'>
          </video>
<!--          <div class='wrapper'>-->
<!--            <iframe src="https://www.youtube.com/embed/zaRFaGkMp6A?autoplay=1" title="YouTube video player" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--          </div>-->

          <img src='~/assets/images/svg/close-video.svg' alt='' @click='modalVideo = false'>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { sha256 } from 'js-sha256'
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
      formSending: false,
      validEmail: true,
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
      this.$gtm.push({ event: 'open_discuss'})
      this.$yandexMetrika.reachGoal('open_discuss')
    },
    openProject() {
      this.$store.dispatch('setProject', true)
      this.$gtm.push({ event: 'open_project'})
      this.$yandexMetrika.reachGoal('open_project')
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
      this.formSending = true
      const eventId = new Date().getTime() + (Math.random() * 100000000).toFixed(0)
      let ip = '0.0.0.0'
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
      this.$v.$touch()
      this.$refs.email.setErrorMessage()
      this.$refs.name.setErrorMessage()
      this.$refs.phone.setErrorMessage()
      if (this.$v.$invalid === false) {
        try {
          await this.$mail.send({
            from: 'alexvanvich@yandex.by',
            subject: 'ARH. Contact Form Project Home',
            text: 'Name: ' + this.cardDataModel.name + '\nPhone: ' + this.cardDataModel.phone + '\nEmail: ' + this.cardDataModel.email + '\nIndustry: ' + this.cardDataModel.step_1 + '\nService: ' + this.cardDataModel.step_2 + '\nBudget: ' + this.cardDataModel.step_3 + '\nMessage: ' + this.cardDataModel.message
          })
        }
        catch (e) {
          await this.$store.dispatch('setToastMessage', {title: this.home.form.error.title, desc: e.response.data.status === "error" ? this.$store.state.lang === 0 ? 'Email is invalid' : 'Перепроверьте правильность email адреса': e.toString().replace('Error: ', '')})
          await this.$store.dispatch('setToast', 'error')
          if(e.response.data.status) {
            this.validEmail = false
          }
          this.$v.$reset()
          this.$v.$touch()
          this.$gtm.push({ event: "form_send_error"})
          this.$yandexMetrika.reachGoal("form_send_error")
          this.formSending = false
          return
        }
        this.validEmail = true
        this.$fb.query('track','formSend', {eventID: eventId})
        try {
          ip = await this.$axios.get('https://api.ipify.org')
          ip = ip.data
        }
        catch (e) {
          this.formSending = false
        }

        try {
          await this.$axios.post('https://graph.facebook.com/v12.0/392905819261214/events?access_token=EAAEf2aUHnsQBAKo3ftFgY3zEZAizZBvs52va9m7p6PMdHn7NrIz9LPOSm6hNjU8WX4qT4v9mjL94HEDATEhhEm4ij6wZCnY8TRiQZBwN8XjNYNZBDjx9pZC4ivX2rMFODW7UB5ZAb4o4PGSjFsCi3dAwhHJZBhCulupLeyjRZBqTRe3AXsYQzYTkZA', {
            data: [{'event_name': 'formSend',
              'event_time': (new Date().getTime() / 1000).toFixed(0),
              "event_id": eventId.toString(),
              "user_data": {
                "em": [sha256(this.cardDataModel.email)],
                "ph": [sha256(this.cardDataModel.phone)],
                "client_user_agent": window.clientInformation.userAgent,
                "fbp": getCookie("_fbp") ? getCookie("_fbp") : "",
                "fbc": getCookie("_fbc") ? getCookie("_fbc") : "",
                "client_ip_address": ip,
                "fn": [sha256(this.cardDataModel.name)]
              },
              "event_source_url": window.location.href,
              "action_source": "website"
            }]})
        }
        catch(e) {
          this.formSending = false
        }
        this.cardDataModel.step_1 = ''
        this.cardDataModel.step_2 = ''
        this.cardDataModel.step_3 = ''
        this.cardDataModel.name = ''
        this.cardDataModel.email = ''
        this.cardDataModel.phone = ''
        this.cardDataModel.message = ''
        await this.$store.dispatch('setToastMessage', {title: this.home.form.success.title, desc: this.home.form.success.desc})
        await this.$store.dispatch('setToast', 'ok')
        this.$gtm.push({ event: "form_sent"})
        this.$yandexMetrika.reachGoal("form_sent")
        this.formSending = false
      }
      else {
        await this.$store.dispatch('setToastMessage', {title: this.home.form.warning.title, desc: this.home.form.warning.desc})
        await this.$store.dispatch('setToast', 'warn')
        this.$gtm.push({ event: "form_not_filled"})
        this.$yandexMetrika.reachGoal("form_not_filled")
        this.formSending = false
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
