<template>
     <div class="app__slider"  id="ThemesSlideshow">
          <v-carousel
            :hide-delimiters="true"
            :show-arrows="false"
            v-model="currentSLide"
          >
            <v-carousel-item class="slider">
              <div class="container h-full  relative">
                <div class="h-full">
                      <div class="slider__wrapper h-full ">
                        <div class="slider__content">
                          <div class="tag">BOOKS</div>
                          <div class="header">LOVE OF</div>
                          <div class="sub-header">STORY</div>
                          <div class="slider-btn" @click.prevent="$router.push({name : 'shop-slug' , params : {slug : 'First-Encyclopedia-of-Seas-and-Oceans'}})">
                            <a href="">SHOP NOW</a>
                          </div>
                        </div>
                        <div class="slider__img">
                          <figure>
                              <img src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u9/first_encyclopaedia_of_seas_and_oceans.jpg" alt="">
                          </figure>
                        </div>
                      </div>
                </div>
              </div>
            </v-carousel-item>
            <v-carousel-item class="slider">
              <div class="container h-full  relative">
                <div class="h-full">
                      <div class="slider__wrapper h-full ">
                        <div class="slider__content">
                          <div class="tag">BOOKS</div>
                          <div class="header">LOVE OF</div>
                          <div class="sub-header">STORY</div>
                          <div class="slider-btn" @click.prevent="$router.push({name : 'shop-slug' , params : {slug : 'First-Encyclopedia-of-Seas-and-Oceans'}})">
                            <a href="">SHOP NOW</a>
                          </div>
                        </div>
                        <div class="slider__img">
                          <figure>
                              <img src="https://images-na.ssl-images-amazon.com/images/I/51qgcnB4NDL._SX355_BO1,204,203,200_.jpg" alt="">
                          </figure>
                        </div>
                      </div>
                </div>
              </div>
            </v-carousel-item>
            <v-carousel-item class="slider">
              <div class="container h-full  relative">
                <div class="h-full">
                      <div class="slider__wrapper h-full ">
                        <div class="slider__content">
                          <div class="tag">BOOKS</div>
                          <div class="header">LOVE OF</div>
                          <div class="sub-header">STORY</div>
                          <div class="slider-btn" @click.prevent="$router.push({name : 'shop-slug' , params : {slug : 'First-Encyclopedia-of-Seas-and-Oceans'}})">
                            <a href="">SHOP NOW</a>
                          </div>
                        </div>
                        <div class="slider__img">
                          <figure>
                              <img src="https://d1b14unh5d6w7g.cloudfront.net/1788791118.01.S001.LXXXXXXX.jpg?Expires=1614638824&Signature=e3XZ1azpnvhgcWgqGUmCu+7VPwwaauXoV6WAsy1wp7zyGGeag2FzJIm/6CqgposM8ebZxHDHpspC2wbK2pghYnQLCFPs8fSeFl2Is0kzCJ1pqh2cVezoAz7KR3lc0+/nBmrggkLFwQMtaiLYnO610YYk0qe2Er2P6HZ8Jj9ofKk=&Key-Pair-Id=APKAIUO27P366FGALUMQ" alt="">
                          </figure>
                        </div>
                      </div>
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
          <div class="container relative controllers__wrapper">
            <div class="slider__controllers">
              <div class="prev" @click="currentSLide++"><v-icon >mdi-arrow-left</v-icon></div>
              <div class="next" @click="currentSLide++"><v-icon>mdi-arrow-right</v-icon></div>
            </div>
            <!-- <div class="slider__indicators">
              <span :class="{active : i == currentSLide + 1}"  v-for="i in 3" @click="currentSLide = i - 1" :light="true" :key="i"></span>
            </div>  -->
          </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      currentSLide:0
    }
  }
}
</script>

 <style  scoped src="@/assets/scss/home/slider.css"></style>
