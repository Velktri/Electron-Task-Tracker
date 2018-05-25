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
            <draggable :list="boardList" :options="{draggable:'.drag-item'}">
                <template v-for="(board, i) in boardList">
                    <v-card
                    class="white--text pa-2 ma-1 no-highlight drag-item"
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
                    <v-btn icon color="green" @click="openBoardModal">
                        <v-icon>add</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>

        <!-- full sidebar -->
        <v-container v-else>
            <draggable v-model="boardList" :options="{draggable:'.drag-item'}">
                <template v-for="(board, i) in boardList">
                    <v-card
                    class="white--text pa-2 ma-1 no-highlight drag-item" 
                    :key="i"
                    flat
                    :color="(activeBoard === board.id) ? 'blue-grey lighten-1' : 'blue-grey darken-2'"
                    @click.native="selectBoard(board.id)"
                    >
                        <v-layout row align-center>
                            <v-flex xs2 mr-3>
                                <v-list-tile-avatar
                                :color="board.color"
                                />
                            </v-flex>
                            <v-flex wrap xs9>
                                <div class="headline white--text no-highlight">{{ board.name }}</div>
                            </v-flex>
                            <v-flex xs1>
                                <v-icon>more_vert</v-icon>
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
                this.$store.dispatch('OPEN_BOARD_MODAL')
            },

            selectBoard(index) {
                if (index != this.$store.getters.getActiveBoardIndex) {
                    this.$store.dispatch('SELECT_ACTIVE_BOARD', { index })
                }
            }
        },
    }
</script>