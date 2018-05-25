<template>
    <v-card>
        <v-card-title>
            {{ folderData.title }}
        </v-card-title>

        <v-card-media
        :height="folderData.height"
        >
            <v-container fill-height fluid>
                <v-layout fill-height wrap>
                    <v-flex xs12 align-end flexbox class="no-highlight">
                        
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-media>
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
</script>
