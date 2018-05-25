<template>
    <v-app dark>
        <app-header />
        <sidebar/>
        <v-content
        app
        >
            <folder-display />
        </v-content>
    </v-app>
</template>

<script>
    import Header from './layout/header.vue'
    import Sidebar from './layout/sidebar.vue'
    import BoardDisplay from './layout/boardDisplay.vue'
    import { ipcRenderer } from 'electron'

    export default {
        components: {
            'sidebar': Sidebar,
            'app-header': Header,
            'folder-display': BoardDisplay
        },

        mounted() {
            ipcRenderer.on('AppData', (event, appData) => {
                this.$store.dispatch('LOAD_APP_STATE', { appData })
            })
        }
    }
</script>


