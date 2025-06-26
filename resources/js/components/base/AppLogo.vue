<template>
    <v-img
        max-width=50
        aspect-ratio="1/1"
        alt="Deal Hive Logo"
        class="cursor-pointer"
        @click="goHome"
        src="https://pngimg.com/d/bee_PNG74719.png"
    />
</template>

<script setup>
    defineOptions({name: 'AppLogo'})

    function goHome(){
        router.push('/')
    }

</script>

<style lang="scss" scoped>

</style>