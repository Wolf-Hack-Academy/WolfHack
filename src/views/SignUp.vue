<script setup lang="ts">
</script>

<template>
  <body>
    <main>
      <h1 class="mainTitle">Sign Up</h1>
      <div class="authenticate-block">
        <p>Already a user? <RouterLink to="/login" class="auth-button">Log In</RouterLink></p>
      </div>
    </main>
  </body>
</template>

<style scoped>

body {
  background-color: #001E4C;
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-blend-mode: overlay;
  padding: 20px;
}

p {
  color: gray;
  text-align: center;
}

.authenticate-block {
  width:100%;
  justify-content:space-evenly;
  display:flex;
  padding:50px;
}

.mainTitle {
  color:white;
  font-weight:bold;
  padding:20px;
}

</style>
