<template>
    <div v-if="$store.getters.getActiveBoardIndex !== -1">
        <v-container fluid fill-height class="pa-2">
            <v-layout align-center justify-center>
                <v-flex xs3 sm5 class="px-2">
                    <h2>{{ $store.getters.getActiveBoard.name }}</h2>
                </v-flex>

                <v-flex xs9 sm7>
                    <v-layout row>
                        <v-tooltip v-if="bIsMini" bottom class="mr-2">
                            <v-btn slot="activator" color="teal darken-2" icon @click="openFolderModal">
                                <v-icon>add</v-icon>
                            </v-btn>

                            <span>Add Folder</span>
                        </v-tooltip>

                        <v-btn v-else color="teal darken-2" class="mr-3" @click="openFolderModal">
                            <v-icon left>add</v-icon>
                            Add Folder
                        </v-btn>

                        <searchbar />
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>

        <v-divider />

        <v-container fluid grid-list-md>
            <draggable 
            v-model="folderList" 
            element="v-layout" 
            :options="{ 
                draggable:'.drag-folder-item', 
                handle: '.folder-handle', 
                dragClass: 'outline-drag', 
                chosenClass: 'outline-chosen', 
                ghostClass: 'outline-ghost' 
            }" 
            row 
            wrap
            >
                <v-flex 
                xs12
                md6
                lg4
                xl3
                class="drag-folder-item"
                :key="i"
                v-for="(folder, i) in folderList"
                >
                    <folder class="folder-handle" :id="i" :folderData="folder" />
                </v-flex>
            </draggable>

            <folder-modal />
            <folder-edit-modal />

        </v-container>
    </div>
</template>

<script>
    import Folder from '../components/folder.vue'
    import searchbar from './searchBar.vue'
    import folderModal from './modals/addFolderModal.vue'
    import folderEditModal from './modals/folderEditModal.vue'
    import draggable from 'vuedraggable'

    export default {
        components: {
            'folder': Folder,
            'searchbar': searchbar,
            'folder-modal': folderModal,
            'folder-edit-modal': folderEditModal,
            draggable
        },

        computed: {
            folderList: {
                get: function () { return this.$store.getters.getActiveFolderList },
                set: function (value) { this.$store.commit('SET_FOLDER_LIST', { folderList: value })},
            },

            bIsMini: {
                get: function () { return this.$vuetify.breakpoint.smAndDown },
                set: function () {},
            },
        },

        methods: {
            openFolderModal() {
                this.$store.dispatch('OPEN_FOLDER_MODAL_ADD')
            }
        }
    }
</script>