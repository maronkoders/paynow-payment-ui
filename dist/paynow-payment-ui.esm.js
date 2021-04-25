import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, withDirectives, Fragment, renderList, toDisplayString, vModelSelect, vModelText, withScopeId } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: 'PaynowPaymentUiSample',

  // vue component name
  data() {
    return {
      mobileWallet: "",
      mobileNumber: "",
      amount: "",
      serviceProviders: {
        0: "Ecocash",
        1: "One Money",
        2: "Telecash"
      }
    };
  },

  computed: {},
  methods: {
    processPayment: event => {
      event.preventDefault();
      confirm("You are about to make a payment");
    }
  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-4dfa06ae");

pushScopeId("data-v-4dfa06ae");

const _hoisted_1 = {
  class: "main"
};
const _hoisted_2 = {
  class: "card-form"
};
const _hoisted_3 = {
  class: "card-form__inner"
};

const _hoisted_4 = /*#__PURE__*/createVNode("div", {
  class: "ui_label"
}, [/*#__PURE__*/createVNode("label", null, [/*#__PURE__*/createVNode("strong", null, "Paynow Payment UI")])], -1);

const _hoisted_5 = {
  class: "card-input"
};

const _hoisted_6 = /*#__PURE__*/createVNode("label", {
  for: "mobileWallet",
  class: "card-input__label"
}, " Mobile Wallet", -1);

const _hoisted_7 = /*#__PURE__*/createVNode("option", {
  value: "",
  disabled: ""
}, "Select", -1);

const _hoisted_8 = {
  class: "card-input"
};

const _hoisted_9 = /*#__PURE__*/createVNode("label", {
  for: "mobileNumber",
  class: "card-input__label"
}, " Mobile Number", -1);

const _hoisted_10 = {
  class: "card-input"
};

const _hoisted_11 = /*#__PURE__*/createVNode("label", {
  for: "amount",
  class: "card-input__label"
}, "Amount ", -1);

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", _hoisted_2, [createVNode("div", _hoisted_3, [_hoisted_4, createVNode("div", _hoisted_5, [_hoisted_6, withDirectives(createVNode("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.mobileWallet = $event),
    class: "card-input__input",
    name: "mobileWallet",
    id: "mobileWallet"
  }, [_hoisted_7, (openBlock(true), createBlock(Fragment, null, renderList(_ctx.serviceProviders, (provider, index) => {
    return openBlock(), createBlock("option", {
      key: index,
      value: index
    }, toDisplayString(provider), 9, ["value"]);
  }), 128))], 512), [[vModelSelect, _ctx.mobileWallet]])]), createVNode("div", _hoisted_8, [_hoisted_9, withDirectives(createVNode("input", {
    type: "text",
    id: "mobileNumber",
    class: "card-input__input",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.mobileNumber = $event),
    "data-ref": "mobileNumber",
    autocomplete: "off"
  }, null, 512), [[vModelText, _ctx.mobileNumber]])]), createVNode("div", _hoisted_10, [_hoisted_11, withDirectives(createVNode("input", {
    type: "text",
    id: "amount",
    class: "card-input__input",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.amount = $event),
    "data-ref": "amount",
    autocomplete: "off"
  }, null, 512), [[vModelText, _ctx.amount]])]), createVNode("button", {
    class: "card-form__button",
    onClick: _cache[4] || (_cache[4] = $event => _ctx.processPayment($event))
  }, " PAY NOW ")])])]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n@import url(\"https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700|Source+Sans+Pro:400,600,700&display=swap\");\nbody[data-v-4dfa06ae] {\n\t background: #ddeefc;\n\t font-family: \"Source Sans Pro\", sans-serif;\n\t font-size: 16px;\n}\n*[data-v-4dfa06ae] {\n\t box-sizing: border-box;\n}\n.ui_label[data-v-4dfa06ae]{\n  \n  justify-content: center;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 26px;\n  margin-bottom:40px;\n}\n.main[data-v-4dfa06ae]{\n  margin:50px auto;\n}\n*[data-v-4dfa06ae]:focus {\n\t outline: none;\n}\n.wrapper[data-v-4dfa06ae] {\n\t min-height: 100vh;\n\t display: flex;\n\t padding: 50px 15px;\n}\n@media screen and (max-width: 700px), (max-height: 500px) {\n.wrapper[data-v-4dfa06ae] {\n\t\t flex-wrap: wrap;\n\t\t flex-direction: column;\n}\n}\n.card-form[data-v-4dfa06ae] {\n\t max-width: 570px;\n\t margin: auto;\n\t width: 100%;\n}\n@media screen and (max-width: 576px) {\n.card-form[data-v-4dfa06ae] {\n\t\t margin: 0 auto;\n}\n}\n.card-form__inner[data-v-4dfa06ae] {\n\t background: #fff;\n\t box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);\n\t border-radius: 10px;\n\t padding: 35px;\n\t padding-top: 20px;\n}\n@media screen and (max-width: 480px) {\n.card-form__inner[data-v-4dfa06ae] {\n\t\t padding: 25px;\n\t\t padding-top: 165px;\n}\n}\n@media screen and (max-width: 360px) {\n.card-form__inner[data-v-4dfa06ae] {\n\t\t padding: 15px;\n\t\t padding-top: 165px;\n}\n}\n.card-form__row[data-v-4dfa06ae] {\n\t display: flex;\n\t align-items: flex-start;\n}\n@media screen and (max-width: 480px) {\n.card-form__row[data-v-4dfa06ae] {\n\t\t flex-wrap: wrap;\n}\n}\n.card-form__col[data-v-4dfa06ae] {\n\t flex: auto;\n\t margin-right: 35px;\n}\n.card-form__col[data-v-4dfa06ae]:last-child {\n\t margin-right: 0;\n}\n@media screen and (max-width: 480px) {\n.card-form__col[data-v-4dfa06ae] {\n\t\t margin-right: 0;\n\t\t flex: unset;\n\t\t width: 100%;\n\t\t margin-bottom: 20px;\n}\n.card-form__col[data-v-4dfa06ae]:last-child {\n\t\t margin-bottom: 0;\n}\n}\n.card-form__col.-cvv[data-v-4dfa06ae] {\n\t max-width: 150px;\n}\n@media screen and (max-width: 480px) {\n.card-form__col.-cvv[data-v-4dfa06ae] {\n\t\t max-width: initial;\n}\n}\n.card-form__group[data-v-4dfa06ae] {\n\t display: flex;\n\t align-items: flex-start;\n\t flex-wrap: wrap;\n}\n.card-form__group .card-input__input[data-v-4dfa06ae] {\n\t flex: 1;\n\t margin-right: 15px;\n}\n.card-form__group .card-input__input[data-v-4dfa06ae]:last-child {\n\t margin-right: 0;\n}\n.card-form__button[data-v-4dfa06ae] {\n\t width: 100%;\n\t height: 55px;\n\t background: #2364d2;\n\t border: none;\n\t border-radius: 5px;\n\t font-size: 22px;\n\t font-weight: 500;\n\t font-family: \"Source Sans Pro\", sans-serif;\n\t box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);\n\t color: #fff;\n\t margin-top: 20px;\n\t cursor: pointer;\n}\n@media screen and (max-width: 480px) {\n.card-form__button[data-v-4dfa06ae] {\n\t\t margin-top: 10px;\n}\n}\n.card-item[data-v-4dfa06ae] {\n\t max-width: 430px;\n\t height: 270px;\n\t margin-left: auto;\n\t margin-right: auto;\n\t position: relative;\n\t z-index: 2;\n\t width: 100%;\n}\n@media screen and (max-width: 480px) {\n.card-item[data-v-4dfa06ae] {\n\t\t max-width: 310px;\n\t\t height: 220px;\n\t\t width: 90%;\n}\n}\n@media screen and (max-width: 360px) {\n.card-item[data-v-4dfa06ae] {\n\t\t height: 180px;\n}\n}\n.card-item.-active .card-item__side.-front[data-v-4dfa06ae] {\n\t transform: perspective(1000px) rotateY(180deg) rotateX(0deg) rotateZ(0deg);\n}\n.card-item.-active .card-item__side.-back[data-v-4dfa06ae] {\n\t transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);\n}\n.card-item__focus[data-v-4dfa06ae] {\n\t position: absolute;\n\t z-index: 3;\n\t border-radius: 5px;\n\t left: 0;\n\t top: 0;\n\t width: 100%;\n\t height: 100%;\n\t transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);\n\t opacity: 0;\n\t pointer-events: none;\n\t overflow: hidden;\n\t border: 2px solid rgba(255, 255, 255, 0.65);\n}\n.card-item__focus[data-v-4dfa06ae]:after {\n\t content: \"\";\n\t position: absolute;\n\t top: 0;\n\t left: 0;\n\t width: 100%;\n\t background: #08142f;\n\t height: 100%;\n\t border-radius: 5px;\n\t filter: blur(25px);\n\t opacity: 0.5;\n}\n.card-item__focus.-active[data-v-4dfa06ae] {\n\t opacity: 1;\n}\n.card-item__side[data-v-4dfa06ae] {\n\t border-radius: 15px;\n\t overflow: hidden;\n\t box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);\n\t transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);\n\t transform-style: preserve-3d;\n\t transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);\n\t backface-visibility: hidden;\n\t height: 100%;\n}\n.card-item__side.-back[data-v-4dfa06ae] {\n\t position: absolute;\n\t top: 0;\n\t left: 0;\n\t width: 100%;\n\t transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);\n\t z-index: 2;\n\t padding: 0;\n\t height: 100%;\n}\n.card-item__side.-back .card-item__cover[data-v-4dfa06ae] {\n\t transform: rotateY(-180deg);\n}\n.card-item__bg[data-v-4dfa06ae] {\n\t max-width: 100%;\n\t display: block;\n\t max-height: 100%;\n\t height: 100%;\n\t width: 100%;\n\t object-fit: cover;\n}\n.card-item__cover[data-v-4dfa06ae] {\n\t height: 100%;\n\t background-color: #1c1d27;\n\t position: absolute;\n\t height: 100%;\n\t background-color: #1c1d27;\n\t left: 0;\n\t top: 0;\n\t width: 100%;\n\t border-radius: 15px;\n\t overflow: hidden;\n}\n.card-item__cover[data-v-4dfa06ae]:after {\n\t content: \"\";\n\t position: absolute;\n\t left: 0;\n\t top: 0;\n\t width: 100%;\n\t height: 100%;\n\t background: rgba(6, 2, 29, 0.45);\n}\n.card-item__top[data-v-4dfa06ae] {\n\t display: flex;\n\t align-items: flex-start;\n\t justify-content: space-between;\n\t margin-bottom: 40px;\n\t padding: 0 10px;\n}\n@media screen and (max-width: 480px) {\n.card-item__top[data-v-4dfa06ae] {\n\t\t margin-bottom: 25px;\n}\n}\n@media screen and (max-width: 360px) {\n.card-item__top[data-v-4dfa06ae] {\n\t\t margin-bottom: 15px;\n}\n}\n.card-item__chip[data-v-4dfa06ae] {\n\t width: 60px;\n}\n@media screen and (max-width: 480px) {\n.card-item__chip[data-v-4dfa06ae] {\n\t\t width: 50px;\n}\n}\n@media screen and (max-width: 360px) {\n.card-item__chip[data-v-4dfa06ae] {\n\t\t width: 40px;\n}\n}\n.card-item__type[data-v-4dfa06ae] {\n\t height: 45px;\n\t position: relative;\n\t display: flex;\n\t justify-content: flex-end;\n\t max-width: 100px;\n\t margin-left: auto;\n\t width: 100%;\n}\n@media screen and (max-width: 480px) {\n.card-item__type[data-v-4dfa06ae] {\n\t\t height: 40px;\n\t\t max-width: 90px;\n}\n}\n@media screen and (max-width: 360px) {\n.card-item__type[data-v-4dfa06ae] {\n\t\t height: 30px;\n}\n}\n.card-item__typeImg[data-v-4dfa06ae] {\n\t max-width: 100%;\n\t object-fit: contain;\n\t max-height: 100%;\n\t object-position: top right;\n}\n.card-item__info[data-v-4dfa06ae] {\n\t color: #fff;\n\t width: 100%;\n\t max-width: calc(100% - 85px);\n\t padding: 10px 15px;\n\t font-weight: 500;\n\t display: block;\n\t cursor: pointer;\n}\n@media screen and (max-width: 480px) {\n.card-item__info[data-v-4dfa06ae] {\n\t\t padding: 10px;\n}\n}\n.card-item__holder[data-v-4dfa06ae] {\n\t opacity: 0.7;\n\t font-size: 13px;\n\t margin-bottom: 6px;\n}\n@media screen and (max-width: 480px) {\n.card-item__holder[data-v-4dfa06ae] {\n\t\t font-size: 12px;\n\t\t margin-bottom: 5px;\n}\n}\n.card-item__wrapper[data-v-4dfa06ae] {\n\t font-family: \"Source Code Pro\", monospace;\n\t padding: 25px 15px;\n\t position: relative;\n\t z-index: 4;\n\t height: 100%;\n\t text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);\n\t user-select: none;\n}\n@media screen and (max-width: 480px) {\n.card-item__wrapper[data-v-4dfa06ae] {\n\t\t padding: 20px 10px;\n}\n}\n.card-item__name[data-v-4dfa06ae] {\n\t font-size: 18px;\n\t line-height: 1;\n\t white-space: nowrap;\n\t max-width: 100%;\n\t overflow: hidden;\n\t text-overflow: ellipsis;\n\t text-transform: uppercase;\n}\n@media screen and (max-width: 480px) {\n.card-item__name[data-v-4dfa06ae] {\n\t\t font-size: 16px;\n}\n}\n.card-item__nameItem[data-v-4dfa06ae] {\n\t display: inline-block;\n\t min-width: 8px;\n\t position: relative;\n}\n.card-item__number[data-v-4dfa06ae] {\n\t font-weight: 500;\n\t line-height: 1;\n\t color: #fff;\n\t font-size: 27px;\n\t margin-bottom: 35px;\n\t display: inline-block;\n\t padding: 10px 15px;\n\t cursor: pointer;\n}\n@media screen and (max-width: 480px) {\n.card-item__number[data-v-4dfa06ae] {\n\t\t font-size: 21px;\n\t\t margin-bottom: 15px;\n\t\t padding: 10px 10px;\n}\n}\n@media screen and (max-width: 360px) {\n.card-item__number[data-v-4dfa06ae] {\n\t\t font-size: 19px;\n\t\t margin-bottom: 10px;\n\t\t padding: 10px 10px;\n}\n}\n.card-item__numberItem[data-v-4dfa06ae] {\n\t width: 16px;\n\t display: inline-block;\n}\n.card-item__numberItem.-active[data-v-4dfa06ae] {\n\t width: 30px;\n}\n@media screen and (max-width: 480px) {\n.card-item__numberItem[data-v-4dfa06ae] {\n\t\t width: 13px;\n}\n.card-item__numberItem.-active[data-v-4dfa06ae] {\n\t\t width: 16px;\n}\n}\n@media screen and (max-width: 360px) {\n.card-item__numberItem[data-v-4dfa06ae] {\n\t\t width: 12px;\n}\n.card-item__numberItem.-active[data-v-4dfa06ae] {\n\t\t width: 8px;\n}\n}\n.card-item__content[data-v-4dfa06ae] {\n\t color: #fff;\n\t display: flex;\n\t align-items: flex-start;\n}\n.card-item__date[data-v-4dfa06ae] {\n\t flex-wrap: wrap;\n\t font-size: 18px;\n\t margin-left: auto;\n\t padding: 10px;\n\t display: inline-flex;\n\t width: 80px;\n\t white-space: nowrap;\n\t flex-shrink: 0;\n\t cursor: pointer;\n}\n@media screen and (max-width: 480px) {\n.card-item__date[data-v-4dfa06ae] {\n\t\t font-size: 16px;\n}\n}\n.card-item__dateItem[data-v-4dfa06ae] {\n\t position: relative;\n}\n.card-item__dateItem span[data-v-4dfa06ae] {\n\t width: 22px;\n\t display: inline-block;\n}\n.card-item__dateTitle[data-v-4dfa06ae] {\n\t opacity: 0.7;\n\t font-size: 13px;\n\t padding-bottom: 6px;\n\t width: 100%;\n}\n@media screen and (max-width: 480px) {\n.card-item__dateTitle[data-v-4dfa06ae] {\n\t\t font-size: 12px;\n\t\t padding-bottom: 5px;\n}\n}\n.card-item__band[data-v-4dfa06ae] {\n\t background: rgba(0, 0, 19, 0.8);\n\t width: 100%;\n\t height: 50px;\n\t margin-top: 30px;\n\t position: relative;\n\t z-index: 2;\n}\n@media screen and (max-width: 480px) {\n.card-item__band[data-v-4dfa06ae] {\n\t\t margin-top: 20px;\n}\n}\n@media screen and (max-width: 360px) {\n.card-item__band[data-v-4dfa06ae] {\n\t\t height: 40px;\n\t\t margin-top: 10px;\n}\n}\n.card-item__cvv[data-v-4dfa06ae] {\n\t text-align: right;\n\t position: relative;\n\t z-index: 2;\n\t padding: 15px;\n}\n.card-item__cvv .card-item__type[data-v-4dfa06ae] {\n\t opacity: 0.7;\n}\n@media screen and (max-width: 360px) {\n.card-item__cvv[data-v-4dfa06ae] {\n\t\t padding: 10px 15px;\n}\n}\n.card-item__cvvTitle[data-v-4dfa06ae] {\n\t padding-right: 10px;\n\t font-size: 15px;\n\t font-weight: 500;\n\t color: #fff;\n\t margin-bottom: 5px;\n}\n.card-item__cvvBand[data-v-4dfa06ae] {\n\t height: 45px;\n\t background: #fff;\n\t margin-bottom: 30px;\n\t text-align: right;\n\t display: flex;\n\t align-items: center;\n\t justify-content: flex-end;\n\t padding-right: 10px;\n\t color: #1a3b5d;\n\t font-size: 18px;\n\t border-radius: 4px;\n\t box-shadow: 0px 10px 20px -7px rgba(32, 56, 117, 0.35);\n}\n@media screen and (max-width: 480px) {\n.card-item__cvvBand[data-v-4dfa06ae] {\n\t\t height: 40px;\n\t\t margin-bottom: 20px;\n}\n}\n@media screen and (max-width: 360px) {\n.card-item__cvvBand[data-v-4dfa06ae] {\n\t\t margin-bottom: 15px;\n}\n}\n.card-list[data-v-4dfa06ae] {\n\t margin-bottom: -130px;\n}\n@media screen and (max-width: 480px) {\n.card-list[data-v-4dfa06ae] {\n\t\t margin-bottom: -120px;\n}\n}\n.card-input[data-v-4dfa06ae] {\n\t margin-bottom: 20px;\n}\n.card-input__label[data-v-4dfa06ae] {\n\t font-size: 14px;\n\t margin-bottom: 5px;\n\t font-weight: 500;\n\t color: #1a3b5d;\n\t width: 100%;\n\t display: block;\n\t user-select: none;\n}\n.card-input__input[data-v-4dfa06ae] {\n\t width: 100%;\n\t height: 50px;\n\t border-radius: 5px;\n\t box-shadow: none;\n\t border: 1px solid #ced6e0;\n\t transition: all 0.3s ease-in-out;\n\t font-size: 18px;\n\t padding: 5px 15px;\n\t background: none;\n\t color: #1a3b5d;\n\t font-family: \"Source Sans Pro\", sans-serif;\n}\n.card-input__input[data-v-4dfa06ae]:hover, .card-input__input[data-v-4dfa06ae]:focus {\n\t border-color: #3d9cff;\n}\n.card-input__input[data-v-4dfa06ae]:focus {\n\t box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);\n}\n /* .card-input__input.-select {\n\t -webkit-appearance: none;\n\t background-image: url('data:image/png;\n\tbase64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC');\n\t background-size: 12px;\n\t background-position: 90% center;\n\t background-repeat: no-repeat;\n\t padding-right: 30px;\n} */\n.slide-fade-up-enter-active[data-v-4dfa06ae] {\n\t transition: all 0.25s ease-in-out;\n\t transition-delay: 0.1s;\n\t position: relative;\n}\n.slide-fade-up-leave-active[data-v-4dfa06ae] {\n\t transition: all 0.25s ease-in-out;\n\t position: absolute;\n}\n.slide-fade-up-enter[data-v-4dfa06ae] {\n\t opacity: 0;\n\t transform: translateY(15px);\n\t pointer-events: none;\n}\n.slide-fade-up-leave-to[data-v-4dfa06ae] {\n\t opacity: 0;\n\t transform: translateY(-15px);\n\t pointer-events: none;\n}\n.slide-fade-right-enter-active[data-v-4dfa06ae] {\n\t transition: all 0.25s ease-in-out;\n\t transition-delay: 0.1s;\n\t position: relative;\n}\n.slide-fade-right-leave-active[data-v-4dfa06ae] {\n\t transition: all 0.25s ease-in-out;\n\t position: absolute;\n}\n.slide-fade-right-enter[data-v-4dfa06ae] {\n\t opacity: 0;\n\t transform: translateX(10px) rotate(45deg);\n\t pointer-events: none;\n}\n.slide-fade-right-leave-to[data-v-4dfa06ae] {\n\t opacity: 0;\n\t transform: translateX(-10px) rotate(45deg);\n\t pointer-events: none;\n}\n.github-btn[data-v-4dfa06ae] {\n\t position: absolute;\n\t right: 40px;\n\t bottom: 50px;\n\t text-decoration: none;\n\t padding: 15px 25px;\n\t border-radius: 4px;\n\t box-shadow: 0px 4px 30px -6px rgba(36, 52, 70, 0.65);\n\t background: #24292e;\n\t color: #fff;\n\t font-weight: bold;\n\t letter-spacing: 1px;\n\t font-size: 16px;\n\t text-align: center;\n\t transition: all 0.3s ease-in-out;\n}\n@media screen and (min-width: 500px) {\n.github-btn[data-v-4dfa06ae]:hover {\n\t\t transform: scale(1.1);\n\t\t box-shadow: 0px 17px 20px -6px rgba(36, 52, 70, 0.36);\n}\n}\n@media screen and (max-width: 700px) {\n.github-btn[data-v-4dfa06ae] {\n\t\t position: relative;\n\t\t bottom: auto;\n\t\t right: auto;\n\t\t margin-top: 20px;\n}\n.github-btn[data-v-4dfa06ae]:active {\n\t\t transform: scale(1.1);\n\t\t box-shadow: 0px 17px 20px -6px rgba(36, 52, 70, 0.36);\n}\n}\n \n\n  \n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-4dfa06ae";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  PaynowPaymentUiSample: script
});

// Import vue components

const install = function installPaynowPaymentUi(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as PaynowPaymentUiSample };
