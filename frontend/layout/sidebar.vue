<template>
    <v-navigation-drawer 
    v-model="$store.state.LeftDrawer"
    clipped
    hide-overlay
    disable-resize-watcher
    stateless
    >

    <v-btn color="green">Add New Board</v-btn>

    </v-navigation-drawer>
</template>

<script>
    export default {
        data() {
            return {
                BoardList: {}
            }
        },

        methods: {
            createNewBoard() {
                //create a new board object and add it to the current list.
                // maybe add popup model for board params
            },

            selectBoard() {
                // select an active board from the displayed list
                // do not select if currently active
                // maybe move this to the board object if one exists.
            }
        }
    }
</script>

