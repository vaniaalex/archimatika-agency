<template>
  <div class='services page'>
    <div class='navs'>
      <nav-links :active='active' :nav-links='services.navLinks' @goTo='goTo' />
    </div>

    <div id='web-design'>
      <div class='container'>
        <div class='heading'>
          <h2 v-html='services.webDesign.heading.title'></h2>
          <h4 v-html='services.webDesign.heading.desc'></h4>
        </div>

        <div class='block-1 row'>
          <div class='left'>
            <translate-wrapper start='center'>
              <h4 v-html='services.webDesign.block1.title'></h4>
              <h5 v-html='services.webDesign.block1.desc'></h5>
            </translate-wrapper>
          </div>
          <div class='right'>
            <translate-wrapper start='center'>
              <nuxt-picture src='/images/services/tablet-h.png' quality='100'
                            sizes='xs:100vw sm:100vw md:100vw lg:100vw xl:50vw 2xl: 50vw' />
            </translate-wrapper>
            <translate-wrapper start='center' :delay='0.5'>
              <nuxt-picture src='/images/services/3dmap.png' quality='100'
                            sizes='xs:100vw sm:100vw md:100vw lg:100vw xl:50vw 2xl: 50vw' class='map' />
            </translate-wrapper>
          </div>
        </div>
        <div class='block-2'>
          <div class='row'>
            <div class='left'>
              <translate-wrapper start='center'>
                <h4 v-html='services.webDesign.block2.title'></h4>
              </translate-wrapper>
            </div>
            <div class='right'>
              <translate-wrapper start='center' :delay='0.5'>
                <h5 v-html='services.webDesign.block2.desc'></h5></translate-wrapper>
            </div>
          </div>
          <div class='image'>
            <div class='row'>
              <translate-wrapper start='top' :delay='0'>
                <h5>{{ services.webDesign.block2.item1 }}</h5>
              </translate-wrapper>
              <translate-wrapper start='top' :delay='0.3'>
                <h5>{{ services.webDesign.block2.item2 }}</h5>
              </translate-wrapper>
              <translate-wrapper start='top' :delay='0.6'>
                <h5 class='special'>{{ services.webDesign.block2.item3 }}</h5>
              </translate-wrapper>
              <translate-wrapper start='top' :delay='0.9'>
                <h5>{{ services.webDesign.block2.item4 }}</h5>
              </translate-wrapper>
            </div>
            <translate-wrapper start='top' :delay='0.5'>
              <div class='border-wrap'>
                <div ref='border1' class='border'></div>
                <div class='image-container'>
                  <div ref='border2' class='border'></div>
                  <nuxt-img src='/images/services/two-screen.png' quality='100'
                            sizes='xs:140vw sm:120vw md:100vw lg:100vw xl:100vw 2xl: 100vw' />
                </div>
              </div>
            </translate-wrapper>
          </div>
          <div class='row last'>
            <translate-wrapper start='center'>
              <h4 v-html='services.webDesign.block3.title'></h4>
            </translate-wrapper>
            <translate-wrapper start='center' :delay='0.3'>
              <h5 v-html='services.webDesign.block3.desc1'></h5>
            </translate-wrapper>
            <translate-wrapper start='center' :delay='0.6'>
              <h5 v-html='services.webDesign.block3.desc2'></h5>
            </translate-wrapper>
          </div>
        </div>

        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3 v-html='services.webDesign.cta.title'></h3>
              <s-button color='green' @click='openDiscuss'>{{ services.webDesign.cta.button }}</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='interactive-map'>
      <div class='container'>
        <div class='heading'>
          <translate-wrapper start='center'>
            <h2 v-html='services.map.title'></h2>
          </translate-wrapper>
          <translate-wrapper start='center' :delay='0.5'>
            <h4 v-html='services.map.desc'></h4>
          </translate-wrapper>
        </div>
        <div ref='interactiveMap' class='row'>
          <div class='left'>
            <div ref='mapImage' class='interactive-map'>
              <!--              <s-image class='interactive-map-bg' :src='`services/map${animations.currentMap === 1 ? 1 : "" }.png`' />-->
              <nuxt-img :src='`/images/services/map${animations.currentMap === 1 ? 1 : "" }.png`' quality='100'
                        sizes='xs:100vw sm:100vw md:100vw lg:100vw xl:50vw 2xl: 50vw' class='interactive-map-bg' />

              <div class='icons'>
                <div ref='locationCard' class='location-card'>
                  <nuxt-img src='/images/cafe.png' alt='' />
                  <div class='text cardLayout'>
                    <h4 v-html='services.map.map.locationCard.title'></h4>
                    <div class='items'>
                      <div class='item'>
                        <img src='~/assets/images/svg/map/steps-small.svg' alt=''>
                        <span v-html='services.map.map.locationCard.distance'></span>
                      </div>
                      <div class='item'>
                        <img src='~/assets/images/svg/map/clock.svg' alt=''>
                        <span v-html='services.map.map.locationCard.time'></span>
                      </div>
                    </div>
                    <p v-html='services.map.map.locationCard.desc'></p>
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
                      <span v-html='services.map.map.routeCard.distance'></span>
                    </div>
                    <div class='item'>
                      <img src='~/assets/images/svg/map/clock.svg' alt=''>
                      <span v-html='services.map.map.routeCard.time'></span>
                    </div>
                  </div>
                </div>
                <div class='interactive-map-nav'>
                  <p>{{ services.map.map.nav.title }}</p>
                  <div class='buttons'>
                    <button ref='all'>{{ services.map.map.nav.all }}</button>
                    <button ref='info'>{{ services.map.map.nav.info }}</button>
                    <button ref='indu'>{{ services.map.map.nav.indu }}</button>
                    <button ref='park'>{{ services.map.map.nav.park }}</button>
                    <button ref='cafe' class='icon-nav'>
                      <s-svg name='home' />
                    </button>
                    <button ref='steps' class='icon-nav'>
                      <s-svg name='steps' />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div ref='mapRight' class='right'>
            <div v-for='item in services.map.map.posts' :key='item.title' :ref='`post${item.id}`' class='post'>
              <h4 v-html='item.title'></h4>
              <h5 v-html='item.desc'></h5>
              <ul v-if='item.list'>
                <li v-for='li in item.list' :key='li'>{{ li }}</li>
              </ul>
            </div>
          </div>
        </div>
        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3 v-html='services.map.cta.title'></h3>
              <s-button color='green' @click='openDiscuss'>{{ services.map.cta.button }}</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='property-websites'>
      <div class='container'>
        <div class='heading'>
          <translate-wrapper start='center'>
            <h2 v-html='services.website.title'></h2>
          </translate-wrapper>
          <translate-wrapper start='center' :delay='0.5'>
            <h4 v-html='services.website.subtitle'></h4>
            <h5 v-html='services.website.desc'></h5>
          </translate-wrapper>
        </div>
        <div class='block-1'>
          <div ref='propertyImages' class='images'>
            <nuxt-img src='/images/services/tab.png' />
            <nuxt-img src='/images/services/presentation-tablet.png' />
            <nuxt-img ref='secondPropertyImage' src='/images/services/presentation-mobile.png' />
          </div>
          <translate-wrapper start='center'>
            <div class='row'>
              <h5 v-html='services.website.block1.desc1'></h5>
              <h5 v-html='services.website.block1.desc2'></h5>
            </div>
          </translate-wrapper>
        </div>

        <div class='block-2 row'>
          <div class='left'>
            <translate-wrapper start='center'>
              <h4 v-html='services.website.block2.title'></h4>
              <h5 v-html='services.website.block2.desc'></h5>
            </translate-wrapper>
          </div>
          <div class='right'>
            <nuxt-img id='spinnerImage1' src='/images/services/tablet-v.png' />
            <nuxt-img id='spinnerImage2' src='/images/services/ui-1.png' />
            <nuxt-img id='spinnerImage3' src='/images/services/ui-2.png' />
          </div>
        </div>

        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3 v-html='services.website.cta.title'></h3>
              <s-button color='green' @click='openDiscuss'>{{ services.website.cta.button }}</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='wow-websites'>
      <div class='wow'>
        <svg ref='wowSvg' fill='none' height='652' viewBox='0 0 1920 652' width='1920'
             xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1088.74 26.5993L1088.75 26.6045L1088.77 26.6095C1129.39 42.7498 1164.01 65.1551 1192.66 93.8172L1192.66 93.8227L1192.67 93.8281C1221.91 122.493 1244.9 157.141 1261.63 197.792L1261.63 197.804L1261.64 197.816C1278.95 237.845 1287.62 280.568 1287.62 326C1287.62 362.471 1282.24 397.436 1271.49 430.902C1260.74 463.767 1245.22 493.636 1224.92 520.516L1224.92 520.52C1205.21 546.817 1181.91 569.827 1155.03 589.553L1155.02 589.558L1155.02 589.563C1128.76 609.266 1098.92 624.5 1065.47 635.259C1032.02 645.418 997.076 650.5 960.622 650.5C900.267 650.5 845.022 636.451 794.859 608.365C744.697 580.281 705.295 541.452 676.632 491.86C648.567 441.667 634.529 386.39 634.529 326C634.529 265.606 648.569 210.629 676.634 161.037C705.299 110.844 744.7 71.7173 794.859 43.6348C845.022 15.5491 900.267 1.5 960.622 1.5C1006.03 1.5 1048.73 9.86923 1088.74 26.5993ZM427.691 627.239C425.527 636.097 424.522 640.087 422.334 643.033C420.364 645.684 417.72 647.76 414.677 649.044C411.296 650.471 407.182 650.5 398.063 650.5H278.512C273.786 650.5 270.324 650.499 267.56 650.293C264.815 650.088 262.865 649.686 261.159 648.936C258.022 647.557 255.329 645.334 253.382 642.514C252.322 640.981 251.559 639.142 250.838 636.486C250.113 633.811 249.457 630.411 248.563 625.771L160.101 166.676C159.421 163.149 156.334 160.599 152.741 160.599C149.149 160.599 146.062 163.149 145.382 166.676L56.9197 625.771C56.0256 630.411 55.3695 633.811 54.6441 636.486C53.9236 639.142 53.1602 640.981 52.1008 642.514C50.1531 645.334 47.4606 647.557 44.3234 648.936C42.617 649.686 40.6672 650.088 37.9223 650.293C35.1585 650.499 31.6961 650.5 26.9706 650.5H-92.5803C-101.699 650.5 -105.814 650.471 -109.195 649.044C-112.238 647.76 -114.882 645.684 -116.851 643.033C-119.04 640.087 -120.044 636.097 -122.209 627.239L-265.869 39.2388C-267.525 32.4595 -268.743 27.4706 -269.347 23.5108C-269.95 19.5624 -269.912 16.8101 -269.18 14.471C-267.83 10.1623 -264.952 6.4957 -261.086 4.16221C-258.988 2.89547 -256.323 2.20549 -252.345 1.85394C-248.355 1.50138 -243.219 1.5 -236.241 1.5H-170.355C-165.756 1.5 -162.388 1.50093 -159.695 1.69865C-157.021 1.89499 -155.115 2.2802 -153.439 2.99983C-150.356 4.32277 -147.692 6.45874 -145.73 9.17924C-144.663 10.6591 -143.872 12.4351 -143.099 15.0025C-142.32 17.588 -141.586 20.8757 -140.586 25.3642L-69.4025 344.705L-69.3865 344.776C-64.8731 365.024 -61.4692 380.295 -58.2709 391.051C-56.6697 396.436 -55.1008 400.757 -53.4398 404.036C-51.7908 407.291 -49.9682 409.686 -47.7697 411.006C-40.9595 415.094 -32.4503 415.094 -25.6401 411.006C-23.4417 409.686 -21.6191 407.291 -19.97 404.036C-18.309 400.757 -16.7401 396.436 -15.1389 391.051C-11.9406 380.295 -8.53674 365.024 -4.02332 344.776L-4.00739 344.705L67.1758 25.3642C68.1763 20.8757 68.9102 17.5881 69.6891 15.0025C70.4625 12.4351 71.2531 10.6591 72.3202 9.17925C74.282 6.45874 76.9466 4.32277 80.0287 2.99983C81.7053 2.2802 83.6108 1.89499 86.2849 1.69865C88.978 1.50093 92.3466 1.5 96.9452 1.5H208.537C213.136 1.5 216.504 1.50093 219.197 1.69865C221.872 1.89499 223.777 2.2802 225.454 2.99983C228.536 4.32277 231.2 6.45874 233.162 9.17924C234.229 10.6591 235.02 12.4351 235.793 15.0025C236.572 17.588 237.306 20.8757 238.307 25.3642L309.49 344.705L309.506 344.779C314.019 365.025 317.423 380.295 320.621 391.051C322.223 396.436 323.791 400.757 325.452 404.036C327.102 407.291 328.924 409.686 331.122 411.006C337.933 415.094 346.442 415.094 353.252 411.006C355.451 409.686 357.273 407.291 358.922 404.036C360.583 400.757 362.152 396.436 363.753 391.051C366.951 380.295 370.355 365.025 374.868 344.779L374.885 344.705L446.068 25.3642C447.069 20.8757 447.802 17.588 448.581 15.0025C449.355 12.4351 450.145 10.6591 451.212 9.17924C453.174 6.45874 455.839 4.32277 458.921 2.99983C460.598 2.2802 462.503 1.89499 465.177 1.69865C467.87 1.50093 471.239 1.5 475.837 1.5H541.723C548.702 1.5 553.837 1.50138 557.827 1.85394C561.806 2.20549 564.471 2.89547 566.569 4.16221C570.434 6.4957 573.313 10.1622 574.662 14.471C575.395 16.8101 575.433 19.5624 574.83 23.5108C574.225 27.4706 573.008 32.4596 571.351 39.2388L427.691 627.239ZM1102.99 179.059C1065.49 140.328 1017.99 120.975 960.622 120.975C903.842 120.975 856.351 140.334 818.256 179.059C780.154 217.79 761.126 266.81 761.126 326C761.126 385.19 780.154 434.21 818.256 472.941C856.351 511.666 903.842 531.025 960.622 531.025C1017.99 531.025 1065.49 511.672 1102.99 472.941C1141.09 434.21 1160.12 385.19 1160.12 326C1160.12 266.81 1141.09 217.79 1102.99 179.059ZM2042.21 627.239C2040.04 636.097 2039.04 640.087 2036.85 643.033C2034.88 645.684 2032.24 647.76 2029.19 649.044C2025.81 650.471 2021.7 650.5 2012.58 650.5H1893.03C1888.3 650.5 1884.84 650.499 1882.08 650.293C1879.33 650.088 1877.38 649.686 1875.68 648.936C1872.54 647.557 1869.85 645.334 1867.9 642.514C1866.84 640.981 1866.08 639.142 1865.36 636.486C1864.63 633.811 1863.97 630.411 1863.08 625.771L1774.62 166.676C1773.94 163.149 1770.85 160.599 1767.26 160.599C1763.67 160.599 1760.58 163.149 1759.9 166.676L1671.44 625.771C1670.54 630.411 1669.89 633.811 1669.16 636.486C1668.44 639.142 1667.68 640.981 1666.62 642.514C1664.67 645.334 1661.98 647.557 1658.84 648.936C1657.13 649.686 1655.18 650.088 1652.44 650.293C1649.68 650.499 1646.21 650.5 1641.49 650.5H1521.94C1512.82 650.5 1508.7 650.471 1505.32 649.044C1502.28 647.76 1499.64 645.684 1497.67 643.033C1495.48 640.087 1494.47 636.097 1492.31 627.239L1348.65 39.2388C1346.99 32.4595 1345.77 27.4706 1345.17 23.5108C1344.57 19.5624 1344.61 16.8101 1345.34 14.471C1346.69 10.1623 1349.57 6.49571 1353.43 4.16221C1355.53 2.89547 1358.19 2.20549 1362.17 1.85394C1366.16 1.50138 1371.3 1.5 1378.28 1.5H1444.16C1448.76 1.5 1452.13 1.50093 1454.82 1.69865C1457.5 1.89499 1459.4 2.2802 1461.08 2.99984C1464.16 4.32277 1466.83 6.45875 1468.79 9.17924C1469.85 10.6591 1470.65 12.4351 1471.42 15.0025C1472.2 17.588 1472.93 20.8757 1473.93 25.3642L1545.12 344.705L1545.13 344.779C1549.64 365.025 1553.05 380.295 1556.25 391.051C1557.85 396.436 1559.42 400.757 1561.08 404.036C1562.73 407.291 1564.55 409.686 1566.75 411.006C1573.56 415.094 1582.07 415.094 1588.88 411.006C1591.08 409.686 1592.9 407.291 1594.55 404.036C1596.21 400.757 1597.78 396.436 1599.38 391.051C1602.58 380.296 1605.98 365.029 1610.49 344.785L1610.51 344.705L1681.69 25.3642C1682.69 20.8758 1683.43 17.5881 1684.21 15.0025C1684.98 12.4351 1685.77 10.6591 1686.84 9.17923C1688.8 6.45875 1691.46 4.32277 1694.55 2.99983C1696.22 2.2802 1698.13 1.89499 1700.8 1.69865C1703.5 1.50093 1706.86 1.5 1711.46 1.5H1823.05C1827.65 1.5 1831.02 1.50093 1833.71 1.69865C1836.39 1.89499 1838.29 2.2802 1839.97 2.99983C1843.05 4.32277 1845.72 6.45875 1847.68 9.17923C1848.75 10.6591 1849.54 12.4351 1850.31 15.0025C1851.09 17.588 1851.82 20.8757 1852.82 25.3642L1924.01 344.705L1924.03 344.795C1928.54 365.034 1931.94 380.298 1935.14 391.051C1936.74 396.436 1938.31 400.757 1939.97 404.036C1941.62 407.291 1943.44 409.686 1945.64 411.006C1952.45 415.094 1960.96 415.094 1967.77 411.006C1969.97 409.686 1971.79 407.291 1973.44 404.036C1975.1 400.757 1976.67 396.436 1978.27 391.051C1981.47 380.298 1984.87 365.033 1989.38 344.794L1989.4 344.705L2060.59 25.3642C2061.59 20.8757 2062.32 17.588 2063.1 15.0025C2063.87 12.4351 2064.66 10.6591 2065.73 9.17926C2067.69 6.45875 2070.36 4.32277 2073.44 2.99983C2075.12 2.2802 2077.02 1.89499 2079.69 1.69865C2082.39 1.50093 2085.76 1.5 2090.35 1.5H2156.24C2163.22 1.5 2168.35 1.50138 2172.34 1.85394C2176.32 2.20549 2178.99 2.89547 2181.09 4.1622C2184.95 6.4957 2187.83 10.1622 2189.18 14.4711C2189.91 16.81 2189.95 19.5624 2189.35 23.5108C2188.74 27.4706 2187.53 32.4596 2185.87 39.2388L2042.21 627.239Z'
            fill='#FAFFFD' stroke='#080708' stroke-width='3' />
        </svg>
        <h1 ref='wowTitle'>{{ services.wow.heading }}</h1>
      </div>
      <div class='container'>
        <div ref='wowMarquee' class='translate'>
          <div class='marquee'>
            <span class='clipped-text'>{{ services.wow.marquee }}</span>
            <span class='clipped-text'>{{ services.wow.marquee }}</span>
          </div>

        </div>
        <translate-wrapper start='center'>
          <div class='desc row'>
            <h5 v-html='services.wow.desc1'></h5>
            <h5 v-html='services.wow.desc2'></h5>
          </div>
        </translate-wrapper>
        <div class='block-1'>
          <translate-wrapper start='center'>
            <h2 v-html='services.wow.block1.title'></h2>
          </translate-wrapper>

          <div class='row'>
            <div v-for='item in services.wow.block1.cards' :key='item.text' class='card'>
              <translate-wrapper start='center'>
                <s-svg :name='`abstract-${item.id}`' />
              </translate-wrapper>
              <translate-wrapper :delay='0.5'>
                <h4 v-html='item.text'></h4>
              </translate-wrapper>
            </div>
          </div>
        </div>
        <translate-wrapper start='center'>
          <div class='text'>
            <client-only>
              <p class='inline'>
                <b v-html='services.wow.bigText.text1'></b>
                <span><s-line
                  :scroll='true'
                  :delay='0.5'
                  line='line-3'
                />{{ services.wow.bigText.line1 }}</span>
                <b v-html='services.wow.bigText.text2'></b>
                <span>{{ services.wow.bigText.line2 }}<s-line
                  :scroll='false'
                  :delay='1'
                  line='line-4'
                /></span>
                <b v-html='services.wow.bigText.text3'></b>
                <span>
              <div v-html='services.wow.bigText.line3'></div>
              <s-line
                :scroll='false'
                :delay='1.5'
                line='line-5'
                class='special'
              />
              </span>
              </p>
            </client-only>
          </div>
        </translate-wrapper>
        <div class='block-2'>
          <translate-wrapper start='center'>
            <h2 v-html='services.wow.block2.title'></h2>
          </translate-wrapper>
          <div class='row'>
            <div ref='card1' class='card'>
              <translate-wrapper start='center'>
                <s-svg name='abstract-7' />
              </translate-wrapper>
              <span ref='span1'></span>
              <translate-wrapper start='center' :delay='0.9'>
                <h4 v-html='services.wow.block2.card1.title'></h4>
                <h5 v-html='services.wow.block2.card1.desc'></h5>
              </translate-wrapper>
            </div>
            <div class='card'>
              <translate-wrapper start='center' :delay='0.3'>
                <s-svg name='abstract-6' />
              </translate-wrapper>
              <span ref='span2'>
              </span>
              <s-line :line='"dotted"' :scroll='true' :delay='1.2' />
              <translate-wrapper start='center' :delay='1.2'>
                <h4 v-html='services.wow.block2.card2.title'></h4>
                <h5 v-html='services.wow.block2.card2.desc'></h5>
              </translate-wrapper>
            </div>
            <div class='card'>
              <translate-wrapper start='center' :delay='0.6'>
                <s-svg name='abstract-5' />
              </translate-wrapper>
              <span ref='span3'></span>
              <translate-wrapper start='center' :delay='1.5'>
                <h4 v-html='services.wow.block2.card3.title'></h4>
                <h5 v-html='services.wow.block2.card3.desc'></h5>
              </translate-wrapper>
            </div>
          </div>
        </div>
        <div class='block-3'>
          <div ref='circleList' class='circle-list circle-list1'>
            <div ref='circle4' class='circle-item' />
            <div ref='circle3' class='circle-item' />
            <div ref='circle2' class='circle-item' />
            <div ref='circle1' class='circle-item' />
            <s-svg name='icon-1' />
            <s-svg name='icon-2' />
            <s-svg name='icon-3' />
            <s-svg name='icon-4' />
            <s-svg name='icon-5' />
            <s-svg name='logo-top' />
          </div>
          <div class='row'>
            <translate-wrapper start='center'>
              <h4 v-html='services.wow.block3.title'></h4>
            </translate-wrapper>
            <translate-wrapper start='center' :delay='0.5'>
              <h5 v-html='services.wow.block3.desc'></h5>
            </translate-wrapper>
          </div>
        </div>
        <div class='block-4'>
          <div ref='circleWow' class='circle-list circle-list2'>
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item' />
            <div class='circle-item'>
              <div class='inner-circle'></div>
              <div ref='greenCircle' class='circle'></div>
            </div>

          </div>
          <div ref='wowFactor' class='wow-factor'>
            <h2 v-html='services.wow.block4.title'></h2>
            <h4 v-html='services.wow.block4.desc'></h4>
          </div>
        </div>
        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3 v-html='services.wow.cta.title'></h3>
              <s-button color='green' @click='openDiscuss'>{{ services.wow.cta.button }}</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='branding'>
      <div class='container'>
        <div class='heading'>
          <translate-wrapper start='center'>
            <h2 v-html='services.branding.heading.title'></h2>
          </translate-wrapper>
          <translate-wrapper start='center' :delay='0.3'>
            <h4 v-html='services.branding.heading.desc'></h4>
          </translate-wrapper>
          <translate-wrapper start='center' :delay='0.6'>
            <h3 v-html='services.branding.heading.subtitle'></h3>
          </translate-wrapper>
        </div>
        <div id='brandingBlock' class='block-1'>
          <div v-for='item in services.branding.cards' :key='item.title' class='card'>
            <s-svg :ref='`branding${item.id}`' :name='`branding-${item.id}`' />
            <translate-wrapper start='center'>
              <h3 v-html='item.title'></h3>
              <h5 v-html='item.desc'></h5>
            </translate-wrapper>
          </div>
        </div>
        <s-animation name='slide' :count-item='6'>
          <template #item>
            <div class='card'>
              <h3 v-html='services.branding.cta.title'></h3>
              <s-button color='green' @click='openDiscuss'>{{ services.branding.cta.button }}</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
    <div id='rendering'>
      <div class='container'>
        <div class='heading'>
          <translate-wrapper start='center'>
            <h2 v-html='services.rendering.heading.title'></h2>
          </translate-wrapper>
          <translate-wrapper start='center' :delay='0.3'>
            <h4 v-html='services.rendering.heading.desc'></h4>
          </translate-wrapper>
        </div>
        <div ref='rendering' class='block-1'>
          <div class='post-list'>
            <div class='post-item'>
              <translate-wrapper
                v-for='(item, index) in services.rendering.block1.posts'
                :key='item.title' start='center'>
                <div
                  v-if='index === 0 ? animations.activeRender < 3: index === 1 ? animations.activeRender < 6 && animations.activeRender >= 3 : animations.activeRender >= 6'>
                  <h3 v-html='item.title'></h3>
                  <h5 v-html='item.desc'></h5>
                </div>
              </translate-wrapper>
            </div>
          </div>
          <div class='render'>
            <nuxt-picture src='/images/services/render.png' />
            <div class='render-list' :style='maskPosition'>

              <nuxt-img src='/images/services/rendered.png' />
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
              <h3 v-html='services.rendering.cta.title'></h3>
              <s-button color='green' @click='openDiscuss'>{{ services.rendering.cta.button }}</s-button>
            </div>
          </template>
        </s-animation>
      </div>
    </div>
  </div>
