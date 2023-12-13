<template >
  <NavBar />
  <main>
    <section>
      <img src="../assets/imgs/decorations/dec_3.png" alt="">
    </section>

    <section>
      <h2></h2>
      <p><span>Written by Jhon Doe</span> Monday, May 20</p>
      <hr>
      <h3></h3>
    </section>
  </main>
  <Footer />
</template>

<script>
import NavBar from '../components/NavBar/NavBar.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
main section>img {
  width: 60.8125rem;
  height: 23.77344rem;
  flex-shrink: 0;
}
</style>