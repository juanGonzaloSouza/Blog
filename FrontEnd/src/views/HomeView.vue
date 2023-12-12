<template >
  <NavBar />
  <main>
    <section class="main-section">
      <div class="container">
        <article>
          <p>Make better coffee
            <img src="../assets/imgs/decorations/dec_2.svg" alt="Imagen ilustrativa de decoración">
          </p>
          <span>why learn how to blog?</span>
        </article>

        <article>
          <img src="../assets/imgs/decorations/dec_1.png" alt="Imagen ilustrativa de decoración">
        </article>
      </div>
    </section>
    <section class="container">
      <BlogCard />
    </section>
  </main>
</template>

<script>
import NavBar from '../components/NavBar/NavBar.vue';
import BlogCard from '../components/BlogCard/BlogCard.vue';
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 2em;
}

.main-section>div {
  display: flex;
  justify-content: space-between;
}

.main-section>div>article {
  width: 35%;
}

.main-section>div>article>p {
  color: #000;
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

}

.main-section>div>article>span {
  color: var(--700, #4A5568);
  font-family: Inter;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}


.main-section>div>article>img {
  width: 29.75rem;
  height: 20.1875rem;
  flex-shrink: 0;
}
</style>