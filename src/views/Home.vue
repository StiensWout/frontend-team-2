<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <h1>Dockx Manager</h1>
    <h2>Welkom op het management portaal van dockx {{username}}</h2>
  </div>
</template>

<script>

//check if username is in localstorage

if(localStorage.getItem('username') != null) {
    var username = localStorage.getItem('username');
}

//update username if changed
if (localStorage.getItem('username') != username) {
    localStorage.setItem('username', username);
}

</script>

<script type="text/javascript" src="../scripts/seedData.js"/>



