<script>
import axios from "axios";

export default {
    name: "SingleProject",
    data() {
        return {
            apiUrl: "http://localhost:8003/api/",
            loading: false,
            loadingError: false,
            project: null
        }
    },
    methods: {
        //metodo per utilizzare axios
        getProject(id) {
            this.loading = true;
            axios.get(this.apiUrl + "projects/" + id).then((response) => {
                this.project = response.data.results;
                this.loading = false;

            }).catch(err => {
                this.loading = false;
                this.loadingError = "Errore nel caricamento dei dati";
            });
        }

    },
    mounted() {
        this.getProject(this.$route.params.id);
    }
}
</script>

<template>
    <section v-if="project">
        <div class="card p-3 m-3 rounded-3">
            <h2 class="c_green">{{ project.title }}</h2>
            <h3>{{ project.type ? project.type.travel : "Nessuno" }}</h3>
            <img :src="'http://127.0.0.1:8003/storage/' + project.thumb" :alt="project.title">
            <ul class="list-group my-3">
                <li class="list-group-item" v-for="tech in project.technology">
                    {{ tech.name }}
                </li>
            </ul>
            <p class="my-3">{{ project.description }}</p>
        </div>
    </section>
</template>

<style scoped>
div.card {
    background-color: #cadec8;
}

img{
    width: 400px;
    height: 400px;
    object-fit: cover;
}

.btn {
    background-color: #3e7e55;
}

li {
    background-color: #eaeee5;
    color: #3e7e55;
}
</style>