</template>

<script>
import NavLinks from '../components/NavLinks'
import SSvg from '../components/ui/SSvg'
import SAnimation from '../components/SAnimation/SAnimation'
import SButton from '../components/ui/SButton'
import MarkerIcon from '../components/MarkerIcon'
import SLine from '../components/SLine'
import TranslateWrapper from '../components/TranslateWrapper'

export default {
  name: 'Services',
  components: { TranslateWrapper, SButton, SAnimation, SSvg, NavLinks, MarkerIcon, SLine },
  async asyncData(context) {
    const lang = context.store.state.lang
    const services = await context.$content(`services${lang === 0 ? '' : '_ru'}`).fetch()
    return { services }
  },
  data() {
    return {
      active: 0,
      tlBorders: null,
      tlMap: null,
      tlRender: null,
      tlPropertyImages: null,
      tlSpinnerImages: null,
      tlWow: null,
      tlWowMarquee: null,
      tlSpans: null,
      tlCircle: null,
      tlRupor: null,
      tlBranding1: null,
      tlBranding2: null,
      tlBranding3: null,
      animations: {
        active: false,
        currentMap: 1,
        activeRender: 0
      }
    }
  },
  computed: {
    maskPosition() {
      const maskArr = ['46% 31%', '55% 31%', '46% 47.5%', '55% 47.5%', '64.05% 47.5%', '55% 64%']
      let arr = ''
      for (let i = 0; i <= this.animations.activeRender; i++) {
        arr = arr + maskArr[i] + ','
      }
      arr = arr.slice(0, -1)
      return `-webkit-mask-position: ${arr}; mask-position: ${arr};`
    }
  },
  watch: {
    '$store.state.currentServiceId'(value) {
      this.goTo(value)
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
    this.animateBorders()
    this.animateProperty()
    this.animateSpinner()
    this.animateWow()
    this.animateWowMarquee()
    this.animateSpans()
    this.animateCircle()
    this.animateRupor()
    this.animateBranding()
    setTimeout(() => {
      const tlArr = [this.tlBranding1, this.tlBranding2, this.tlBranding3, this.tlRupor, this.tlMap, this.tlRender, this.tlBorders, this.tlPropertyImages, this.tlSpinnerImages, this.tlWow, this.tlSpans, this.tlCircle]
      for (const item of tlArr) {
        item.scrollTrigger.refresh()
      }
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
    animateBranding() {
      if (process.client) {
        this.tlBranding1 = this.gsap.timeline({
          scrollTrigger: {
            trigger: document.querySelector('#brandingBlock').querySelectorAll('.card')[0].querySelector('.s-svg'),
            start: 'center bottom'
          }
        })
        this.tlBranding1.from(document.querySelector('#brandingBlock').querySelectorAll('.card')[0].querySelector('.s-svg'), {
          opacity: 0,
          scale: 0,
          duration: 1.5,
          clearProps: 'all'
        })
        this.tlBranding2 = this.gsap.timeline({
          scrollTrigger: {
            trigger: document.querySelector('#brandingBlock').querySelectorAll('.card')[1].querySelector('.s-svg'),
            start: 'center bottom'
          }
        })
        this.tlBranding2.from(document.querySelector('#brandingBlock').querySelectorAll('.card')[1].querySelector('.s-svg'), {
          opacity: 0,
          scale: 0,
          duration: 1.5,
          clearProps: 'all'
        })
        this.tlBranding3 = this.gsap.timeline({
          scrollTrigger: {
            trigger: document.querySelector('#brandingBlock').querySelectorAll('.card')[2].querySelector('.s-svg'),
            start: 'center bottom'
          }
        })
        this.tlBranding3.from(document.querySelector('#brandingBlock').querySelectorAll('.card')[2].querySelector('.s-svg'), {
          opacity: 0,
          scale: 0,
          duration: 1.5,
          clearProps: 'all'
        })
      }
    },
    animateRupor() {
      if (process.client) {
        const circles = document.querySelector('.circle-list2').querySelectorAll('.circle-item')
        this.tlRupor = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.circleWow,
            start: 'center bottom'
          }
        })
        this.tlRupor.from(circles, {
          scale: 0,
          opacity: 0,
          duration: 1.5
        })
          .to(this.$refs.greenCircle, {
            left: '100%',
            duration: 2.5
          }, '<1')
          .from(this.$refs.wowFactor, {
            x: '-20%',
            opacity: 0,
            duration: 1.5
          }, '<')
      }
    },
    animateCircle() {
      if (process.client) {
        const icons = document.querySelector('.circle-list1').querySelectorAll('.s-svg')
        this.tlCircle = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.circleList,
            start: 'center bottom'
          }
        })
        this.tlCircle.from([this.$refs.circle1, this.$refs.circle2, this.$refs.circle3, this.$refs.circle4], {
          opacity: 0,
          scale: 0,
          stagger: 0.1,
          duration: 2,
          y: '-20%'
        })
          .from(icons[5], {
            opacity: 0,
            duration: 0.5
          }, '<')
          .from([icons[0], icons[1], icons[2], icons[3], icons[4]], {
            opacity: 0,
            y: '30%',
            duration: 1.5
          }, '<0.8')
      }
    },
    animateSpans() {
      this.tlSpans = this.gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.card1,
          start: 'center bottom'
        }
      })
      this.tlSpans.from([this.$refs.span1, this.$refs.span2, this.$refs.span3], {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center',
        duration: 1,
        stagger: 0.3,
        delay: 1.5
      })
    },
    animateWowMarquee() {
      if (process.client) {
        const marquee = document.querySelectorAll('.clipped-text')
        const self = this
        setTimeout(function() {
          marquee.forEach(el => {
            // set a default rate, the higher the value, the faster it is
            const rate = 200
            // get the width of the element
            const distance = el.clientWidth
            // get the margin-right of the element
            const style = window.getComputedStyle(el)
            const marginRight = parseInt(style.marginRight) || 0
            // get the total width of the element
            const totalDistance = distance + marginRight
            // get the duration of the animation
            // for a better explanation, see the quoted codepen in the first comment
            const time = totalDistance / rate
            // get the parent of the element
            const container = el.parentElement

            self.gsap.to(container, time, {
              repeat: -1,
              x: '-' + totalDistance,
              ease: 'linear'
            })
          })
        }, 3000)

        // this.tlWowMarquee = this.gsap.timeline({
        //   scrollTrigger: {
        //     trigger: this.$refs.wowMarquee,
        //     start: 'bottom bottom',
        //     end: 'top top',
        //     toggleActions: 'start pause reverse pause',
        //     scrub: 1
        //   }
        // })
        // this.tlWowMarquee.to(this.$refs.wowMarquee, {
        //   x: '-84%'
        // })
      }
    },
    animateWow() {
      if (process.client) {
        this.tlWow = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.wowSvg,
            start: 'center bottom'
          }
        })
        this.tlWow.from([this.$refs.wowSvg, this.$refs.wowTitle], {
          scale: 5,
          opacity: 0,
          duration: 2,
          stagger: 0.5
        })
      }
    },
    animateSpinner() {
      if (process.client) {
        this.tlSpinnerImages = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.spinnerImage1,
            start: 'center bottom'
          }
        })
        this.tlSpinnerImages.from([document.querySelector('#spinnerImage1'), document.querySelector('#spinnerImage3'), document.querySelector('#spinnerImage2')],
          {
            duration: 1.5,
            opacity: 0,
            stagger: 0.4,
            // eslint-disable-next-line object-shorthand
            y(i) {
              let percent = 200
              if (i > 0) {
                percent = 100
              }
              return `${percent}px`
            },
            clearProps: 'all'
          })
      }
    },
    animateProperty() {
      if (process.client) {
        this.tlPropertyImages = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.propertyImages,
            start: 'center bottom'
          }
        })
        this.tlPropertyImages.from([this.$refs.propertyImages, this.$refs.secondPropertyImage.$el], {
          duration: 1.5,
          opacity: 0,
          stagger: 0.2,
          y: '20%',
          clearProps: 'all'
        })
      }
    },
    animateBorders() {
      if (process.client) {
        this.tlBorders = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.border1,
            start: 'center bottom'
          }
        })
        this.tlBorders.from([this.$refs.border2, this.$refs.border1],
          {
            duration: 1.5,
            stagger: 0.6,
            opacity: 0,
            scale: 0.8
          })
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
            start() {
              return window.innerWidth > 600 ? 'center bottom' : 'center bottom-=300px'
            },
            end: 'center top',
            scrub: 1,
            toggleActions: 'play pause resume reverse'
          }
        })
        this.tlRender.to(this.animations, { activeRender: 9, duration: 15 })
      }
    },
    animateMap() {
      if (process.client) {
        this.tlMap = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.interactiveMap,
            pin: this.$refs.interactiveMap,
            start() {
              return `top top+=${window.innerWidth > 600 ? 170 : 140}px`
            },
            end: '6000px',
            scrub: 1,
            snap: {
              snapTo: 'labelsDirectional',
              duration: { min: 0.2, max: 1 }
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
  @media (max-width: 1680px) {
    height: 227px;
  }
  @media (max-width: 700px) {
    padding-top: 95px;
    height: 180px;
  }
}
</style>
