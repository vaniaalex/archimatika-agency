<template>
  <div class='page about'>
    <div class='heading-page'>
      <div class='container'>
        <h3 class='header-trigger'>{{ about.heading }}</h3>
      </div>
    </div>
    <div class='one-screen'>
      <div class='container'>
        <h2>
          <div v-html='about.oneScreen.title1'></div>
          <div class='video-button' @click='modalVideo = true; $gtm.push({ event: "open_about_video"}); $yandexMetrika.reachGoal("open_about_video")'>
            <nuxt-picture src='/images/video-about-new.png' quality='100'
                          sizes='xs:30vw sm:30vw md:30vw lg:100vw xl:10vw 2xl: 10vw' />
            <svg width='31' height='35' viewBox='0 0 31 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M24 10.5718C27.938 12.8454 29.9069 13.9822 30.5677 15.4663C31.1441 16.7609 31.1441 18.2391 30.5677 19.5337C29.9069 21.0178 27.938 22.1546 24 24.4282L12.75 30.9234C8.81203 33.197 6.84305 34.3338 5.22736 34.164C3.81808 34.0158 2.53783 33.2767 1.70491 32.1303C0.749998 30.8159 0.749998 28.5424 0.749999 23.9952L0.749999 11.0048C0.749999 6.45764 0.75 4.18406 1.70491 2.86973C2.53783 1.72332 3.81808 0.984168 5.22736 0.836046C6.84306 0.666229 8.81204 1.80302 12.75 4.07661L24 10.5718Z'
                fill='#080708' />
            </svg>
          </div>
          <div v-html='about.oneScreen.title2'></div>
        </h2>
      </div>
    </div>
    <div class='two-screen'>
      <div class='container'>
        <div class='row'>
          <div class='left triangle-image'>
            <SAnimationTriangle>
              <video autoplay loop muted preload='auto' playsinline src='~/assets/video/about-1.mp4'>
              </video>
            </SAnimationTriangle>
          </div>
          <div class='right'>
            <translate-wrapper start='center'>
              <h4 v-html='about.twoScreen.title'>
              </h4>
              <h5 v-html='about.twoScreen.desc'>
              </h5>
            </translate-wrapper>
          </div>
        </div>
      </div>
    </div>
    <div class='three-screen'>
      <div class='container'>
        <div class='row'>
          <div class='left'>
            <translate-wrapper start='center'>
              <h4 v-html='about.threeScreen.title'>
              </h4>
              <h5 v-html='about.threeScreen.desc'>
              </h5>
            </translate-wrapper>
          </div>
          <div class='right'>
            <s-animation name='cube' :count-item='2'>
              <video autoplay loop muted preload='auto' playsinline src='~/assets/video/about-2.mp4'>
              </video>
            </s-animation>
          </div>
        </div>
      </div>
    </div>
    <div class='four-screen'>
      <div class='container'>
        <s-animation name='circle' :count-item='2' image-name='home-one.jpg'>
          <div class='circle-content'>
            <h4 v-html='about.fourScreen.subtitle'></h4>
            <h2 v-html='about.fourScreen.title'></h2>
            <h5 v-html='about.fourScreen.desc'>
            </h5>
          </div>
        </s-animation>
      </div>
    </div>
    <div class='five-screen'>
      <div class='container'>
        <translate-wrapper>
          <h2 v-html='about.fiveScreen.title'>
          </h2>
        </translate-wrapper>
        <s-animation name='learnMore' :count-item='4' image-name='home-three.jpg'>
          <template #item>
            <div class='learn-content'>
              <h3 v-html='about.fiveScreen.desc'>
              </h3>
              <s-button color='green' @click='openDiscuss'>{{ about.fiveScreen.button }}</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div class='six-screen'>
      <div class='container'>
        <div class='content'>
          <translate-wrapper start='center'>
            <h2 v-html='about.sixScreen.title'></h2>
            <h4 v-html='about.sixScreen.desc'></h4>
          </translate-wrapper>
          <div class='lists'>
            <translate-wrapper v-for='(list, idx) in about.sixScreen.lists' :key='idx' start='center'>
              <div class='lists-item'>
                <s-image :src='`svg/about-${idx + 1}.svg`' />
                <div>
                  <h3>{{ list.title }}</h3>
                  <h5>{{ list.desc }}</h5>
                </div>

              </div>
            </translate-wrapper>
          </div>
        </div>
      </div>
    </div>
    <div class='seven-screen'>
      <div class='container'>
        <translate-wrapper start='center'>
          <h2 v-html='about.sevenScreen.title'></h2>
          <h4 v-html='about.sevenScreen.subtitle'></h4>
        </translate-wrapper>
        <translate-wrapper start='center'>
          <h3 v-html='about.sevenScreen.desc'></h3>
          <div class='row'>
            <s-button color='green' @click='openDiscuss'>{{about.sevenScreen.buttonDiscuss}}</s-button>
            <s-button color='green' border @click='openProject'>{{about.sevenScreen.buttonProject}}</s-button>
          </div>
        </translate-wrapper>
      </div>
    </div>
    <transition name='videoModal'>
      <div v-if='modalVideo' class='modalVideo'>
        <video v-if='$store.state.videoMobile' autoplay playsinline preload='auto' src='~/assets/video/output2.mp4'>
        </video>
        <video v-else autoplay playsinline preload='auto' src='~/assets/video/output.mp4'>
        </video>
<!--        <div class='wrapper'>-->
<!--          <iframe src="https://www.youtube.com/embed/zaRFaGkMp6A?autoplay=1" title="YouTube video player" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--        </div>-->
        <img src='~/assets/images/svg/close-video.svg' alt='' @click='modalVideo = false'>
      </div>
    </transition>
  </div>
</template>

<script>
import SAnimation from '../components/SAnimation/SAnimation'
import SImage from '../components/ui/SImage'
import SButton from '../components/ui/SButton'
import TranslateWrapper from '../components/TranslateWrapper'
import SAnimationTriangle from '../components/SAnimationTriangle'

export default {
  name: 'About',
  components: { SAnimationTriangle, TranslateWrapper, SButton, SImage, SAnimation },
  async asyncData(context) {
    const lang = context.store.state.lang
    const about = await context.$content(`about${lang === 0 ? '' : '_ru'}`).fetch()
    return { about }
  },
  data() {
    return {
      modalVideo: false,
    }
  },
  methods: {
    openDiscuss() {
      this.$store.dispatch('setDiscuss', true)
      this.$gtm.push({ event: "open_discuss"})
      this.$yandexMetrika.reachGoal("open_discuss")
    },
    openProject() {
      this.$store.dispatch('setProject', true)
      this.$gtm.push({ event: "open_project"})
      this.$yandexMetrika.reachGoal("open_project")
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../assets/scss/pages/about';
</style>
