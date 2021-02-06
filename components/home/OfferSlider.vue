<template>
    <div class="os__parent">
        <agile
            :nav-buttons="false"
            :dots="false"
            timing='ease-in-out'
            :pause-on-hover="false"
            :fade="true"
            :autoplay-speed="5000"
            class="sliders"
            ref="osCarousel"
            >
            <div class="slider-item">
                <div class="os__slider"  id="ThemesSlideshow">
                        <div class="image">
                        <div class="os__wrapper">
                            <div class="percent-off">
                                <span>30% off</span>
                            </div>
                            <div class="content">
                                <h3 class="tag">
                                    limited deals
                                </h3>
                                <div class="counter">
                                    <div class="hours">
                                        <span>12</span>
                                        <span>hours</span>
                                    </div>
                                    <div class="minutes">
                                        <span>36</span>
                                        <span>minutes</span>
                                    </div>
                                    <div class="seconds">
                                        <span>59</span>
                                        <span>seconds</span>
                                    </div>
                                </div>
                                    <h3 class="title">
                                    
                                </h3>
                                <div class="price">
                                    <del>EGP100</del>
                                    <span>EGP70</span>
                                </div>
                                <div class="show_more">
                                    <a href="">Show More Details</a>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div class="slider-item">
                <div class="os__slider"  id="ThemesSlideshow">
                        <div class="image">
                        <div class="os__wrapper">
                            <div class="percent-off">
                                <span>30% off</span>
                            </div>
                            <div class="content">
                                <h3 class="tag">
                                    limited deals
                                </h3>
                                <div class="counter">
                                    <div class="hours">
                                        <span>12</span>
                                        <span>hours</span>
                                    </div>
                                    <div class="minutes">
                                        <span>36</span>
                                        <span>minutes</span>
                                    </div>
                                    <div class="seconds">
                                        <span>59</span>
                                        <span>seconds</span>
                                    </div>
                                </div>
                                    <h3 class="title">
                                    
                                </h3>
                                <div class="price">
                                    <del>EGP100</del>
                                    <span>EGP70</span>
                                </div>
                                <div class="show_more">
                                    <a href="">Show More Details</a>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div class="slider-item">
                <div class="os__slider"  id="ThemesSlideshow">
                        <div class="image">
                        <div class="os__wrapper">
                            <div class="percent-off">
                                <span>30% off</span>
                            </div>
                            <div class="content">
                                <h3 class="tag">
                                    limited deals
                                </h3>
                                <div class="counter">
                                    <div class="hours">
                                        <span>12</span>
                                        <span>hours</span>
                                    </div>
                                    <div class="minutes">
                                        <span>36</span>
                                        <span>minutes</span>
                                    </div>
                                    <div class="seconds">
                                        <span>59</span>
                                        <span>seconds</span>
                                    </div>
                                </div>
                                    <h3 class="title">
                                    
                                </h3>
                                <div class="price">
                                    <del>EGP100</del>
                                    <span>EGP70</span>
                                </div>
                                <div class="show_more">
                                    <a href="">Show More Details</a>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            
        </agile>
        <div class="os__indicators">
              <span class="active" @click="$refs.carousel.goTo(0)"></span>
              <span @click="$refs.osCarousel.goTo(1)"></span>
              <span @click="$refs.osCarousel.goTo(2)"></span>
            </div> 
    </div>
</template>


 <style  scoped src="@/assets/scss/home/offer_slider.css"></style>
