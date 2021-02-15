<template>
    <div>
        <sidebar-categories />
        <sidebar-authors/>
        <sidebar-publishers/>
        
    </div>
</template>


<script>
import SidebarCategories from "@/components/partials/SidebarCategories.vue"
import SidebarAuthors from "@/components/partials/SidebarAuthors.vue"
import SidebarPublishers from "@/components/partials/SidebarPublishers.vue"

export default {
  components:{
    SidebarPublishers,
    SidebarAuthors,
    SidebarCategories
  }
}
</script>

<style  scoped src="@/assets/scss/layouts/sidebar.css"></style>
