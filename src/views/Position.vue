<template>
    <div class="container mx-auto my-12">
        <ServicePosition
                :clubs-length="clubs.length"
                :service="service"
        />
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
                clubs: [],
            }
        },
        created() {
            axios.get('../data/clubs.json')
                .then( response => {
                    this.clubs = response.data.clubs;
                });
            axios.get('../data/services.json')
                .then(response => {
                    this.service = response.data.services.find(
                        data => data.alias === this.$route.params.alias
                    );
                });
        }
    }
</script>
