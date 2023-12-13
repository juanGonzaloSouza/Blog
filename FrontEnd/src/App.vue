<template>
  <div>
    <Loader v-if="isLoading" />
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from './components/Loader/Loader.vue';

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    simulateAsyncOperation() {
      setTimeout(() => {
        this.isLoading = false;
      }, 4000);
    },
  },
  created() {
    this.simulateAsyncOperation();
  },
  components: {
    Loader,
  },
};
</script>

