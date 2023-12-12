<template>
    <footer>
        <div class="container">
            <section>
                <p> <strong>Blog</strong> 2024 copyright all rights reserved</p>
            </section>

            <section>
                <ul>
                    <li>
                        <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                        <span class="sr-only">Instagram</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
                        <span class="sr-only">X - twitter</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                        <span class="sr-only">LinkedIn</span>
                    </li>
                </ul>
            </section>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<style scoped>
footer {
    background-color: #fbfbfb;
    width: 100%;

}

footer .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7vh;
}

footer .container section>p {
    color: #000;
    font-family: Inter;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

footer .container section>ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
}

footer .container section>ul>li {
    list-style: none;
    font-size: 1.2rem;

}
</style>