<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <header>
    <div class="wrapper"> <!-- object for the webpage itself; holds all elements -->
      <div class="navbar">
        <div class="nav-container">
          <img src="src\assets\wolfHack_logo.svg" height="50">
          <div class="nav-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/profile">Profile</RouterLink>
            <RouterLink to="/leaderboard">Leaderboard</RouterLink>
            <RouterLink to="/lessons">Lessons</RouterLink>
          </div>
          <div class="auth-buttons">
            <RouterLink to="/signup" class="auth-button"> Sign Up</RouterLink>
            <RouterLink to="/login" class="auth-button">Log In</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <RouterView/> <!-- keep in Router within header -->
  </header>
</template>


<style scoped>
  .navbar {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    font-family: 'garet', Garet-Book;
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .nav-links{
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  .auth-buttons {
    display: flex;
  }

  .auth-button{
    margin-left: 10px;
    margin-right: 10px;
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