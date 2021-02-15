<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar.active"
      :timeout="3000"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="toggle"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters , mapMutations } from 'vuex';

export default {
    computed: {
      ...mapGetters({
          snackbar: 'ui/snackbar',
      })
    },
    methods: {
      ...mapMutations({
          toggle: 'ui/toggleSnackBar' // map `this.add()` to `this.$store.commit('increment')`
      }),
    }
}
</script>