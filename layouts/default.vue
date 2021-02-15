<template >
  <v-app>
    <div :class="{noScroll : appDrawer}">
      <app-nav/>
      <breadcrumbs v-if="$route.name !=='index'"/>
      <Nuxt />
      <app-footer/>
      <div :class="{overlay : appDrawer}" @click.prevent="toggleNav(false)" class="transition"></div>
      <delete-modal @remove="remove"/>
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
export default {
  components: {
    AppFooter,
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
  
}
</script>

 <style src="@/assets/scss/global.css"></style>
