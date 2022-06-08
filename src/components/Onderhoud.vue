<template>
<div class="onderhoudElement">
    <div :class="[onderhoud.active ? 'active' : '', 'onderhoud']"></div>
    <h3>{{onderhoud.id}}
    <i @click="onDelete(onderhoud.id)" class="fas fa-times"></i>
    </h3>
    <p>datum: {{onderhoud.datum}}</p>
    <p>beschrijving: {{onderhoud.beschrijving}}</p>

</div>
</template>

<script>
export default {
    name:'Onderhoud',
    props: {
        onderhoud: Object,
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-onderhoud', id);
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
.onderhoudElement {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.onderhoud h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.onderhoud.active {
  border-left: 5px solid green;
}
</style>