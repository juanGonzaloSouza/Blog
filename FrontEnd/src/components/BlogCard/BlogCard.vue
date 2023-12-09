<template>
    <!-- V FOR -->
    <!-- vbind al secction para ver si es peque mid o big -->
    <section>
        <!-- flex reverse cuando es banner -->
        <article>
            <img src="../../assets/imgs/cards/{{card}}" alt="Imagen ilustrativa para la carta asociada.">
        </article>

        <article>

            <h3>{{ title }}</h3>

            <p>
                {{ description }}
            </p>

            <div>
                <p>{{ date }}</p>
                <!-- ROUTER LINK   -->
                <button>Read More</button>
            </div>
        </article>
    </section>
</template>