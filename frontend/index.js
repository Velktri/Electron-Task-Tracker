import Vue from 'vue'
import App from './app.vue'
import Vuetify from 'vuetify'
import { createStore } from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
const store = createStore()

new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
})


