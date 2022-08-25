<template>
  <nav>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <img :src="imgUrl" class="card-title"/>
      <p class="card-text">Name</p>
      <p class="card-text">Email</p>
      <AboutView></AboutView>
    </div>
  </div>
  </nav>
  <router-view/>
</template>

<script>
import AboutView from './views/AboutView.vue';
export default {
    name: "user icons",
    data() {
        return {
            imgUrl: "https://i.postimg.cc/k4npt9HS/eyestetix-studio-l8q-IZm-Nu-D1-E-unsplash-1.jpg"
        };
    },
    components: { AboutView }
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
