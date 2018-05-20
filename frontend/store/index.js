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
                /*{
                    name: 'board 1',
                    color: 'purple'
                },
                {
                    name: 'board 2',
                    color: 'green'
                },
                {
                    name: 'board 3',
                    color: 'red'
                },
                {
                    name: 'board 4',
                    color: 'blue'
                },*/
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