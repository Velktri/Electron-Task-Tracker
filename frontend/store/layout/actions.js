
import { boardState } from '../../utils/enums'

export default {
    /* Left Drawer Actions */
    TOGGLE_LEFT_DRAWER({ commit }) {
        commit('TOGGLE_LEFT_DRAWER')
    },


    /* Board Model Actions */
    OPEN_BOARD_MODAL_EDIT({ commit }) {
        commit('SET_BOARD_MODAL', { payload: boardState.EDIT })
    },

    OPEN_BOARD_MODAL_ADD({ commit }) {
        commit('SET_BOARD_MODAL', { payload: boardState.ADD })
    },

    CLOSE_BOARD_MODAL({ commit }) {
        commit('SET_BOARD_MODAL', { payload: boardState.NONE })
    },


    /* Folder Model Actions */
    OPEN_FOLDER_MODAL({ commit }) {
        commit('SET_FOLDER_MODAL', { payload: true })
    },

    CLOSE_FOLDER_MODAL({ commit }) {
        commit('SET_FOLDER_MODAL', { payload: false })
    }
}
