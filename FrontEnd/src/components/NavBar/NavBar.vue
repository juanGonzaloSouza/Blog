<template>
    <header>
        <nav role="navigation" class="container">

            <section class="logo-bar">
                <router-link to="/" class="link">
                    <img src="../../assets/icons/default-logo.png" alt="Logo de la empresa.">
                </router-link>
            </section>

            <section class="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="searchValue" placeholder="Search...">
            </section>

            <section class="navegation-bar">
                <article>
                    <ul>
                        <router-link to="/" class="link">Home</router-link>
                        <router-link to="/articles" class="link">Articles</router-link>
                    </ul>
                </article>
                <article>
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
                </article>
            </section>

        </nav>
    </header>
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>
<style scoped>
header {
    width: 100%;
    background-color: #fff;
    height: 4rem;
    border-bottom: 1px solid #ddd;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}

nav {
    width: 95%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

nav .logo-bar {
    left: 0;
}

nav .logo-bar img {
    height: 4rem;
}

nav .search-bar {

    width: 10vw;
    margin: auto;
    text-align: center;
}

nav .search-bar i {
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-right: 5px;
}

nav .search-bar input {
    color: var(--600, #718096);
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
    border: none;
    width: 6rem;

}

nav .navegation-bar {
    display: flex;
    flex-direction: row;
    width: 10vw;
    justify-content: center;
    align-items: center;
}

nav .navegation-bar article ul {
    list-style: none;
    display: flex;
    flex-direction: row;
}

nav .navegation-bar article ul .link,
nav .navegation-bar article ul li {
    color: #000;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
    text-decoration: none;
}
</style>