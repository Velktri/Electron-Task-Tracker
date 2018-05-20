<template>
    <v-app dark>
        <app-header />
        <sidebar> HELLO </sidebar>
        <v-content>

        </v-content>

        
    </v-app>
</template>

<script>
    import Header from './layout/header.vue'
    import Sidebar from './layout/sidebar.vue'
    import { ipcRenderer } from 'electron'

    export default {
        components: {
            'sidebar': Sidebar,
            'app-header': Header
        },

        mounted() {
            ipcRenderer.on('BoardList', (event, boardList) => {
                this.$store.dispatch('LOAD_BOARD_STATE', { boardList })
            })
        }
    }
</script>


