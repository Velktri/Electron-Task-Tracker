<template>
    <v-card>
        <v-card-title>
            {{ cardData.title }}
        </v-card-title>

        <v-card-media
        :height="cardData.height"
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
</template>

<script>
    export default {
        props: {
            cardData: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>
