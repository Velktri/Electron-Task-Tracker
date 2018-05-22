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
                                <v-flex xs12 align-end flexbox class="no-highlight">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, explicabo. Suscipit quidem obcaecati dolorem illum nesciunt a et maxime in harum. Eum sit sed voluptatem, voluptates maxime similique architecto, autem, provident natus sunt perferendis recusandae soluta! Possimus facere optio quo id voluptatem autem nobis fugiat eum recusandae iure error omnis quaerat, earum placeat odio eaque officiis eligendi fuga harum nihil, vitae tempore assumenda reprehenderit! Sapiente accusantium numquam odit deserunt illum alias harum obcaecati. Placeat velit eveniet vero ab architecto magni odit, eum at maiores in? Sequi consequuntur ut, ad laudantium nisi sunt laborum facere quae labore, voluptas, recusandae ex quas.
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
                    { title: 'Pre-fab homes', height: '200'},
                    { title: 'Favorite road trips', height: '200'},
                    { title: 'Best airlines', height: '200'},
                ],
            }
        }
    }
</script>


<style scoped>
    .no-highlight {
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
    }
</style>

