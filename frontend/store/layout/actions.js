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

    OPEN_FOLDER_MODAL({ commit }) {
        commit('SET_FOLDER_MODAL', { payload: true })
    },

    CLOSE_FOLDER_MODAL({ commit }) {
        commit('SET_FOLDER_MODAL', { payload: false })
    }
}
