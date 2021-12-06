<template>
  <div class='container page'>
    <PTitle :title='industrial.heading' />
    <PHero :title='industrial.hero.title'
           :description='industrial.hero.desc'
           :left='true'>
      <!--      <nuxt-picture src='/images/products/industrial/hero.png' quality='100' sizes='xs:100vw sm:100vw md:100vw lg:100vw xl:50vw 2xl: 50vw'/>-->
      <nuxt-img src='/images/products/industrial/hero.png' alt='' />
    </PHero>
    <div class='product-subtitle'>
      <translate-wrapper start='center'>
        <h2 v-html='industrial.hero.desc2'></h2>
      </translate-wrapper>
    </div>
    <PIcons :content='industrial.contentIcons' />
    <div class='split-text'>
      <translate-wrapper start='center'>
        <h3 v-html='industrial.threeScreen.title'></h3>
      </translate-wrapper>
      <translate-wrapper start='center' :delay='0.5'>
        <h4 v-html='industrial.threeScreen.subtitle'></h4>
      </translate-wrapper>

    </div>
    <PCard :left='false' image='/images/products/industrial/simulation.png'>
      <h4 v-html='industrial.card1.title'></h4>
      <div class='flex'>
        <h5 class='mb-1' v-html='industrial.card1.desc1'></h5>
        <h5 v-html='industrial.card1.desc2'></h5>
      </div>
    </PCard>
    <div ref='switch' class='split-text margin-more align-center'>
      <translate-wrapper start='center'>
        <h4 v-html='industrial.switch'></h4>
      </translate-wrapper>
      <svg width='740' height='480' viewBox='0 0 740 480' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g class='animate'>
          <circle cx='240' cy='240' r='238.5' stroke='#080708' stroke-width='3' />
        </g>
        <g class='animate'>
          <circle cx='630' cy='240' r='108.5' stroke='#080708' stroke-width='3' />
        </g>
        <g class='animate'>
          <circle cx='275' cy='240' r='184' stroke='#080708' stroke-width='2' />
        </g>
        <g class='animate'>
          <circle cx='620' cy='240' r='89' stroke='#080708' stroke-width='2' />
        </g>
        <g class='animate'>
          <circle cx='300' cy='240' r='139.5' stroke='#080708' />
        </g>
        <g class='animate'>
          <circle cx='610' cy='240' r='69.5' stroke='#080708' />
        </g>

        <g class='animate'>
          <rect x='280' y='200' width='360' height='80' rx='40' fill='#9CF50B' />
          <g opacity='0.5'>
            <mask id='path-8-inside-1_1245:6902' fill='white'>
              <path fill-rule='evenodd' clip-rule='evenodd'
                    d='M344.56 332.984C338.247 334.305 331.705 335 325 335C272.533 335 230 292.467 230 240C230 187.533 272.533 145 325 145C331.705 145 338.247 145.695 344.56 147.016L606.462 190.414C607.653 190.567 608.831 190.763 609.995 190.999L610 191C632.822 195.633 650 215.81 650 240C650 264.19 632.822 284.367 610 289M606.462 289.586L344.56 332.984L606.462 289.586ZM606.462 289.586C607.653 289.433 608.831 289.237 609.995 289.001L606.462 289.586Z' />
            </mask>
            <path
              d='M606.462 289.586L606.503 289.833L606.462 289.586ZM609.959 288.753L344.519 332.738L344.601 333.231L610.041 289.247L609.959 288.753ZM344.601 333.231L606.503 289.833L606.421 289.34L344.519 332.738L344.601 333.231ZM606.503 289.833L610.036 289.247L609.954 288.754L606.421 289.34L606.503 289.833ZM344.56 332.984L344.478 332.491L344.468 332.493L344.457 332.495L344.56 332.984ZM344.56 147.016L344.457 147.505L344.468 147.507L344.478 147.509L344.56 147.016ZM606.462 190.414L606.38 190.907L606.389 190.908L606.398 190.91L606.462 190.414ZM609.995 190.999L609.896 191.489L609.905 191.491L609.913 191.492L609.995 190.999ZM610 191L610.099 190.51L610.091 190.508L610.082 190.507L610 191ZM606.462 289.586L606.398 289.09L606.389 289.092L606.38 289.093L606.462 289.586ZM325 335.5C331.739 335.5 338.316 334.802 344.662 333.474L344.457 332.495C338.178 333.809 331.67 334.5 325 334.5V335.5ZM229.5 240C229.5 292.743 272.257 335.5 325 335.5V334.5C272.809 334.5 230.5 292.191 230.5 240H229.5ZM325 144.5C272.257 144.5 229.5 187.257 229.5 240H230.5C230.5 187.809 272.809 145.5 325 145.5V144.5ZM344.662 146.526C338.316 145.198 331.739 144.5 325 144.5V145.5C331.67 145.5 338.178 146.191 344.457 147.505L344.662 146.526ZM344.478 147.509L606.38 190.907L606.543 189.92L344.641 146.522L344.478 147.509ZM610.095 190.509C608.919 190.271 607.729 190.073 606.526 189.918L606.398 190.91C607.577 191.062 608.744 191.255 609.896 191.489L610.095 190.509ZM609.913 191.492L609.918 191.493L610.082 190.507L610.077 190.506L609.913 191.492ZM650.5 240C650.5 215.568 633.15 195.189 610.099 190.51L609.901 191.49C632.494 196.076 649.5 216.053 649.5 240H650.5ZM610.099 289.49C633.15 284.811 650.5 264.432 650.5 240H649.5C649.5 263.947 632.494 283.924 609.901 288.51L610.099 289.49ZM606.38 289.093L344.478 332.491L344.641 333.478L606.543 290.08L606.38 289.093ZM606.526 290.082C607.729 289.927 608.919 289.729 610.095 289.491L609.896 288.511C608.744 288.745 607.577 288.938 606.398 289.09L606.526 290.082Z'
              fill='#080708' mask='url(#path-8-inside-1_1245:6902)' />
          </g>
        </g>
      </svg>
    </div>
    <PCard :left='true' image='/images/products/industrial/animation.png'>
      <h4 v-html='industrial.card2.title'></h4>
      <div class='flex'>
        <h5 class='mb-1' v-html='industrial.card2.desc1'></h5>
        <h5 v-html='industrial.card2.desc2'></h5>
      </div>
    </PCard>
    <PCard :left='false' image='/images/products/industrial/data.png'>
      <h4 v-html='industrial.card3.title'></h4>
      <h5 v-html='industrial.card3.desc'></h5>
    </PCard>
    <PCard :left='true' image='/images/products/industrial/exploading.png' :wide='true'>
      <h4 v-html='industrial.card4.title'></h4>
      <div class='flex'>
        <h5 v-html='industrial.card4.desc'></h5>
        <ul>
          <li v-for='item in industrial.card4.list' :key='item' v-html='item'></li>
        </ul>
      </div>
    </PCard>
    <PCard :left='false' image='/images/products/industrial/analytics.png' :wide='true'>
      <h4 v-html='industrial.card5.title'></h4>
      <div class='flex'>
        <h5 v-html='industrial.card5.desc'></h5>
        <ul>
          <li v-for='item in industrial.card5.list' :key='item' v-html='item'></li>
        </ul>
      </div>
    </PCard>
    <PCard :left='true' image='/images/products/industrial/connectivity.png' :wide='true'>
      <h4 v-html='industrial.card6.title'></h4>
      <div class='flex'>
        <h5 v-html='industrial.card6.desc'></h5>
        <ul>
          <li v-for='item in industrial.card6.list' :key='item' v-html='item'></li>
        </ul>
      </div>
    </PCard>
    <div class='triple-text'>
      <translate-wrapper start='center'><h3 v-html='industrial.fourScreen.title'></h3>
      </translate-wrapper>
      <translate-wrapper start='center' :delay='0.3'><h4 v-html='industrial.fourScreen.subtitle'></h4>
      </translate-wrapper>
      <translate-wrapper start='center' :delay='0.6'><h5 v-html='industrial.fourScreen.desc'></h5>
      </translate-wrapper>
    </div>
    <div ref='analytics' class='analytics'>
      <svg width='1521' height='850' viewBox='0 0 1521 850' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.5 158.614C0.5 141.282 0.5004 128.314 1.35072 118.046C2.20057 107.784 3.89678 100.265 7.26259 93.8219C13.2084 82.4404 22.6766 73.2878 34.2532 67.7312C40.8065 64.5857 48.3788 63.1454 58.664 62.6439C68.9548 62.1421 81.9155 62.5812 99.2371 63.1687L1364.34 106.076C1380.63 106.628 1392.82 107.042 1402.49 108.151C1412.15 109.26 1419.25 111.06 1425.37 114.362C1436.18 120.2 1444.92 129.243 1450.39 140.249C1453.48 146.475 1455.04 153.63 1455.82 163.323C1456.6 173.021 1456.6 185.218 1456.6 201.521V454.577C1456.6 486.322 1456.6 510.099 1455.21 527.393C1454.51 536.038 1453.47 543.041 1451.91 548.596C1450.35 554.153 1448.29 558.227 1445.58 561.049C1436.05 570.956 1422.07 575.2 1408.64 572.256C1404.82 571.418 1400.84 569.177 1396.46 565.423C1392.07 561.67 1387.32 556.428 1381.93 549.627C1371.16 536.023 1357.95 516.256 1340.31 489.864L1289.14 413.301L1289.12 413.28C1286.84 409.871 1285.12 407.286 1283.6 405.41C1282.08 403.53 1280.72 402.306 1279.18 401.681C1276.55 400.623 1273.61 400.668 1271.02 401.806C1269.49 402.478 1268.18 403.744 1266.72 405.669C1265.26 407.591 1263.61 410.229 1261.44 413.706L1261.43 413.727L1135.55 615.186C1128.44 626.555 1123.13 635.053 1118.48 641.169C1113.83 647.287 1109.89 650.956 1105.55 652.738C1097.89 655.884 1089.25 655.662 1081.76 652.125C1077.51 650.121 1073.77 646.253 1069.44 639.904C1065.11 633.556 1060.25 624.796 1053.74 613.076L1004.56 524.508L1004.54 524.482C989.523 497.436 978.241 477.119 968.327 462.561C958.415 448.004 949.817 439.121 940.134 435.039C923.387 427.977 904.351 428.818 888.292 437.331C879.008 442.253 871.228 451.86 862.639 467.235C854.049 482.612 844.604 503.845 832.032 532.111L832.02 532.138L749.484 717.697C745.947 725.651 743.307 731.584 740.872 735.938C738.437 740.293 736.243 742.998 733.631 744.555C728.99 747.322 723.409 748.039 718.219 746.535C715.298 745.689 712.492 743.626 709.035 740.028C705.579 736.431 701.525 731.358 696.092 724.557L623.807 634.075L623.792 634.057C610.687 617.652 600.836 605.321 592.29 596.373C583.739 587.418 576.455 581.806 568.466 578.881C554.534 573.779 539.212 573.975 525.414 579.432C517.503 582.56 510.364 588.357 502.045 597.527C493.731 606.691 484.199 619.269 471.517 636.003L471.502 636.023L441.882 675.109C428.659 692.557 418.762 705.617 410.16 715.082C401.56 724.545 394.296 730.368 386.356 733.387C372.378 738.702 356.911 738.558 343.034 732.985C335.152 729.819 327.996 723.862 319.574 714.241C311.149 704.618 301.495 691.377 288.599 673.686L222.273 582.706L222.257 582.683C215.574 573.516 210.541 566.612 206.15 561.604C201.755 556.591 197.963 553.428 193.743 551.794C186.432 548.962 178.311 549.055 171.067 552.052C166.886 553.782 163.166 557.031 158.886 562.143C154.611 567.25 149.737 574.267 143.264 583.584L143.249 583.606L87.0112 664.564C73.7983 683.585 63.9064 697.824 55.8511 707.614C51.8244 712.507 48.2707 716.271 45.0045 718.959C41.7377 721.647 38.7839 723.237 35.9569 723.82C25.9788 725.877 15.6454 722.64 8.62422 715.258C6.63497 713.166 5.1161 710.175 3.96669 706.104C2.81747 702.033 2.0463 696.914 1.53108 690.598C0.500409 677.962 0.5 660.624 0.5 637.465V158.614Z'
          stroke='#080708' />
        <path
          d='M32.4453 162.432C32.4453 139.26 32.4461 121.942 33.5823 108.237C34.7175 94.5436 36.9809 84.5484 41.4544 76.0024C49.375 60.8709 61.986 48.7138 77.3975 41.353C86.1016 37.1957 96.1731 35.3 109.899 34.6673C123.637 34.0341 140.943 34.6678 164.099 35.5168L1365.2 79.556C1386.88 80.3506 1403.07 80.9452 1415.91 82.4532C1428.74 83.9598 1438.13 86.3704 1446.21 90.752C1460.53 98.5163 1472.09 110.516 1479.33 125.109C1483.41 133.344 1485.48 142.818 1486.51 155.691C1487.55 168.577 1487.55 184.783 1487.55 206.471V520.159C1487.55 542.482 1487.55 559.167 1486.52 572.368C1485.48 585.559 1483.43 595.183 1479.36 603.401C1470.72 620.866 1455.94 634.522 1437.84 641.746C1429.33 645.146 1419.57 646.434 1406.34 646.415C1393.1 646.397 1376.47 645.074 1354.21 643.302L1354.07 643.291C1337.38 641.962 1328.87 641.285 1320.63 642.319C1311.89 643.415 1303.39 645.929 1295.47 649.762C1287.99 653.375 1281.22 658.571 1267.94 668.765L1267.82 668.853L1216.84 707.981C1200.39 720.606 1188.09 730.039 1177.7 736.791C1167.32 743.536 1158.89 747.559 1150.2 749.404C1134.79 752.675 1118.75 751.262 1104.14 745.347C1095.91 742.01 1088.32 736.576 1079.27 728.12C1070.22 719.655 1059.76 708.218 1045.77 692.911L1003.87 647.061L1003.83 647.021C993.319 635.519 985.389 626.843 978.548 620.533C971.693 614.209 965.858 610.191 959.512 608.07C948.488 604.387 936.538 604.58 925.638 608.616C919.364 610.939 913.661 615.143 907.013 621.685C900.378 628.212 892.73 637.141 882.591 648.978L882.56 649.013L821.189 720.661C798.903 746.679 787.931 759.462 774.349 766.51C762.323 772.751 748.894 775.795 735.352 775.348C720.059 774.843 704.648 768.039 673.323 754.171L606.288 724.493L606.116 724.416C595.987 719.932 590.726 717.603 585.26 716.783C580.419 716.057 575.486 716.204 570.696 717.218C565.29 718.361 560.178 720.999 550.336 726.078L550.166 726.166L422.969 791.807C412.872 797.018 408.039 799.496 403.061 800.15C398.625 800.734 394.114 800.283 389.881 798.833C385.132 797.206 380.885 793.82 372.019 786.714L230.595 673.354L230.491 673.271C227.457 670.839 225.827 669.532 224.191 668.641C217.646 665.075 209.7 665.246 203.314 669.091C201.719 670.051 200.147 671.426 197.222 673.986L197.119 674.075C182.96 686.463 172.362 695.735 163.974 702.519C155.576 709.31 149.46 713.551 144.261 715.925C100.643 735.844 49.4828 712.627 35.753 666.684C34.1166 661.208 33.2815 653.811 32.8633 643.02C32.4455 632.24 32.4453 618.159 32.4453 599.345V162.432Z'
          stroke='#080708' stroke-width='2' />
        <path
          d='M64.3984 166.431C64.3984 137.39 64.3996 115.702 65.8236 98.5439C67.2461 81.4028 70.0805 68.9216 75.6689 58.267C85.5773 39.376 101.351 24.2121 120.617 15.0554C131.484 9.891 144.067 7.55031 161.251 6.804C178.451 6.05695 200.123 6.90994 229.141 8.05369L1366.24 52.8732C1393.27 53.9384 1413.45 54.7349 1429.44 56.6565C1445.42 58.5759 1457.09 61.6059 1467.12 67.0708C1484.92 76.7682 1499.3 91.7216 1508.29 109.891C1513.35 120.13 1515.92 131.913 1517.21 147.951C1518.5 164.008 1518.5 184.204 1518.5 211.25V691.732C1518.5 707.02 1518.5 718.391 1517.82 726.667C1517.48 730.801 1516.98 734.095 1516.25 736.682C1515.52 739.271 1514.58 741.058 1513.44 742.265C1509.06 746.89 1502.61 748.937 1496.36 747.684C1494.73 747.356 1492.94 746.436 1490.84 744.744C1488.75 743.053 1486.44 740.651 1483.78 737.47C1478.46 731.099 1471.9 721.81 1463.08 709.319L1388.95 604.276L1388.9 604.218C1380.28 592 1373.76 582.757 1367.98 575.872C1362.17 568.963 1357.03 564.316 1351.11 561.374C1340.89 556.285 1329.26 554.741 1318.06 556.985C1311.58 558.282 1305.4 561.426 1298 566.581C1290.62 571.718 1281.91 578.937 1270.4 588.479L1270.34 588.529L1205.16 642.571C1196.61 649.656 1190.28 654.904 1185.01 658.53C1179.75 662.152 1175.7 664.043 1171.75 664.558C1164.6 665.488 1157.35 663.672 1151.49 659.474C1148.25 657.155 1145.57 653.577 1142.64 647.9C1139.71 642.216 1136.61 634.6 1132.42 624.32L1020.14 348.771L1020.11 348.694C1013.08 331.453 1007.77 318.424 1002.97 309.078C998.187 299.767 993.75 293.78 988.305 291.013C979.227 286.398 968.478 286.458 959.451 291.172C954.037 293.999 949.666 300.035 944.984 309.398C940.285 318.796 935.121 331.883 928.286 349.2L928.255 349.278L834.329 587.267C826.922 606.037 821.402 620.018 816.175 630.394C810.95 640.768 806.107 647.346 800.151 651.454C789.526 658.784 776.417 661.575 763.727 659.21C756.615 657.884 749.512 653.85 740.514 646.505C731.513 639.158 720.776 628.638 706.365 614.514L688.09 596.604L688.035 596.55C674.651 583.433 664.541 573.526 655.896 566.391C647.227 559.236 639.914 554.769 632.094 552.634C618.549 548.935 604.145 549.983 591.278 555.604C583.85 558.849 577.261 564.328 569.719 572.663C562.198 580.974 553.629 592.242 542.285 607.158L542.239 607.219L444.378 735.9C437.641 744.759 434.478 748.884 430.458 751.529C426.859 753.897 422.77 755.418 418.499 755.978C413.728 756.604 408.637 755.549 397.749 753.247L279.321 728.214L279.073 728.161C266.788 725.564 260.359 724.206 254.004 724.444C248.371 724.654 242.811 725.788 237.546 727.801C231.605 730.071 226.223 733.839 215.936 741.04L215.728 741.185L187.916 760.654C167.522 774.93 152.312 785.576 140.081 792.571C127.835 799.574 118.815 802.771 110.779 802.419C96.4569 801.793 83.1461 794.863 74.4197 783.489C69.523 777.107 66.9689 767.884 65.6836 753.836C64.3999 739.805 64.3984 721.239 64.3984 696.345V166.431Z'
          stroke='#080708' stroke-width='3' />
      </svg>

      <h3 v-html='industrial.analytics.title'></h3>
      <div class='dot dot1'>
        <h5 v-html='industrial.analytics.item1'></h5>
      </div>
      <div class='dot dot2'>
        <h5 v-html='industrial.analytics.item2'></h5>
      </div>
      <div class='dot dot3'>
        <h5 v-html='industrial.analytics.item3'></h5>
      </div>
    </div>
    <s-animation name='slide' :count-item='6'>
      <template #item>
        <div class='card'>
          <h3 v-html='industrial.cta.title'></h3>
          <s-button color='green' @click='openDiscuss'>{{ industrial.cta.button }}</s-button>
        </div>
      </template>
    </s-animation>
  </div>
