<template>
    <v-navigation-drawer 
    v-model="$store.state.LeftDrawer"
    clipped
    hide-overlay
    disable-resize-watcher
    stateless
    >

    <div v-for="(board, i) in boardList" :key="i">
        Hi this is board {{ i }} with name: "{{ board.name }}"!
    </div>

    <v-btn color="green" @click="openBoardModal">
        <v-icon left>add</v-icon>
        Add New Board
    </v-btn>

    <board-modal />

    </v-navigation-drawer>
</template>

<script>
    import BoardModal from './boardModal.vue'

    export default {
        components: {
            'board-modal': BoardModal
        },

        computed: {
            boardList: {
                get: function () { return this.$store.getters.getBoardList },
                set: function () {},
            },
        },

        methods: {
            openBoardModal() {
                this.$store.dispatch('OPEN_BOARD_MODAL')
            },

            selectBoard() {
                // select an active board from the displayed list
                // do not select if currently active
                // maybe move this to the board object if one exists.
            }
        }
    }
</script>

