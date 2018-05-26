<template>
    <v-toolbar 
    class="drag"
    flat
    app
    clipped-left
    :height = "42">
        <v-layout row class="mx-2">
            <v-flex xs3>
                <v-toolbar-side-icon class="no-drag" @click.stop="$store.dispatch('TOGGLE_LEFT_DRAWER')" />
                <v-btn icon class="ml-1 no-drag" color="purple"  @click="openDevTools"><v-icon>build</v-icon></v-btn>
            </v-flex>

            <v-flex xs6 text-xs-center>
                <v-toolbar-title>App Name</v-toolbar-title>
            </v-flex>

            <v-flex xs3>
                <v-layout justify-end>
                    <v-btn class="no-drag" icon :ripple=false @click="minimizeApp">
                        <v-icon class="mb-2">minimize</v-icon>
                    </v-btn>

                    <v-btn class="no-drag" icon :ripple=false @click="maximizeApp">
                        <v-icon>crop_square</v-icon>
                    </v-btn>

                    <v-btn class="no-drag" icon :ripple=false @click="closeApp">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-toolbar>
</template>

<script>
    import { ipcRenderer } from 'electron'

    export default {
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
    .btn {
        margin: 0px;
    }
</style>