</template>
<script>
import PTitle from '../../components/Products/PTitle'
import PHero from '../../components/Products/PHero'
import PIcons from '../../components/Products/PIcons'
import PCard from '../../components/Products/PCard'
import TranslateWrapper from '../../components/TranslateWrapper'
import SAnimation from '../../components/SAnimation/SAnimation'
import SButton from '../../components/ui/SButton'

export default {
  components: { TranslateWrapper, PCard, PIcons, PHero, PTitle, SButton, SAnimation },
  async asyncData(context) {
    const lang = context.store.state.lang
    const industrial = await context.$content(`industrial${lang === 0 ? '' : '_ru'}`).fetch()
    return { industrial }
  },
  data() {
    return {
      tlSwitch: null,
      tlAnalytics: null
    }
  },
  mounted() {
    this.animateSwitch()
    this.animateAnalytics()
    setTimeout(() => {
      const tlArr = [this.tlSwitch, this.tlAnalytics]
      for (const item of tlArr) {
        item.scrollTrigger.refresh()
      }
    }, 200)
  },
  methods: {
    animateAnalytics() {
      if (process.client) {
        const paths = this.$refs.analytics.querySelectorAll('path')
        const dots = this.$refs.analytics.querySelectorAll('.dot')
        const h3 = this.$refs.analytics.querySelector('h3')
        const h5 = this.$refs.analytics.querySelectorAll('h5')
        this.tlAnalytics = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.analytics,
            start: 'center bottom'
          }
        })
        this.tlAnalytics.from(paths, {
          opacity: 0,
          duration: 1.5,
          y: '-20%',
          scale(index) {
            if (index === 0) {
              return 0.3
            } else if (index === 1) {
              return 0.5
            } else {
              return 0.7
            }
          },
          transformOrigin: 'center'
        })
          .from([h3, dots], {
            opacity: 0,
            y: '200px',
            stagger: 0.3,
            duration: 1.5
          }, '<0.5')
          .from(h5, {
            y: '30px',
            duration: 0.8,
            stagger: 0.2
          }, '<1.4')
      }
    },
    animateSwitch() {
      if (process.client) {
        const elements = this.$refs.switch.querySelectorAll('.animate')
        this.tlSwitch = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.switch,
            start: 'center bottom'
          }
        })
        this.tlSwitch.from(elements, {
          opacity: 0,
          scale(index) {
            return index < 6 ? 0 : 1
          },
          transformOrigin: 'center',
          stagger(index) {
            if (index % 2 === 0) {
              return index * 0.2
            } else {
              return (index - 1) * 0.2
            }
          },
          duration: 2
        })
      }
    },
    openDiscuss() {
      this.$store.dispatch('setDiscuss', true)
    }
  }

}
</script>
<style lang='scss' scoped>
.product-subtitle {
  margin-bottom: 100px;
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
}

