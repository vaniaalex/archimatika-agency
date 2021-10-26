<template>
  <div class='container page'>
    <PTitle title="Interactive real estate selling & leasing tool"/>
    <PHero title="impactful 3D sales & presentation tools" description='Help your client discover the hidden potential of your real estate presenting it from an objective, detailed
        and informative side' second-description='Interactive 3D tool for real estate has become a fast, user-friendly, and immersive solution that took real
        estate sales to the next level.' :button='{text: "See demo"}' >
      <img src='~/assets/images/products/real-estate/hero.png' alt=''>
    </PHero>
    <div class='image-text-skewed'>
      <div class='inside'>
        <div class='text'>
          <h3>
            Open up tangible opportunities with the help of a virtual world
          </h3>
          <h5>A new apartment is a significant investment of time, money, and effort. That is why a customer needs to
            have a complete understanding of its layout, floor plans, common areas, region infrastructure, and other
            valuable details</h5>
          <h5>More and more real estate developers are now switching towards online tools in order to enhance it,
            increase conversion rate and widen the sales funnel.</h5>
        </div>
        <div class='image'>
          <img src='~/assets/images/products/real-estate/building.png' alt=''>
        </div>
      </div>
      <div class='skewed-4x skewed'></div>
      <div class='skewed-3x skewed'></div>
      <div class='skewed-2x skewed'></div>
      <div class='skewed-1x skewed'></div>
      <div class='skewed-0x skewed'></div>
    </div>
    <PIcons :content='contentIcon' />
    <div class='small-big-text'>
      <h4>This level of convenience and customer immersion has greatly enforced<br> the competitive advantage of agents
        by attracting prospects, increasing engagement, and earning higher commissions.</h4>
      <h2>Interactive 3D tool for real estate has become a fast, user-friendly, and immersive solution that took real
        estate sales<br> to the next level.</h2>
    </div>
    <div class='block-heading'>
      <h2>Features</h2>
      <h4>Archimatika works online from any computer.<br> No install needed, everything is available<br> at one click.
        It’s fast and easy to use, both<br> for clients and sellers. Besides that, the system allows configuring the
        features to your needs.</h4>
    </div>
    <PCard :left='false' :image='require("~/assets/images/products/real-estate/filter.png")'>
      <h4>Filter</h4>
      <h5>Offer the most suitable solution for your customers with the<br> help of numerous filters</h5>
      <div class='icons-small-block'>
        <div class='icon'>
          <img src='~/assets/images/products/real-estate/filter-1.svg' alt=''>
        </div>
        <div class='icon'>
          <img src='~/assets/images/products/real-estate/filter-2.svg' alt=''>
        </div>
        <div class='icon'>
          <img src='~/assets/images/products/real-estate/filter-3.svg' alt=''>
        </div>
        <div class='icon'>
          <img src='~/assets/images/products/real-estate/filter-4.svg' alt=''>
        </div>
      </div>
    </PCard>
    <PCard :left='true' :image='require("~/assets/images/products/real-estate/floor-plans.png")'>
      <h4>Floor plans</h4>
      <h5 class='mb-1'>Reveal a detailed layout of each unit, containing availability, 3D picture, floor plans, and
        many more.</h5>
      <h5>Get contact<br> information from those<br> who are particularly interested<br> in the proposal right here.
      </h5>
    </PCard>
    <PCard :left='false' :image='require("~/assets/images/products/real-estate/common-area.png")'>
      <h4>Common area<br>
        & amenities</h4>
      <h5>Showcase public spaces for tenants to meet and communicate. Pools, bars, gyms, terraces, or any other space
        that can be easily shared by them.</h5>
    </PCard>
    <PCard :left='true' :image='require("~/assets/images/products/real-estate/surroundings.png")' >
      <h4>Surroundings</h4>
      <h5>Inform your clients about the region’s outstanding infrastructure by demonstrating amenities situated within
        easy reach such as parks, malls, banks, restaurants, and health club facilities.</h5>
    </PCard>
    <PCard :left='false' :image='require("~/assets/images/products/real-estate/units.png")'>
      <h4>Unit information<br>
        & unit plans</h4>
      <h5 class='mb-1'>Display the important information about units with ease and style. It is usually displayed in a
        pop-up with the unit number, characteristics, price, and other useful information.</h5>
      <h5>The pop-up contains different buttons to open the plan, panoramic view, send the information by email,
        etc.</h5>
    </PCard>
    <PCard :left='true' :image='require("~/assets/images/products/real-estate/interior-visit.png")'>
      <h4>Interior visit</h4>
      <h5 class='mb-1'>Seeing is believing. It’s not easy for users to figure out how their future home will look like
        just by pictures.</h5>
      <h5>So, Archimatika is all-ready to provide an immersive experience with virtual interior visits. To help people
        develop the vision of real estate.</h5>
    </PCard>
    <PCard :left='false' :image='require("~/assets/images/products/real-estate/email-managment.png")'>
      <h4>Email and customer relationship management</h4>
      <h5>This tool supports sending users information about selected units (plans, documents, images, technical
        details, or pricing), while saving the contact info to your CRM.</h5>
    </PCard>

    <div class='big-image-text-block'>
      <div class='text'>
        <h2>Online content manager and
          connectivity</h2>
        <h4>Besides real-time connectivity with any CRM,<br> ERP, or asset management software, Archimatika comes with
          an online Content Management System. </h4>
        <h4>Since projects always evolve through time, online management allows easily changing unit prices, plans,
          texts, images, videos, or any other content without on your own.</h4>
        <h5>Moreover, we can connect to any existing API to centralize updates, as an example, any content shared by
          both the Archimatika tool and your website will be updated all simultaneously.</h5>
      </div>
      <div class='image'>
        <img src='~/assets/images/products/real-estate/crm.png' alt=''>
      </div>
    </div>
    <div class='small-image-text-block'>
      <div class='image'><img src='~/assets/images/products/real-estate/cross-platform.svg' alt=''></div>
      <div class='text'>
        <h3>Cross-platform solution</h3>
        <h4>3D interactive real estate visualization tool designed for PC touchscreen, smartphones, tablets, and web
          with an easy-to-use interface</h4>
      </div>
    </div>
    <s-button ref='btnBig' size='big'>Let’s Discuss</s-button>
    <div class='medium-image-text-block mt-200'>
      <div class='text'>
        <h2>Archimatika’s 3D tech
          benefits in a nutshell</h2>
        <ul>
          <li>Shorten customer’s booking<br> cycle from 4 weeks to 4 hours.
            <div class='highlight1'><img src='~/assets/images/products/real-estate/highlight-1.svg' alt=''></div>
          </li>
          <li>Give customers an accurate, real-<br>time, immersive 3D experience<br> of exploring their home.</li>
          <li>Respond to customer queries<br> instantly and experience<br> a 40% increase in closure rate.</li>
          <li>Improve sales velocity by achieving<br> 15x more site visits and<br> nearly 80% less lead loss.
            <div class='highlight2'><img src='~/assets/images/products/real-estate/highlight-2.svg' alt=''></div>
          </li>
          <li>Cut down marketing and sales<br> expenditure by up to 70%.</li>
          <li>Improve marketing ROI by 60%.
            <div class='highlight3'><img src='~/assets/images/products/real-estate/highlight-3.svg' alt=''></div>
          </li>
        </ul>
      </div>
      <div class='image'>
        <img src='~/assets/images/products/real-estate/nutshell.svg' alt=''>
      </div>
    </div>
    <div class='big-text-block'>
      <div>We offer <span>individual solutions</span> based on our practical experience and constantly developing
        knowledge. For each client, we are looking for <span>the only true</span> and <span>profitable solution.</span>
      <div class='highlight4'><img
        src='~/assets/images/products/real-estate/highlight-4.svg' alt=''></div>
      <div class='highlight5'><img
        src='~/assets/images/products/real-estate/highlight-5.svg' alt=''></div>
      <div class='highlight6'><img
        src='~/assets/images/products/real-estate/highlight-6.svg' alt=''></div>
      </div>
    </div>
    <div class='rupor'>
      <div class='text'>
        <h3>When you work with Archimatika, you can count on a team of digital experts who understand your needs in a way generic agencies can't replicate.</h3>
      </div>
    </div>
    <PCTA color='#0EFBCA80' button-color='#0EFBCA'>
      <svg width="1519" height="680" viewBox="0 0 1519 680" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M240.996 0.5H1278C1320.01 0.5 1351.49 0.500389 1376.48 2.54197C1401.46 4.58307 1419.91 8.66191 1435.87 16.7945C1464 31.1276 1486.87 53.9982 1501.21 82.1284C1509.34 98.0896 1513.42 116.539 1515.46 141.521C1517.5 166.509 1517.5 197.988 1517.5 240V440C1517.5 482.012 1517.5 513.491 1515.46 538.479C1513.42 563.461 1509.34 581.91 1501.21 597.872C1486.87 626.002 1464 648.872 1435.87 663.206C1419.91 671.338 1401.46 675.417 1376.48 677.458C1351.49 679.5 1320.01 679.5 1278 679.5H240.996C198.984 679.5 167.505 679.5 142.517 677.458C117.535 675.417 99.0857 671.338 83.1245 663.206C54.9943 648.872 32.1237 626.002 17.7906 597.872C9.65801 581.91 5.57916 563.461 3.53806 538.479C1.49648 513.491 1.49609 482.012 1.49609 440V240C1.49609 197.988 1.49648 166.509 3.53806 141.521C5.57916 116.539 9.65801 98.0896 17.7906 82.1284C32.1237 53.9982 54.9943 31.1276 83.1245 16.7945C99.0857 8.66191 117.535 4.58307 142.517 2.54197C167.505 0.500389 198.984 0.5 240.996 0.5Z" stroke="#080708"/>
        <path d="M252.941 27H1172.24C1211.46 27 1240.82 27.0008 1264.11 28.9041C1287.4 30.8064 1304.54 34.6044 1319.35 42.1501C1345.5 55.4765 1366.77 76.7408 1380.09 102.895C1387.64 117.705 1391.44 134.846 1393.34 158.13C1395.24 181.425 1395.24 210.78 1395.24 250V430C1395.24 469.22 1395.24 498.575 1393.34 521.87C1391.44 545.154 1387.64 562.295 1380.09 577.105C1366.77 603.259 1345.5 624.524 1319.35 637.85C1304.54 645.396 1287.4 649.194 1264.11 651.096C1240.82 652.999 1211.46 653 1172.24 653H252.941C213.721 653 184.366 652.999 161.071 651.096C137.788 649.194 120.646 645.396 105.837 637.85C79.6822 624.524 58.4179 603.259 45.0915 577.105C37.5458 562.295 33.7478 545.154 31.8455 521.87C29.9422 498.575 29.9414 469.22 29.9414 430V250C29.9414 210.78 29.9422 181.425 31.8455 158.13C33.7478 134.846 37.5458 117.705 45.0915 102.895C58.4179 76.7408 79.6822 55.4765 105.837 42.1501C120.646 34.6044 137.788 30.8064 161.071 28.9041C184.366 27.0008 213.721 27 252.941 27Z" fill="#FAFFFD" fill-opacity="0.1" stroke="#080708" stroke-width="2"/>
        <path d="M263.888 53.5H1065.48C1101.91 53.5 1129.14 53.5012 1150.75 55.2662C1172.33 57.0297 1188.16 60.5468 1201.82 67.5057C1226 79.8254 1245.66 99.4834 1257.98 123.662C1264.94 137.32 1268.45 153.153 1270.22 174.738C1271.98 196.341 1271.98 223.572 1271.98 260V420C1271.98 456.428 1271.98 483.659 1270.22 505.262C1268.45 526.847 1264.94 542.68 1257.98 556.338C1245.66 580.517 1226 600.175 1201.82 612.494C1188.16 619.453 1172.33 622.97 1150.75 624.734C1129.14 626.499 1101.91 626.5 1065.48 626.5H263.888C227.459 626.5 200.229 626.499 178.626 624.734C157.041 622.97 141.207 619.453 127.55 612.494C103.371 600.175 83.7131 580.517 71.3934 556.338C64.4345 542.68 60.9174 526.847 59.1539 505.262C57.3889 483.659 57.3877 456.428 57.3877 420V260C57.3877 223.572 57.3889 196.341 59.1539 174.738C60.9174 153.153 64.4345 137.32 71.3934 123.662C83.7131 99.4834 103.371 79.8254 127.55 67.5057C141.207 60.5468 157.041 57.0297 178.626 55.2662C200.229 53.5012 227.46 53.5 263.888 53.5Z" fill="#FAFFFD" fill-opacity="0.2" stroke="#080708" stroke-width="3"/>
        <path d="M275.833 80H959.725C993.362 80 1018.47 80.0016 1038.38 81.6283C1058.26 83.2531 1072.79 86.4892 1085.3 92.8612C1107.5 104.174 1125.55 122.226 1136.86 144.429C1143.24 156.935 1146.47 171.461 1148.1 191.347C1149.72 211.257 1149.73 236.364 1149.73 270V410C1149.73 443.636 1149.72 468.743 1148.1 488.653C1146.47 508.539 1143.24 523.065 1136.86 535.571C1125.55 557.774 1107.5 575.826 1085.3 587.139C1072.79 593.511 1058.26 596.747 1038.38 598.372C1018.47 599.998 993.362 600 959.725 600H275.833C242.197 600 217.09 599.998 197.18 598.372C177.294 596.747 162.768 593.511 150.262 587.139C128.059 575.826 110.007 557.774 98.6942 535.571C92.3222 523.065 89.0861 508.539 87.4613 488.653C85.8346 468.743 85.833 443.636 85.833 410V270C85.833 236.364 85.8346 211.257 87.4613 191.347C89.0861 171.461 92.3222 156.935 98.6942 144.429C110.007 122.226 128.059 104.174 150.262 92.8612C162.768 86.4892 177.294 83.2531 197.18 81.6283C217.09 80.0016 242.197 80 275.833 80Z" fill="#FAFFFD" fill-opacity="0.3" stroke="#080708" stroke-width="4"/>
        <g filter="url(#filter0_d_1562:3907)">
          <path d="M852.967 104H286.779C225.174 104 194.371 104 170.84 115.989C150.143 126.535 133.315 143.363 122.769 164.061C110.779 187.591 110.779 218.394 110.779 280V400C110.779 461.606 110.779 492.409 122.769 515.939C133.315 536.637 150.143 553.465 170.84 564.011C194.371 576 225.174 576 286.779 576H852.967C914.573 576 945.376 576 968.906 564.011C989.604 553.465 1006.43 536.637 1016.98 515.939C1028.97 492.409 1028.97 461.606 1028.97 400V280C1028.97 218.394 1028.97 187.591 1016.98 164.061C1006.43 143.363 989.604 126.535 968.906 115.989C945.376 104 914.573 104 852.967 104Z" fill="#FAFFFD" fill-opacity="0.4" shape-rendering="crispEdges"/>
          <path d="M286.779 106.5H852.967C883.811 106.5 906.794 106.502 925.011 107.99C943.199 109.476 956.417 112.432 967.771 118.217C987.998 128.523 1004.44 144.969 1014.75 165.196C1020.54 176.55 1023.49 189.768 1024.98 207.956C1026.47 226.173 1026.47 249.156 1026.47 280V400C1026.47 430.844 1026.47 453.827 1024.98 472.044C1023.49 490.232 1020.54 503.45 1014.75 514.804C1004.44 535.031 987.998 551.477 967.771 561.783C956.417 567.568 943.199 570.524 925.011 572.01C906.794 573.498 883.811 573.5 852.967 573.5H286.779C255.935 573.5 232.952 573.498 214.735 572.01C196.547 570.524 183.329 567.568 171.975 561.783C151.748 551.477 135.302 535.031 124.996 514.804C119.211 503.45 116.256 490.232 114.77 472.044C113.281 453.827 113.279 430.844 113.279 400V280C113.279 249.156 113.281 226.173 114.77 207.956C116.256 189.768 119.211 176.55 124.996 165.196C135.302 144.969 151.748 128.523 171.975 118.217C183.329 112.432 196.547 109.476 214.735 107.99C232.952 106.502 255.935 106.5 286.779 106.5Z" stroke="#080708" stroke-width="5" shape-rendering="crispEdges"/>
        </g>
        <defs>
          <filter id="filter0_d_1562:3907" x="10.7793" y="4" width="1118.19" height="672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="50"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.984314 0 0 0 0 0.792157 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1562:3907"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1562:3907" result="shape"/>
          </filter>
        </defs>
      </svg>
    </PCTA>
  </div>
