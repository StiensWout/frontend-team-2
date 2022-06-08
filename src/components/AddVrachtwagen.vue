<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Merk</label>
            <input type="text" v-model="merk" name="merk" placeholder="merk van de wagen" />
        </div>

        <div class="form-control">
            <label>Type</label>
            <input type="text" v-model="type" name="type" placeholder="model van de wagen" />
        </div>
        <div class="form-control">
            <label>Kenteken</label>
            <input type="text" v-model="kenteken" name="kenteken" placeholder="kenteken van de wagen" />
        </div>
        <div class="form-control">
            <label>Vinnummer</label>
            <input type="text" v-model="vinnummer" name="vinnummer" placeholder="VIN nummer van de wagen" />
        </div>
       

        <input type="submit" value="Voeg Toe" class="btn btn-block" />
    </form>
</template>

<script>
export default {
    name: 'AddVrachtwagen',
    data() {
        return {
            merk: '',
            type: '',
            kenteken: '',
            vinnummer: '',
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            if (!this.merk) {
                alert('Voeg aub een vrachtwagen toe')
                return
            }
            const newVrachtwagen = {
                merk: this.merk,
                type: this.type,
                kenteken: this.kenteken,
                vinnummer: this.vinnumer,
                
            }
            this.$emit('add-vrachtwagen', newVrachtwagen)
            this.merk = ''
            this.type = ''
            this.kenteken = ''
            this.vinnummer = ''

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