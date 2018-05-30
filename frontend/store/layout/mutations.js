export default {
    TOGGLE_LEFT_DRAWER(state) {
        state.LeftDrawer = !state.LeftDrawer
    },

    SET_MODAL_STATE(state, newState) {
        state.modalState = newState.payload;
    }
}
