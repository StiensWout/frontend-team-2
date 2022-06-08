<template>
<div class="vrachtwagenElement">
    <div :class="[vrachtwagen.active ? 'active' : '', 'vrachtwagen']"></div>
    <h3>{{vrachtwagen.id}}
    <i @click="onDelete(vrachtwagen.id)" class="fas fa-times"></i>
    </h3>
    <p>merk: {{vrachtwagen.merk}}</p>
    <p>type: {{vrachtwagen.type}}</p>
    <p>kenteken: {{vrachtwagen.kenteken}}</p>
    <p>vinnummer: {{vrachtwagen.vinnummer}}</p>

</div>
</template>

<script>
export default {
    name:'Vrachtwagen',
    props: {
        vrachtwagen: Object,
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-vrachtwagen', id);
        },
    },

}
</script>

<style scope>
p {
    text-align: left;
}

.fas {
  color: red;
}
.vrachtwagenElement {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.vrachtwagen h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vrachtwagen.active {
  border-left: 5px solid green;
}
</style>