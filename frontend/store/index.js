import Vue from 'vue'
import Vuex from 'vuex'

import layoutGetters from './layout/getters'
import layoutActions from './layout/actions'
import layoutMutations from './layout/mutations'

import contentGetters from './content/getters'
import contentActions from './content/actions'
import contentMutations from './content/mutations'
import { boardState } from '../utils/enums'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            LeftDrawer: false,
            boardModal: boardState.NONE,
            folderModal: false,
            boardList: [],
            activeBoard: -1,
        },

        mutations: {
            ...layoutMutations,
            ...contentMutations
        },

        actions: {
            ...layoutActions,
            ...contentActions
        },

        getters: {
            ...layoutGetters,
            ...contentGetters
        }
    })
}