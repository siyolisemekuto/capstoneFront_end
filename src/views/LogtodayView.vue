<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Log/>
  </div>
</template>

<script>
import Log from "../components/Log.vue"
export default {
    name: "logtodayview",
    component: { 
      Log 
    }
}
</script>
