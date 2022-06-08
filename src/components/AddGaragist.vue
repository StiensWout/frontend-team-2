<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Naam</label>
            <input type="text" v-model="name" name="name" placeholder="Naam van garagist" />
        </div>
        <div class="form-control">
            <label>Email</label>
            <input type="mail" v-model="email" name="email" placeholder="email" />
        </div>
        <div class="form-control">
            <label>Telefoon</label>
            <input type="text" v-model="phoneNumber" name="phoneNumber" placeholder="telefoonnummer" />
        </div>
        <div class="form-control">
            <label>GarageNummer</label>
            <input type="text" v-model="garageNumber" name="garageNumber" placeholder="garagenummer" />
        </div>
        <div class="form-control">
            <label>GarageAddress</label>
            <input type="text" v-model="garageAddress" name="garageAddress" placeholder="Adres Garage" />
        </div>
        <div class="form-control">
            <label>GarageCity</label>
            <input type="text" v-model="garageCity" name="garageCity" placeholder="stad garage" />
        </div>
        <div class="form-control">
            <label>GarageCountry</label>
            <input type="text" v-model="garageCountry" name="garageCountry" placeholder="Land garage" />
        </div>
        <div class="form-control">
            <label>GarageZipCode</label>
            <input type="text" v-model="garageZipCode" name="garageZipCode" placeholder="postcode garage" />
        </div>

        <input type="submit" value="Voeg Toe" class="btn btn-block" />
    </form>
</template>

<script>
export default {
    name: 'AddGaragist',
    data() {
        return {
            name: '',
            email: '',
		    phoneNumber: '',
		    garageNumber: '',
	        garageName: '',
	        garageAddress: '',
    	    garageCity: '',
	        garageZipCode: '',
	        garageCountry: '',
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            if (!this.name) {
                alert('Voeg aub een garagist toe')
                return
            }
            const newGaragist = {
                name: this.name,
                email: this.email,
		        phoneNumber: this.phoneNumber,
		        garageNumber: this.garageNumber,
		        garageName: this.garageName,
		        garageAddress: this.garageAddress,
		        garageCity: this.garageCity, 
		        garageZipCode: this.garageZipCode,
		        garageCountry: this.garageCountry,
            }
            this.$emit('add-garagist', newGaragist)
            this.name = ''
            this.email = ''
            this.phoneNumber = ''
            this.garageNumber = ''
            this.garageName = ''
            this.garageAddress = ''
            this.garageCity = ''
            this.garageZipCode = ''
            this.garageCountry = ''

        },
    },
}
</script>

<style scoped>
.add-form {
    margin-bottom: 40px;
}

.form-control {
    margin: 20px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px;
}
</style>