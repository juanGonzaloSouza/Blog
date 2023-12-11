<template>
    <nav role="navigation">

        <section class="logo-bar">
            <img src="../../assets/icons/default-logo.png" alt="Logo de la empresa.">
        </section>

        <section class="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="searchValue" placeholder="Search...">
        </section>

        <section class="navegation-bar">
            <article>
                <ul>
                    <li>Home</li>
                    <li>Articles</li>
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
</template>

<style scoped>
nav {
    height: 4rem;
    width: 100vw;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 4rem;
}

nav .logo-bar {}

nav .logo-bar img {
    height: 4rem;
}

nav .search-bar {
    width: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

nav .navegation-bar {
    display: flex;
    flex-direction: row;

}
</style>