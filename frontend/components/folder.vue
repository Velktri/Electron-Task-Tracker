<template>
    <v-card>
        <v-card-media
        src="images/placeholder.jpg"
        height="200px"
        />

        <v-container fill-height fluid class="pa-0">
            <v-layout fill-height wrap>
                <v-flex xs12 align-end flexbox class="no-highlight">
                    <v-card-title primary-title class="pa-3 no-highlight">
                        <h1>{{ folderData.title }}</h1>
                    </v-card-title>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        props: {
            folderData: {
                type: Object,
                default: () => {}
            }
        }
    }

/* 
<v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
*/

</script>

