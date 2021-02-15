<template>
<div class="dcp">
    <div v-if="i > 0">
        <div class="dcp__wrapper" v-for="n in i" :key="n">
            <div class="dcp__remove" @click="i--">
                <span>&times;</span>
            </div>
            <div class="dcp__image">
                <div class="product__img">
                <figure>
                        <img src="@/assets/images/tangel.png" alt="">
                </figure>
            </div>  
            </div>
            <div class="dcp__content">
                <div class="dcp__content-title">
                    <h2>Johnle care the night manager </h2>
                </div>
                <div class="dcp__content-price">
                    <del>EGP200</del>
                    <span>EGP180</span>
                </div>
                <div class="border input p-1">
                    <v-icon
                        color="gray darken-2"
                    >
                        mdi-minus
                    </v-icon>
                    <span v-if="cartCount < 10">{{cartCount}}</span>
                    <span v-else>+10</span>
                    <v-icon
                        color="gray darken-2"
                    >
                        mdi-plus
                    </v-icon>
                </div>
            </div>
        </div>
    </diV>
    <div class="no-items" v-else>
        <h2>No Items On Your Cart</h2>
    </div>

</div>
   
</template>
<script>
export default {
    data(){
        return{
            cartCount:30,
            i :3,
        }
    },
}
</script>
 <style  scoped src="@/assets/scss/partials/dropdown-cart-product.css"></style>
