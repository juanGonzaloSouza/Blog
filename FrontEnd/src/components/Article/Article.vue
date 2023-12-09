<template>
    <!-- v for de los artculos -->
    <section>

        <h2>Article {{ number }}</h2>

        <section>
            <article>
                <p>{{ description }}</p>
            </article>

            <article>

                <p>{{ Writter }}</p>

                <p>{{ date }}</p>
            </article>

            <article>
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
                <span class="sr-only">Like</span>
            </article>
        </section>

    </section>
</template>