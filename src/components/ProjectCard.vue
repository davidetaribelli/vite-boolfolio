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
            <h2>Città visitate</h2>
            <h6 v-if="loading">Caricamento in corso</h6>
            <h6 v-if="loadingError">{{ this.loadingError }}</h6>

            <div class="col-12 d-flex flex-wrap justify-content-start">
                <div class="card" v-for="project in projects" style="width: 18rem;">
                    <h2>{{ project.title }}</h2>
                    <h3>{{ project.type ? project.type.travel : "Nessuno" }}</h3>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="tech in project.technology">
                            {{ tech.name }}
                        </li>
                    </ul>
                    <p class="my-3">{{ project.description }}</p>
                    <a class="btn btn-primary" :href="project.link">Wikipedia</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.card {
    background-color: #eb3e1b;
    padding: 1rem;
    margin: 2rem;
    border-radius: 2rem;
    color: white;
}

a {
    text-decoration: none;
    color: #4d3347;
}
</style>