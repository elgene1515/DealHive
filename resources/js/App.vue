<template>
    <v-app>
        <AppBar />
        
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup>
import AppBar from './components/layouts/AppBar.vue';

</script>

<style lang="scss" scoped>

</style>