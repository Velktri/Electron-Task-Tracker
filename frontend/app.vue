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

    export default {
        components: {
            'sidebar': Sidebar,
            'app-header': Header
        }
    }
</script>


