<template>
<div>
 <div :key="vrachtwagen.id" v-for="vrachtwagen in vrachtwagens">
    <Vrachtwagen @delete-vrachtwagen="$emit('delete-vrachtwagen', vrachtwagen.id)" :vrachtwagen="vrachtwagen"></Vrachtwagen>
 </div>
 </div>
</template>

<script>

import Vrachtwagen from '../components/Vrachtwagen.vue'

    export default {
        name: 'Vrachtwagens',
        props: {
            vrachtwagens: Array,
        },
        components: {
            Vrachtwagen,
        },
        emits:['delete-vrachtwagen'],
    }

</script>