import { modalState } from '../../utils/enums'

export default {
    /* Left Drawer Actions */
    TOGGLE_LEFT_DRAWER({ commit }) {
        commit('TOGGLE_LEFT_DRAWER')
    },


    /* Board Modal Actions */
    OPEN_BOARD_MODAL_EDIT({ commit }) {
        commit('SET_MODAL_STATE', { payload: modalState.BOARD_EDIT })
    },

    OPEN_BOARD_MODAL_ADD({ commit }) {
        commit('SET_MODAL_STATE', { payload: modalState.BOARD_ADD })
    },


    /* Folder Modal Actions */
    OPEN_FOLDER_MODAL_ADD({ commit }) {
        commit('SET_MODAL_STATE', { payload: modalState.FOLDER_ADD })
    },

    OPEN_FOLDER_MODAL_EDIT({ commit }, folderIndex) {
        commit('SET_MODAL_STATE', { payload: modalState.FOLDER_EDIT })
        commit('SET_ACTIVE_FOLDER', folderIndex)
    },


    /* Card Modal Actions */
    OPEN_CARD_MODAL_ADD({ commit }) {
        commit('SET_MODAL_STATE', { payload: modalState.CARD_ADD })
    },

    OPEN_CARD_MODAL_EDIT({ commit }) {
        commit('SET_MODAL_STATE', { payload: modalState.CARD_EDIT })
    },


    CLOSE_MODAL({ commit }) {
        commit('SET_MODAL_STATE', { payload: modalState.NONE })
    },
}
