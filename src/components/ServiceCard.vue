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
            <h3 class="font-bold text-xl" v-text="service.name"></h3>
            <p class="text-sm text-gray-600 mb-4" v-text="textClub"></p>
            <p class="text-gray-700 text-base" v-html="service.description"></p>
        </div>
        <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
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
