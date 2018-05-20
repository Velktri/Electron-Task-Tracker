export default {
    TOGGLE_LEFT_DRAWER(state) {
        state.LeftDrawer = !state.LeftDrawer
    },

    SET_BOARD_MODAL(state, newState) {
        state.boardModal = newState.payload;
    },

    APPEND_BOARD_TO_LIST(state, payload) {
        state.boardList.push(payload)
    },

    SET_BOARD_LIST(state, payload) {
        console.log(payload)
        state.boardList = payload.boardList
    }
}
