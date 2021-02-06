<template>
     <div class="app__slider"  id="ThemesSlideshow">
          <agile
            :nav-buttons="false"
            :dots="false"
            :pause-on-hover="false"
            :autoplay-speed="5000"
            class="sliders"
            ref="carousel"
          >
            <div class="slider">
              <div class="container h-full  relative">
                <div class="h-full">
                      <div class="slider__wrapper h-full ">
                        <div class="slider__content">
                          <div class="tag">BOOKS</div>
                          <div class="header">LOVE OF</div>
                          <div class="sub-header">STORY</div>
                          <div class="btn">
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
            </div>
            <div class="slider">
              <div class="container h-full  relative">
                <div class="h-full">
                      <div class="slider__wrapper h-full ">
                        <div class="slider__content">
                          <div class="tag">BOOKSs</div>
                          <div class="header">LOVE OF</div>
                          <div class="sub-header">STORY</div>
                          <div class="btn">
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
            </div>
            <div class="slider">
              <div class="container h-full  relative">
                <div class="h-full">
                      <div class="slider__wrapper h-full ">
                        <div class="slider__content">
                          <div class="tag">BOOKS3</div>
                          <div class="header">LOVE OF</div>
                          <div class="sub-header">STORY</div>
                          <div class="btn">
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
            </div>
          </agile>
          <div class="container relative">
            <div class="slider__controllers">
              <div  @click="$refs.carousel.goToPrev()" class="prev rotate-180"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506.134 241.843l-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"/></svg></div>
              <div  @click="$refs.carousel.goToNext()" class="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506.134 241.843l-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"/></svg></div>
            </div>
            <div class="slider__indicators">
              <span class="active" @click="$refs.carousel.goTo(0)"></span>
              <span @click="$refs.carousel.goTo(1)"></span>
              <span @click="$refs.carousel.goTo(2)"></span>
            </div> 
          </div>
    </div>
</template>


 <style  scoped src="@/assets/scss/home/slider.css"></style>
