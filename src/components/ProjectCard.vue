<script>
import axios from 'axios';

export default {
    name: "ProjectCard",
    data() {
        return {
            apiUrl: "http://localhost:8003/api/",
            loading: false,
            loadingError: false,
            projects: [],
        }
    },
    methods: {
    //metodo per utilizzare axios
    getProjects() {
        this.loading = true;
        axios.get(this.apiUrl + "projects").then((response) => {
            this.projects = response.data.results;
            this.loading = false;
        }).catch(err => {
            this.loading = false;
            this.loadingError = "Errore nel caricamento dei dati";
        });
    }

    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- utilizzo il caricamento in corso nel caso di errori -->
            <div class="col-12 p-3 d-flex justify-content-center">
                <h2 class="text-white">Luoghi visitati</h2>
                <h6 v-if="loading">Caricamento in corso</h6>
                <h6 v-if="loadingError">{{ this.loadingError }}</h6>
            </div>
            <!-- stampo nella pagina utilizzando i metodi di vue -->
            <div class="col-12 d-flex flex-wrap justify-content-center">
                <div class="card p-3 m-3 rounded-3" v-for="project in projects">
                    <h2 class="c_green">{{ project.title }}</h2>
                    <img :src=" 'http://127.0.0.1:8003/storage/' + project.thumb" :alt="project.title">
                    <router-link class="btn text-white text-decoration-none my-3" :to="{ name:'single-project', params: {id: project.id}}">{{ project.title }}</router-link>
                    <a class="btn text-white text-decoration-none" :href="project.link">Wikipedia</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.card {
    background-color: #cadec8;
}

img{
    width: 300px;
    height: 300px;
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