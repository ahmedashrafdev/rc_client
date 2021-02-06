<template >
  <div :class="{noScroll : appDrawer}">
    <app-nav/>
    <Nuxt />
    <app-footer/>
    <div :class="{overlay : appDrawer}" @click.prevent="toggleNav(false)" class="transition"></div>
  </div>
</template> 

<script>
import AppFooter from '@/components/layouts/AppFooter.vue'
import AppNav from '@/components/layouts/AppNav.vue'
import { mapGetters , mapMutations } from 'vuex';
export default {
  components: {
    AppFooter,
    AppNav,
  },
  computed: {
    ...mapGetters({
         appDrawer: 'ui/appDrawer'
     })
  },
  methods:{
    ...mapMutations({
      toggleNav: 'ui/setAppDrawer' // map `this.add()` to `this.$store.commit('increment')`
    })
  }
  
}
</script>

 <style src="@/assets/scss/global.css"></style>
