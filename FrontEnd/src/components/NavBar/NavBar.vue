<template>
    <header>
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
    </header>
</template>

<style scoped>
nav {
    height: 4rem;
    width: 95%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

nav .logo-bar {
    background-color: red;
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
}
</style>