<template>
    <div class="garagist">
        <img class="logo" alt="Vue logo" src="../assets/logo.png">
        <h1>Dockx Manager</h1>
        <div class="container">
            <Header title="garagisten"></Header>
            <div v-if="showAddGaragist">
                <AddGaragist @add-garagist="addGaragist"></AddGaragist>
            </div>

            <Button @toggle-add-garagist="toggleAddGaragist" viewType="garagist" color="green"
                text="Garagist Toevoegen"></Button>
        </div>

        <div class="container">


            <Garagisten @delete-garagist="deleteGaragist" :garagisten="garagisten"></Garagisten>

        </div>

    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Garagisten from '../components/Garagisten.vue'
import AddGaragist from '../components/AddGaragist.vue'

export default {
    name: 'garagist',
    components: {
        Header,
        Button,
        Garagisten,
        AddGaragist,
    },
    data() {
        return {
            garagisten: [],
            showAddGaragist: false,
        }
    },
    methods: {
        async deleteGaragist(id) {
            if (confirm('Ben je zeker dat je deze garagist wilt verwijderen?')) {
                const res = await fetch(`api/garagisten/${id}`, {
                    method: 'DELETE',
                })

                res.status == 200 
                ? (this.garagisten = this.garagisten.filter(
                    (garagist) => garagist.id !== id)) 
                    : alert('Er is iets fout gegaan')

            }

        },
        async addGaragist(garagist) {
            const res = await fetch('api/garagisten',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        

                    },
                    body: JSON.stringify(garagist),
                })
            const data = await res.json()

            this.garagisten = [...this.garagisten, data]
        },
        toggleAddGaragist() {
            this.showAddGaragist = !this.showAddGaragist
        },
        async fetchGaragisten() {
            const res = await fetch('api/garagisten')

            const data = await res.json()

            return data

        },
        async fetchGaragist(id) {
            const res = await fetch(`api/garagisten/${id}`)

            const data = await res.json()

            return data

        },

    },


    async created() {
        //get garagisten via API call fetchGaragisten
        this.garagisten = await this.fetchGaragisten()


    },
    mounted() {
        if (!this.$parent.authenticated) {
            this.$router.replace({ name: "Login" });
        }
    },
}
</script>