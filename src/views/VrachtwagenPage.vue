<template>
  <div class="vrachtwagen">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <h1>Dockx Manager</h1>
    <div class="container">
        <Header title="vrachtwagens"></Header>
        <div v-if="showAddVrachtwagen">
                <AddVrachtwagen @add-vrachtwagen="addVrachtwagen"></AddVrachtwagen>
            </div>

            <Button @toggle-add-vrachtwagen="toggleAddVrachtwagen" viewType="vrachtwagen" color="green"
                text="Vrachtwagen Toevoegen"></Button>
        </div>

        <div class="container">


            <Vrachtwagens @delete-vrachtwagen="deleteVrachtwagen" :vrachtwagens="vrachtwagens"></Vrachtwagens>

        </div>

    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Vrachtwagens from '../components/Vrachtwagens.vue'
import AddVrachtwagen from '@/components/AddVrachtwagen.vue'

export default {
    name: 'vrachtwagenPage',
    components: {
    Header,
    Button,
    Vrachtwagens,
    AddVrachtwagen
},
    data() {
        return {
            vrachtwagens: [],
            showAddVrachtwagen: false,
        }
    },
    methods: {
        async deleteVrachtwagen(id) {
            if (confirm('Ben je zeker dat je deze vrachtwagen wilt verwijderen?')) {
                const res = await fetch(`api/vrachtwagens/${id}`, {
                    method: 'DELETE',
                })

                res.status == 200
                ? (this.vrachtwagens = this.vrachtwagens.filter(
                    (vrachtwagen) => vrachtwagen.id !== id)) 
                    : alert('Er is iets fout gegaan')

            }

        },
        async addVrachtwagen(vrachtwagen) {
            const res = await fetch('api/vrachtwagens',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        

                    },
                    body: JSON.stringify(vrachtwagen),
                })
            const data = await res.json()

            this.vrachtwagens = [...this.vrachtwagens, data]
        },
        toggleAddVrachtwagen() {
            this.showAddVrachtwagen = !this.showAddVrachtwagen
        },
        async fetchVrachtwagens() {
            const res = await fetch('api/vrachtwagens')

            const data = await res.json()

            return data

        },
        async fetchVrachtwagen(id) {
            const res = await fetch(`api/vrachtwagens/${id}`)

            const data = await res.json()

            return data

        },

    },


    async created() {
        this.vrachtwagens = await this.fetchVrachtwagens()


    },
    mounted() {
        if(!this.$parent.authenticated) {
            this.$router.replace({ name: "Login" });
        }
    }
    
}

</script>



