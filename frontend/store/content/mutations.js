export default {
    APPEND_BOARD_TO_LIST(state, payload) {
        state.boardList.push(payload)
    },

    SET_BOARD_LIST(state, payload) {
        state.boardList = payload.boardList
    }
}