.split-text {
  margin-bottom: 150px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1366px) {
    margin-bottom: 100px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 100px;
    & > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    & > div:nth-child(1) {
      margin-bottom: 50px;
    }
  }

  h4, h3 {
    @media (max-width: 1024px) {
      max-width: 100%;
      margin-right: 20px;
    }
    @media (max-width: 600px) {
      width: 100%;
    }

  }

  &.more-margin {
    margin-bottom: 200px;
  }

  &.align-center {
    align-items: center;
  }

  img, div, svg {
    max-width: calc(50% - 20px);
    @media (max-width: 1024px) {
      max-width: 100%;
      width: 50%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  svg {
    @media (max-width: 600px) {
      width: calc(100% - 42px);
      margin-right: auto;
    }
  }
}

.triple-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 65px;
  @media (max-width: 1366px) {
    flex-direction: column;
    margin-bottom: 50px;
  }

  div {
    &:nth-child(1) {
      max-width: 350px;
      margin-right: 40px;
      @media (max-width: 1366px) {
        margin-right: 0;
        max-width: 731px;
        margin-bottom: 40px;
      }
    }

    &:nth-child(2) {
      max-width: 480px;
      margin-right: 40px;
      @media (max-width: 1366px) {
        margin-right: 0;
        max-width: 731px;
        margin-bottom: 40px;
      }
    }

    @media (max-width: 1366px) {
      max-width: 731px;
    }
  }
}

