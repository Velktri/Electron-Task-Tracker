<template>
    <v-navigation-drawer 
    v-model="$store.state.LeftDrawer"
    clipped
    hide-overlay
    disable-resize-watcher
    stateless
    >
    <v-container>
        <draggable :list="boardList" :options="{draggable:'.drag-item'}">
            <template v-for="(board, i) in boardList" 
            >
                <v-card
                class="white--text pa-2 ma-1 no-highlight drag-item" 
                :key="i"
                flat
                :color="'blue-grey darken-2'"
                @click.native="selectBoard(board.name)"
                >
                    <v-layout row align-center>
                        <v-flex xs3>
                            <v-list-tile-avatar
                            :color="board.color"
                            />
                        </v-flex>
                        <v-flex xs9>
                            <div class="headline white--text no-highlight">{{ board.name }}</div>
                        </v-flex>
                    </v-layout>
                    
                </v-card>
            </template>
        </draggable>


        <v-btn color="green" @click="openBoardModal">
            <v-icon left>add</v-icon>
            Add New Board
        </v-btn>
    </v-container>


        <board-modal />

    </v-navigation-drawer>
</template>

<script>
    import BoardModal from './boardModal.vue'
    import draggable from 'vuedraggable'

    export default {
        components: {
            'board-modal': BoardModal,
            draggable
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

            selectBoard(boardName) {
                console.log("selected " + boardName)
                // select an active board from the displayed list
                // do not select if currently active
                // maybe move this to the board object if one exists.
            }
        }
    }
</script>

<style scoped>
    .no-highlight {
        -webkit-user-select: none;
        user-select: none;
    }
</style>

