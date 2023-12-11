<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  //this brakes the website but it should just check if the user is logged in.
  //not sure if its the correct spot but we put this in every time a page needs user info

  /*import { getAuth, onAuthStateChanged } from "firebase/auth";

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    
  } else {

  }
});*/

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
            <RouterLink to="/profile" id="profile"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff9%2F77%2F37%2Ff97737919d8c4caba9c5c73ed5005bac.jpg&f=1&nofb=1&ipt=0c26655a83865821f9bc7e02630649fc9b12a47210f4d88d796057922559b1fb&ipo=images" height="50"></RouterLink>
          </div>
        </div>
      </div>
    <RouterView/> <!-- keep in Router within header -->
  </header>
</div>
</html>
</template>


<style scoped>
  #profile img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  .wrapper { /* moving all content down to make room for bigger navbar */
    /* width: 100%; */
    padding-top: 30px;
    /* height: 50%; */
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
    z-index:999999 !important;
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