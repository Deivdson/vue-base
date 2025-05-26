<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Home from './views/Home.vue';
</script>

<template>
  <section>
    
    <header class="nav-section">
      <Navbar v-if="!$route.meta.hideNavbar" />
      <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />    -->
    </header>
    
    <main>
      
      <!-- <TheWelcome /> -->
      <div style="display: flex; gap: 10px;">
        <Sidebar v-if="$route.meta.hideNavbar" />
        <div class="wrapper">
          
          <router-view />
        </div>
      </div>
    </main>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}




@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
