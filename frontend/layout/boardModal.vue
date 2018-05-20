<template>
        <v-layout row justify-center>
        <v-dialog v-model="$store.state.boardModal" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Create New Board</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Board Name" v-model="boardName" required></v-text-field>
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
    export default {

        data() {
            return {
                colors: [
                    'red',
                    'pink',
                    'purple',
                    'deep-purple',
                    'indigo',
                    'blue',
                    'light-blue',
                    'cyan',
                    'teal',
                    'green',
                    'light-green',
                    'lime',
                    'yellow',
                    'amber',
                    'orange',
                    'deep-orange',
                    'brown',
                    'blue-grey',
                    'grey',
                    'black',
                    'white'
                ],

                boardName: null,
                selectedColor: null
            }
        },

        methods: {
            closeModal() {
                this.clearData()
                this.$store.dispatch('CLOSE_BOARD_MODAL')
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

