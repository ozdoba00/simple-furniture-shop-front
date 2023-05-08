<template>
    <div class="menu relative flex min-h-screen w-72 bg-gray-800 flex-col">
        <div class="h-[80px] w-full bg-gray-900 flex justify-center items-center">
            <router-link to="/admin">
                <h1 class="text-white text-2xl cursor-pointer">Admin Dashboard</h1>
            </router-link>
        </div>

        <div class="flex flex-col ml-8 mt-6" v-for="menuItem in menuSections">
            <router-link  :to="menuItem.path" active="">
            <div class="menu-list flex mt-2 cursor-pointer text-white hover:text-gray-500">
                
                    <div class="flex">
                        <g v-html="menuItem.icon"></g>
                        <p class="ml-2">{{ firstLetterUppercase(menuItem.name) }}</p>
                    </div>
                
            </div>
        </router-link>
        </div>
    </div>
    
</template>
<script>
import functions from '../../assets/functions';

export default {

    methods: {
        firstLetterUppercase: functions.firstLetterUppercase
    },
    data() {
        return {
            menuSections: []
        }
    },

    async created() {
        this.menuSections = functions.getMenuSections();
    },
}


</script>

<style>
.menu-list .router-link-exact-active {
    color: rgb(122, 122, 122);
    
}

</style>

