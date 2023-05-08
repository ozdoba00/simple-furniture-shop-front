<template>
    <div class="grid grid-rows-8 grid-flow-col gap-0 overflow-hidden">
        <div class="row-span-6">
            <Menu />
        </div>
        <div class="col-span-2 overflow-hidden ">
            <div class="flex flex-col users-section w-screen h-[80px] bg-gray-700 justify-center">
                <p class="ml-10 text-4xl text-white">{{ this.currentRouteName }}</p>
            </div>
        </div>
        <div class="section flex flex-col">
            <div class="header flex h-[30px] w-screen  bg-gray-100" v-if="componentMethods.length">
                <div class="menu flex flex-row ml-5  justify-center items-center"
                    v-for="componentMethod in componentMethods">
                    <div class="item cursor-pointer text-gray-900">
                        <g v-html="icons[componentMethod]"></g>
                    </div>
                </div>
            </div>

            <div class="relative overflow-x-auto" v-if="headers.length">
                <table class="w-full table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase ">
                        <tr>
                            <th scope="col" class="px-6 py-2" v-for="header in headers">{{ header }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="record in recordsList">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                v-for="recordData in record">{{ recordData }}
                            </td>
                            <td class="flex flex-col">
                                <div>Edit</div>
                                <div>Delete</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <component :is="this.$route.name" @recordsList="getRecordsList" :ref="componentName"></component>
    </div>
</template>
<script>

import Menu from '../../components/admin/Menu.vue'
import Users from '../../components/admin/Users.vue'
import Categories from '../../components/admin/Categories.vue'

import functions from '../../assets/functions';

export default {
    components: {
        Menu,
        Users,
        Categories
    },

    data() {
        return {
            componentMethods: ['add'],
            componentName: functions.firstLetterUppercase(this.$route.name),
            recordsList: [],
            headers: [],
            icons: []
        }
    },

    methods: {
        firstLetterUppercase: functions.firstLetterUppercase,

        getComponentMenuData() {
            this.$nextTick(() => {

                let currentComponent = this.$refs[this.componentName];

                if (currentComponent.headers) {
                    this.headers = currentComponent.getHeaders();
                }
                if (currentComponent.menuIcons) {
                    this.icons = currentComponent.getMenuIcons();
                }
            })
        },

        getRecordsList(data) {
            this.recordsList = data
        },

        clearComponentData() {
            this.recordsList = [];
            this.headers = [];
            this.componentMenuOptions = [];
            this.icons = [];
        }
    },
    watch: {
        $route() {
            this.clearComponentData();
            this.getComponentMenuData();
        }
    },

    computed: {
        currentRouteName() {
            if (this.$route.name === 'admin') {
                return 'Home';
            }
            else {
                return 'Home / ' + functions.firstLetterUppercase(this.$route.name);
            }
        },
    },

    async created() {
        this.getComponentMenuData();
    },
}


</script>
