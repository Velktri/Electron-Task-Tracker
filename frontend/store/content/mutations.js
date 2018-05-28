export default {
    APPEND_BOARD_TO_LIST(state, payload) {

        const result = state.boardList.map((board) => board.id).sort()
        let i = 0
        for (i; i < result.length; i++) {
            if (i !== result[i]) { break }
        }
        state.boardList.push({ ...payload, "folderList": [], "id": i })
    },

    SET_BOARD_LIST(state, payload) {
        state.boardList = payload.boardList
    },

    SET_FOLDER_LIST(state, payload) {
        state.boardList.filter(item => item.id === state.activeBoard)[0].folderList = payload.folderList 
    },

    SET_ACTIVE_BOARD(state, payload) {
        state.activeBoard = payload.index
    },

    APPEND_FOLDER_TO_BOARD(state, payload) {
        let activeBoard = state.boardList.filter(item => item.id === state.activeBoard)[0]
        if (activeBoard != undefined) {
            activeBoard.folderList.push({ "title": payload.name, "cardList": [] })
        }
    },

    UPDATE_ACTIVE_BOARD(state, payload) {
        let activeBoard = state.boardList.filter(item => item.id === state.activeBoard)[0]
        if (activeBoard != undefined) {
            activeBoard.name = payload.name,
            activeBoard.color = payload.color
        }
    },

    REMOVE_ACTIVE_BOARD(state) {
        let index = state.boardList.indexOf(state.boardList.filter(item => item.id === state.activeBoard)[0]);
        if (index !== undefined && index > -1) {
            if (state.boardList.length > 1) {
                if (index === state.boardList.length - 1) {
                    state.activeBoard = state.boardList[index - 1].id
                } else if (index < state.boardList.length) {
                    state.activeBoard = state.boardList[index + 1].id
                }
            } else {
                state.activeBoard = -1
            }

            state.boardList.splice(index, 1);
        }
    }
}