<template>
    <v-layout row justify-center>
        <v-dialog v-model="addState" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Create New Board</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Board Name" v-model="boardName" required />
                            </v-flex>

                            <v-flex xs12>
                                <v-select
                                :items="colors"
                                label="Color"
                                required
                                v-model="selectedColor"
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
                    <v-spacer />
                    <v-btn color="blue darken-1" flat @click.native="clearData">Reset</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="closeModal">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="submitData">Submit</v-btn>
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
            addState: {
                get: function () { return this.$store.getters.getModalState === modalState.BOARD_ADD },
                set: function () {},
            },
        },

        data() {
            return {
                colors,

                boardName: null,
                selectedColor: null
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

            submitData() {
                if (this.boardName != null && this.selectedColor != null) {
                    this.$store.dispatch('ADD_NEW_BOARD', {
                        board: { 
                            name: this.boardName,
                            color: this.selectedColor
                        }
                    })
                }

                this.closeModal()
            },
        }
    }
</script>