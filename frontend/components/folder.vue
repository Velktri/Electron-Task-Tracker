<template>

        <v-card style="border-radius: 5px;">
            <v-card-media
            src="images/placeholder.jpg"
            height="200px"
            style="border-top-left-radius: 5px; border-top-right-radius: 5px;"
            />

            <v-container fill-height fluid class="pa-0">
                <v-layout fill-height wrap row align-center justify-end>
                    <v-flex xs10 flexbox class="no-highlight">
                        <v-card-title primary-title class="pa-3 no-highlight">
                            <h1>{{ folderData.title }}</h1>
                        </v-card-title>
                    </v-flex>

                    <v-flex xs2>
                        <v-layout row justify-end>
                            
                            <v-btn icon>
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>

            <v-container class="pb-1 pt-0 px-0">
                <draggable v-model="folderData.cardList" element="v-layout" :options="{ draggable: '.drag-card-item', group: 'card-group' }" column >
                    <v-card color="blue-grey darken-2 drag-card-item mx-2 mb-2 mt-0" style="border-radius: 5px;" raised :key="card + (10 * index)" column v-for="(card, index) in folderData.cardList">
                        <v-card-title>
                            <h2>{{ card.title }}</h2>
                        </v-card-title>
                    </v-card>
                </draggable>
            </v-container>
        </v-card>

</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        components: {
            draggable
        },

        props: {
            folderData: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

