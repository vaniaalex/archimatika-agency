<template>
  <div class='container page'>
    <PTitle title='Interactive visualization for industrial processes' />
    <PHero title='Visualize your industrial process'
           description='Archimatika offers custom application development tailored to expand and enhance user experience with the help of 3D environments.'
           :left='true'>
      <img src='~/assets/images/products/industrial/hero.png' alt=''>
    </PHero>
    <div class='product-subtitle'>
      <h2>Our tool opens the world<br> of opportunity for many<br> business processes:</h2>
    </div>
    <PIcons :content='contentIcons' />
    <div class='split-text'>
      <h3>Archimatika is a powerful real-time viewing web tool that may highlight physical infrastructure, facilities, equipment, manufacturing.</h3>
      <h4>It is also a welcome contribution<br> to the maintenance processes, communication improvement, marketing strategy, and others.</h4>
    </div>
    <PCard :left='false' :image='require("~/assets/images/products/industrial/simulation.png")'>
      <h4>Interactive simulations</h4>
      <h5 class='mb-1'>The most effective way to explain how specific procedures are performed and how devices or machines operate in different environments is to illustrate them in their real-life settings.</h5>
      <h5>It provides users with the ability to look at things from different angles and to access additional information or data sheets upon request.</h5>
    </PCard>
    <div class='split-text margin-more align-center'>
      <h4>Users may easily switch between schematic and realistic environments, which allows them to be more precise about the details and increase the general efficiency and quality of the workspace.</h4>
      <img src='~/assets/images/products/industrial/switch.svg' alt=''>
    </div>
    <PCard :left='true' :image='require("~/assets/images/products/industrial/animation.png")'>
      <h4>Interactive animations</h4>
      <h5 class='mb-1'>Showcase how anything works through representative animations. Anything can be animated, in order to serve the project’s specific goals.</h5>
      <h5>Visualization of physical or technical principles (connectivity, temperature, pressure, forces, etc.)</h5>
    </PCard>
    <PCard :left='false' :image='require("~/assets/images/products/industrial/data.png")'>
      <h4>Real-time sensors data</h4>
      <h5>Watch for the real-time data in a visual way, which can highlight if a value is not normal. This can be used to monitor, for example, a water temperature in a reservoir, environment humidity, or level of oxygen in a room.</h5>
    </PCard>
    <PCard :left='true' :image='require("~/assets/images/products/industrial/exploading.png")' :wide='true'>
      <h4>Exploding views</h4>
      <h5>Complex engineering and assembly in devices are often difficult to explain visually. With the help of 3D, Archimatika allows users to disassemble the devices and examine how they are built from within.</h5>
      <ul>
        <li>Product breakdown into components and subcomponents</li>
        <li>Display of technical data and specifications</li>
        <li>Complete 360° analysis of interior parts</li>
      </ul>
    </PCard>
    <PCard :left='false' :image='require("~/assets/images/products/industrial/analytics.png")' :wide='true'>
      <h4>Analytics</h4>
      <h5>Fully customizable, built-in analytical reports can help you achieve a better return on investment. Usage behaviors, selections, time spent, and other documented evidence are stored and compiled for reporting.</h5>
      <ul>
        <li>HPIs, Analytics, Statistics, ROI, etc.</li>
        <li>Better marketing strategy management</li>
        <li>More effective customer analysis</li>
      </ul>
    </PCard>
    <PCard :left='true' :image='require("~/assets/images/products/industrial/connectivity.png")' :wide='true'>
      <h4>Data connectivity</h4>
      <h5>Archimatika custom application development is tailored to maximize user experience across a wide range of interactions and 3D environments. To see how far ahead it can bring the business, let’s name the main benefits of the service:</h5>
      <ul>
        <li>Updated online content (CMS), texts, images, multimedia</li>
        <li>Technical data sheets, informative content</li>
        <li>Lead generation</li>
        <li>Real-time data visualization, status, and analysis</li>
        <li>Connectivity to any external or local databases or data streams</li>
        <li>Level management of administrator or user accounts</li>
      </ul>
    </PCard>
    <div class='triple-text'>
      <h3>Centralized content management</h3>
      <h4>Keeping all marketing materials up to date and available to their different business units is an important challenge for worldwide companies that offer a wide range of products and services.</h4>
      <h5>Our app solves this problem, by offering an intuitive and user-friendly interface to access this material. Administrators can keep all important files up to date by managing their content using our online content management system, which can also connect to any other cloud-based service.</h5>
    </div>
    <div class='analytics'>
      <img src='~/assets/images/products/industrial/analytics.svg' alt=''>
      <h3>Archimatika Advantages:</h3>
      <div class='dot dot1'>
        <h5>Centralized<br> content update</h5>
      </div>
      <div class='dot dot2'>
        <h5>Text, images, videos,<br> PDF, data sheets</h5>
      </div>
      <div class='dot dot3'>
        <h5>Real-time connectivity and<br> synchronization via internal<br> databases or APIs</h5>
      </div>
    </div>
    <PCTA color='#9CF50B4D' button-color='#9CF50B'>
      <svg width="1519" height="680" viewBox="0 0 1519 680" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M240.996 0.5H1278C1320.01 0.5 1351.49 0.500389 1376.48 2.54197C1401.46 4.58307 1419.91 8.66191 1435.87 16.7945C1464 31.1276 1486.87 53.9982 1501.21 82.1284C1509.34 98.0896 1513.42 116.539 1515.46 141.521C1517.5 166.509 1517.5 197.988 1517.5 240V440C1517.5 482.012 1517.5 513.491 1515.46 538.479C1513.42 563.461 1509.34 581.91 1501.21 597.872C1486.87 626.002 1464 648.872 1435.87 663.206C1419.91 671.338 1401.46 675.417 1376.48 677.458C1351.49 679.5 1320.01 679.5 1278 679.5H240.996C198.984 679.5 167.505 679.5 142.517 677.458C117.535 675.417 99.0857 671.338 83.1245 663.206C54.9943 648.872 32.1237 626.002 17.7906 597.872C9.65801 581.91 5.57916 563.461 3.53806 538.479C1.49648 513.491 1.49609 482.012 1.49609 440V240C1.49609 197.988 1.49648 166.509 3.53806 141.521C5.57916 116.539 9.65801 98.0896 17.7906 82.1284C32.1237 53.9982 54.9943 31.1276 83.1245 16.7945C99.0857 8.66191 117.535 4.58307 142.517 2.54197C167.505 0.500389 198.984 0.5 240.996 0.5Z" stroke="#080708"/>
        <path d="M252.941 27H1172.24C1211.46 27 1240.82 27.0008 1264.11 28.9041C1287.4 30.8064 1304.54 34.6044 1319.35 42.1501C1345.5 55.4765 1366.77 76.7408 1380.09 102.895C1387.64 117.705 1391.44 134.846 1393.34 158.13C1395.24 181.425 1395.24 210.78 1395.24 250V430C1395.24 469.22 1395.24 498.575 1393.34 521.87C1391.44 545.154 1387.64 562.295 1380.09 577.105C1366.77 603.259 1345.5 624.524 1319.35 637.85C1304.54 645.396 1287.4 649.194 1264.11 651.096C1240.82 652.999 1211.46 653 1172.24 653H252.941C213.721 653 184.366 652.999 161.071 651.096C137.787 649.194 120.646 645.396 105.836 637.85C79.6817 624.524 58.4174 603.259 45.091 577.105C37.5453 562.295 33.7473 545.154 31.845 521.87C29.9417 498.575 29.9409 469.22 29.9409 430V250C29.9409 210.78 29.9417 181.425 31.845 158.13C33.7473 134.846 37.5453 117.705 45.091 102.895C58.4174 76.7408 79.6817 55.4765 105.836 42.1501C120.646 34.6044 137.787 30.8064 161.071 28.9041C184.366 27.0008 213.721 27 252.941 27Z" fill="#FAFFFD" fill-opacity="0.1" stroke="#080708" stroke-width="2"/>
        <path d="M263.888 53.5H1065.48C1101.91 53.5 1129.14 53.5012 1150.75 55.2662C1172.33 57.0297 1188.16 60.5468 1201.82 67.5057C1226 79.8254 1245.66 99.4834 1257.98 123.662C1264.94 137.32 1268.45 153.153 1270.22 174.738C1271.98 196.341 1271.98 223.572 1271.98 260V420C1271.98 456.428 1271.98 483.659 1270.22 505.262C1268.45 526.847 1264.94 542.68 1257.98 556.338C1245.66 580.517 1226 600.175 1201.82 612.494C1188.16 619.453 1172.33 622.97 1150.75 624.734C1129.14 626.499 1101.91 626.5 1065.48 626.5H263.888C227.459 626.5 200.229 626.499 178.626 624.734C157.041 622.97 141.207 619.453 127.55 612.494C103.371 600.175 83.7131 580.517 71.3934 556.338C64.4345 542.68 60.9174 526.847 59.1539 505.262C57.3889 483.659 57.3877 456.428 57.3877 420V260C57.3877 223.572 57.3889 196.341 59.1539 174.738C60.9174 153.153 64.4345 137.32 71.3934 123.662C83.7131 99.4834 103.371 79.8254 127.55 67.5057C141.207 60.5468 157.041 57.0297 178.626 55.2662C200.229 53.5012 227.46 53.5 263.888 53.5Z" fill="#FAFFFD" fill-opacity="0.2" stroke="#080708" stroke-width="3"/>
        <path d="M275.833 80H959.725C993.361 80 1018.47 80.0016 1038.38 81.6283C1058.26 83.2531 1072.79 86.4892 1085.3 92.8612C1107.5 104.174 1125.55 122.226 1136.86 144.429C1143.24 156.935 1146.47 171.461 1148.1 191.347C1149.72 211.257 1149.72 236.364 1149.72 270V410C1149.72 443.636 1149.72 468.743 1148.1 488.653C1146.47 508.539 1143.24 523.065 1136.86 535.571C1125.55 557.774 1107.5 575.826 1085.3 587.139C1072.79 593.511 1058.26 596.747 1038.38 598.372C1018.47 599.998 993.361 600 959.725 600H275.833C242.196 600 217.09 599.998 197.18 598.372C177.293 596.747 162.767 593.511 150.262 587.139C128.059 575.826 110.007 557.774 98.6938 535.571C92.3217 523.065 89.0856 508.539 87.4608 488.653C85.8341 468.743 85.8325 443.636 85.8325 410V270C85.8325 236.364 85.8341 211.257 87.4608 191.347C89.0856 171.461 92.3217 156.935 98.6938 144.429C110.007 122.226 128.059 104.174 150.262 92.8612C162.767 86.4892 177.293 83.2531 197.18 81.6283C217.09 80.0016 242.196 80 275.833 80Z" fill="#FAFFFD" fill-opacity="0.3" stroke="#080708" stroke-width="4"/>
        <g filter="url(#filter0_d_1562:2866)">
          <path d="M852.967 104H286.779C225.174 104 194.371 104 170.84 115.989C150.143 126.535 133.315 143.363 122.769 164.061C110.779 187.591 110.779 218.394 110.779 280V400C110.779 461.606 110.779 492.409 122.769 515.939C133.315 536.637 150.143 553.465 170.84 564.011C194.371 576 225.174 576 286.779 576H852.967C914.573 576 945.376 576 968.906 564.011C989.604 553.465 1006.43 536.637 1016.98 515.939C1028.97 492.409 1028.97 461.606 1028.97 400V280C1028.97 218.394 1028.97 187.591 1016.98 164.061C1006.43 143.363 989.604 126.535 968.906 115.989C945.376 104 914.573 104 852.967 104Z" fill="#FAFFFD" fill-opacity="0.4" shape-rendering="crispEdges"/>
          <path d="M286.779 106.5H852.967C883.811 106.5 906.794 106.502 925.011 107.99C943.199 109.476 956.417 112.432 967.771 118.217C987.998 128.523 1004.44 144.969 1014.75 165.196C1020.54 176.55 1023.49 189.768 1024.98 207.956C1026.47 226.173 1026.47 249.156 1026.47 280V400C1026.47 430.844 1026.47 453.827 1024.98 472.044C1023.49 490.232 1020.54 503.45 1014.75 514.804C1004.44 535.031 987.998 551.477 967.771 561.783C956.417 567.568 943.199 570.524 925.011 572.01C906.794 573.498 883.811 573.5 852.967 573.5H286.779C255.935 573.5 232.952 573.498 214.735 572.01C196.547 570.524 183.329 567.568 171.975 561.783C151.748 551.477 135.302 535.031 124.996 514.804C119.211 503.45 116.256 490.232 114.77 472.044C113.281 453.827 113.279 430.844 113.279 400V280C113.279 249.156 113.281 226.173 114.77 207.956C116.256 189.768 119.211 176.55 124.996 165.196C135.302 144.969 151.748 128.523 171.975 118.217C183.329 112.432 196.547 109.476 214.735 107.99C232.952 106.502 255.935 106.5 286.779 106.5Z" stroke="#080708" stroke-width="5" shape-rendering="crispEdges"/>
        </g>
        <defs>
          <filter id="filter0_d_1562:2866" x="10.7793" y="4" width="1118.19" height="672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="50"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.960784 0 0 0 0 0.0431373 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1562:2866"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1562:2866" result="shape"/>
          </filter>
        </defs>
      </svg>

    </PCTA>
  </div>
