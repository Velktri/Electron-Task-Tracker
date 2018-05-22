export default {
    TOGGLE_LEFT_DRAWER({ commit }) {
        commit('TOGGLE_LEFT_DRAWER')
    },

    OPEN_BOARD_MODAL({ commit }) {
        commit('SET_BOARD_MODAL', { payload: true })
    },

    CLOSE_BOARD_MODAL({ commit }) {
        commit('SET_BOARD_MODAL', { payload: false })
    },

    ADD_NEW_BOARD({ commit }, { board }) {
        commit('APPEND_BOARD_TO_LIST', board)
    },

    LOAD_BOARD_STATE({ commit }, { boardList }) {
        commit('SET_BOARD_LIST', { boardList })
    }
}
