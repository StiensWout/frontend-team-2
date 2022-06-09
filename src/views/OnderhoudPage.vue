<template>
  <div class="onderhoud">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <h1>Dockx Manager</h1>
    <div class="container">
        <Header title="Onderhouden"></Header>
   <div v-if="showAddOnderhoud">
                <AddOnderhoud @add-onderhoud="addOnderhoud"></AddOnderhoud>
            </div>

            <Button @toggle-add-onderhoud="toggleAddOnderhoud" viewType="onderhoud" color="green"
                text="Onderhoud Toevoegen"></Button>
        </div>

        <div class="container">


            <Onderhouden @delete-onderhoud="deleteOnderhoud" :onderhouden="onderhouden"></Onderhouden>

        </div>

    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Onderhouden from '../components/Onderhouden.vue'
import AddOnderhoud from '../components/AddOnderhoud.vue'

export default {
    name: 'onderhoud',
    components: {
        Header,
        Button,
        Onderhouden,
        AddOnderhoud,
    },
    data() {
        return {
            onderhouden: [],
            showAddOnderhoud: false,
        }
    },
    methods: {
        async deleteOnderhoud(id) {
            if (confirm('Ben je zeker dat je dit onderhoud wilt verwijderen?')) {
                const res = await fetch(`https://my-json-server.typicode.com/StiensWout/frontend-team-2/onderhouden/${id}`, {
                    method: 'DELETE',
                })

                res.status == 200 
                ? (this.onderhouden = this.onderhouden.filter(
                    (onderhoud) => onderhoud.id !== id)) 
                    : alert('Er is iets fout gegaan')

            }

        },
        async addOnderhoud(onderhoud) {
            const res = await fetch('https://my-json-server.typicode.com/StiensWout/frontend-team-2/onderhouden',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        

                    },
                    body: JSON.stringify(onderhoud),
                })
            const data = await res.json()

            this.onderhouden = [...this.onderhouden, data]
        },
        toggleAddOnderhoud() {
            this.showAddOnderhoud = !this.showAddOnderhoud
        },
        async fetchOnderhouden() {
            const res = await fetch('https://my-json-server.typicode.com/StiensWout/frontend-team-2/onderhouden')

            const data = await res.json()

            return data

        },
        async fetchOnderhoud(id) {
            const res = await fetch(`https://my-json-server.typicode.com/StiensWout/frontend-team-2/onderhouden/${id}`)

            const data = await res.json()

            return data

        },

    },


    async created() {
        //get garagisten via API call fetchGaragisten
        this.onderhouden = await this.fetchOnderhouden()


    },
    mounted() {
        if (!this.$parent.authenticated) {
            this.$router.replace({ name: "Login" });
        }
    },
}
</script>