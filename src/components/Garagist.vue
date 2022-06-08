<template>
<div class="garagistElement">
    <div :class="[garagist.active ? 'active' : '', 'garagist']"></div>
    <h3>{{garagist.id}}
    <i @click="onDelete(garagist.id)" class="fas fa-times"></i>
    </h3>
    <p>naam: {{garagist.name}}</p>
    <p>email: {{garagist.email}}</p>
    <p>tel: {{garagist.phoneNumber}}</p>
    <p>garage nummer: {{garagist.garageNumber}}</p>
    <p>naam garage: {{garagist.garageName}}</p>
    <p>adres: {{garagist.garageAddress}}</p>
    <p>stad: {{garagist.garageCity}}</p>
    <p>postcode: {{garagist.garageZipCode}}</p>
    <p>land: {{garagist.garageCountry}}</p>

</div>
</template>

<script>
export default {
    name:'Garagist',
    props: {
        garagist: Object,
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-garagist', id);
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
.garagistElement {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.garagist h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.garagist.active {
  border-left: 5px solid green;
}
</style>