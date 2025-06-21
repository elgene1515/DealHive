<template>
    <v-badge
        :content="badge"
        :color="badgeColor"
        v-if="badge"
    >
        <v-icon
        :color="color"
        :size="size"
        :class="classes"
        >
        {{ icon }}
        </v-icon>
    </v-badge>

    <v-icon
        v-else
        :color="color"
        :size="size"
        :class="classes"
    >
        {{ icon }}
    </v-icon>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'black',
    },
    size: {
        type: [String, Number],
        default: 24,
    },
    badge: {
        type: [String, Number],
        default: null,
    },
    badgeColor: {
        type: String,
        default: 'red',
    },
    classes: {
        type: [String, Array, Object],
        default: '',
    }
});
</script>
