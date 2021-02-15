<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="contacts">
                    <h3 class="footer__header">Need Help?</h3>
                    <ul>
                        <li>
                            <span>Call us on</span>
                            <span class="black-font">01125115718</span>
                        </li>
                        <li>
                            <span>or email us at</span>
                            <span class="black-font">info@readerscorner.co</span>
                        </li>
                    </ul>
                </div>
                <div class="links">
                    <h3 class="footer__header">Product Links</h3>
                    <div class="links_wrapper">
                        <ul class="left">
                        <li>KIDS</li>
                        <li>ADULTS</li>
                        <li>ADULTS</li>
                        <li>ARABIC</li>
                        <li>FRENCH KIDS</li>
                    </ul>
                    <ul class="right">
                        <li>FICTION</li>
                        <li>NONFICTION</li>
                        <li>KIDS COLLECTION</li>
                        
                    </ul>
                    </div>
                    
                </div>
                <div class="account">
                    <h3 class="footer__header">Customers Account</h3>
                    <ul>
                        <li>Sign in</li>
                        <li>Create New Account</li>
                        <nuxt-link tag="li" :to="{name:'shop-cart'}">My Shopping Cart</nuxt-link>
                        <li>My Wishlist</li>
                        <li>Recently Viewed</li>
                        <li>User Dashboard</li>
                    </ul>
                </div>
                <div class="about">
                    <h3 class="footer__header">About Us</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Advertise With Us</li>
                        <li>Policies</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <hr class="pb-50">
            <hr class="pb-0">
            <div class="copyrights">
                <span>&copy; All Copyrights Reserved To <a href="http://esolve-eg.com">ESOLVE</a></span>
            </div>
        </div>
    </footer>
</template>


<style  scoped src="@/assets/scss/layouts/footer.css"></style>
