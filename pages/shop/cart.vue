<template>
    <div class="cart">
        <div class="page-header">
            <div class="explore">
                <h1>Cart</h1>
            </div>
        </div>
        <div class="cart__wrapper container">
            <div class="cart__tabs">
                <v-tabs
                    v-model="tab"
                    centered
                    >
                    <v-tab
                        v-for="(tab , index) in tabs"
                        :key="index"
                        :disabled="tab.disabled"
                    >
                       {{tab.text}}
                    </v-tab>
                </v-tabs>
            </div>
            <div class="cart__content">
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <cart-products/>
                    </v-tab-item>
                    <v-tab-item>
                        <cart-billing/>
                    </v-tab-item>
                    <v-tab-item>
                        <cart-completed/>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </div>
    </div>
</template>
<script>
import CartProducts from "@/components/partials/CartProducts.vue"
import CartCompleted from "@/components/partials/CartCompleted.vue"
import CartBilling from "@/components/partials/CartBilling.vue"
  export default {
    data () {
      return {
        tab: null,
        tabs: [
          { text :'1. Shopping Cart' , disabled : false},
          { text :'2. Billing Information' , disabled : false},
          { text :'3. Completed' , disabled : true},
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    components:{
        CartProducts,
        CartBilling,
        CartCompleted
    }
  }
</script>
 <style  scoped src="@/assets/scss/pages/cart.css"></style>
