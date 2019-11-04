<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <router-link
                tag="img"
                :to="{name: 'position', params: {alias: service.alias, name: service.name}}"
                class="w-full cursor-pointer"
                :src="service.image"
                :alt="service.name"
        ></router-link>
        <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-6" v-text="service.name"></h3>
            <p class="text-gray-700 text-base" :text-content.prop="service.description | truncate(100)"></p>
        </div>
        <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                  v-for="property in service.properties"
                  v-text="'#' + property.value"
            ></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceCard",
        props: {
            service: Object
        }
    }
</script>
