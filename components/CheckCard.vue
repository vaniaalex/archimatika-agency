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

    <div class="check-card-content">
      <div :class="`check-card-${getType === 'row' ? 'full' : 'left'}`">
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
  name: 'CheckCard',
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
}
</script>

<style scoped lang="scss">
$offset: offset($container);

.check-card {
  border: 3px solid #080708;
  border-radius: 30px 0 0 30px;
  padding: 50px $offset 100px 100px;
  max-width: calc(100% - #{$offset});
  width: 100%;
  background-color: $white;
  position: absolute;
  right: 0;
  top: 0;

  @include max-w-laptop() {
    padding: 50px offset($container_lp) 100px 100px;
    max-width: calc(100% - #{offset($container_lp)});
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

    .s-button {
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &-steps {
    font-family: Stolzl Display, sans-serif;
    @include btn_desc();
    color: opacity($black, 0.5);
  }

  &-content {
    display: flex;
    flex-wrap: wrap;
  }

  &-left {
    max-width: 480px;
    width: 100%;
    h3 {
      margin-bottom: 50px;
    }
  }

  &-right {
    padding-left: 40px;
    max-width: calc(100% - 480px);
    width: 100%;
  }

  &-full {
    max-width: 100%;
    width: 100%;
  }

  .checkbox-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;

    li {
      margin-right: 25px;
      margin-bottom: 25px;
    }
  }
}
</style>
