export default {
    LOAD_APP_STATE({ commit }, { appData }) {
        commit('SET_BOARD_LIST', { boardList: appData.boardList })
        commit('SET_ACTIVE_BOARD', { index: appData.activeBoard })
    },

    
    /* Board Actions */
    ADD_NEW_BOARD({ commit, state }, { board }) {
        commit('APPEND_BOARD_TO_LIST', board)

        if (state.activeBoard === -1) {
            commit('SET_ACTIVE_BOARD', { index: 0 })
        }
    },

    SELECT_ACTIVE_BOARD({ commit }, { index }) {
        commit('SET_ACTIVE_BOARD', { index })
    },
    
    EDIT_ACTIVE_BOARD({ commit }, { board }) {
        commit('UPDATE_ACTIVE_BOARD', board)
    },

    DELETE_ACTIVE_BOARD({ commit }) {
        commit('REMOVE_ACTIVE_BOARD')
    },


    /* Folder Actions */
    ADD_NEW_FOLDER({ commit }, { folder }) {
        commit('APPEND_FOLDER_TO_BOARD', folder)
    },

}