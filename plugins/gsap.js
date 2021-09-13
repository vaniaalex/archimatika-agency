import Vue from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

CustomEase.create('customEase', '0.39, 0.01, 0, 1')
CustomEase.create('defaultEase', '0.25, 0.1, 0.25, 1')

gsap.defaults({
  // ease: 'customEase',
})

Vue.mixin({
  data() {
    return {
      gsap,
    }
  },
})
