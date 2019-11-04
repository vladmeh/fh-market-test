<template>
    <div class="container mx-auto my-12">
        <div class="flex -mx-2">
            <div class="w-1/3 px-2"
                 v-for="service in services"
            >
                <ServiceCard
                        :clubs-length="clubs.length"
                        :service="service"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ServiceCard from "../components/ServiceCard";

    export default {
        name: "Service",
        components: {
            ServiceCard
        },
        data() {
            return {
                services: [],
                clubs: []
            }
        },
        created() {
            axios.get('../data/clubs.json')
                .then( response => {
                    this.clubs = response.data.clubs;
                });

            axios.get('../data/services.json')
                .then( response => {
                    this.services = response.data.services;
                });
        }
    }
</script>
