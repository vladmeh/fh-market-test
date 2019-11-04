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
        <div class="w-3/5">
            <h3 class="font-bold text-xl" v-text="service.name"></h3>
            <p class="text-sm text-gray-600 mb-4" v-text="textClub"></p>
            <div class="py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                      v-for="property in service.properties"
                      v-text="'#' + property.value"
                ></span>
            </div>
            <p class="text-gray-700 text-base my-5" v-html="service.description"></p>
            <div class="flex">
                <p class="font-medium text-blue-700">
                    <span class="text-sm">от </span>
                    <span class="text-4xl">2100</span>
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
            clubsLength: Number,
            service: Object
        },
        computed: {
            textClub() {
                if (this.service.positions && this.service.positions.length !== 0) {
                    if (this.service.positions.length === this.clubsLength) {
                        return 'Во всех клубах'
                    }
                    if (this.service.positions.length > 1) {
                        return this.textCountClubs(this.service.positions.length);
                    }
                    return this.clubs.find(club => club.id === this.service.positions[0].club_Id).title
                }
                return 'Клубов нет';
            }
        },
        methods: {
            textCountClubs(count) {
                return 'В ' + count + ' ' + this.declOfNum(count, ['клубе', 'клубах', 'клубах'])
            },
            declOfNum(n, titles) {
                return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
            }
        }
    }
</script>
