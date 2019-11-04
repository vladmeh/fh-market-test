<template>
    <div class="flex">
        <div class="w-2/5">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full"
                     :src="service.image"
                     :alt="service.name"
                />
            </div>
        </div>
        <div class="w-2/5">
            <h3 class="font-bold text-xl" v-text="service.name"></h3>
            <p class="text-gray-700 text-base py-4" v-html="service.description"></p>
            <ul class="my-5">
                <li class="text-sm text-gray-700"
                      v-for="property in service.properties"
                >
                    <span v-text="property.name + ' - '"></span>
                    <span class="font-semibold" v-text="property.value"></span>
                </li>
            </ul>
            <div class="flex">
                <p class="font-medium text-blue-700">
                    <span class="text-4xl" v-text="service.price"></span>
                    <span class="text-sm"> руб.</span>
                </p>
                <button class="button button-blue self-center ml-20">Купить</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServicePosition",
        props: {
            service: Object
        }
    }
</script>
