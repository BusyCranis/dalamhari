import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import '@oruga-ui/oruga/dist/oruga.css'

import Oruga from '@oruga-ui/oruga'

import './assets/tailwindcss.css';

import './assets/oruga-tailwindcss.css';



Vue.config.productionTip = false


Vue.use(Oruga, {
  iconPack: 'fas',
  iconComponent: 'vue-fontawesome',
  statusIcon: false,
  button: {
    override: true,
    rootClass: 'btn',
  },
  radio: {
    rootClass: 'radio',
    labelClass: 'radio-label',
    checkClass: 'radio-check',
    checkedClass: 'radio-checked'
  },
  field: {
    override: true,
    labelClass: 'field-label',
    messageClass: 'text-xs italic',
    variantClass: 'field-'
  },
  input: {
    override: true,
    inputClass: 'input focus:outline-none focus:shadow-outline',
    roundedClass: 'rounded',
    variantClass: 'input-'
  },
  dropdown: {
    menuClass: 'dropdown-menu',
    itemClass: 'dropdown-item',
    itemActiveClass: 'dropdown-item-active'
  },
  loading: {
    overlayClass: 'loading-background'
  },
  icon: {
    override: true,
    spinClass: 'fa-spin'
  },
  switch: {
    checkClass: 'switch',
    labelClass: 'switch-label',
  },
})




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
