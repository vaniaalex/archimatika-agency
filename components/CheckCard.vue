<template>
  <div class="check-card">
    <div class="check-card-heading">
      <s-button
        v-if="firstBack || index"
        icon="arr-back"
        icon-position="left"
        size="small"
        @click="$emit('prev-click', index)"
      >
        Back
      </s-button>
      <span class="check-card-steps">
        {{
          length === index + 1
            ? `Last step`
            : `Question ${index + 1} of ${length}`
        }}
      </span>
    </div>

    <div :class="[{last: length === index + 1},'check-card-content']">
      <div :class="`check-card-${getType === 'row' ? 'full' : 'left'}`">
        <div class="check-card-steps mobile">
        {{
            length === index + 1
              ? `Last step`
              : `Question ${index + 1} of ${length}`
          }}
      </div>
        <h3>{{ data.title }}</h3>
        <h5>{{ data.subTitle }}</h5>
        <ul v-if="getType === 'row'" class="checkbox-list">
          <li v-for="item in data.checkList" :key="item">
            <s-radio
              v-model="checkboxModel"
              :name="`radio-${_uid}`"
              :label="item"
              :value="item"
              @change="
                $emit('change-check', $event)
                $emit('next-click', index)
              "
            />
          </li>
        </ul>

      </div>

      <div v-if="getType === 'column'" class="check-card-right">
        <template v-if="!$slots.form">
          <h4>{{ data.checkTitle }}</h4>
          <ul class="checkbox-list">
            <li v-for="item in data.checkList" :key="item">
              <s-radio
                v-model="checkboxModel"
                :name="`radio-${_uid}`"
                :label="item"
                :value="item"
                @change="
                  $emit('change-check', $event)
                  $emit('next-click', index)
                "
              />
            </li>
          </ul>
          <select id='select' v-model='checkboxModel' name='checkbox' @change="
                  $emit('change-check', $event);$emit('next-click', index)">
            <option value='' disabled selected>{{data.selectPlaceholder}}</option>
            <option v-for='item in data.checkList' :key='item' :name='`radio-${_uid}`' :value='item'>{{item}}</option>
          </select>
<!--          <div class='buttons'>-->
<!--            <s-button-->
<!--              v-if="firstBack || index"-->
<!--              icon="arr-back"-->
<!--              icon-position="left"-->
<!--              size="small"-->
<!--              @click="$emit('prev-click', index)"-->
<!--            >-->
<!--              Back-->
<!--            </s-button>-->
<!--&lt;!&ndash;            <s-button color='green' f-width @click="checkboxModel !== '' ? $emit('next-click', index) : showAlert()">Next Question</s-button>&ndash;&gt;-->
<!--          </div>-->
        </template>

        <slot name="form" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import SButton from './ui/SButton'
import SRadio from './ui/SRadio'

export default {
  dname: 'CheckCard',
  components: { SRadio, SButton },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: null,
    },
    length: {
      type: Number,
      default: null,
    },
    firstBack: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkboxModel: '',
    }
  },
  computed: {
    getType() {
      return ['column', 'row'].find((el) => el === this.data.type) || 'column'
    },
  },
  methods: {
    showAlert() {
      console.log('not filled')
    }
  }
}
</script>

<style scoped lang="scss">
$offset: offset($container);

