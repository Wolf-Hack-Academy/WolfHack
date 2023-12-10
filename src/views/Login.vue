<script setup lang="ts">
  import { ref } from 'vue'
  import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router' // import router

    const email = ref('')
    const password = ref('')
    const router = useRouter() // get a reference to our vue router
    const signIn = () => {  // when button click this should execute
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.value, password.value) 
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.push('/Profile') // redirect to Profile
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

</script>

<template>
  <body>
    <h1 class="mainTitle">Login</h1>
      <p> <input type='text' placeholder="Email" v-model='email'/> </p>
      <p> <input type='password' placeholder="Password" v-model='password'/> </p>
      <p> <button @click="signIn"> Submit </button> </p>
      <p>Not a user? <RouterLink to="/signup" class="auth-button">Sign Up</RouterLink></p>
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