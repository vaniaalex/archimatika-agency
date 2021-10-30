<template>
  <div class='container page'>
    <div class='title-contacts'>
      <h3>Contacts</h3>
    </div>
    <div class='contacts-block'>
      <h2>
        Let’s get down<br> to business!
      </h2>
      <h4>
        Please leave a request and schedule<br> a call less than 2 hours with one our specialists.
      </h4>
      <div class='buttons'>
        <s-button color='green'>Schedule a call</s-button>
        <s-button color='green' :border='true'>Request a proposal</s-button>
      </div>
    </div>

  </div>
</template>
<script>
import SButton from '../components/ui/SButton'
export default {
components: {
  SButton
}
}
</script>
<style lang='scss' scoped>
.title-contacts {
  margin-bottom: 82px;
}
.contacts-block {
  max-width: 739px;
  margin-left: 131px;
  h2, h4 {
    margin-bottom: 30px;
  }
  .buttons {
    display: flex;
    button:first-child {
      margin-right: 30px;
    }
  }
}
</style>
