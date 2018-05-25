export default {
    APPEND_BOARD_TO_LIST(state, payload) {
        state.boardList.push({ ...payload, "folderList": [], "id": state.boardList.length })
    },

    SET_BOARD_LIST(state, payload) {
        state.boardList = payload.boardList
    },

    SET_ACTIVE_BOARD(state, payload) {
        state.activeBoard = payload.index
    },

    APPEND_FOLDER_TO_BOARD(state, payload) {
        let activeBoard = state.boardList.filter(item => item.id === state.activeBoard)[0]
        if (activeBoard != undefined) {
            activeBoard.folderList.push({ "title": payload.name, "cardList": [] })
        }
    }
}