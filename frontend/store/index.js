import Vue from 'vue'
import Vuex from 'vuex'

import layoutGetters from './layout/getters'
import layoutActions from './layout/actions'
import layoutMutations from './layout/mutations'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            LeftDrawer: false,
            boardModal: false,
            boardList: [
                {
                    name: 'board1',
                    color: 'purple'
                }
            ],
        },

        mutations: {
            ...layoutMutations
        },

        actions: {
            ...layoutActions
        },

        getters: {
            ...layoutGetters
        }
    })
}