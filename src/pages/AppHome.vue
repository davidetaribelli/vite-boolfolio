<script>

export default {
    name: "AppHome",
    data() {
        return {

        }
    },
}
</script>

<template>
    <section>
        <div class="container d-flex justify-content-center align-items-center" style="height: 90vh;">
            <div class="row">
                <div class="col-12 rounded-3 p-3 d-flex flex-column">
                    <h3> Guarda il tuo Boolfolio</h3>
                    <router-link :to="{name: 'projects'}" class="btn">clicca qui</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .col-12{
        background-color: #eaeee5;
    }
</style>