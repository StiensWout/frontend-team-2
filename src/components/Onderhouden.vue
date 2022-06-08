<template>
<div>
 <div :key="onderhoud.id" v-for="onderhoud in onderhouden">
    <Onderhoud @delete-onderhoud="$emit('delete-onderhoud', onderhoud.id)" :onderhoud="onderhoud"></Onderhoud>
 </div>
 </div>
</template>

<script>

import Onderhoud from '../components/Onderhoud.vue'

    export default {
        name: 'Onderhouden',
        props: {
            onderhouden: Array,
        },
        components: {
            Onderhoud,
        },
        emits:['delete-onderhoud'],
    }

</script>