</template>
<script>
import PTitle from '../../components/Products/PTitle'
import PHero from '../../components/Products/PHero'
import PIcons from '../../components/Products/PIcons'
import PCard from '../../components/Products/PCard'
import PCTA from '../../components/Products/PCTA'

export default {
  components: { PCTA, PCard, PIcons, PHero, PTitle },
  data() {
    return {
      contentIcons: [
        {
          img: require('~/assets/images/products/industrial/manufacturing.svg'),
          text: 'Manufacturing',
          id: 2001
        },
        {
          img: require('~/assets/images/products/industrial/development.svg'),
          text: 'Industrial Development',
          id: 2002
        },
        {
          img: require('~/assets/images/products/industrial/communications.svg'),
          text: 'Communications',
          id: 2003
        },
        {
          img: require('~/assets/images/products/industrial/managment.svg'),
          text: 'Management',
          id: 2004
        },
        {
          img: require('~/assets/images/products/industrial/education.svg'),
          text: 'Education',
          id: 2005
        },
        {
          img: require('~/assets/images/products/industrial/technology.svg'),
          text: 'Technology',
          id: 2006
        },
      ]
    }
  },

}
</script>
<style lang='scss' scoped>
.product-subtitle {
  margin-bottom: 100px;
}
.split-text {
  margin-bottom: 150px;
  display: flex;
  justify-content: space-between;
  &.more-margin {
    margin-bottom: 200px;
  }
  &.align-center {
    align-items: center;
  }
  h3, h4, img {
    max-width: calc(50% - 20px);
  }
}
.triple-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 65px;
  h3 {
    max-width: 350px;
    margin-right: 40px;
  }
  h4 {
    max-width: 480px;
    margin-right: 40px;
  }
}
.analytics {
  margin-bottom: 200px;
  position: relative;
  h3 {
    position: absolute;
    top: 160px;
    left: 130px;
  }
  .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #9CF50B;
    h5 {
      position: absolute;
      bottom: 40px;
      left: 10px;
      white-space: nowrap;
    }
    &.dot1 {
      bottom: 173px;
      left: 205px;
    }
    &.dot2 {
      bottom: 287px;
      left: 600px;
    }
    &.dot3 {
      bottom: 550px;
      left: 963px;
    }
  }
}
</style>
