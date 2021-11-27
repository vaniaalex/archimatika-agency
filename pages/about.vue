<template>
  <div class='page about'>
    <div class='heading-page'>
      <div class='container'>
        <h3 class='header-trigger'>About us</h3>
      </div>
    </div>
    <div class='one-screen'>
      <div class='container'>
        <h2>
          Hi, we are Archimatika! <br class='mobile'>
          <div class='video-button'><img src='~/assets/images/video-about-new.png' alt=''>
            <svg width='31' height='35' viewBox='0 0 31 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M24 10.5718C27.938 12.8454 29.9069 13.9822 30.5677 15.4663C31.1441 16.7609 31.1441 18.2391 30.5677 19.5337C29.9069 21.0178 27.938 22.1546 24 24.4282L12.75 30.9234C8.81203 33.197 6.84305 34.3338 5.22736 34.164C3.81808 34.0158 2.53783 33.2767 1.70491 32.1303C0.749998 30.8159 0.749998 28.5424 0.749999 23.9952L0.749999 11.0048C0.749999 6.45764 0.75 4.18406 1.70491 2.86973C2.53783 1.72332 3.81808 0.984168 5.22736 0.836046C6.84306 0.666229 8.81204 1.80302 12.75 4.07661L24 10.5718Z'
                fill='#080708' />
            </svg>
          </div>
          We help<br class='noMobile'> our<br class='mobile'> clients build and<br class='mobile'> accelerate their<br class='mobile'><br class='noMobile'>
          digital business<br class='mobile'> by creating leading<br class='mobile'><br class='noMobile'> digital products<br class='mobile'> in your niche.
        </h2>
      </div>
    </div>
    <div class='two-screen'>
      <div class='container'>
        <div class='row'>
          <div class='left triangle-image'>
            <SAnimationTriangle>
              <video autoplay loop muted  preload='auto' playsinline src="~/assets/video/about-1.mp4">
              </video>
            </SAnimationTriangle>
          </div>
          <div class='right'>
            <translate-wrapper start='center'>
              <h4>
                As a team we believe in new ideas, improving ourselves,
                technologies, and the world itself. This is why innovation is one
                of the main principles of our way of thinking and daily work.
              </h4>
              <h5>
                We manage to stay up to date, be open to new ideas and work
                towards a better future. Innovation is reflected in our office
                workflow, the values we stand for, and certainly in our commitment
                to every project we create.
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
              <h4>
                As a company with the combined capabilities of creativity, data,
                and technology, we have the tools to innovate and improve the
                whole business approach.
              </h4>
              <h5>
                Archimatika is one that is progressive, open, supportive, and
                diverse. We help businesses to evolve and remain highly relevant
                to their customers by developing cutting-edge digital products and
                executing smart and valuable communication.
              </h5>
            </translate-wrapper>
          </div>
          <div class='right'>
            <s-animation name='cube' :count-item='2' >
              <video  autoplay loop muted  preload='auto' playsinline src="~/assets/video/about-2.mp4">
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
            <h4>Working on what matters</h4>
            <h2>We’re passionate about your online success.</h2>
            <h5>
              Being passionate about transparency, reliability, and outstanding
              customer care, we aren’t happy with our creation until you are. We
              put tremendous focus on your business goals and deliver them
              according to your business values. Archimatika’s team of talented
              world-leading specialists know how to create your online success.
            </h5>
          </div>
        </s-animation>
      </div>
    </div>
    <div class='five-screen'>
      <div class='container'>
        <translate-wrapper start='center'>
          <h2>
            We offer individual solutions based on our practical experience and
            constantly developing knowledge. For each client, we are looking for
            the only true and profitable solution.
          </h2>
        </translate-wrapper>
        <s-animation name='learnMore' :count-item='4' image-name='home-three.jpg'>
          <template #item>
            <div class='learn-content'>
              <h3>
                Get ready to become the market leader and power to be reckoned
                with!
              </h3>
              <s-button color='green' @click='openDiscuss'>Let’s work together!</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div class='six-screen'>
      <div class='container'>
        <div class='content'>
          <translate-wrapper start='center'>
            <h2>Our Expertise</h2>
            <h4>
              Unlike generic marketing firms, we've tailored our services to the
              nuance of real estate development and industrial processes. Our
              entire product development process is founded on these core
              principles:
            </h4>
          </translate-wrapper>

          <div class='lists'>
            <translate-wrapper v-for='(list, idx) in lists' :key='idx' start='center'>
            <div  class='lists-item'>
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
        <h2>Contact us</h2>
        <h4>Let’s get down to business!</h4>
        </translate-wrapper>
        <translate-wrapper start='center'>
        <h3>
          Please leave a request<br> or schedule a call <br> with
          one of our specialists.
        </h3>
        <div class='row'>
          <s-button color='green' @click='openDiscuss'> Schedule a call</s-button>
          <s-button color='green' border @click='openProject'> Request a proposal</s-button>
        </div>
        </translate-wrapper>
      </div>
    </div>
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
  data() {
    return {
      lists: [
        {
          title: 'Commitment to High Quality',
          desc: 'We are committed to a high-quality development process that has a focus on thorough testing of the products we build, collaborative code reviews, and continuous evaluation of our work process.'
        },
        {
          title: 'Efficient and Proactive Approach',
          desc: 'We embrace the agile approach to project management, which enables us to work efficiently and mitigate risks effectively. Our main focus is to help our clients achieve their goals and develop the right solutions, so we never get stuck on a particular design or idea. We proactively suggest changes and better approaches when they are available.'
        },
        {
          title: 'Planning is Key',
          desc: 'Having well-defined tasks, assigning everyone with their own responsibilities, detailed acceptance criteria, frequent checkpoints, visible progress reports, and effective communication allows us to fit the set-up goals and deadlines.'
        },
        {
          title: 'Communication and Transparency',
          desc: 'We practice effective communication, and that includes being responsive. Our team understands that even a simple “We’re looking at the problem right now, I will let you know as soon as I have more information” goes a long way in assuring the client that the problem is being taken care of. At Archimatika we value others’ time and prefer to set clear expectations and being honest about the real state of things.'
        }
      ]
    }
  },
  methods: {
    openDiscuss() {
      this.$store.dispatch('setDiscuss', true)
    },
    openProject() {
      this.$store.dispatch('setProject', true)
    },
  }
}
</script>

<style scoped lang='scss'>
@import '../assets/scss/pages/about';
</style>
