<template>
    <main>
        <h1>Blog</h1>

        <section>
            <article>
                <h2>Sign In</h2>
                <p>Don't Have an account? <span>Create Now</span></p>
            </article>
            <article>
                <form action="">

                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email">

                    <label for="passwd">Password</label>
                    <div>

                        <input type="password" id="passwd" name="passwd" placeholder='@"$%'>
                        <!-- <i class="fa-regular fa-eye-slash"></i> -->
                        <button>
                            <i class="fa-regular fa-eye"></i>
                        </button>
                    </div>
                    <div>
                        <input type="checkbox" name="remember" id="remember">
                        <label for="remember">Remember me</label>

                        <!-- router link -->
                        <button>Forgot Password?</button>
                    </div>

                    <button type="submit">Sign In</button>
                </form>
            </article>
            <article>
                <div>
                    <hr>
                    or
                    <hr>
                </div>

                Continue With Google
                Continue With LinkedIn
            </article>
        </section>
        <section>
            <img src="" alt="">
            <h3>Lorem</h3>
            <p>Lorem Lorem Lorem Lorem LoremLorem</p>

            <div>
                <p>buttons</p>
            </div>
        </section>
    </main>
</template>