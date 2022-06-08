<template>
<div>
 <div :key="garagist.id" v-for="garagist in garagisten">
    <Garagist @delete-garagist="$emit('delete-garagist', garagist.id)" :garagist="garagist"></Garagist>
 </div>
 </div>
</template>

<script>

import Garagist from '../components/Garagist.vue'

    export default {
        name: 'Garagisten',
        props: {
            garagisten: Array,
        },
        components: {
            Garagist,
        },
        emits:['delete-garagist'],
    }

</script>