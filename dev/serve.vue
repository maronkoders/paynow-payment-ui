<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { PaynowPaymentUiSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  PaynowPaymentUiSample,
  // }
});
</script>

<template>
  <div id="app">
    <paynow-payment-ui-sample />
  </div>
</template>
