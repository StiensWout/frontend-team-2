<template>
    <div id="login">
        <img class="logo" alt="Vue logo" src="../assets/logo.png">

        <h1>Login</h1>
        <div class="form-inputs">
            <label class="loginText" for="username">Username</label>
            <input class="loginText" type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div class="form-inputs">
            <label class="loginText" for="password">Password</label>
            <input class="loginText" type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <button class="btn" type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>

import Button from '../components/Button.vue'
export default {
    name: 'Login',
    components: {
        Button,
    },
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if (this.input.username != "" && this.input.password != "") {
                // Dit moet nog een API call worden: van zodra de api klaar is zal ik dit nog toevoegen
                if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    localStorage.setItem('username', this.input.username);
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "Home" });
                } else {
                    console.log("The username and / or password is incorrect");
                }
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}
</script>

<style>
#login .form-inputs {
    padding-bottom: 10px;
}

#login .form-inputs label {
    padding-right: 10px;
}

.btn {
  display: inline-block;
  background: rgb(7, 83, 4);
  color: #fff;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  font-family: inherit;
  border-color: rgb(100, 83, 83);
}

.btn:hover {
  display: inline-block;
  background: rgb(4, 110, 13);
  color: #fff;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  font-family: inherit;
  border-radius: 8px;
  border-color: rgb(63, 54, 54);
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

.logo {
  max-width: 25%;
}

.loginText{
    font-size: 20px;
    font-weight: bold;
    color: #000;
}
</style>


