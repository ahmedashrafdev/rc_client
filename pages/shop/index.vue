<template>
  <div class="app">
    <div class="page-header">
        <div class="explore">
          <h1>explore our products</h1>
        </div>
        <div class="count">
          <span>showing  1,304 proucts</span>
        </div>
    </div>
    <div class="app__wrapper">
      <div class="container">
        <div class="home__grid">
          <div class="sidebar">
            <ProductsSidebar/>
          </div>
          <div class="products">
            <sidebar-categories />
            <div class="products__top border-b py-4 flex justify-between items-center">
              <div class="icons flex">
                <!-- <div class="icon-1 mr-4">1</div>
                <div class="icon-2">2</div> -->
              </div>
              <div class="controllers flex">
                <div class="sortby mr-4">
                  <v-select
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Sort by"
                    class="w-32"
                    single-line
                  ></v-select>
                </div>
                <div class="showing"><v-select
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Showing"
                    class="w-24"
                    single-line
                  ></v-select></div>
              </div>
            </div>
            <div class="subcategories">
              <v-sheet
                class="mx-auto"
              >
                <v-slide-group
                  multiple
                  show-arrows
                >
                  <v-slide-item
                    v-for="n in 25"
                    :key="n"
                    v-slot="{ active, toggle }"
                  >
                    <v-btn
                      class="mx-2 sub-cat"
                      :input-value="active"
                      active-class="active white--text"
                      depressed
                      @click="toggle"
                    >
                      Options {{ n }}
                    </v-btn>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
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
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>

            <div class="view__all">
              <v-pagination
                v-model="page"
                :length="30"
                :total-visible="10"
              ></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Product from "@/components/partials/Product.vue"
import ProductsSidebar from "@/components/layouts/ProductsSidebar.vue"
import SidebarCategories from "@/components/partials/SidebarCategories.vue"
export default {
  components:{
    Product,
    ProductsSidebar,
    SidebarCategories,
  },
  data () {
    return {
      page:1,
      model: null,
      items: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],
        options: {
            navButtons: true,
            
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                 {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                
               
            ]
        }
    }
}
}
</script>


 <style  scoped src="@/assets/scss/home/main.css"></style>
 <style  scoped src="@/assets/scss/pages/shop.css"></style>
