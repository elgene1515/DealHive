<template>
    <v-btn
        :to="path"
        :class="['mr-10 ml-10', classes]"
        :color="color"
        stacked
    >
        <v-badge
            v-if="badge"
            :content="badge"
            :color="badgeColor"
        >
            <v-icon
                :color="color"
                :size="size"
            >
                {{ icon }}
            </v-icon>
        </v-badge>

        <v-icon
            v-else
            :color="color"
            :size="size"
        >
            {{ icon }}
        </v-icon>
    </v-btn>
</template>

<script setup>
    defineProps({
        icon: { type: String, required: true },
        color: { type: String, default: '#700e01' },
        size: { type: [String, Number], default: 30 },
        badge: { type: [String, Number], default: null },
        badgeColor: { type: String, default: 'red' },
        classes: { type: [String, Array, Object], default: '' },
        path: { type: String, required: true },
    });
</script>
