<script>


export default {
    name: "AppHeader",
    data() {
        return {
            navLinks: [
                { label: "Home", name: "home" },
                { label: "Projects", name: "projects" },
            ]
        }
    },
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" v-for="i in navLinks">
                <router-link class="nav-link" :to="{ name: i.name }">{{ i.label }}</router-link>
            </div>
        </div>
    </nav>
</template>