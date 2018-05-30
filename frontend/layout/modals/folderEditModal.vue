<template>
    <v-layout row justify-center>
        <v-dialog v-model="editState" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Edit Folder</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field ref="name" label="Folder Name" v-model="folderName" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="blue darken-1" flat @click.native="deleteFolder">Delete Folder</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="closeModal">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="UpdateFolder">Update</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import { modalState } from '../../utils/enums'

    export default {
        computed: {
            editState: {
                get: function () { return this.$store.getters.getModalState === modalState.FOLDER_EDIT },
                set: function () {},
            },

            folderName: {
                get: function () {
                    if (this.$store.getters.getActiveFolderList.length > 0 && this.$store.getters.getActiveFolder !== -1) {
                        return this.$store.getters.getActiveFolderList[this.$store.getters.getActiveFolder].title
                    }

                    return ''
                },
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

            deleteFolder() {
                this.$store.dispatch('DELETE_ACTIVE_FOLDER')
                this.closeModal()
            },

            UpdateFolder() {
                if (this.folderName != null) {
                    this.$store.dispatch('EDIT_ACTIVE_FOLDER', {
                        folder: { 
                            title: this.$refs['name'].inputValue,
                        }
                    })
                }

                this.closeModal()
            },
        }
    }
</script>
