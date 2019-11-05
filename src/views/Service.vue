<template>
    <div class="container mx-auto my-12">
        <div class="flex">
            <div class="mx-4 relative w-1/5" v-for="(item, key) in services_filters">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        v-model="select_filter[key]"
                >
                    <option v-text="key"></option>
                    <option v-for="value in item" v-text="value"></option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
        </div>
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
                services_filters: [],
                select_filter: []
            }
        },
        created() {
            axios.get('../data/services.json')
                .then(response => {
                    this.services = response.data.services;
                })
                .then(() => {
                    let filters = [];
                    this.services.forEach(item => {
                        item.properties.forEach(prop =>  filters.push(prop));
                    });
                    console.log(filters);
                    this.services_filters = _.mapValues(_.groupBy(filters, 'title'), list => _.uniq(_.map(list, item => _.omit(item, 'title').value)));
                    return _.map(this.services_filters, (item, key) => {
                        return this.select_filter[key] = key;
                    })
                });
        },
        computed: {
            //https://stackoverflow.com/questions/34334769/lodash-filter-nested-object/34335131
            filteredService() {
                return this.select_filter['Категория тренера'];
                // return _.filter(this.services, service => {
                //     let conditions = [];
                //     // _.forEach(this.select_filter, (key, value) => {
                //     //         conditions.push(_.some(service.properties, {
                //     //             'title' : toString(key),
                //     //             'value' : toString(value)
                //     //         }))
                //     // });
                //     conditions.push(_.some(service.properties, {
                //         'title': "Количество занятий",
                //         'value': this.select_filter["Количество занятий"]
                //     }));
                //     return conditions.every(conditions => conditions);
                // })
                // return _.filter(this.services, service => {
                //     return _.some(service.properties, {
                //         'title': "Категория тренера",
                //         'value' : this.select_filter["Категория тренера"]
                //     });
                // })
            }
        }
    }
</script>
