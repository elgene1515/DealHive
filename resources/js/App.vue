<template>
    <v-app>
        <v-app-bar
            prominent
            density="compact"
            class="pr-10 pl-10"
            color="amber-accent-4"
        >
            <!-- NOTE Appbar logo -->
            <v-img
                max-width=50
                aspect-ratio="1/1"
                alt="Deal Hive Logo"
                class="cursor-pointer"
                @click="this.$router.push('/')"
                src="https://pngimg.com/d/bee_PNG74719.png"
            />

            <!-- NOTE Search area -->
            <v-text-field
                clearble
                rounded
                hide-details
                variant="solo"
                max-width="500"
                density="compact"
                placeholder="Search"
                prepend-inner-icon="mdi-magnify"
            />

            <v-spacer></v-spacer>

            <!-- NOTE App bar icons Center -->
            <v-btn
                stacked
                :key="index"
                color="#700e01"
                class="mr-10 ml-10"
                :to="appBarNavigation.path"
                v-for="(appBarNavigation, index) in appBarNavigations"
            >
                <v-badge
                    :content="appBarNavigation.newItems.length"
                    color="red"
                    v-if="appBarNavigation.newItems.length > 0"
                >
                    <v-icon>
                        {{ appBarNavigation.icon }}
                    </v-icon>
                </v-badge>

                <div v-else>
                    <v-icon>
                        {{ appBarNavigation.icon }}
                    </v-icon>
                </div>
            </v-btn>

            <v-spacer></v-spacer>

            <!-- NOTE App bar icons right -->
            <v-menu transition="scale-transition"
                v-for="(appBarDropdown, index) in appBarDropdowns"
                :key="index"
            >
                <!-- NOTE activator icons -->
                <template v-slot:activator="{ props }">
                    <v-btn
                        :v-model=appBarDropdown.model
                        color="#700e01"
                        :icon=appBarDropdown.icon
                        v-bind="props"
                    >
                        <v-badge
                            :content="appBarDropdown.items.length"
                            color="red"
                        >
                            <v-icon>{{ appBarDropdown.icon }}</v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <!-- NOTE Message -->
                <v-list
                    v-if="appBarDropdown.model == 'chat'"
                    width="250"
                >
                    <v-list-item
                        v-for="(appBarDropdownItems, index) in appBarDropdown.items"
                        :key="index"
                        :prepend-avatar="appBarDropdownItems.profilePicture"
                        :title="appBarDropdownItems.user"
                        :subtitle="appBarDropdownItems.message"
                        @click="OpenDialog()"
                    >
                    </v-list-item>
                </v-list>

                <!-- NOTE Notifications -->

                <!-- NOTE User Profile and user tools and settings-->
                <v-list
                    v-if="appBarDropdown.model == 'profile'"
                >
                    <v-list-item>
                        <v-card
                            flat
                            class="d-flex flex-column align-center"
                        >
                            <v-avatar
                                size="100"
                                image="https://img.freepik.com/free-vector/cute-honey-bee-wearing-headphone-cartoon-vector-icon-illustration-animal-music-isolated-flat-vector_138676-12361.jpg?semt=ais_hybrid&w=740">
                            </v-avatar>
                            <v-card-title>Bee Lee Gene AW!</v-card-title>
                            <v-card-subtitle>Status - Role</v-card-subtitle>
                        </v-card>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item
                        density="compact"
                        class="d-flex flex-column pa-2"
                    >
                        <v-btn
                            block
                            :key="index"
                            variant="tonal"
                            class="d-flex align-center justify-start mt-3"
                            v-for="(profileOption, index) in appBarDropdown.profileOptions" v-bind:key="index"
                            :prepend-icon="profileOption.icon"
                        >
                            {{ profileOption.title }}
                        </v-btn>
                    </v-list-item>

                    <v-spacer></v-spacer>

                    <v-list-item 
                        class="pa-2"
                    >
                        <v-btn
                            block
                            color="#feb204"
                            style="color: #700e01;"
                            text
                        >
                            Logout
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

    <!-- NOTE entry point of views -->
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        appBarNavigations: [
            {
                path: '/',
                icon: 'mdi-home-outline',
                model:'home',
                newItems:[],
            },
            {
                path: '/connection',
                icon:'mdi-account-multiple',
                model:'connection',
                newItems:['asdasd'],
            },
            {
                path: '/cart',
                icon:'mdi-cart-outline',
                model:'cart',
                newItems:['asdasdasd', 'asdasdasd'],
            },
            {
                path: '/listing',
                icon: 'mdi-format-list-bulleted',
                model:'listing',
                newItems:['asdasdas', 'asdasd', 'asdasda'],
            },
        ],
        appBarDropdowns: [
            {
                icon: 'mdi-chat-outline',
                model: 'chat',
                items: [
                {
                    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBn9vENv0l5btaUeoW8nFNRyIvWrndEOPwkw&s",
                    user: "John Doe",
                    message: "WOW HAHasdasdasdasdasdasdAH",
                    time: "12:01 PM",
                    status: "unread"
                },
                {
                    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdEAxUqi2U_kPTVXU8wRNt0nCiHyp83-6fQ&s",
                    user: "Jane Bee",
                    message: "WOW HAHAH",
                    time: "12:01 PM",
                    status: "unread"
                }
                ]
            },
            {
                icon: 'mdi-bell-outline',
                model: 'notification',
                items: ["one" ,"two" , "three"]
            },
            {
                icon: 'mdi-menu-down',
                model: 'profile',
                items: [],
                profileOptions: [
                    {
                        title: 'Settings & Privacy',
                        path: '/option1',
                        icon: 'mdi-cog'
                    },
                    {
                        title: 'About',
                        path: '/option2',
                        icon:'mdi-information-outline'
                    },
                    {
                        title: 'Display and Accessibility',
                        path: '/option3',
                        icon: 'mdi-moon-waning-crescent'
                    }
                ]
            }
        ],
    }),
}
</script>

<style>
</style>