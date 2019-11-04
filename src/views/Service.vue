<template>
    <div class="container mx-auto my-12">
        <div class="-mx-2 flex flex-wrap">
            <div class="w-1/3 px-2 py-4"
                 v-for="service in services"
            >
                <ServiceCard
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
            }
        },
        created() {
            axios.get('../data/services.json')
                .then( response => {
                    this.services = response.data.services;
                });
        }
    }
</script>
