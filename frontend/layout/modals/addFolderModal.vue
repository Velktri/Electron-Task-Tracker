<template>
        <v-layout row justify-center>
        <v-dialog v-model="addState" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Create New Folder</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Folder Name" v-model="folderName" required></v-text-field>
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

    export default {
        data () {
            return {
                folderName: null,
            }
        },

        computed: {
            addState: {
                get: function () { return this.$store.getters.getModalState === modalState.FOLDER_ADD },
                set: function () {},
            },
        },
        
        methods: {
            closeModal() {
                this.clearData()
                this.$store.dispatch('CLOSE_MODAL')
            },

            clearData() {
                this.folderName = null
            },

            submitData() {
                if (this.folderName != null) {
                    this.$store.dispatch('ADD_NEW_FOLDER', {
                        folder: { 
                            name: this.folderName,
                        }
                    })
                }

                this.closeModal()
            },
        }
    }
</script>
