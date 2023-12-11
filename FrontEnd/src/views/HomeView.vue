<template>
  <NavBar />
  <main>
    <section class="main-section">
      <article>
        <p>Make better
          coffee
          <img src="../assets/imgs/decorations/dec_2.svg" alt="Imagen ilustrativa de decoración">
        </p>
      </article>

      <article>
        <img src="../assets/imgs/decorations/dec_1.png" alt="Imagen ilustrativa de decoración">
      </article>
    </section>
    <BlogCard />
  </main>
</template>

<script>
import BlogCard from '../components/BlogCard/BlogCard.vue';
import NavBar from '../components/NavBar/Navbar.vue';
export default {
  components: {
    BlogCard,
    NavBar,
  },
};
</script>

<style scoped>
.main-section {
  background: #FBFBFB;
  width: 100vw;
  overflow-x: hidden;
}

.main-section>article>p {
  color: #000;
  font-family: Inter;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>