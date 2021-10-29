import Vue from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import {CSSPlugin} from "gsap/CSSPlugin"
import {CustomEase} from "gsap/CustomEase"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(CSSPlugin)
gsap.registerPlugin(CustomEase)
gsap.defaults({
  ease: 'easeInOut',
})

Vue.mixin({
  data() {
    return {
      gsap,
    }
  },
})
