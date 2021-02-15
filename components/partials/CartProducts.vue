<template>
    <div class="cart-products">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                            Products
                        </th>
                        <th class="text-left">
                            Quantity
                        </th>
                        <th class="text-left">
                            Price
                        </th>
                        <th class="text-left">
                            Total
                        </th>
                        <th class="text-right"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td class="product">
                            <div class="product__wrapper">
                                <div class="product__img">
                                    <figure>
                                            <img src="@/assets/images/tangel.png" alt="">
                                    </figure>
                                </div> 
                                <div class="product__deltails">
                                    <div class="product__title">
                                        <nuxt-link tag="h3" :to="{name:'shop-slug' , params:{slug:'asd'}}">{{product.title}}</nuxt-link>
                                    </div>
                                    <div class="product__author">
                                        <nuxt-link tag="h3" :to="{name:'shop-slug' , params:{slug:'asd'}}">By:{{product.author}}</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="border input p-1">
                                <v-icon
                                    color="gray darken-2"
                                >
                                    mdi-minus
                                </v-icon>
                                <span v-if="product.qty < 10">{{product.qty}}</span>
                                <span v-else>+10</span>
                                <v-icon
                                    color="gray darken-2"
                                >
                                    mdi-plus
                                </v-icon>
                            </div>
                        </td>
                        <td class="price">EGP{{product.price}}</td>
                        <td class="price">
                            <div class="price__wrapper">
                                <span>EGP{{product.price * product.qty}}</span>
                                <v-icon>mdi-delete</v-icon>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <div class="total">
            <div class="coupon">
                <div class="coupon__input rounded-2xl">
                    <input type="search" name="q" class="py-2   text-sm text-white bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Ente Coupon Code..." autocomplete="off">
                </div>
                <div class="btn">
                    <span>APPLY COUPON</span>
                </div>
            </div>
            <div class="sum">
                <span>TOTAL</span>
                <span class="price">EGP400</span>
            </div>
        </div>
        <div class="actions">
            <div class="btn">
                <span>Continue Shopping</span>
            </div>
            <div class="btn">
                <span>Poceed Cheackout</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            products:[
                {
                    author:"ahmed mourad",
                    title :"William's Winter Wish",
                    image :"@/assets/images/tangel.png",
                    qty: 1,
                    price : 200,
                },
                {
                    author:"ahmed mourad",
                    title :"William's Winter Wish",
                    image :"@/assets/images/tangel.png",
                    qty: 1,
                    price : 200,
                }
            ],
        }
    }
}
</script>
 <style  scoped src="@/assets/scss/partials/cart-products.css"></style>
