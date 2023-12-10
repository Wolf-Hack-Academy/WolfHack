<script setup lang="ts">

</script>

<template>
  <html>
    <main>
      <body>
        <div class="banner">
          <h1 class="mainTitle">Wolf Hack Academy</h1>
          <div class="auth-buttons">
            <RouterLink to="/signup" class="auth-button"> Sign Up</RouterLink>
            <RouterLink to="/login" class="auth-button">Log In</RouterLink>
          </div>
          <h2>Level up your cyber skills today.</h2>
        </div>
      </body>
    </main>

  </html>
</template>

<style scoped>

body {
  background-color: #001E4C;
  min-height: 100vh;
  min-width: 100vw;
  align-content: center;
  text-align: center;
  color: white;
}

.banner {
  background-image: url(https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-color: #001E4C;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  min-height: 100vh;
  min-width: 100vw;
  align-content: center;
  text-align: center;
}

.mainTitle {
  font-size: 700%;
  padding-top: 150px;
}

.auth-buttons {
  display: flex;
  justify-content: center;
}

  .auth-button {
    background-color:#001e4c98;
    border: silver solid 3px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 50px;
    margin-bottom: 150px;
    font-weight: bold;
  }

  .auth-button:hover{
    background-color: silver;
    color:#001E4C;
  }
</style>