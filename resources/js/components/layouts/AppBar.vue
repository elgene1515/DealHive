<template>
    <v-app-bar
        prominent
        density="compact"
        class="pr-10 pl-10"
        color="amber-accent-4"
    >
        <!-- NOTE Appbar logo -->
        <AppLogo />

        <!-- NOTE Search area -->
        <AppSearch />

        <v-spacer></v-spacer>

        <!-- NOTE App bar icons Center -->
        <AppIcon 
            v-for="(item, index) in appBarNavigations" 
            :key="index"
            :icon="item.icon"
            :path="item.path"
            :badge="item.newItems.length > 0 ? item.newItems.length : null"
        />

        <v-spacer></v-spacer>

        <!-- NOTE App bar icons right -->
        <v-menu
            v-for="(appBarDropdown, index) in appBarDropdowns"
            :key="index"
            transition="scale-transition"
        >
            <template v-slot:activator="{ props }">
            <v-btn
                v-bind="props"
                :v-model="appBarDropdown.model"
                color="#700e01"
                :icon="appBarDropdown.icon"
            >
                <v-badge :content="appBarDropdown.items.length" color="red">
                <v-icon>{{ appBarDropdown.icon }}</v-icon>
                </v-badge>
            </v-btn>
            </template>

            <!-- Messages Dropdown -->
            <v-list v-if="appBarDropdown.model === 'chat'" width="250">
            <v-list-item
                v-for="(item, i) in appBarDropdown.items"
                :key="i"
                :prepend-avatar="item.profilePicture"
                :title="item.user"
                :subtitle="item.message"
            />
            </v-list>

            <!-- Profile Dropdown -->
            <v-list v-if="appBarDropdown.model === 'profile'">
            <v-list-item>
                <v-card flat class="d-flex flex-column align-center">
                <v-avatar
                    size="100"
                    image="https://img.freepik.com/free-vector/cute-honey-bee-wearing-headphone-cartoon-vector-icon-illustration-animal-music-isolated-flat-vector_138676-12361.jpg?semt=ais_hybrid&w=740"
                />
                <v-card-title>Bee Lee Gene AW!</v-card-title>
                <v-card-subtitle>Status - Role</v-card-subtitle>
                </v-card>
            </v-list-item>

            <v-divider />

            <v-list-item class="d-flex flex-column pa-2" density="compact">
                <v-btn
                block
                v-for="(option, i) in appBarDropdown.profileOptions"
                :key="i"
                variant="tonal"
                class="d-flex align-center justify-start mt-3"
                :prepend-icon="option.icon"
                >
                {{ option.title }}
                </v-btn>
            </v-list-item>

            <v-list-item class="pa-2">
                <v-btn block color="#feb204" style="color: #700e01;" text>
                Logout
                </v-btn>
            </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

    const appBarNavigations = ref([
        {
            path: '/',
            icon: 'mdi-home-outline',
            model: 'home',
            newItems: [],
        },
        {
            path: '/connection',
            icon: 'mdi-account-multiple',
            model: 'connection',
            newItems: ['new'],
        },
        {
            path: '/cart',
            icon: 'mdi-cart-outline',
            model: 'cart',
            newItems: ['item1', 'item2'],
        },
        {
            path: '/listing',
            icon: 'mdi-format-list-bulleted',
            model: 'listing',
            newItems: ['itemA', 'itemB', 'itemC'],
        },
    ])

    const appBarDropdowns = ref([
    {
        icon: 'mdi-chat-outline',
        model: 'chat',
        items: [
        {
            profilePicture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBn9vENv0l5btaUeoW8nFNRyIvWrndEOPwkw&s',
            user: 'John Doe',
            message: 'Sample message',
        },
        {
            profilePicture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdEAxUqi2U_kPTVXU8wRNt0nCiHyp83-6fQ&s',
            user: 'Jane Bee',
            message: 'Another message',
        },
        ],
    },
    {
        icon: 'mdi-bell-outline',
        model: 'notification',
        items: ['Notification 1', 'Notification 2'],
    },
    {
        icon: 'mdi-menu-down',
        model: 'profile',
        items: [],
        profileOptions: [
        {
            title: 'Settings & Privacy',
            path: '/settings',
            icon: 'mdi-cog',
        },
        {
            title: 'About',
            path: '/about',
            icon: 'mdi-information-outline',
        },
        {
            title: 'Display and Accessibility',
            path: '/display',
            icon: 'mdi-moon-waning-crescent',
        },
        ],
    },
])
</script>

<style scoped>
/* Optional styling here */
</style>
