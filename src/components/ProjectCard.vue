<script>
import axios from 'axios';

export default{
    name: "ProjectCard",
    data(){
        return{
            chiave: "valore",
            apiUrl: "http://localhost:8000/api/",
            loading: false,
            loadingError: false,
            projects:[],
        }
    },
    methods:{
        getProjects(){
            this.loading = true;
            axios.get(this.apiUrl + "projects" ).then( (response) => {
                this.projects = response.data.results;
                this.loading = false;
                console.log(response.data.results);
            }).catch(err=>{
                this.loading = false;
                this.loadingError = "Errore nel caricamento dei dati";
            });
        }

    },
    mounted(){
        this.getProjects();
    }
}
</script>

<template>
    <h2>Città visitate</h2>
    <h6 v-if="loading">Cari camento in corso</h6>
    <h6 v-if="loadingError">{{this.loadingError}}</h6>

    <div v-for="project in projects">
        <h2>{{ project.title }}</h2>
        <h3>{{ project.type ? project.type.travel : "Nessuno" }}</h3>
        <ul>
            <li v-for="tech in project.technology">
                {{ tech.name }}
            </li>
        </ul>
        <p>{{ project.description}}</p>
        <a :href="project.link">link wikipedia</a>
    </div>
</template>

<style scoped>
div{
    background-color: #eb3e1b;
    padding: 1rem;
    margin: 2rem;
    border-radius: 2rem;
    color: white;
}

a{
    text-decoration: none;
    color: #4d3347;
}

</style>