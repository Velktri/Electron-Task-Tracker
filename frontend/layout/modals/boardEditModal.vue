<template>
    <v-layout row justify-center>
        <v-dialog v-model="editState" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Edit Board</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field ref="name" label="Board Name" :value="boardName" required />
                            </v-flex>

                            <v-flex xs12>
                                <v-select
                                :items="colors"
                                label="Color"
                                required
                                :value="selectedColor"
                                ref="color"
                                >
                                    <template slot="item" slot-scope="data">
                                        <v-list-tile-avatar
                                        :color="data.item"
                                        />

                                        <v-list-tile-content>
                                            {{ data.item }}
                                        </v-list-tile-content>
                                    </template>
                                </v-select>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="blue darken-1" flat @click.native="deleteBoard">Delete Board</v-btn>
                    <v-spacer />
                    <v-btn color="blue darken-1" flat @click.native="closeModal">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="submitData">Update</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import { modalState } from '../../utils/enums'
    import { colors } from '../../utils/constants'

    export default {
        computed: {
            editState: {
                get: function () { return this.$store.getters.getModalState === modalState.BOARD_EDIT },
                set: function () {},
            },

            boardName: {
                get: function () {
                    if (this.$store.getters.getActiveBoard !== undefined) {
                        return this.$store.getters.getActiveBoard.name 
                    }

                    return ''
                },
                set: function () {},
            },

            selectedColor: {
                get: function () {
                    if (this.$store.getters.getActiveBoard !== undefined) {
                        return this.$store.getters.getActiveBoard.color 
                    }

                    return ''
                },
                set: function () {},
            },
        },

        data() {
            return {
                colors,
            }
        },

        methods: {
            closeModal() {
                this.clearData()
                this.$store.dispatch('CLOSE_MODAL')
            },

            clearData() {
                this.boardName = null
                this.selectedColor = null
            },

            deleteBoard() {
                this.$store.dispatch('DELETE_ACTIVE_BOARD')
                this.closeModal()
            },

            submitData() {
                if (this.boardName != null && this.selectedColor != null) {
                    this.$store.dispatch('EDIT_ACTIVE_BOARD', {
                        board: { 
                            name: this.$refs['name'].inputValue,
                            color: this.$refs['color'].inputValue
                        }
                    })
                }

                this.closeModal()
            },
        }
    }
</script>
