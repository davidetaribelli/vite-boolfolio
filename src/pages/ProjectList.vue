<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "ProjectList",
    data() {
        return {
        }
    },components:{

        ProjectCard,
    }
}
</script>


<template>
    <main>
        <!-- importo il file ProjectCard -->
        <ProjectCard />
    </main>
</template>