<template>
    <div class="container profile">
        <h1 class="profile__main--heading">hello!</h1>
        <h1 class="profile__main--heading">jacquline Derry </h1>
        <!-- start button box -->
        <v-tabs v-model="tab" class="profile__box" >
            <v-tab class="btn btn--gray" active-class="active" v-for="(tab , index) in tabs" :key="index">{{tab}}</v-tab>
        </v-tabs>
        <div class="tabs">
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <order-history />
                </v-tab-item>
                <v-tab-item>
                    <shipping-address />
                </v-tab-item>
                <v-tab-item>
                   <wishlist />
                </v-tab-item>
            </v-tabs-items>
        </div>
    </div>
</template>
<script>
import OrderHistory from "@/components/profile/OrderHistory.vue"
import ShippingAddress from "@/components/profile/ShippingAddress.vue"
import Wishlist from "@/components/profile/Wishlist.vue"
// import { preFetch } from "@/utils/preFetchUser.js"
export default {
    middleware: 'auth',
    watchQuery: true,
    data(){
        return {
            tabs : ['order history' , 'shippingaddress' , 'wishlist']
        }
    },
    // fetch: preFetch,
    computed: {
        tab: {
            set(val) {
                const query = val !== null ? {tab :val} : {}
                // this.$route.query = {...this.$route.query, page: `${to.query}`};
                this.$router.push({name : 'profile' , query})
            },
            get() {
                return (this.$route.query.tab || 0);
            }
        }
    },
    components:{
        OrderHistory,
        ShippingAddress,
        Wishlist
    }
}
</script>
    

 <style  scoped src="@/assets/scss/pages/profile.css"></style>
