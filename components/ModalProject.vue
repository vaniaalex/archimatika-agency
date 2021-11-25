<template>
  <div class='modal-form'>
    <div v-if='home.cardDataModal' class='container page'>
      <h3>Start a project</h3>
      <div class='close' @click='close'>
        <img src='~/assets/images/svg/close-modal.svg' alt=''>
      </div>
      <div class='checkCards'>
        <div v-show='activeStep + 1 === home.cardDataModal[0].id' class='card'>
          <p v-if='home.cardDataModal'>Step {{ home.cardDataModal[0].id }} of {{ home.cardDataModal.length }}</p>
          <h3>{{ home.cardDataModal[0].title }}</h3>
          <h5 v-if='home.cardDataModal[0].subTitle'>{{ home.cardDataModal[0].subTitle }}</h5>
          <ul>
            <li v-for='iitem in home.cardDataModal[0].checkList' :key='iitem'>
              <SRadio v-model='cardDataModel[`step_${home.cardDataModal[0] + 1}`]'
                      :name='`radio-${_uid}`'
                      :label='iitem'
                      :value='iitem'
                      @change='
               cardDataModel.step_1 = iitem;
               next(home.cardDataModal[0].id)
              '></SRadio>
            </li>
          </ul>
        </div>
        <div v-show='activeStep + 1 === home.cardDataModal[1].id' class='card'>
          <s-button
            icon="arr-back"
            icon-position="left"
            size="small"
            @click="next(0)"
          >
            Back
          </s-button>
          <p v-if='home.cardDataModal'>Step {{ home.cardDataModal[1].id }} of {{ home.cardDataModal.length }}</p>
          <h3>{{ home.cardDataModal[1].title }}</h3>
          <h5 v-if='home.cardDataModal[1].subTitle'>{{ home.cardDataModal[1].subTitle }}</h5>
          <ul>
            <li v-for='iitem in home.cardDataModal[1].checkList' :key='iitem'>
              <SRadio v-model='cardDataModel[`step_${home.cardDataModal[1] + 1}`]'
                      :name='`radio-${_uid}`'
                      :label='iitem'
                      :value='iitem'
                      @change='
               cardDataModel.step_2 = iitem;
               next(home.cardDataModal[1].id)
              '></SRadio>
            </li>
          </ul>
        </div>
        <div v-show='activeStep + 1 === home.cardDataModal[2].id' class='card'>
          <s-button
            icon="arr-back"
            icon-position="left"
            size="small"
            @click="next(1)"
          >
            Back
          </s-button>
          <p v-if='home.cardDataModal'>Step {{ home.cardDataModal[2].id }} of {{ home.cardDataModal.length }}</p>
          <h3>{{ home.cardDataModal[2].title }}</h3>
          <h5 v-if='home.cardDataModal[2].subTitle'>{{ home.cardDataModal[2].subTitle }}</h5>
          <ul>
            <li v-for='iitem in home.cardDataModal[2].checkList' :key='iitem'>
              <SRadio v-model='cardDataModel[`step_${home.cardDataModal[2] + 1}`]'
                      :name='`radio-${_uid}`'
                      :label='iitem'
                      :value='iitem'
                      @change='
               cardDataModel.step_3 = iitem;
               next(home.cardDataModal[2].id)
              '></SRadio>
            </li>
          </ul>
        </div>
        <div v-if='activeStep === 3' class='card'>

          <div class='row'>
            <div class='col'>
              <s-button
                icon="arr-back"
                icon-position="left"
                size="small"
                @click="next(2)"
              >
                Back
              </s-button>
              <p v-if='home.cardDataModal'>Last step</p>
              <h3>{{ home.cardDataModal[3].title }}</h3>
            </div>
            <div class='col'>
              <div class='row form'>
                <div class='col'>
                  <s-input
                    v-model='cardDataModel.name'
                    placeholder='Enter your name'
                  />
                  <s-input
                    v-model='cardDataModel.email'
                    placeholder='Enter your email'
                  />
                  <s-input
                    v-model='cardDataModel.phone'
                    placeholder='Enter your phone number (optional)'
                  />

                </div>
                <div class='col'>
                  <s-textarea v-model='cardDataModel.message'
                              placeholder='Enter your message (optional)' />
                </div>
                <s-button
                  color='green'
                  f-width
                >
                  Submit
                </s-button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators'
import { isPhone } from '../helpers'
import SInput from './ui/SInput'
import SButton from './ui/SButton'
import SRadio from './ui/SRadio'
import STextarea from './ui/STextarea'

export default {
  name: 'ModalProject',
  components: {
    STextarea,
    SInput,
    SButton,
    SRadio
  },
  mixins: [validationMixin],
  props: {
    home: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  data() {
    return {
      activeStep: 0,
      cardDataModel: {
        step_1: '',
        step_2: '',
        step_3: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  validations: {
    cardDataModel: {
      name: { required },
      email: { email, required },
      phone: {
        phone: isPhone
      }
    }
  },
  methods: {
    next(id) {
      this.activeStep = id
    },
    close() {
      this.$store.dispatch('setProject', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.modal-form {
  width: 100vw;
  height: var(--app-height);
  background-color: $white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 101;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .close {
      position: absolute;
      top: 0;
      right: 0;
    }

    .checkCards {
      .card {
        margin-top: 100px;
        .row {
          .col:nth-child(1) {
            max-width: 600px;
            margin-right: 50px;
            .s-input {
              margin-bottom: 50px;
            }
          }
          .col:nth-child(2) {
            width: calc(100% - 650px);
          }
          .form {
            .col {
              width: calc(50% - 25px);
              .s-textarea {
                height: calc(100% - 50px);
              }
            }
          }
        }
      }
      .s-button {
        margin-bottom: 50px;
      }
      p {
        font-family: "Stolzl Display", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0;
        text-align: left;
        color: #08070880;
        margin-bottom: 50px;
      }

      h3 {
        margin-bottom: 10px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;
        max-width: 1076px;

        li {
          margin-right: 20px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
