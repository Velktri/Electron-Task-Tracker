<template>
    <v-container fluid grid-list-md>
        <v-layout row justify-end>
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
            v-for="(card, i) in cardList"
            :key="i"
            >
                <folder :cardData="card" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Folder from '../components/folder.vue'
    import searchbar from './searchBar.vue'

    export default {
        components: {
            'folder': Folder,
            'searchbar': searchbar
        },

        data() {
            return {
                cardList: [
                    { title: 'Pre-fab homes', height: '500'},
                    { title: 'Favorite road trips', height: '300'},
                    /*{ title: 'Best airlines', height: '200'},
                    { title: 'Pre-fab homes', height: '400'},
                    { title: 'Favorite road trips', height: '400'},
                    { title: 'Best airlines', height: '350'},
                    { title: 'Pre-fab homes', height: '550'},
                    { title: 'Favorite road trips', height: '450'},
                    { title: 'Best airlines', height: '700'},
                    { title: 'Pre-fab homes', height: '200'},
                    { title: 'Favorite road trips', height: '200'},
                    { title: 'Best airlines', height: '200'},*/
                ],
            }
        }
    }
</script>