export default {
    getBoardList: state => { return state.boardList },

    getActiveBoard: state => { 
        if (state.boardList != undefined && state.boardList.length > 0) {
            return state.boardList.filter(item => item.id === state.activeBoard)[0]
        }
        
        return {}
    },

    getActiveFolderList: state => {
        if (state.boardList != undefined) {
            let activeBoard = state.boardList.filter(item => item.id === state.activeBoard)[0]
            if (activeBoard != undefined && activeBoard.folderList != undefined) {
                return activeBoard.folderList
            }

        }

        return []
    },

    getActiveBoardIndex: state => { return state.activeBoard }
}