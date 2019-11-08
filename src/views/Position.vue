<template>
    <div class="container mx-auto my-12">
        <ServicePosition :service="service" @add-cart="addCart"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import ServicePosition from "../components/ServicePosition";

    export default {
        name: "Position",
        components: {
            ServicePosition
        },
        data() {
            return {
                service: {},
            }
        },
        created() {
            axios.get('./../data/services.json')
                .then(response => {
                    this.service = response.data.services.find(
                        data => data.alias === this.$route.params.alias
                    );
                });
        },
        methods: {
            addCart(){
                return this.$emit('add-cart');
            }
        }
    }
</script>
