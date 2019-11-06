<template>
    <div class="container mx-auto">
        <div class="flex my-6">
            <div class="mx-4 relative w-1/5" v-for="(item, key) in filtersServices">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        v-model="select_filter[key]"
                >
                    <option value="" v-text="key"></option>
                    <option v-for="value in item" v-text="value"></option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="-mx-2 flex flex-wrap my-6">
            <div class="w-1/3 px-2 py-4"
                 v-for="service in filteredService"
            >
                <ServiceCard :service="service" />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';
    import ServiceCard from "../components/ServiceCard";

    export default {
        name: "Service",
        components: {
            ServiceCard
        },
        data() {
            return {
                services: [],
                select_filter: {}
            }
        },
        created() {
            axios.get('../data/services.json')
                .then(response => {
                    this.services = response.data.services;
                })
                .then(() => {
                    this.select_filter = _.reduce(this.getProperties(), (groups, item) => {
                        groups[item.title] = groups[item.title] || {};
                        groups[item.title] = "";

                        return groups;
                    }, {});
                })
            ;
        },
        computed: {
            filtersServices() {
                return _.mapValues(
                        _.groupBy(this.getProperties(), 'title'),
                        list => _.uniqWith(
                            _.map(list, item => _.omit(item, 'title').value),
                            _.isEqual
                        ));
            },
            filteredService() {
                const services = _.forEach(this.services, service => {
                    _.map(service.properties, property => {
                        return service[property.title] = property.value
                    })
                });

                return _.filter(services, service => {
                    let conditions = [];

                    _.forEach(this.select_filter, (value, key) => {
                        if (!service[key]) service[key] = '';
                        conditions.push(service[key].indexOf(value) > -1)
                    });
                    return conditions.every(conditions => conditions);
                })
            }
        },
        methods: {
            getProperties(){
                let filters = [];
                this.services.forEach(item => {
                    item.properties.forEach(prop => filters.push({title: prop.title, value: prop.value}));
                });

                return filters;
            }
        },
    }
</script>
