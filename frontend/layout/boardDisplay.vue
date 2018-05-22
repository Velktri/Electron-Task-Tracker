<template>
    <!-- searchbar -->

    <v-container fluid grid-list-md>
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
                <v-card>
                    <v-card-media
                    :height="card.height"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height wrap>
                                <v-flex xs12 align-end flexbox>
                                    <div>car flex: 12 sfkljdhflks jdfhsdlf hjsdlfhs djfhsdlfj shdfkjsdhfksjd fskdjf skjfhsdkfjsdf ks djf jshdfkljs hfkjs fhskdjfh skjfhsdkfj hsdkfjhsd fkjsdhfkjsdhf ksjdhfskdjfh skjfhsdlfs f;afl dkfnsldkfjsd lfjs ldkfjsdlkfjsldk jslkfjs lf lfj sldfjsdlfk sfweif jlsqpf oja;fj </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                cardList: [
                    { title: 'Pre-fab homes', height: '500'},
                    { title: 'Favorite road trips', height: '300'},
                    { title: 'Best airlines', height: '200'},
                    { title: 'Pre-fab homes', height: '400'},
                    { title: 'Favorite road trips', height: '400'},
                    { title: 'Best airlines', height: '350'},
                    { title: 'Pre-fab homes', height: '550'},
                    { title: 'Favorite road trips', height: '450'},
                    { title: 'Best airlines', height: '700'},
                    { title: 'Pre-fab homes', height: '400'},
                    { title: 'Favorite road trips', height: '100'},
                    { title: 'Best airlines', height: '400'},
                ],
            }
        }
    }
</script>