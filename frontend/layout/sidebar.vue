<template>
    <v-navigation-drawer 
    v-model="$store.state.LeftDrawer"
    clipped
    hide-overlay
    stateless
    app
    :mini-variant.sync="miniClosed"
    >
        <!-- mini sidebar -->
        <v-container pa-0 v-if="bIsMini">
            <draggable v-model="boardList" :options="{ handle:'.drag-board-item' }">
                <template v-for="(board, i) in boardList">
                    <v-card
                    class="white--text pa-2 ma-1 no-highlight drag-board-item"
                    :key="i"
                    flat
                    :color="(activeBoard === board.id) ? 'blue-grey lighten-1' : 'blue-grey darken-2'"
                    @click.native="selectBoard(board.id)"
                    >
                        <v-layout row align-center>
                            <v-flex xs12>
                                <v-tooltip right>
                                    <v-list-tile-avatar
                                    slot="activator"
                                    :color="board.color"
                                    >
                                        <h1 :class="(board.color === 'black') ? '' : 'black--text'">
                                            {{ board.name.charAt(0).toUpperCase() }}
                                        </h1>
                                    </v-list-tile-avatar>

                                    <span>{{ board.name }}</span>
                                </v-tooltip>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </template>
            </draggable>

            <v-layout row justify-space-between>
                <v-flex xs6 pt-1 style="padding-left: 14px; padding-right: 14px;">
                    <v-btn icon color="teal darken-2" @click="openBoardModal">
                        <v-icon>add</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>

        <!-- full sidebar -->
        <v-container v-else>
            <draggable v-model="boardList" :options="{draggable:'.drag-board-item'}">
                <template v-for="(board, i) in boardList">
                    <v-card
                    class="white--text pa-2 ma-1 no-highlight drag-board-item" 
                    :key="i"
                    flat
                    :color="(activeBoard === board.id) ? 'blue-grey lighten-1' : 'blue-grey darken-2'"
                    @click.native="selectBoard(board.id)"
                    >
                        <v-layout row align-center class="ml-2">
                            <v-flex xs10 class="mr-1">
                                <v-layout row align-center justify-right>
                                    <v-list-tile-avatar
                                    :color="board.color"
                                    />

                                    <div class="subheading white--text no-highlight">{{ board.name }}</div>
                                </v-layout>
                            </v-flex>

                            <v-flex xs2>
                                <v-btn icon class="ma-1" @click="openEditBoard">
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </template>
            </draggable>

            <v-btn color="teal darken-2" class="ml-1" @click="openBoardModal">
                <v-icon left>add</v-icon>
                Add Board
            </v-btn>
        </v-container>

        <board-modal />

        <board-edit-modal />

    </v-navigation-drawer>
</template>

<script>
    import BoardModal from './boardModal.vue'
    import draggable from 'vuedraggable'
    import BoardEditModal from './boardEditModal.vue'

    export default {
        components: {
            'board-modal': BoardModal,
            'board-edit-modal': BoardEditModal,
            draggable
        },

        computed: {
            boardList: {
                get: function () { return this.$store.getters.getBoardList },
                set: function (value) { this.$store.commit('SET_BOARD_LIST', { boardList: value })},
            },

            bIsMini: {
                get: function () { return this.$vuetify.breakpoint.smAndDown },
                set: function () {},
            },

            miniClosed: {
                get: function () { return this.$store.state.LeftDrawer && this.$vuetify.breakpoint.smAndDown },
                set: function () {},
            },

            activeBoard: {
                get: function () { return this.$store.getters.getActiveBoardIndex },
                set: function () {},
            }
        },

        methods: {
            openBoardModal() {
                this.$store.dispatch('OPEN_BOARD_MODAL_ADD')
            },

            selectBoard(index) {
                if (index != this.$store.getters.getActiveBoardIndex) {
                    this.$store.dispatch('SELECT_ACTIVE_BOARD', { index })
                }
            },

            openEditBoard() {
                this.$store.dispatch('OPEN_BOARD_MODAL_EDIT')
            }
        },
    }
</script>