import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            LeftDrawer: false,
        },

        mutations: {
            TOGGLE_LEFT_DRAWER(state) {
                state.LeftDrawer = !state.LeftDrawer
            }
        },

        actions: {
            TOGGLE_LEFT_DRAWER({ commit }) {
                commit('TOGGLE_LEFT_DRAWER')
            }
        },

        getters: {
            LeftDrawer: state => { return state.LeftDrawer }
        }
    })
}