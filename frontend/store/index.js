import Vue from 'vue'
import Vuex from 'vuex'

import layoutGetters from './layout/getters'
import layoutActions from './layout/actions'
import layoutMutations from './layout/mutations'

import contentGetters from './content/getters'
import contentActions from './content/actions'
import contentMutations from './content/mutations'
import { modalState } from '../utils/enums'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            LeftDrawer: false,
            modalState: modalState.NONE,
            boardList: [
                {
                    id: 0,
                    color: "purple",
                    name: "Board 1",
                    folderList: [
                        {
                            title: "Folder 1",
                            cardList: [
                                {
                                    title: "Card 1"
                                },
                                {
                                    title: "Card 2"
                                }
                            ]
                        },
                        {
                            title: "Folder 2",
                            cardList: [
                                {
                                    title: "Card 1"
                                },
                                {
                                    title: "Card 2"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 1,
                    color:"green",
                    name:"Board 2",
                    folderList: [
                        {
                            title: "Folder 1",
                            cardList: [
                                {
                                    title: "Card 1"
                                },
                                {
                                    title: "Card 2"
                                }
                            ]
                        }
                    ]
                }
            ],
            activeBoard: 0,
            activeFolder: -1
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