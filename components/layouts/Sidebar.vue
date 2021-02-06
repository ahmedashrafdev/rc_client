<template>
    <div>
        <sidebar-categories />
        <div class="sidebar__bestseller mb-8">
            <div class="header-2">
                <h2>Best Seller Books</h2>
            </div>
            <div class="bestseller-wrapper mb-8">
                <best-seller-product/>
                <best-seller-product/>
                <best-seller-product/>
                <best-seller-product/>
            </div>
        </div>
        <div class="sidebar__ad">
            <sidebar-ad-product />
        </div>
    </div>
</template>


<script>
import SidebarCategories from "@/components/partials/SidebarCategories.vue"
import BestSellerProduct from "@/components/partials/BestSellerProduct.vue"
import SidebarAdProduct from "@/components/partials/SidebarAdProduct.vue"

export default {
  components:{
    BestSellerProduct,
    SidebarAdProduct,
    SidebarCategories
  }
}
</script>

<style  scoped src="@/assets/scss/layouts/sidebar.css"></style>
