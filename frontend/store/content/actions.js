export default {
    ADD_NEW_BOARD({ commit }, { board }) {
        commit('APPEND_BOARD_TO_LIST', board)
    },

    LOAD_BOARD_STATE({ commit }, { boardList }) {
        commit('SET_BOARD_LIST', { boardList })
    }
}