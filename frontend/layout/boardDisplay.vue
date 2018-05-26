<template>
    <div v-show="$store.getters.getActiveBoardIndex !== -1">

<!--       <v-container fluid fill-height>
        <v-layout align-center justify-center>-->

        <v-container fluid fill-height class="pa-2">
            <v-layout align-center justify-center>
                <v-flex class="px-2">
                    <h2>{{ $store.getters.getActiveBoard.name }}</h2>
                </v-flex>

                <v-flex>
                    <searchbar />
                </v-flex>
            </v-layout>
        </v-container>

        <v-divider />

        <v-container fluid grid-list-md>
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

                <v-flex
                @click="openFolderModal"
                xs12
                md6
                lg4
                xl3
                d-flex 
                text-xs-center
                >
                    <v-card>
                        <v-container fluid fill-height class="pa-2">
                            <v-layout align-center justify-center>
                                <v-flex xs12 class="mx-auto no-highlight">
                                    <h1>Add Folder</h1>
                                    <v-icon large>add</v-icon>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>

            <folder-modal />
        </v-container>
    </div>
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