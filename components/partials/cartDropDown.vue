<template>
   <div class="cartdropdown" :class="{active: DCPOpenned == true}">
       <div class="cartdropdown__wrapper">
           <drop-down-cart-product></drop-down-cart-product>
           <!-- <drop-down-cart-product></drop-down-cart-product>
           <drop-down-cart-product></drop-down-cart-product> -->
       </div>
       <div class="cartdropdown__total">
           <span>TOTAL</span>
           <h2>EGP540</h2>
           <nuxt-link :to="{name:'shop-cart'}" class="checkout">View Cart</nuxt-link>
       </div>
       <div class="remove" @click.prevent="toggleDCPOpenned()"><span>&times;</span></div>
   </div>
</template>
<script>
import DropDownCartProduct from "@/components/partials/dropDownCartProduct.vue"
import { mapGetters , mapMutations } from 'vuex';

export default {
    components:{
        DropDownCartProduct,
    },
    computed: {
       ...mapGetters({
            DCPOpenned: 'ui/DCPOpenned'
        })
    },
    methods:{
        ...mapMutations({
          toggleDCPOpenned: 'ui/setDCPOpenned',
        })
    }
}
</script>
 <style  scoped src="@/assets/scss/partials/dropdown-cart.css"></style>
