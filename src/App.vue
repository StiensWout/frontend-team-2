<template>
  <div id="app">
    
    

    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-if="authenticated" to="/onderhoudPage">Onderhouden</router-link>
      <router-link v-if="authenticated" to="/vrachtwagenPage">Vrachtwagens</router-link>
      <router-link v-if="authenticated" to="/garagistPage">Garagisten</router-link>
      <router-link to="/about">About</router-link>

      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
      <router-view @authenticated="setAuthenticated"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                // this is only for testing purposes no actual app will have this
                // an api call will validate user credentials
                mockAccount: {
                    username: "wout",
                    password: "admin"
                }
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 10px;
}

#nav a:not(:first-child) {
  border-left: 1px solid #2c3e50;
  padding-left: 10px; 
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 75%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid rgb(4, 88, 4);
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.btn {
  display: inline-block;
  background: #000;
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
header{
    display: inline-block;
    align-items: center;
    margin-bottom: 20px;
}

.btn:hover {
  display: inline-block;
  background: #000;
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

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  justify-content: center;
  
}
</style>

