<template>
  <div class="app">
    <slider />

    <div class="app__wrapper">
      <div class="container">
        <div class="home__grid">
          <div class="sidebar">
            <sidebar/>
          </div>
          <div class="products">
             <SidebarCategories />
           <div class="category-title flex justify-between items-center">
              <h3>drama</h3>
            </div>
            <div class="products__wrapper">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>

            <div class="view__all">
              <h3>View All Books</h3>
            </div> 
            <div class="offer__slider">
              <OfferSlider />
            </div>
             
            
          </div>
          <div class="logos">
             <LogosSlider/>
            
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Product from "@/components/partials/Product.vue"
import Sidebar from "@/components/layouts/Sidebar.vue"
import Slider from "@/components/home/Slider.vue"
import OfferSlider from "@/components/home/OfferSlider.vue"
import LogosSlider from "@/components/home/LogosSlider.vue"
import SidebarCategories from "@/components/partials/SidebarCategories.vue"
export default {
  components:{
    Product,
    Sidebar,
    Slider,
    OfferSlider,
    SidebarCategories,
    LogosSlider
  },
  methods:{
    getProducts(){
      this.$store.dispatch('product/get')
    }
  },
  created(){
    this.getProducts();
  }
}
</script>


 <style  scoped src="@/assets/scss/home/slider.css"></style>
 <style  scoped src="@/assets/scss/home/main.css"></style>
