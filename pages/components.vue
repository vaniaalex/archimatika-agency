<template>
  <div class="components">
    <div class="container">
      <h3>text</h3>
      <hr />
      <h1>We are a one-stop agency for real estate developers.</h1>
      <h2>We are a one-stop agency for real estate developers.</h2>
      <h3>We are a one-stop agency for real estate developers.</h3>
      <h4>We are a one-stop agency for real estate developers.</h4>
      <h5>We are a one-stop agency for real estate developers.</h5>
      <p>
        We are a one-stop agency for real estate developers and industrial
        companies.
      </p>
      <p class="f-small">
        We are a one-stop agency for real estate developers and industrial
        companies.
      </p>
    </div>

    <h3>Button</h3>
    <hr />
    <div class="row">
      <s-button size="big" f-width>Big button</s-button>
      <s-button>Default button</s-button>
      <s-button to="/">Link button</s-button>
      <s-button icon="arr-btn">Icon button</s-button>
      <s-button icon="arr-back" icon-position="left">Icon button</s-button>
      <s-button to="/" color="blue">Blue button</s-button>
      <s-button to="/" color="green">Green button</s-button>
      <s-button to="/" color="blue" border>Blue border button</s-button>
      <s-button to="/" color="green" border>Green border button</s-button>
      <s-button icon="arr-back" icon-position="left" size="small">
        Small button
      </s-button>
    </div>
    <h3>Checkbox</h3>
    <hr />
    <h4>Radio</h4>
    <div class="row">
      <ul class="row">
        <li v-for="check in radio.listString" :key="check + 'radio'">
          <s-radio
            v-model="radio.modelString"
            name="string-radio"
            :label="check"
            :value="check"
          />
        </li>
      </ul>
      <pre style="font-size: 12px; line-height: 1">
        {{ radio.listString }}
      </pre>
      <pre style="font-size: 12px; line-height: 1">
        {{ radio.modelString }}
      </pre>
    </div>
    <div class="row">
      <ul class="row">
        <li v-for="check in radio.list" :key="check.label + 'radio'">
          <s-radio
            v-model="radio.modelObject"
            name="obj-radio"
            :label="check.label"
            :value="check"
          />
        </li>
      </ul>
      <pre style="font-size: 12px; line-height: 1">
        {{ radio.list }}
      </pre>
      <pre style="font-size: 12px; line-height: 1">
        {{ radio.modelObject }}
      </pre>
    </div>
  </div>
</template>

<script>
import SButton from '../components/ui/SButton'
import SRadio from '../components/ui/SRadio'
export default {
  components: { SRadio, SButton },
  data() {
    return {
      radio: {
        listString: [
          'Real estate',
          'Industrial process',
          'Engineering',
          'Manufacturing',
          'Oil, gas & energy',
        ],
        list: [
          {
            label: 'Real estate',
            value: 'Real estate',
          },
          {
            label: 'Industrial process',
            value: 'Industrial process',
          },
          {
            label: 'Engineering',
            value: 'Engineering',
          },
          {
            label: 'Manufacturing',
            value: 'Manufacturing',
          },
          {
            label: 'Oil, gas & energy',
            value: 'Oil, gas & energy',
          },
        ],
        modelString: 'Real estate',
        modelObject: {
          label: 'Real estate',
          value: 'Real estate',
        },
      },
    }
  },
}
</script>
<style lang="scss">
.row {
  margin-bottom: 100px;
}
</style>
