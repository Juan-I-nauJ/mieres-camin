<template>
    <header class="header">
        <nav class="nav"> 
            <ul class="nav__ul">
                <li class="nav__li"><router-link class="nav__li--a" to='/'>Tab 1</router-link></li>
                <li class="nav__li"><router-link class="nav__li--a" to='/tab2'>Tab 2</router-link></li>
                <li class="nav__li"><router-link class="nav__li--a" to='/tab3'>Tab 3</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
//...
</script>

<style scoped lang="scss">
.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-width: 80rem;
    border: 1px solid $background;
    border-top: none;
    font: $tab-title-font;
    color: $light-blue;
    background-color: #ffffff;
    height: 3.18rem;
    box-shadow: 0.1px 0.6px 0.6px 0.7px rgba(78, 81, 86, 0.1);

    .nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .nav__ul {
            padding: 0;
            display: flex;
            flex-direction: row;
            list-style: none;
            justify-content: center;

            .nav__li {
                .nav__li--a {
                    text-decoration: none;
                    padding: 0 0 1rem 0;
                    color: $light-blue;

                }

                .router-link-exact-active {
                    border-bottom: 1px solid $black;
                    color: $mid-blue;
                }
            }

            .nav__li:not(:first-child) {
                margin-left: 2rem;
            }
        }
    }
}

@media (min-width: 47rem) {
    .header {
        width: 90%;
        margin: 0 auto;

        .nav {
            justify-content: flex-end;

            .nav__ul {
                margin-right: 2rem;

                .nav__li {
                    margin-left: 2rem;

                    .nav__li--a {
                        padding: 0 2rem 1rem 2rem;

                    }
                }

                .nav__li:not(:first-child) {
                    margin-left: 1rem;
                }
            }
        }
    }
}</style>