<template>
    <div class="container mx-auto my-12">
        <h1 v-text="name"></h1>
    </div>
</template>

<script>
    export default {
        name: "Position",
        props: {
            name: {
                type: String,
                default: 'Position'
            }
        }
    }
</script>
