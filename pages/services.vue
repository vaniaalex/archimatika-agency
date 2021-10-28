<template>
  <div class='services page'>
    <div class='navs'>
      <nav-links :active='active' @goTo='goTo' />
    </div>

    <div id='web-design'>
      <div class='container'>
        <div class='heading'>
          <h2>Web Design &<br />Development</h2>
          <h4>
            At Archimatika we transform the digital approach for real estate and
            industrial processes. From tools to custom web projects, we offer
            digital capabilities that innovate your sales strategies and help
            you to solve complex problems.
          </h4>
        </div>

        <div class='block-1 row'>
          <div class='left'>
            <h4>Best in class property and industrial processes websites</h4>
            <h5>
              Your project website is the most important asset in your project's
              marketing stack, don't settle for stale forgetful design and
              pre-built templates. Archimatika combines custom web design,
              powerful tools, and turns your website into a marketing
              powerhouse. All without using your entire budget.
            </h5>
          </div>
          <div class='right'>
            <s-image src='services/tablet-h.png' />
            <s-image class='map' src='services/3dmap.png' />
          </div>
        </div>
        <div class='block-2'>
          <div class='row'>
            <div class='left'>
              <h4>
                Custom websites and digital tools are built exactly how you need
              </h4>
            </div>
            <div class='right'>
              <h5>
                During a custom project, we'll walk you through our holistic
                design process, encompassing everything from content strategy to
                user experience and interface design. During working on the
                project, we use smart scalable technology and leave you with a
                powerful tool that serves your unique objectives.
              </h5>
            </div>
          </div>
          <div class='image'>
            <div class='row'>
              <h5>Research</h5>
              <h5>Prototyping</h5>
              <h5>3D-modeling</h5>
              <h5>Conceptual UI</h5>
            </div>
            <div class='border-wrap'>
              <div>
                <s-image src='services/two-screen.png' />
              </div>
            </div>
          </div>
          <div class='row last'>
            <h4>
              Rooted in product design<br />
              and development
            </h4>
            <h5>
              Our team specialized in full-stack web design and development and
              has vast experience in building large-scale custom websites, apps,
              and digital products.
            </h5>
            <h5>
              We can help you to establish a strategic roadmap for your product,
              and then provide the team of professionals to fulfill it step by
              step. When you work with Archimatika, you can count on a team of
              digital experts who understand your needs in a way generic
              agencies can't replicate.
            </h5>
          </div>
        </div>

        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3>
                Let’s bring real estate and industrial processes into the
                digital age!
              </h3>
              <s-button color='green' @click='openDiscuss'>Let’s work together!</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='interactive-map'>
      <div class='container'>
        <div class='heading'>
          <h2>
            Custom<br />
            Interactive Map
          </h2>
          <h4>
            The custom interactive map is a powerful marketing tool that
            elevates the sales process. Explore the amenities and infrastructure
            of the neighborhood. Find stores, cafés, or parks at one click.
          </h4>
        </div>
        <div ref='interactiveMap' class='row'>
          <div class='left'>
            <div ref='mapImage' class='interactive-map'>
              <s-image class='interactive-map-bg' :src='`services/map${animations.currentMap === 1 ? 1 : "" }.png`' />
              <div class='interactive-map-nav'>
                <p>Suroundings</p>
                <div class='buttons'>
                  <button ref='all'>All surroundings</button>
                  <button ref='info'>Infrastructure</button>
                  <button ref='indu'>Industrial</button>
                  <button ref='park'>Park</button>
                  <button ref='cafe' class='icon'>
                    <s-svg name='home' />
                  </button>
                  <button ref='steps' class='icon'>
                    <s-svg name='steps' />
                  </button>
                </div>

              </div>
              <div class='icons'>
                <div ref='locationCard' class='location-card'>
                  <img src='~/assets/images/cafe.png' alt=''>
                  <div class='text cardLayout'>
                    <h4>Cafe</h4>
                    <div class='items'>
                      <div class='item'>
                        <img src='~/assets/images/svg/map/steps-small.svg' alt=''>
                        <span>200m</span>
                      </div>
                      <div class='item'>
                        <img src='~/assets/images/svg/map/clock.svg' alt=''>
                        <span>5 min</span>
                      </div>
                    </div>
                    <p>Pet-friendly cafe with incredible Mocha Latte</p>
                  </div>
                </div>
                <div ref='iconHome' class='icon home'>
                  <img src='~/assets/images/svg/map/home.svg' alt=''>
                  <div class='marker'>
                    <MarkerIcon />
                  </div>
                </div>
                <div ref='iconCafe' :class='[{active: animations.active},"icon", "cafe"]'>
                  <img src='~/assets/images/svg/map/cafe.svg' alt=''>
                  <div class='marker'>
                    <MarkerIcon :active='animations.active' />
                  </div>
                </div>
                <div ref='iconHospital' class='icon hospital'>
                  <img src='~/assets/images/svg/map/hospital.svg' alt=''>
                  <div class='marker'>
                    <MarkerIcon />
                  </div>
                </div>
                <div ref='iconIndustrial' class='icon industrial'>
                  <img src='~/assets/images/svg/map/industrial.svg' alt=''>
                  <div class='marker'>
                    <MarkerIcon />
                  </div>
                </div>
                <div ref='iconPark' class='icon park'>
                  <img src='~/assets/images/svg/map/park.svg' alt=''>
                  <div class='marker'>
                    <MarkerIcon />
                  </div>
                </div>
                <div ref='iconCafe2' class='icon cafe cafe2'>
                  <img src='~/assets/images/svg/map/cafe.svg' alt=''>
                  <div class='marker'>
                    <MarkerIcon />
                  </div>
                </div>
                <div ref='iconHome2' class='icon home home2'>
                  <img src='~/assets/images/svg/map/home.svg' alt=''>
                  <div class='marker'>
                    <MarkerIcon />
                  </div>
                </div>
                <div ref='mapRoute' class='line'>
                  <svg width='263' height='321' viewBox='0 0 263 321' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g filter='url(#filter0_d_1018:6155)'>
                      <path d='M123.5 6L135 7.5L14.5 260L230 292.5L243 235.5' stroke='#9CF50B' stroke-width='10'
                            stroke-linecap='round' stroke-linejoin='round' />
                    </g>
                    <defs>
                      <filter id='filter0_d_1018:6155' x='0.5' y='-0.000488281' width='262.501' height='320.501'
                              filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                        <feFlood flood-opacity='0' result='BackgroundImageFix' />
                        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                       result='hardAlpha' />
                        <feOffset dx='3' dy='11' />
                        <feGaussianBlur stdDeviation='6' />
                        <feComposite in2='hardAlpha' operator='out' />
                        <feColorMatrix type='matrix'
                                       values='0 0 0 0 0.611765 0 0 0 0 0.960784 0 0 0 0 0.0431373 0 0 0 0.8 0' />
                        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1018:6155' />
                        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1018:6155' result='shape' />
                      </filter>
                    </defs>
                  </svg>

                </div>
                <div ref='routeCard' class='routeCard cardLayout'>
                  <div class='top'>
                    <img src='~/assets/images/svg/map/home.svg' alt=''>
                    <img src='~/assets/images/svg/map/arrow.svg' alt=''>
                    <img src='~/assets/images/svg/map/cafe.svg' alt=''>
                  </div>
                  <div class='items'>
                    <div class='item'>
                      <img src='~/assets/images/svg/map/steps-small.svg' alt=''>
                      <span>200m</span>
                    </div>
                    <div class='item'>
                      <img src='~/assets/images/svg/map/clock.svg' alt=''>
                      <span>5 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='right'>
            <div ref='post1' class='post'>
              <h4>Drive brand awareness with custom styles</h4>
              <h5>
                Our interactive approach allows you to seamlessly combine our
                maps and your location data. Customize the style with your
                colors, icons, fonts, and brand marks. Adjust everything to make
                the most important info stand out.
              </h5>
            </div>
            <div ref='post2' class='post'>
              <h4>Provide users a better experience</h4>
              <h5>
                Combine our data with your own proprietary datasets to provide
                unique data-driven experiences. The map loads on the device so
                that all the information is accessible in real-time. You have
                total control over what data types show up from which datasets
                at different zoom levels and for different landmarks.
              </h5>
            </div>
            <div ref='post3' class='post'>
              <h4>Make your brand the center of attention</h4>
              <h5>
                Customize your map to match your unique brand style and influence customers’ trust and engagement rate.
              </h5>
            </div>
            <div ref='post4' class='post'>
              <h4>POIs customization</h4>
              <h5>Customize the POIs on the map to highlight your locations and hide competitors. Feel free to launch
                the project with iconography that fits your brand.
              </h5>
            </div>
            <div ref='post5' class='post'>
              <h4>Places and Autocomplete Search</h4>
              <h5>Turn coordinates into named locations and named locations into coordinates for faster data analysis.
                Places like restaurants, cafés, shops, parks, and landmarks may include photos, ratings, opening hours,
                and a short description to provide a preview of the place.
              </h5>
            </div>
            <div ref='post6' class='post'>
              <h4>Destination reach area</h4>
              <h5>
                Create accurate travel time maps and visualize all the reachable locations within a given time limit.
                Introduce the clients to their options, basing on any mode of transport and at any time of day.
              </h5>
              <ul>
                <li>Draw travel time polygons showing where’s reachable within ‘X minutes’.</li>
                <li>Filter points of interest that fall within a travel time area.</li>
                <li>Get A>B routing information for points of interest.</li>
              </ul>
            </div>
          </div>
        </div>
        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3>
                Let’s bring real estate and industrial processes into the
                digital age!
              </h3>
              <s-button color='green' @click='openDiscuss'>Let’s work together!</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='property-websites'>
      <div class='container'>
        <div class='heading'>
          <h2>Property Websites</h2>
          <h4>
            We blend custom design with unique leasing tools, turning your
            website into a property marketing powerhouse.
          </h4>
          <h5>
            Elevate your marketing into the digital age. Archimatika team has
            one goal: to deliver stunning property websites with out-of-the-box
            technology that accelerates leasing on a reasonable budget.
          </h5>
        </div>
        <div class='block-1'>
          <div class='images'>
            <s-image src='services/tab.png' />
            <s-image src='services/presentation-tablet.png' />
            <s-image src='services/presentation-mobile.png' />
          </div>
          <div class='row'>
            <h5>
              Out of all the sales tools, your website is the most important
              asset<br> in your marketing stack. Don't settle for stale forgetful
              design and<br> pre-built templates, when you can strike the
              imagination of your<br> buyers and turn views into purchases during
              any construction phase.
            </h5>
            <h5>
              Interactive tools showcase your project in the best light and
              accelerate sales. Archimatika goes far beyond being simply a
              digital brochure for your project. It includes unique tools like
              Leasing Widgets, Floor plan Selectors, and Interactive Maps.
              <br /><br />All these will help you tell the complete story of
              your project and draw the attention of prospective tenants or
              buyers.
            </h5>
          </div>
        </div>

        <div class='block-2 row'>
          <div class='left'>
            <h4>Archimatika showcases all the details with no hassle.</h4>
            <h5>
              We've got you covered: engagement analytics, website monitoring,
              and personal support — all that comes in a standard package for
              Archimatika projects.
            </h5>
          </div>
          <div class='right'>
            <s-image src='services/tablet-v.png' />
            <s-image src='services/ui-1.png' />
            <s-image src='services/ui-2.png' />
          </div>
        </div>

        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3>
                Let’s bring real estate and industrial processes into the
                digital age!
              </h3>
              <s-button color='green' @click='openDiscuss'>Let’s work together!</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='wow-websites'>
      <div class='wow'>
        <s-svg name='wow' full-width />
        <h1>websites</h1>
      </div>
      <div class='container'>
        <span class='translate'>
          We create websites that seek to anticipate trends and stimulate the
          imagination.
        </span>
        <div class='desc row'>
          <h5>
            At Archimatika we love going beyond creativity, design, and
            development. That is how WOW-websites appear. They catch attention
            and, as a bonus, awards. We love to challenge ourselves and make
            out-of-the-box things come to life. Doing something no one ever did
            is so exciting!
          </h5>
          <h5>
            What you invest in is not a website, but a piece of digital art that
            perfectly matches your brand, values, data, and objectives. It is a
            product best in its class, that is hitting both financial and
            branding goals.
          </h5>
        </div>
        <div class='block-1'>
          <h2>Our projects:</h2>

          <div class='row'>
            <div class='card'>
              <s-svg name='abstract-4' />
              <h4>Accomplish<br> business tasks</h4>
            </div>
            <div class='card'>
              <s-svg name='abstract-3' />
              <h4>Presenting a product, service, or company<br> on a Wow level</h4>
            </div>
            <div class='card'>
              <s-svg name='abstract-2' />
              <h4>
                Maintain corporate identity, brand positioning, differentiation
                strategy
              </h4>
            </div>
            <div class='card'>
              <s-svg name='abstract-1' />
              <h4>Boost sales<br> by increasing<br> conversion rates</h4>
            </div>
          </div>
        </div>
        <div class='text'>
          <client-only>
            <p>
              We don’t look for clients,
              <span><s-line
                :scroll='false'
                :delay='0.5'
                line='line-3'
              />but ambitious</span>
              <br />
              <span>entrepreneurs</span>
              ready to create <span>the best product</span><br />
              in the niche <span>and leave competitors behind.</span><br />
              We obtain insights and reveal the needs <br />and desires of
              customers
              <span>to create a unique value <s-line
                :scroll='false'
                :delay='1'
                line='line-4'
              /> </span>
              <br />
              <span>for your business</span>. By setting the highest standards,
              <br /><span
            >we push every element to perfection.<s-line
              :scroll='false'
              :delay='1.5'
              line='line-5'
            /></span>
            </p>
          </client-only>
        </div>
        <div class='block-2'>
          <h2>At work, we focus <br />on the following aspects:</h2>
          <div class='row'>
            <div class='card'>
              <s-svg name='abstract-7' />
              <span></span>
              <h4>Aesthetics</h4>
              <h5>
                We push the visual experience of your customers to the limit in
                order to highlight your brand among the competitors.
              </h5>
            </div>
            <div class='card'>
              <s-svg name='abstract-6' />
              <span>
                <s-svg name='dotted' />
              </span>
              <h4>Technologies</h4>
              <h5>
                Both functional and stylish, the interfaces create an
                unforgettable user experience.
              </h5>
            </div>
            <div class='card'>
              <s-svg name='abstract-5' />
              <span></span>
              <h4>Marketing</h4>
              <h5>
                We study user behavior to design solutions to complete your
                business goals. We combine technology and visual aesthetics to
                provide a convenient product that is exciting to use.
              </h5>
            </div>
          </div>
        </div>
        <div class='block-3'>
          <div class='circle-list'>
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <s-svg name='icon-1' />
            <s-svg name='icon-2' />
            <s-svg name='icon-3' />
            <s-svg name='icon-4' />
            <s-svg name='icon-5' />
            <s-svg name='logo-top' />
          </div>
          <div class='row'>
            <h4>
              At Archimatika we tell stories with images, film, 360, virtual
              reality, augmented reality, 3D graphics,<br> and of course words.
            </h4>
            <h5>
              We don’t draw the line between ‘digital’ and ‘real’. Do it right,
              and digital will become real: immersive, emotional, joyful,
              memorable, magical. We love coming up with new, meaningful ways to
              make a human connection.
            </h5>
          </div>
        </div>
        <div class='block-4'>
          <div class='circle-list'>
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
          </div>
          <div class='wow-factor'>
            <h2>The “Wow” Factor</h2>
            <h4>
              We aim at leaving a lasting impression on your viewers and will
              make them remember your website. It is what can set your website
              apart from the myriad of different websites in your industry. The
              “Wow Factor” of the website doesn’t have to be complex, it is more
              about the unique creative approach to given tasks and enriching
              users’ experience.
            </h4>
          </div>
        </div>
        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3>
                Let’s bring real estate and industrial processes into the
                digital age!
              </h3>
              <s-button color='green' @click='openDiscuss'>Let’s work together!</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='branding'>
      <div class='container'>
        <div class='heading'>
          <h2>Branding & Identity</h2>
          <h4>
            Build a captivating brand experience for your customers with
            Archimatika. Our research-driven branding team will help you to
            develop the identity system that empathizes the uniqueness and
            charisma of your project.
          </h4>
          <h3>You’ll be noticed — be sure!</h3>
        </div>
        <div class='block-1'>
          <div class='card'>
            <s-svg name='branding-3' />
            <h3>Clarify your vision and energize your project.</h3>
            <h5>
              We help you connect the dots between your vision and what the
              market demands. Catchy naming and thorough brand development
              process will bring your project to the next level.
            </h5>
          </div>
          <div class='card'>
            <s-svg name='branding-2' />
            <h3>Generate results through a creative approach</h3>
            <h5>
              Our process begins with comprehensive research and analysis of
              your project, determining the best way to position it on the
              market. As a result, we build a strong foundation for all future
              brand and marketing work. We analyze competitors, review
              historical context, and align the identity of the project with
              your key audience.
            </h5>
          </div>
          <div class='card'>
            <s-svg name='branding-1' />
            <h3>Add long-term value to your project</h3>
            <h5>
              Investing in a thoughtful branding system will pay off in the
              future. Your reward is excitement and deeper relationships with
              your customers. We'll develop a comprehensive brand book,
              documenting the ways you can provide customers with a cohesive
              experience that feels authentic and meaningful.
            </h5>
          </div>
        </div>
        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3>
                Let’s bring real estate and industrial processes into the
                digital age!
              </h3>
              <s-button color='green' @click='openDiscuss'>Let’s work together!</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='rendering'>
      <div class='container'>
        <div class='heading'>
          <h2>Renderings</h2>
          <h4>
            Let your clients get a deep explorative experience of your project
            before it’s even built. The nourished excitement will help
            investors, tenants, and the public clearly visualize your project.
            We offer a full set of rendering services that include interior and
            exterior images, floor plans, site maps, aerial views, and
            walk-through videos.
          </h4>
        </div>
        <div ref='rendering' class='block-1'>
          <div class='post-list'>
            <div class='post-item'>
              <h3>Activate your renderings with powerful digital tools.</h3>
              <h5>
                We help you activate your renderings with digital tools that
                provide users with fun ways to explore and experience your
                project.
              </h5>
            </div>
          </div>
          <div class='render'>
            <s-image src='services/render.png' />
            <div class='render-list' :style='maskPosition'>

              <s-image src='services/rendered.png' />
            </div>
            <div :class='["render-item", "one1"]' />
            <div v-if='animations.activeRender > 1 - 1'
                 :class='[{green: animations.activeRender <1 },"render-item", "one2"]' />
            <div v-if='animations.activeRender > 2 - 1'
                 :class='[{green: animations.activeRender <2 },"render-item", "one4"]' />
            <div v-if='animations.activeRender > 3 - 1'
                 :class='[{green: animations.activeRender <3 },"render-item", "one3"]' />
            <div v-if='animations.activeRender > 4 - 1'
                 :class='[{green: animations.activeRender <4 },"render-item", "one6"]' />
            <div v-if='animations.activeRender > 5 - 1'
                 :class='[{green: animations.activeRender <5 },"render-item", "one5"]' />
            <div v-if='animations.activeRender > 6 - 1' class='render-item one7 green' />
            <div v-if='animations.activeRender > 7 - 1' class='render-item one8 green' />
            <div v-if='animations.activeRender > 8 - 1' class='render-item one9 green' />
            <svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect id='rectangle' height='97' rx='8.5' stroke='#9CF50B' stroke-width='3' width='97' x='1.5' y='1.5' />
            </svg>
          </div>
        </div>
        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3>
                Let’s bring real estate and industrial processes into the
                digital age!
              </h3>
              <s-button color='green' @click='openDiscuss'>Let’s work together!</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
  </div>
