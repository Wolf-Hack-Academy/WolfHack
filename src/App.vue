<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
  <html>
  <div class="wrapper"> <!-- object for the webpage itself; holds all elements -->
  <header>
      <div class="navbar">
        <div class="nav-container">
          <RouterLink to="/"><img src="src\assets\Wolf-Hack-Academy.svg" height="50"></RouterLink>
          <div class="nav-links">
            <!--<RouterLink to="/about">About</RouterLink> -->
            <RouterLink to="/lessons">Lessons</RouterLink>
            <RouterLink to="/leaderboard">Leaderboard</RouterLink>
            <RouterLink to="/profile"><img src="src\assets\pfp.png" height="50"></RouterLink>
          </div>
        </div>
      </div>
    <RouterView/> <!-- keep in Router within header -->
  </header>
</div>
</html>
</template>


<style scoped>
  .wrapper { /* moving all content down to make room for bigger navbar */
    width: 100%;
    padding-top: 30px;
    height: 100%;
  }
  .navbar {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #001E4C;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    font-family: 'garet', Garet-Book;
    border-bottom: silver solid 2px;
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    padding-left: 10px;
    width: 100%;
    height: 100%;
  }

  .nav-links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 100%;
    font-size: 20px;
  }

</style>

<style>
  @font-face {
    font-family: 'garet';
    src: url('./src/fonts/garet/Garet-Book.woff2') format('woff2'),
        url('./src/fonts/garet/Garet-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>