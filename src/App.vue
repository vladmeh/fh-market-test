<template>
    <div id="app">
        <header class="bg-blue-800 py-4 shadow-md">
            <nav class="container mx-auto px-4 flex flex-wrap items-center justify-between text-white">
                <router-link to="/" class="text-2xl">Fitness House Market</router-link>
                <button class="bg-transparent text-gray-500 hover:text-gray-300 py-2 px-4 border border-gray-500 hover:border-gray-300 rounded focus:outline-none">
                    <span v-if="cartItemCount !== 0"
                          v-text="cartItemCount"
                          class="bg-white px-3 rounded-full mr-2 text-blue-900 text-sm"
                    ></span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="stroke-current inline-block h-4 w-4 mb-1 mr-1">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Корзина
                </button>
            </nav>
        </header>
        <router-view @add-cart="addCart"/>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                cartItemCount: 0
            }
        },
        watch: {
            cartItemCount() {
                return this.cartItemCount;
            }
        },
        methods: {
            addCart() {
                return this.cartItemCount++;
            }
        }
    }
</script>