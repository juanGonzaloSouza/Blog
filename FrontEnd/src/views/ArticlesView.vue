<template >
  <NavBar />
  <main class="container">
    <section class="img-container">
      <img src="../assets/imgs/decorations/dec_3.png" alt="">
    </section>

    <section>
      <article>
        <h2>Finibus Bonorum et Malorum</h2>
        <p><span>Written by Jhon Doe</span> Monday, May 20</p>
      </article>
      <hr>
      <article>
        <h3>Section 1</h3>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </article>
      <article>
        <h3>Section 2</h3>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </article>
      <article>
        <h3>Section 3</h3>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </article>
      <article class="button-container">
        <a href="https://www.google.com/search?q=know+more" target="_blank">Know More</a>
      </article>

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
main .img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

main .img-container img {
  margin: 3rem auto;
  width: 60.8125rem;
  height: 23.77344rem;
  flex-shrink: 0;
  align-self: center;

}

h2 {
  margin-top: 3rem;
  height: 2.875rem;
  flex-shrink: 0;
  color: var(--800, #2D3748);
  font-family: Inter;
  font-size: 2.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

}

p {
  margin: 1rem 0;
  color: var(--600, #718096);
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}


hr {
  margin: 3rem 0;
  height: 0.0625rem;
}

p>span {
  color: var(--800, #2D3748);
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 12.6875rem;
  height: 1.4375rem;
  flex-shrink: 0;

}

h3 {
  color: var(--800, #2D3748);
  font-family: Inter;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.button-container{
  display: flex;
  justify-content: right;
  align-items: center;
}

a {
  text-decoration: none;
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 10rem;
}

a:hover,
a:focus {
  opacity: .75;
}
</style>