.check-card {
  border: 3px solid #080708;
  border-radius: 30px 0 0 30px;
  padding: 50px $offset 74px 100px;
  max-width: calc(100% - #{$offset});
  width: 100%;
  background-color: $white;
  position: absolute;
  right: 0;
  top: 0;
  border-right: 0;

  @include max-w-laptop() {
    padding: 50px offset($container_lp) 25px 100px;
    max-width: calc(100% - #{offset($container_lp)});
  }

  @include max-w-laptop_sm() {
    padding: 50px 90px 90px;
    max-width: calc(100% - #{offset($container_lp_sm)});
  }
  @media (max-width: 1080px) and (min-width: 1025px) {
    max-width: calc(100% - calc((100vw - 1000px) / 2));
  }
  @media (max-width: 1024px) {
    padding: 100px 50px 90px;
  }
  @media (max-width: 700px) {
    padding: 40px 20px 50px 40px;
  }

  h3 {
    margin-bottom: 10px;
  }

  &-heading {
    height: 120px;
    margin-bottom: 50px;
    display: flex;
    align-items: flex-end;
    position: relative;
    //@media (max-width: 1366px) {
    //  height: auto;
    //}
    @media (max-width: 1366px) {
      margin-bottom: 15px;
    }
    @media (max-width: 1024px) {
      height: auto;
      margin-bottom: 0;
    }

    .s-button {
      position: absolute;
      left: 0;
      top: 0;
      @media (max-width: 1024px) {
        &.s-button-size-small {
          max-width: 92px;
          padding: 0 10px;
          margin-right: 30px;
          width: 92px;
          top: 38px;
          z-index: 2;
        }
      }

    }
  }

  &-steps {
    font-family: Stolzl Display, sans-serif;
    @include btn_desc();
    color: opacity($black, 0.5);
    //@media (max-width: 1366px) {
    //  margin-left: auto;
    //}
    &.mobile {
      display: none;
    }
    @media (max-width: 1024px) {
      display: none;
      &.mobile {
        display: block;
        position: absolute;
        top: 0;
      }
    }
  }

  &-content {
    display: flex;
    flex-wrap: wrap;
    @include max-w-laptop_sm() {
      flex-direction: column;
    }
    @media (max-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }
    &.last {
      h3 {
        @media (max-width: 1366px) {
          margin-bottom: 0;
        }
      }
      @media (max-width: 700px) {
        h3 {
          display: none;
        }
        h5 {
          display: none;
        }
      }
    }
  }

  &-left {
    max-width: 480px;
    width: 100%;

    @include max-w-laptop_sm() {
      max-width: 620px;
    }
    @media (max-width: 1024px) {
      max-width: 268px;
      padding-top: 50px;
      position: relative;
    }
    @media (max-width: 700px) {
      max-width: 100%;
      margin-bottom: 40px;
    }

    h3 {
      margin-bottom: 50px;

      @include max-w-laptop_sm() {
        margin-bottom: 30px;
        font-size: 35px;
        line-height: 40px;
      }
      @media (max-width: 1024px) {
        margin-top: 40px;
      }
      @media (max-width: 380px) {
        font-size: 25px;
        line-height: 30px;
      }
    }
  }

  &-right {
    padding-left: 40px;
    max-width: calc(100% - 480px);
    width: 100%;

    @include max-w-laptop_sm() {
      padding-left: 0;
      margin-top: 40px;
      max-width: 100%;
    }
    @media (max-width: 1024px) {
      max-width: calc(100% - 268px - 20px);
      margin-top: 0;
    }
    @media (max-width: 700px) {
      min-width: 100%;
    }
    .buttons {
      display: none;
      @media (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        .s-button-size-small {
          max-width: 92px;
          padding: 0 10px;
          margin-right: 30px;
          width: 92px;
        }
      }
      @media (max-width: 750px) {
        .s-button-size-small {
          margin-right: 10px;
        }
      }
    }
  }

  &-full {
    max-width: 100%;
    width: 100%;
  }
  select {
    display: none;
    @media (max-width: 1024px) {
      display: block;
      margin-top: 30px;
      width: 100%;
      border: 0;
      border-bottom: 2px solid #080708;
      border-radius: 0;
      -webkit-appearance: none;
      background-color: #FAFFFD;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFJSURBVHgB7dvpicMwEEBhlaIStvNsBy5pS8jayw4xwY5GPud4H+hPIELzIIeDUwoAAAAAAAAAAEBedVzDuH7G9RzX4/+xLGrZMX+dPXG+pse+SnzTjGvzV80Gj4UnZ4m4Fk/WoNnk2VhRI7biyexNrU0iRtTEk9U0KDeKErEn3rdmw9qxofeIPfHUHyJbNvYY8fQZI0e8bLaIES+fKVLE22aJEPH2GTxHNHN2jxHNndlTRLNn9RDR/BktH9DNq8TiQd29T1s6sNtvChYO7v676p0DhLlaumOQcNfrVw4U8ceOP1cMFjaeOHPA8PHEGYOmiSeOHDhdPHHE4GnjiT0B0scTW0IQ701vEOIt6IlIvBVHRUwZT+yNmDqe2BqReDO9EYm3QBuReB+0IhJP4dNN3sRTquV1s/sUbii5/mYBAAAAAAAAAABgyi9xSfwuoIsD2AAAAABJRU5ErkJggg==');
      background-position : right center;
      background-repeat: no-repeat;
      padding-right: 2em;
      background-size: contain;
      padding-bottom: 9px;
      color: rgba(8, 7, 8, 0.5);
      padding-left: 10px;
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
  .checkbox-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;

    @include max-w-laptop_sm() {
      margin-top: 20px;
    }
    @media (max-width: 1024px) {
      display: none;
    }

    li {
      margin-right: 25px;
      margin-bottom: 25px;

      @include max-w-laptop_sm() {
        margin-right: 20px;
        margin-bottom: 20px;
        &:last-child {
          display: none;
        }
      }
    }
  }

}
</style>
