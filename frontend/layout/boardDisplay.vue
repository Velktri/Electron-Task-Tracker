<template>
    <v-container fluid grid-list-md>
        <v-layout row justify-end v-show="$store.getters.getActiveBoardIndex !== -1">
            <v-flex>
                <v-btn icon color="blue" v-if="bIsMini" @click="openFolderModal" class="pa-0" >
                    <v-icon>add</v-icon>
                </v-btn>

                <v-btn v-else color="blue" @click="openFolderModal">
                    <v-icon left>add</v-icon>
                    Add Folder
                </v-btn>
            </v-flex>

            <v-flex
            align-end
            xs12
            md6
            >
                <searchbar />
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex 
            xs12
            md6
            lg4
            xl3
            d-flex 
            v-for="(folder, i) in folderList"
            :key="i"
            >
                <folder :folderData="folder" />
            </v-flex>
        </v-layout>

        <folder-modal />
    </v-container>
</template>

<script>
    import Folder from '../components/folder.vue'
    import searchbar from './searchBar.vue'
    import folderModal from './addFolderModal.vue'

    export default {
        components: {
            'folder': Folder,
            'searchbar': searchbar,
            'folder-modal': folderModal
        },

        computed: {
            folderList: {
                get: function () { return this.$store.getters.getActiveFolderList },
                set: function () {},
            },

            bIsMini: {
                get: function () { return this.$vuetify.breakpoint.smAndDown },
                set: function () {},
            },
        },

        methods: {
            openFolderModal() {
                this.$store.dispatch('OPEN_FOLDER_MODAL')
            }
        }
    }
</script>