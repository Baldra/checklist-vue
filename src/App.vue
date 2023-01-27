<template>
  <div class="backgroundImage">

    <nav class="backgroundImage">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <div>
      <router-view/>
    </div>
    
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  padding-top: 5px; 
  top: 0;
  right: 0;
  left: 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #9e25f5;
}

.backgroundImage {
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

}

</style>
