<template>
  <svg width='124' height='137' viewBox='0 0 124 137' fill='none' xmlns='http://www.w3.org/2000/svg' >
    <g filter='url(#filter0_d_1641:1233)' v-if='!active'>
      <path
        d='M39.3726 39.3417C51.8694 26.8861 72.1306 26.8861 84.6274 39.3417C97.1242 51.7972 97.1242 71.9917 84.6274 84.4472L62 107L39.3726 84.4472C26.8758 71.9917 26.8758 51.7972 39.3726 39.3417Z'
        fill='#FAFFFD' />
    </g>
    <g filter="url(#filter0_d_1647:1376)" v-if='active'>
      <path d="M39.3726 39.3417C51.8694 26.8861 72.1306 26.8861 84.6274 39.3417C97.1242 51.7972 97.1242 71.9917 84.6274 84.4472L62 107L39.3726 84.4472C26.8758 71.9917 26.8758 51.7972 39.3726 39.3417Z" fill="#FAFFFD"/>
      <path d="M40.4315 40.4041C52.3429 28.532 71.6571 28.532 83.5685 40.4041C95.4772 52.2735 95.4772 71.5154 83.5685 83.3848L62 104.882L40.4315 83.3848C28.5228 71.5154 28.5228 52.2735 40.4315 40.4041Z" stroke="#9CF50B" stroke-width="3"/>
    </g>
    <defs>
      <filter id='filter0_d_1641:1233' x='0' y='0' width='124' height='137' filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                       result='hardAlpha' />
        <feOffset />
        <feGaussianBlur stdDeviation='15' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0.611765 0 0 0 0 0.960784 0 0 0 0 0.0431373 0 0 0 0.5 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1641:1233' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1641:1233' result='shape' />
      </filter>
      <filter id="filter0_d_1647:1376" x="0" y="0" width="124" height="137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="15"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.960784 0 0 0 0 0.0431373 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1647:1376"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1647:1376" result="shape"/>
      </filter>
    </defs>
  </svg>

</template>
<script>
export default {
  props: ['active']
}
</script>
