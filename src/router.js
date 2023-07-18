import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectList.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "home",
            component:AppHome
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsList
        }
        
    ]
});

export {router};