</template>

<script>
import NavLinks from '../components/NavLinks'
import SImage from '../components/ui/SImage'
import SSvg from '../components/ui/SSvg'
import SAnimation from '../components/SAnimation/SAnimation'
import SButton from '../components/ui/SButton'
import MarkerIcon from '../components/MarkerIcon'
import SLine from '../components/SLine'

export default {
  name: 'Services',
  components: { SButton, SAnimation, SSvg, SImage, NavLinks, MarkerIcon, SLine },
  data() {
    return {
      active: 0,

      tlMap: null,
      tlRender: null,
      animations: {
        active: false,
        currentMap: 1,
        activeRender: 0
      }
    }
  },
  computed: {
    maskPosition() {
      const maskArr = ['46% 31%', '54.6% 31%', '46% 47.5%', '54.6% 47.5%', '63.3% 47.5%', '54.6% 64%']
      let arr = ''
      for (let i = 0; i <= this.animations.activeRender; i++) {
        arr = arr + maskArr[i] + ','
      }
      arr = arr.slice(0, -1)
      return `-webkit-mask-position: ${arr}; mask-position: ${arr};`
    }
  },
  created() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.activeLink)
    }
  },

  mounted() {
    this.animateMap()
    this.animateRender()
    setTimeout(() => {
      this.tlMap.scrollTrigger.refresh()
      this.tlRender.scrollTrigger.refresh()
    }, 200)

    if (this.$route.query.section) {
      const self = this
      setTimeout(function() {
        self.goTo(self.$route.query.section, true)
      }, 200)

    }
  },
  beforeDestroy() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.browser) {
      window.removeEventListener('scroll', this.activeLink)
      this.tlMap.scrollTrigger.kill()
    }
  },
  methods: {
    goTo(id, bool) {
      if (process.client) {
        const element = document.getElementById(id)
        if (element) {
          const posTop = element.offsetTop - 200
          this.gsap.to(window, (bool ? 0 : 1), { scrollTo: posTop })
        }
      }
    },
    activeLink() {
      if (process.client) {
        const web = document.getElementById('web-design').offsetTop - 300
        const map = document.getElementById('interactive-map').offsetTop - 300
        const prop = document.getElementById('property-websites').offsetTop - 300
        const wow = document.getElementById('wow-websites').offsetTop - 300
        const brand = document.getElementById('branding').offsetTop - 300
        const render = document.getElementById('rendering').offsetTop - 300
        const arrayOfTops = [web, map, prop, wow, brand, render]
        for (let i = 0; i < arrayOfTops.length - 1; i++) {
          if (window.scrollY > arrayOfTops[i] && window.scrollY <= arrayOfTops[i + 1]) {
            this.active = i
            return
          }
        }
        this.active = arrayOfTops.length - 1
      }
    },
    animateRender() {
      if (process.client) {
        this.tlRender = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.rendering,
            start: 'bottom bottom',
            toggleActions: 'play pause resume reverse'
          }
        })
        this.tlRender.to(this.animations, { activeRender: 9, duration: 5 })
      }
    },
    animateMap() {
      if (process.client) {
        this.tlMap = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.interactiveMap,
            pin: this.$refs.mapImage,
            start: 'top top+=170px',
            end: 'bottom bottom',
            scrub: 1,
            snap: {
              snapTo: 'labelsDirectional',
              duration: { min: 0.2, max: 1 },
              inertia: false
            }
          }
        })
        this.tlMap.addLabel('post2')
          .to(this.$refs.post1, { opacity: 0 })
          .to(this.$refs.all, { backgroundColor: '#FAFFFD' }, '<')
          .from(this.$refs.post2, { opacity: 0 })
          .to(this.$refs.info, { backgroundColor: '#9CF50B' }, '<')
          .fromTo(this.$refs.iconPark, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, '<')
          .fromTo(this.$refs.iconIndustrial, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, '<')
          .addLabel('post3')
          .to(this.$refs.post2, { opacity: 0 })
          .to(this.$refs.info, { backgroundColor: '#FAFFFD' }, '<')
          .from(this.$refs.post3, { opacity: 0 })
          .to(this.$refs.indu, { backgroundColor: '#9CF50B' }, '<')
          .to(this.$refs.iconHospital, { opacity: 0, y: -100 }, '<')
          .to(this.$refs.iconHome, { opacity: 0, y: -100 }, '<')
          .fromTo(this.$refs.iconCafe, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, '<')
          .fromTo(this.$refs.iconIndustrial, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, '<')
          .addLabel('post4')
          .to(this.$refs.post3, { opacity: 0 })
          .to(this.$refs.indu, { backgroundColor: '#FAFFFD' }, '<')
          .from(this.$refs.post4, { opacity: 0 })
          .to(this.$refs.park, { backgroundColor: '#9CF50B' }, '<')
          .fromTo(this.$refs.iconIndustrial, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, '<')
          .fromTo(this.$refs.iconPark, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, '<')
          .addLabel('post5')
          .to(this.$refs.post4, { opacity: 0 })
          .to(this.animations, { active: true }, '<')
          .to(this.$refs.park, { backgroundColor: '#FAFFFD' }, '<')
          .from(this.$refs.post5, { opacity: 0 })
          .to(this.$refs.cafe, { backgroundColor: '#9CF50B' }, '<')
          .fromTo(this.$refs.iconPark, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, '<')
          .fromTo(this.$refs.iconCafe, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, '<')
          .fromTo(this.$refs.locationCard, { opacity: 0, y: 150 }, { opacity: 1, y: 0 }, '<')
          .addLabel('post6')
          .to(this.$refs.post5, { opacity: 0 })
          .to(this.animations, { currentMap: 2 }, '<')
          .fromTo(this.$refs.iconCafe, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, '<')
          .fromTo(this.$refs.locationCard, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, '<')
          .to(this.$refs.cafe, { backgroundColor: '#FAFFFD' }, '<')
          .from(this.$refs.post6, { opacity: 0 })
          .to(this.$refs.steps, { backgroundColor: '#9CF50B' }, '<')
          .from(this.$refs.iconCafe2, { opacity: 0, y: 100 }, '<')
          .from(this.$refs.iconHome2, { opacity: 0, y: 100 }, '<')
          .from(this.$refs.mapRoute, { opacity: 0, y: 10 }, '<')
          .from(this.$refs.routeCard, { opacity: 0, y: 10 }, '<')
          .addLabel('end')
      }
    },
    openDiscuss() {
      this.$store.dispatch('setDiscuss', true)
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../assets/scss/pages/services';

.navs {
  width: 100%;
  background: linear-gradient(180deg, #FAFFFD 62.08%, rgba(250, 255, 253, 0) 100%);
  position: fixed;
  height: 240px;
  top: 0;
  left: 0;
  padding-top: 106px;
  z-index: 2;
}

#interactive-map {
  .post {
    height: 780px;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