</template>
<script>
import SButton from '../../components/ui/SButton'
import PTitle from '../../components/Products/PTitle'
import PHero from '../../components/Products/PHero'
import PIcons from '../../components/Products/PIcons'
import PCard from '../../components/Products/PCard'
import PCTA from '../../components/Products/PCTA'

export default {
  components: {
    PCTA,
    PCard,
    PIcons,
    PHero,
    PTitle,
    SButton
  },
  data() {
    return {
      contentIcon: [
        { title: 'Virtual property tours:', id: 1001 },
        {
          img: require('~/assets/images/products/real-estate/fear.svg'),
          text: 'Allay the fear and excitement of property buying',
          id: 1002
        },
        {
          img: require('~/assets/images/products/real-estate/shorten.svg'),
          text: 'Shorten the decision cycle',
          id: 1003
        },
        {
          img: require('~/assets/images/products/real-estate/leads.svg'),
          text: 'Turn leads into appointments',
          id: 1004
        }, {
          img: require('~/assets/images/products/real-estate/capital.svg'),
          text: 'Bring capital',
          id: 1005
        },
        {
          img: require('~/assets/images/products/real-estate/sales-plan.svg'),
          text: 'Keep up with your sales plans',
          id: 1006
        }
      ],
    }
  }
}
</script>
<style lang='scss' scoped>
.image-text-skewed {
  position: relative;
  margin-bottom: 255px;

  .inside {
    padding-left: 130px;
    display: flex;
    width: calc(100% - 100px);
    padding-top: 95px;
    padding-bottom: 115px;
    position: relative;
    z-index: 10;

    .text {
      max-width: 480px;

      h3 {
        margin-bottom: 50px;
      }

      h5:nth-child(2) {
        margin-bottom: 30px;
      }
    }

    .image {
      display: flex;
      align-items: flex-end;
      margin-left: 40px;
      margin-bottom: 23px;
    }
  }

  .skewed {
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;

    &.skewed-4x {
      z-index: 8;
      width: calc(100% - 130px);
      height: calc(100% - 4px);
      top: 0;
      left: 0;
      background-image: url('~assets/images/products/real-estate/skew4x.svg');
    }

    &.skewed-3x {
      z-index: 7;
      width: calc(100% - 180px);
      height: calc(100% - 190px);
      top: 95px;
      left: 90px;
      background-image: url('~assets/images/products/real-estate/skew3x.svg');
    }

    &.skewed-2x {
      z-index: 6;
      width: calc(100% - 150px);
      height: calc(100% - 290px);
      top: 50%;
      transform: translateY(-50%);
      left: 90px;
      background-image: url('~assets/images/products/real-estate/skew2x.svg');
    }

    &.skewed-1x {
      z-index: 5;
      width: calc(100% - 130px);
      height: calc(100% - 340px);
      top: 50%;
      transform: translateY(-50%);
      left: 90px;
      background-image: url('~assets/images/products/real-estate/skew1x.svg');
    }

    &.skewed-0x {
      z-index: 4;
      width: calc(100% - 120px);
      height: calc(100% - 390px);
      top: 50%;
      transform: translateY(-50%);
      left: 90px;
      background-image: url('~assets/images/products/real-estate/skew0x.svg');
    }
  }
}

