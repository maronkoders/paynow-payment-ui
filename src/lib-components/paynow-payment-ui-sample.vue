
<template>
  <div class="main">

      <div class="card-form">
 
      <div class="card-form__inner">

          <div class="ui_label">
          <label> 
            <strong>Paynow Payment UI</strong></label>
          </div>

        <div class="card-input">
          <label for="mobileWallet" class="card-input__label"> 
            Mobile Wallet</label>
                  <select  @change="selectedWallet($event)" v-model="mobileWallet" class="card-input__input" name="mobileWallet" id="mobileWallet">
                    <option value ="" disabled>Select</option>
                      <option v-for="(provider , index) in serviceProviders"  :key="index" :value="provider[1]">{{provider[0]}}</option>
                  </select>
        </div>
        
        <div class="card-input">
          <label for="mobileNumber" class="card-input__label"> 
           Mobile Number <span v-show="selectedCode"> ({{mobileCode}}) </span></label>
          <input type="text" id="mobileNumber" class="card-input__input"  v-model="mobileNumber" data-ref="mobileNumber" autocomplete="off">
        </div>
        <div class="card-input">
          <label for="amount" class="card-input__label">Amount </label>
          <input type="text" id="amount" class="card-input__input" v-model="amount" data-ref="amount" autocomplete="off">
        </div>
       

        <button class="card-form__button" @click="processPayment($event)">
          PAY NOW
        </button>
      </div>
    </div>
  
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: 'PaynowPaymentUiSample', 

  data() {
    return {
      mobileWallet:"",
      mobileNumber:"",
      amount:"",
	  mobileCode:"",
      serviceProviders: {
        0:["Ecocash","077-078"],
        1:["One Money","071"],
        2:["Telecash","073"]
      },
	  selectedCode:false,
    };
  },

  methods: {
	selectedWallet:(event) => {
		//this.mobileCode = event.target.value;
	  },
    processPayment:(event) =>
    {
      event.preventDefault();
      confirm("You are about to make a payment");
    }
  
  },
});
</script>

<style scoped>
  @import '../css/main.css';
</style>
