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
                    <v-card-title primary-title class="py-2 px-3 no-highlight">
                        <h1>{{ folderData.title }}</h1>
                    </v-card-title>
                </v-flex>

                <v-flex xs2>
                    <v-layout row justify-end>
                        
                        <v-btn icon @click="OpenFolderEditModal">
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>

        <v-divider />

        <v-container class="pb-1 pt-2 px-0">
            <draggable 
            v-model="folderData.cardList" 
            element="v-layout" 
            :options="{ 
                draggable: '.drag-card-item', 
                ghostClass: 'card-ghost', 
                dragClass: 'card-drag', 
                group: 'card-group' 
            }" 
            v-if="folderData.cardList.length === 0" 
            column
            >
                <v-flex class="drag-card-item pa-0" xs12 style="height: 1px" />
            </draggable>
            <draggable 
            v-model="folderData.cardList" 
            element="v-layout" 
            :options="{ 
                draggable: '.drag-card-item', 
                ghostClass: 'outline-ghost', 
                chosenClass: 'outline-chosen', 
                dragClass: 'outline-drag', 
                group: 'card-group' 
            }" 
            column
            >
                <v-flex 
                xs12 
                class="drag-card-item mx-2 my-0"
                v-for="(card, index) in folderData.cardList" 
                :key="card + (10 * index)">
                    <v-card
                    color="blue-grey darken-2"
                    style="border-radius: 5px;"
                    
                    flat
                    column
                    >
                        <v-card-title>
                            <h2>{{ card.title }}</h2>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </draggable>

            <v-layout>
                <v-flex xs12 class="mx-2">
                    <v-btn @click="OpenCardModal" large block depressed :ripple="false" color="teal darken-2" style="height: 56px; border-radius: 5px;">
                        <h1>Add Card</h1>
                    </v-btn>
                </v-flex>
            </v-layout>
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
            },

            id: {
                type: Number,
                default: -1
            }
        },

        methods: {
            OpenCardModal() {
                console.log('Add New Card')
            },

            OpenFolderEditModal() {
                this.$store.dispatch('OPEN_FOLDER_MODAL_EDIT', { id: this.id })
            },
        }
    }
</script>

