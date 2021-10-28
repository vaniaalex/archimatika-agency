import Vue from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import {CSSPlugin} from "gsap/CSSPlugin"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(CSSPlugin)

  CustomEase.create('customEase', '0.39, 0.01, 0, 1')
CustomEase.create('defaultEase', '0.25, 0.1, 0.25, 1')
CustomEase.create(
  'test',
  'M0,0 C0.054,0.165 0.004,0.65 0.116,0.666 0.228,0.682 0.503,0.229 0.572,0.31 0.592,0.333 0.085,1.109 0.106,1.128 0.172,1.19 0.659,0.548 0.778,0.526 0.886,0.505 0.418,1.073 0.432,1.194 0.445,1.32 0.939,1 1,1 '
)

gsap.defaults({
  ease: 'defaultEase',
})

Vue.mixin({
  data() {
    return {
      gsap,
    }
  },
})
