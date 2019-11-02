<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <router-link
                tag="img"
                :to="{name: 'position', params: {alias: service.alias, name: service.name}}"
                class="w-full cursor-pointer"
                :src="service.image" :alt="service.name"
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
        data() {
            return {
                clubs: [
                    {id: 1, title: 'FH на Энгельса'},
                    {id: 2, title: 'FH на Чкаловской'},
                    {id: 3, title: 'FH на Хасанской'},
                    {id: 4, title: 'FH на Фучика'},
                    {id: 5, title: 'FH на Таллинском'},
                    {id: 6, title: 'FH на Стачек'},
                    {id: 7, title: 'FH на Софийской'},
                    {id: 8, title: 'FH на Северном'},
                    {id: 9, title: 'FH на Савушкина'},
                    {id: 10, title: 'FH на Пулковском'},
                ],
                service: {
                    name: 'Абонемент Fitness House',
                    alias: 'abonement-fitness-house',
                    club: 'Fh club name',
                    description: 'Абонемент на посещение одного спортивного клуба сети Fitness House в течении 1 года но не более 100 занятий в утреннее время.',
                    image: './images/fitness-1.jpg',
                    properties: [
                        {name: 'Количество занятий', value: '100 занятий'},
                        {name: 'Срок действия', value: '1 год'},
                        {name: 'Время посещения', value: 'Утро'},
                        // { name : 'Категория тренера', value: 'мастер-тренер'},
                        // { name : 'Тип секции', value: 'вода'},
                    ],
                    positions: [
                        {club_Id: 1, price: 1000},
                        {club_id: 2, price: 1000},
                        {club_id: 3, price: 1000},
                        {club_id: 4, price: 1000},
                        {club_id: 5, price: 1200},
                        {club_id: 6, price: 1200},
                        // {club_id: 7, price: 1000},
                        // {club_id: 8, price: 1200},
                        // {club_id: 9, price: 1500},
                        // {club_id: 10, price: 1500},
                    ]
                }
            }
        },
        computed: {
            textClub() {
                if (this.service.positions.length !== 0) {
                    if (this.service.positions.length === this.clubs.length) {
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