.small-big-text {
  max-width: 1130px;
  margin-bottom: 184px;

  h4 {
    margin-bottom: 30px;
  }
}

.block-heading {
  margin-bottom: 180px;

  h2 {
    margin-bottom: 50px;
  }

  h4 {
    max-width: 740px;
  }
}

.big-image-text-block {
  width: 100%;
  position: relative;
  margin-bottom: 200px;

  .text {
    max-width: 740px;

    h2, h4 {
      margin-bottom: 50px;
    }
  }

  .image {
    position: absolute;
    top: 40px;
    right: 0;
    width: 900px;
    z-index: -1;
  }
}

.small-image-text-block {
  display: flex;
  margin-bottom: 200px;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 610px;
    margin-left: 50px;

    h3 {
      margin-bottom: 50px;
    }
  }
}

.medium-image-text-block {
  display: flex;
  margin-bottom: 250px;

  .text {
    max-width: 740px;
    margin-right: 40px;

    h2 {
      margin-bottom: 50px;
    }

    ul {
      list-style: initial;
      margin-left: 30px;

      li {
        @include h4_desc();
        max-width: 610px;
        margin-bottom: 30px;
        position: relative;

        &:last-child {
          margin-bottom: 0;
          padding-bottom: 20px;
        }

        .highlight1 {
          position: absolute;
          bottom: -20px;
          left: 153px;
          z-index: -1;
        }

        .highlight2 {
          position: absolute;
          top: 15px;
          left: -25px;
          z-index: -1;
        }

        .highlight3 {
          position: absolute;
          bottom: 5px;
          left: 8.5em;
          z-index: -1;
        }
      }
    }
  }

  .image {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
}

.big-text-block {
  margin-bottom: 154px;

  div {
    font-family: 'Stolzl Display', sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 83px;
    letter-spacing: -0.065em;
    text-align: center;
    position: relative;

    span {
      font-family: Gilroy, sans-serif;
      font-size: 64px;
      font-style: italic;
      font-weight: 600;
      line-height: 83px;
      letter-spacing: -0.065em;
      text-align: center;
      text-transform: capitalize;

    }

    .highlight4 {
      position: absolute;
      top: -31px;
      left: 4.8em;
      z-index: -1;
    }

    .highlight5 {
      position: absolute;
      bottom: 1.1em;
      left: 16em;
      z-index: -1;
    }

    .highlight6 {
      position: absolute;
      bottom: -15px;
      left: 7.7em;
      z-index: -1;
    }
  }
}
.rupor {
  height: 774px;
  background-image: url('~assets/images/products/real-estate/rupor.svg');
  background-repeat: no-repeat;
  background-size: contain;
  align-content: center;
  justify-content: center;
  display: flex;
  margin-bottom: 200px;
  .text {
    max-width: 610px;
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 400px;
    h3 {
      height: fit-content;
    }
  }
}

</style>

