


<template>
    <section :class="['card', type + '-card']">
        <article>
            <img src="../../assets/imgs/cards/card_1.png" alt="Imagen ilustrativa para la carta asociada.">
        </article>

        <article class="card-content">

            <h3>
                <!-- {{ title }} -->
                Titulo
            </h3>

            <p>
                <!-- {{ description }} -->
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, repudiandae sequi. Delectus veritatis
                voluptatum quasi, sint, ducimus velit placeat, eos nemo dicta dolores inventore omnis maiores tenetur
                blanditiis laudantium soluta?
            </p>

            <div>
                <p>May 05th 2005</p>
                <!-- <p>{{ date }}</p> -->
                <!-- ROUTER LINK   -->
                <button>Read More</button>
            </div>
        </article>
    </section>
</template>
  
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'large',
            validator: (value) => ['simple', 'medium', 'large'].includes(value),
        },
        imageUrl: String,
    },
};
</script>
  
<style scoped>
.card {
    border-radius: 0.3125rem;
    border: 1px solid #E2E2E2;
    background: #FFF;
    box-shadow: 0px 5px 4px 0px rgba(221, 221, 221, 0.25);

}

.simple-card {
    display: flex;
    flex-direction: column;
    width: 18.75rem;
    height: 23.875rem;
}

.simple-card article img {
    width: 18.75rem;
    height: 11.1875rem;
    flex-shrink: 0;
}

.simple-card .card-content {
    width: 18.75rem;
    height: 12.6875rem;
    flex-shrink: 0;
}

.simple-card .card-content h3 {
    color: var(--800, #2D3748);
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 15.3125rem;
    margin: .7rem auto;


}

.simple-card .card-content>p {
    overflow: hidden;
    -webkit-line-clamp: 5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    color: var(--600, #718096);
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 16.125rem;
    margin: auto;
    margin-bottom: .5em;
}


.simple-card .card-content div {
    display: flex;
    justify-content: space-between;
    width: 17.125rem;
    align-items: center;
    margin: auto;
}

.simple-card .card-content div>button {
    color: var(--800, #2D3748);
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    border: none;
    width: 4.6rem;
    background-color: transparent;
    cursor: pointer;
}

.simple-card .card-content div>p {
    color: var(--600, #718096);
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 5.75rem;
}

.medium-card {
    width: 60.375rem;
    height: 15.1875rem;
    flex-shrink: 0;
    background: #FFF;
    display: flex;
    flex-direction: row-reverse;

}


.medium-card article img {
    width: 27.07763rem;
    height: 15.1875rem;
    flex-shrink: 0;
}

.medium-card .card-content {
    margin: 1rem auto;
    width: 33.29737rem;
    height: 15.1875rem;
    flex-shrink: 0;
}

.medium-card .card-content h3 {
    color: var(--800, #2D3748);
    font-family: Inter;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 15.39219rem;
    margin: 1rem auto;
}

.medium-card .card-content>p {
    overflow: hidden;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    color: var(--600, #718096);
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 25.19288rem;
    margin: auto;
    margin-bottom: .5em;
}

.medium-card .card-content div {
    display: flex;
    justify-content: space-between;
    width: 17.125rem;
    align-items: center;
    margin: auto;
}

.medium-card .card-content div>button {
    color: var(--800, #2D3748);
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    border: none;
    width: 4.6rem;
    background-color: transparent;
    cursor: pointer;
}

.medium-card .card-content div>p {
    color: var(--600, #718096);
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 5.75rem;
}


.large-card {
    width: 60.3125rem;
    height: 31.25rem;
    flex-shrink: 0;
    background: #FFF;
    display: flex;
    flex-direction: row-reverse;

}


.large-card article img {
    width: 32.8125rem;
    height: 31.25rem;
    flex-shrink: 0;
}

.large-card .card-content {
    padding-top: 6rem;
    width: 27.5rem;
    height: 25.25rem;
    flex-shrink: 0;
    background: var(--100, #F7FAFC);
}

.large-card .card-content h3 {
    color: #000;
    font-family: Inter;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 1rem auto;
    width: 19.25rem;
}

.large-card .card-content>p {
    color: var(--600, #718096);
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 19.4375rem;
    margin: auto;
    margin-bottom: .5em;
}

.large-card .card-content div {
    display: flex;
    justify-content: space-between;
    width: 25rem;
    align-items: center;
    margin: auto;
}

.large-card .card-content div>button {
    color: #000;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    width: 7.6rem;
    background-color: transparent;
    cursor: pointer;
}

.large-card .card-content div>p {
    color: var(--700, #4A5568);
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 7.75rem;
}
</style>
  