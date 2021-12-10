<template>
  <div class='modal-form'>
    <div v-if='home.cardDataModal' class='container'>
      <h3 :class='{last: activeStep === 3}'>{{home.form.title}}</h3>
      <div class='close' @click='close'>
        <img src='~/assets/images/svg/close-modal.svg' alt=''>
      </div>
      <div class='checkCards'>
        <div v-show='activeStep + 1 === home.cardDataModal[0].id' class='card'>
          <p v-if='home.cardDataModal'>{{home.form.step}} {{ home.cardDataModal[0].id }} {{home.form.of}} {{ home.cardDataModal.length }}</p>
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
          <select id='select' v-model='cardDataModel[`step_${home.cardDataModal[0].id}`]' name='checkbox' @change='
                  next(home.cardDataModal[0].id)'>
            <option value='' disabled selected>{{ home.cardDataModal[0].selectPlaceholder }}</option>
            <option v-for='iitem in home.cardDataModal[0].checkList' :key='iitem' :name='`radio-${_uid}`'
                    :value='iitem'>{{ iitem }}
            </option>
          </select>
        </div>
        <div v-show='activeStep + 1 === home.cardDataModal[1].id' class='card'>
          <s-button
            icon='arr-back'
            icon-position='left'
            size='small'
            @click='next(0)'
          >
            {{home.form.back}}
          </s-button>
          <p v-if='home.cardDataModal'>{{home.form.step}} {{ home.cardDataModal[1].id }} {{home.form.of}} {{ home.cardDataModal.length }}</p>
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
          <select id='select' v-model='cardDataModel[`step_${home.cardDataModal[1].id}`]' name='checkbox' @change='
                  next(home.cardDataModal[1].id)'>
            <option value='' disabled selected>{{ home.cardDataModal[1].selectPlaceholder }}</option>
            <option v-for='iitem in home.cardDataModal[1].checkList' :key='iitem' :name='`radio-${_uid}`'
                    :value='iitem'>{{ iitem }}
            </option>
          </select>
        </div>
        <div v-show='activeStep + 1 === home.cardDataModal[2].id' class='card'>
          <s-button
            icon='arr-back'
            icon-position='left'
            size='small'
            @click='next(1)'
          >
            {{home.form.back}}
          </s-button>
          <p v-if='home.cardDataModal'>{{home.form.step}} {{ home.cardDataModal[2].id }} {{home.form.of}} {{ home.cardDataModal.length }}</p>
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
          <select id='select' v-model='cardDataModel[`step_${home.cardDataModal[2].id}`]' name='checkbox' @change='
                  next(home.cardDataModal[2].id)'>
            <option value='' disabled selected>{{ home.cardDataModal[2].selectPlaceholder }}</option>
            <option v-for='iitem in home.cardDataModal[2].checkList' :key='iitem' :name='`radio-${_uid}`'
                    :value='iitem'>{{ iitem }}
            </option>
          </select>
        </div>
        <div v-if='activeStep === 3' class='card'>

          <div class='row'>
            <div class='col'>
              <s-button
                icon='arr-back'
                icon-position='left'
                size='small'
                @click='next(2)'
              >
                {{home.form.back}}
              </s-button>
              <p v-if='home.cardDataModal' class='lastFormP'>{{home.form.lastStep}}</p>
              <h3 class='lastForm'>{{ home.cardDataModal[3].title }}</h3>
            </div>
            <div class='col'>
              <div class='row form'>
                <div class='col'>
                  <s-input
                    ref='name'
                    v-model='cardDataModel.name'
                    :error='$v.cardDataModel.name'
                    :label='home.form.name'
                  />
                  <s-input
                    ref='email'
                    v-model='cardDataModel.email'
                    :error='$v.cardDataModel.email'
                    :label='home.form.email'
                  />
                  <s-input
                    ref='phone'
                    v-model='cardDataModel.phone'
                    :error='$v.cardDataModel.phone'
                    :label='home.form.phone'
                  />

                </div>
                <div class='col'>
                  <s-textarea v-model='cardDataModel.message'
                              :label='home.form.text' />
                </div>
                <s-button
                  color='green'
                  f-width
                  @click='formSending === false ? sendForm() : ""'
                >
                  {{home.form.send}}
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
import { sha256 } from 'js-sha256';
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
      formSending: false,
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
      this.$gtag("event", "next_step_form")
      this.$yandexMetrika.reachGoal("next_step_form")
    },
    close() {
      this.$store.dispatch('setProject', false)
    },
    async sendForm() {
      this.formSending = true
      const eventId = new Date().getTime() + (Math.random() * 100000000).toFixed(0)
      let ip = '0.0.0.0'
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
      this.$v.$touch()
      this.$refs.email.setErrorMessage()
      this.$refs.name.setErrorMessage()
      this.$refs.phone.setErrorMessage()
      if (this.$v.$invalid === false) {
        let resp = ''
        try {
          let date = new Date();
          date = date.toString();
          resp = await this.$axios.post(
            "https://api.hsforms.com/submissions/v3/integration/submit/20385541/a84b98ca-128e-4793-91e3-66cf46eb5791",
            {
              submittedAt: new Date(),
              fields: [
                {
                  name: "email",
                  value: this.cardDataModel.email,
                },
                {
                  name: "firstname",
                  value: this.cardDataModel.name,
                },
                {
                  name: "phone",
                  value: this.cardDataModel.phone,
                },
                {
                  name: "message",
                  value: this.cardDataModel.message,
                },
                {
                  name: "step_1",
                  value: this.cardDataModel.step_1
                },
                {
                  name: "step_2",
                  value: this.cardDataModel.step_2
                },
                {
                  name: "step_3",
                  value: this.cardDataModel.step_3
                }
              ],
              context: {
                hutk: document.cookie.replace(
                  /(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$|^.*$/,
                  "$1"
                ),
                pageUri: location.href.replace(/https?:\/\//i, ""),
                pageName: "Archimatika Modal",
              },
            }
          );
        }
        catch (e) {
          console.log(resp)
          await this.$store.dispatch('setToastMessage', {title: this.home.form.error.title, desc: resp.status === "error" ? this.$store.state.lang === 0 ? 'Email is invalid' : 'Перепроверьте правильность email адреса': e.toString().replace('Error: ', '')})
          await this.$store.dispatch('setToast', 'error')
          this.$gtag("event", "form_send_error")
          this.$yandexMetrika.reachGoal("form_send_error")
          this.formSending = false
          return
        }
        this.$fb.query('track','formSend', {eventID: eventId})
        try {
          ip = await this.$axios.get('https://api.ipify.org')
          ip = ip.data
        }
        catch (e) {
          this.formSending = false
        }

        try {
          await this.$axios.post('https://graph.facebook.com/v12.0/392905819261214/events?access_token=EAAEf2aUHnsQBAKo3ftFgY3zEZAizZBvs52va9m7p6PMdHn7NrIz9LPOSm6hNjU8WX4qT4v9mjL94HEDATEhhEm4ij6wZCnY8TRiQZBwN8XjNYNZBDjx9pZC4ivX2rMFODW7UB5ZAb4o4PGSjFsCi3dAwhHJZBhCulupLeyjRZBqTRe3AXsYQzYTkZA', {
            data: [{'event_name': 'formSend',
              'event_time': (new Date().getTime() / 1000).toFixed(0),
              "event_id": eventId.toString(),
              "user_data": {
                "em": [sha256(this.cardDataModel.email)],
                "ph": [sha256(this.cardDataModel.phone)],
                "client_user_agent": window.clientInformation.userAgent,
                "fbp": getCookie("_fbp") ? getCookie("_fbp") : "",
                "fbc": getCookie("_fbc") ? getCookie("_fbc") : "",
                "client_ip_address": ip,
                "fn": [sha256(this.cardDataModel.name)]
              },
              "event_source_url": window.location.href,
              "action_source": "website"
            }]})
        }
        catch(e) {
          this.formSending = false
        }
        this.cardDataModel.step_1 = ''
        this.cardDataModel.step_2 = ''
        this.cardDataModel.step_3 = ''
        this.cardDataModel.name = ''
        this.cardDataModel.email = ''
        this.cardDataModel.phone = ''
        this.cardDataModel.message = ''
        await this.$store.dispatch('setToastMessage', {title: this.home.form.success.title, desc: this.home.form.success.desc})
        await this.$store.dispatch('setToast', 'ok')
        this.$gtag("event", "form_sent")
        this.$yandexMetrika.reachGoal("form_sent")
        this.formSending = false
      }
      else {
        await this.$store.dispatch('setToastMessage', {title: this.home.form.warning.title, desc: this.home.form.warning.desc})
        await this.$store.dispatch('setToast', 'warn')
        this.$gtag("event", "form_not_filled")
        this.$yandexMetrika.reachGoal("form_not_filled")
        this.formSending = false
      }
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
    justify-content: center;
    min-height: min(var(--app-height), 100vh);
    height: 100%;
    @media (max-width: 600px) {
      max-width: calc(100% - 80px);
    }
    @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
      max-width: calc(100% - 80px);
    }

    .close {
      position: absolute;
      top: 3%;
      right: 0;
      cursor: pointer;
      @media (min-width: 1680px) {
        top: 10%;
      }
    }

    h3.last {
      @media (max-width: 600px) {
        display: none;
      }
      @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
        display: none;
      }
    }

    h3.lastForm {
      @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
        display: none;
      }
    }
    p.lastFormP {
      @media (max-width: 600px) {
        display: none;
      }
    }

    .checkCards {
      @media (max-device-pixel-ratio: 1) {
        overflow: auto;
      }
      @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
        overflow: auto;
      }

      .card {
        margin-top: 100px;
        @media (max-width: 1120px) {
          margin-top: 50px;
        }
        @media (max-width: 600px) {
          margin-top: 30px;
        }
        @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
          margin-top: 30px;
        }

        select {
          display: none;
          @media (max-width: 1024px) {
            margin-top: 30px;
            width: 100%;
            border: 0;
            border-bottom: 2px solid #080708;
            border-radius: 0;
            -webkit-appearance: none;
            background-color: #FAFFFD;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFJSURBVHgB7dvpicMwEEBhlaIStvNsBy5pS8jayw4xwY5GPud4H+hPIELzIIeDUwoAAAAAAAAAAEBedVzDuH7G9RzX4/+xLGrZMX+dPXG+pse+SnzTjGvzV80Gj4UnZ4m4Fk/WoNnk2VhRI7biyexNrU0iRtTEk9U0KDeKErEn3rdmw9qxofeIPfHUHyJbNvYY8fQZI0e8bLaIES+fKVLE22aJEPH2GTxHNHN2jxHNndlTRLNn9RDR/BktH9DNq8TiQd29T1s6sNtvChYO7v676p0DhLlaumOQcNfrVw4U8ceOP1cMFjaeOHPA8PHEGYOmiSeOHDhdPHHE4GnjiT0B0scTW0IQ701vEOIt6IlIvBVHRUwZT+yNmDqe2BqReDO9EYm3QBuReB+0IhJP4dNN3sRTquV1s/sUbii5/mYBAAAAAAAAAABgyi9xSfwuoIsD2AAAAABJRU5ErkJggg==');
            background-position: right center;
            background-repeat: no-repeat;
            padding-right: 2em;
            background-size: contain;
            padding-bottom: 9px;
            color: rgba(8, 7, 8, 0.5);
            padding-left: 10px;
          }
          @media (max-width: 600px) {
            display: block;
          }
          @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
            display: block;
            max-width: 522px;
          }

          option {
            font-family: Gilroy, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
          }
        }

        .row {
          & > .col:nth-child(1) {
            max-width: 600px;
            margin-right: 50px;
            @media (max-width: 1120px) {
              max-width: 50%;
              margin-right: 30px;
            }
            @media (max-width: 600px) {
              margin-right: 0;
              max-width: 100%;
            }
            @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
              margin-right: 0;
              max-width: 100%;
            }

            .s-input {
              margin-bottom: 50px;
              @media (max-width: 1120px) {
                margin-bottom: 30px;
              }
              @media (max-width: 600px) {
                margin-bottom: 25px;
              }
              @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
                margin-bottom: 20px;
              }
            }
          }

          .col:nth-child(2) {
            width: calc(100% - 650px);
            @media (max-width: 1120px) {
              width: calc(50% - 50px);
            }
            @media (max-width: 600px) {
              width: 100%;
            }
            @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
              width: 100%;
            }
          }

          .form {
            .col {
              width: calc(50% - 25px);
              @media (max-width: 1120px) {
                width: 100%;
                max-width: 100%;
                margin-right: 0;
              }
              @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
                width: calc(50% - 25px);
                margin-right: 25px;
              }

              .s-textarea {
                height: calc(100% - 50px);
                @media (max-width: 1120px) {
                  height: 50px;
                  margin-bottom: 30px;
                }
                @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
                  height: calc(100% - 20px);
                }
              }
            }

            .s-button {
              @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
                margin-left: auto;
                width: 50%;
              }
            }
          }
        }
      }

      .s-button {
        margin-bottom: 50px;
        &.s-button-green {
          font-size: 18px;
        }
        @media (max-width: 600px) {
          margin-bottom: 20px;
          width: 120px;
          height: 40px;
          font-size: 14px;
          &.s-button-full-width {
            width: 100%;
          }
        }
        @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
          margin-bottom: 20px;
          width: 160px;
          height: 40px;
        }

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
        @media (max-width: 600px) {
          margin-bottom: 30px;
        }
        @media (max-width: 375px) {
          margin-bottom: 15px;
        }
        @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
          margin-bottom: 15px;
        }
      }

      h3 {
        margin-bottom: 10px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;
        max-width: 1076px;
        @media (max-width: 600px) {
          display: none;
        }
        @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
          display: none;
        }

        li {
          margin-right: 20px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
.ru {
  .modal-form{
    .container{
      .checkCards {
        .s-button-size-small {
          @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
            width: 170px;
            max-width: 170px;
          }
          @media (max-width: 600px) {
            width: 130px;
            max-width: 130px;
          }
        }
      }
    }
  }
}
</style>
