<template>
  <nav>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <img :src="imgUrl" class="card-title"/>
      <p class="card-text">Name</p>
      <p class="card-text">Email</p>
      <ul  class="navbar-nav w-100">
        <li><router-link to="/log-mood" class="nav-link  ">Log today</router-link></li>
        <li><router-link to="/" class="nav-link">View record</router-link></li>
      </ul> 
      <p class="card-text">Download record (pdf)</p>
      <p class="card-text">Log out</p>
    </div>
  </div>
  </nav>
  <router-view/>
</template>

<script>

export default {
    name: "Navbar",
    data() {
        return {
            imgUrl: "https://i.postimg.cc/k4npt9HS/eyestetix-studio-l8q-IZm-Nu-D1-E-unsplash-1.jpg"
        };
    }
    }
</script>