import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

new Vue({
    el: '#app',
    store: new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            increment: state => state.count++
        }
    }),
    render(h) {
        return h(App)
    }
})