<template>
    <v-toolbar 
    class="drag"
    flat
    :height = "42">
        <v-toolbar-side-icon class="no-drag" @click.stop="$store.dispatch('TOGGLE_LEFT_DRAWER')" />
        <v-toolbar-title>Title</v-toolbar-title>

        <v-btn class="ml-4 no-drag" color="purple" small @click="openDevTools">Dev Tools</v-btn>

        <v-spacer></v-spacer>

        <div class="no-drag mr-2">
            <v-btn icon :ripple=false @click="minimizeApp">
                <v-icon class="mb-2">minimize</v-icon>
            </v-btn>

            <v-btn icon :ripple=false @click="maximizeApp">
                <v-icon>crop_square</v-icon>
            </v-btn>

            <v-btn icon :ripple=false @click="closeApp">
                <v-icon>close</v-icon>
            </v-btn>
        </div>
    </v-toolbar>
</template>

<script>
    import { ipcRenderer } from 'electron'

    export default {
        data() {
            return {
                activeTab: 1
            }
        },

        methods: {
            openDevTools() {
                ipcRenderer.send('layout:openTools')
            },

            closeApp() {
                ipcRenderer.send('layout:closeApp', this.$store.getters.getBoardList)
            },

            minimizeApp() {
                ipcRenderer.send('layout:minimizeApp')
            },

            maximizeApp() {
                ipcRenderer.send('layout:maximizeApp')
            }
        }
    }
</script>

<style scoped>
    .app-header {
        background-color: blue;
        height: 56px;
        
    }

    /*.app-header-item {
        
    }*/

    .drag {
        -webkit-app-region: drag;
        -webkit-user-select: none;
        user-select: none;
    }

    .no-drag {
        -webkit-app-region: no-drag;
    }

    .btn {
        margin: 0px;
    }
</style>
