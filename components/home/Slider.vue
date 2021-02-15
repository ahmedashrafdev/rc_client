<template>
     <div class="app__slider"  id="ThemesSlideshow">
          <v-carousel
            :hide-delimiters="true"
            :show-arrows="false"
            v-model="currentSLide"
          >
            <v-carousel-item class="slider" v-for="i in 3" :key="i">
              <div class="container h-full  relative">
                <div class="h-full">
                      <div class="slider__wrapper h-full ">
                        <div class="slider__content">
                          <div class="tag">BOOKS{{i}}</div>
                          <div class="header">LOVE OF</div>
                          <div class="sub-header">STORY</div>
                          <div class="slider-btn">
                            <a href="">SHOP NOW</a>
                          </div>
                        </div>
                        <div class="slider__img">
                          <figure>
                              <img src="@/assets/images/tangel.png" alt="">
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
            <div class="slider__indicators">
              <span :class="{active : i == currentSLide + 1}"  v-for="i in 3" @click="currentSLide = i - 1" :light="true" :key="i"></span>
            </div> 
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
