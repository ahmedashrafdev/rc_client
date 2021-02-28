<template >
  <v-app>
    <div :class="{noScroll : appDrawer}">
      <app-nav/>
      <breadcrumbs v-if="$route.name !=='index'"/>
      <Nuxt />
      <app-footer/>
      <div :class="{overlay : appDrawer}" @click.prevent="toggleNav(false)" class="transition"></div>
      <delete-modal @remove="remove"/>
      <login-modal v-if="!$auth.loggedIn"/>
      <snack-bar/>
    </div>
  </v-app>
</template> 

<script>
import AppFooter from '@/components/layouts/AppFooter.vue'
import AppNav from '@/components/layouts/AppNav.vue'
import breadcrumbs from '@/components/layouts/breadcrumbs.vue'
import { mapGetters , mapMutations , mapActions } from 'vuex';
import DeleteModal from "@/components/modals/DeleteModal.vue"
import SnackBar from "@/components/snackbars/SnackBar.vue"
import LoginModal from "@/components/modals/LoginModal.vue"
export default {
  components: {
    AppFooter,
    LoginModal,
    AppNav,
    breadcrumbs,
    DeleteModal,
    SnackBar
  },
  computed: {
    ...mapGetters({
         appDrawer: 'ui/appDrawer'
     })
  },
  methods:{
    ...mapMutations({
      toggleNav: 'ui/setAppDrawer' // map `this.add()` to `this.$store.commit('increment')`
    }),
    ...mapActions({
      remove: 'global/remove' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  },
  mounted(){
    if(!localStorage.getItem('ip')){
      const r = Math.random()*(200000000000000000000-100000000000000000) + 100000000000000000
      localStorage.setItem('ip', Math.floor(r));
    }

  }
  
}
</script>

 <style src="@/assets/scss/global.css"></style>
