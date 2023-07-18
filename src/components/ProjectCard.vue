<script>
import axios from 'axios';

export default {
    name: "ProjectCard",
    data() {
        return {
            chiave: "valore",
            apiUrl: "http://localhost:8000/api/",
            loading: false,
            loadingError: false,
            projects: [],
        }
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(this.apiUrl + "projects").then((response) => {
                this.projects = response.data.results;
                this.loading = false;
                console.log(response.data.results);
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
            <div class="col-12 p-3 d-flex justify-content-center">
                <h2 class="text-white">Città visitate</h2>
                <h6 v-if="loading">Caricamento in corso</h6>
                <h6 v-if="loadingError">{{ this.loadingError }}</h6>
            </div>

            <div class="col-12 d-flex flex-wrap justify-content-center">
                <div class="card text-white p-3 m-3 rounded-3" v-for="project in projects" style="width: 30rem;">
                    <h2>{{ project.title }}</h2>
                    <img :src="project.thumb" :alt="project.title">
                    <h3>{{ project.type ? project.type.travel : "Nessuno" }}</h3>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="tech in project.technology">
                            {{ tech.name }}
                        </li>
                    </ul>
                    <p class="my-3">{{ project.description }}</p>
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

.btn{
    background-color: #3e7e55;
}

li{
    background-color: #eaeee5;
    color: #3e7e55;
}
</style>