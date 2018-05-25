export default {
    ADD_NEW_BOARD({ commit, state }, { board }) {
        commit('APPEND_BOARD_TO_LIST', board)

        if (state.activeBoard === -1) {
            commit('SET_ACTIVE_BOARD', { index: 0 })
        }
    },

    LOAD_APP_STATE({ commit }, { appData }) {
        commit('SET_BOARD_LIST', { boardList: appData.boardList })
        commit('SET_ACTIVE_BOARD', { index: appData.activeBoard })
    },

    SELECT_ACTIVE_BOARD({ commit }, { index }) {
        commit('SET_ACTIVE_BOARD', { index })
    },

    ADD_NEW_FOLDER({ commit }, { folder }) {
        commit('APPEND_FOLDER_TO_BOARD', folder)
    }
}