.analytics {
  margin-bottom: 200px;
  position: relative;
  @media (max-width: 1366px) {
    margin-bottom: 120px;
  }
  @media (max-width: 600px) {
    min-height: 660px;
    margin-bottom: 50px;
    overflow: hidden;
    width: calc(100vw - 24px);
  }

  svg {
    @media (max-width: 600px) {
      width: 588px;
      height: 306px;
      transform: rotate(90deg);
      max-width: unset;
      position: absolute;
      top: 180px;
      right: -324px;
    }
  }

  h3 {
    position: absolute;
    top: 160px;
    left: 130px;
    @media (max-width: 1366px) {
      top: 116px;
      font-size: 32px;
      line-height: 40px;
    }
    @media (max-width: 1024px) {
      top: 60px;
      left: 57px;
      font-size: 20px;
      line-height: 25px;
    }
    @media (max-width: 600px) {
      top: 0;
      left: 0;
    }
  }

  .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #9CF50B;
    @media (max-width: 1024px) {
      width: 10px;
      height: 10px;
    }

    h5 {
      position: absolute;
      bottom: 40px;
      left: 10px;
      white-space: nowrap;
      @media (max-width: 1366px) {
        bottom: 30px;
        font-size: 16px;
        line-height: 24px;
      }
      @media (max-width: 1024px) {
        bottom: 20px;
      }
      @media (max-width: 600px) {
        left: unset;
        right: 30px;
        bottom: unset;
        top: 0;
        text-align: right;
      }
    }

    &.dot1 {
      bottom: 173px;
      left: 205px;
      @media (max-width: 1680px) {
        bottom: 143px;
        left: 172px;
      }
      @media (max-width: 1366px) {
        bottom: 121px;
        left: 143px;
      }
      @media (max-width: 1120px) {
        bottom: 111px;
        left: 130px;
      }
      @media (max-width: 1024px) {
        bottom: calc(20.3%);
        left: calc(13.5%)
      }
      @media (max-width: 600px) {
        left: unset;
        right: 54px;
        bottom: 521px;
        h5 {
          right: 66px;
        }
      }
    }

    &.dot2 {
      bottom: 287px;
      left: 600px;
      @media (max-width: 1680px) {
        bottom: 241px;
        left: 506px;
      }
      @media (max-width: 1366px) {
        bottom: 201px;
        left: 429px;
      }
      @media (max-width: 1120px) {
        bottom: 184px;
        left: 391px;
      }
      @media (max-width: 1024px) {
        bottom: calc(34%);
        left: calc(40%)
      }
      @media (max-width: 600px) {
        left: unset;
        right: 92px;
        bottom: 327px;
      }
    }

    &.dot3 {
      bottom: 550px;
      left: 963px;
      @media (max-width: 1680px) {
        bottom: 461px;
        left: 809px;
      }
      @media (max-width: 1366px) {
        bottom: 389px;
        left: 682px;
      }
      @media (max-width: 1120px) {
        bottom: 357px;
        left: 626px;
      }
      @media (max-width: 1024px) {
        bottom: calc(65%);
        left: calc(63.5%)
      }
      @media (max-width: 600px) {
        left: unset;
        right: 83px;
        bottom: 186px;
        h5 {
          right: 39px;
        }
      }
    }
  }
}
</style>
