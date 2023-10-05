<template>
    <header>
        <nav>
            <ul>
                <li><router-link to='/'>Tab 1</router-link></li>
                <li><router-link to='/tab2'>Tab 2</router-link></li>
                <li><router-link to='/tab3'>Tab 3</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="scss">
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border: 1px solid $background;
    border-top: none;
    color: $light-blue;
    background-color: #ffffff;
    height: 3.18rem;

    nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        ul {
            padding: 0;
            display: flex;
            flex-direction: row;
            list-style: none;
            justify-content: center;

            li {
                a {
                    text-decoration: none;
                    padding: 0 0 1rem 0;

                }

                .router-link-exact-active {
                    border-bottom: 1px solid $black;
                }
            }

            li:not(:first-child) {
                margin-left: 2rem;
            }

            //    li:active{
            //      border-bottom: 1px solid red;
            // }
        }
    }
}

@media (min-width: 47rem) {
    header {
        width: 90%;
        margin: 0 auto;

        nav {
            justify-content: flex-end;

            ul {
                margin-right: 2rem;

                li {
                    margin-left: 2rem;

                    a {
                        padding: 0 2rem 1rem 2rem;

                    }
                }

                li:not(:first-child) {
                    margin-left: 1rem;
                }
            }
        }
    }
}</style>