<script setup lang="ts">
  import { ref } from 'vue'
  import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
  import { useRouter } from 'vue-router' 
  
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  
  const register = () => { // when the button is clicked it should execite this
   
    // the next section of code mostly comes from https://firebase.google.com/docs/auth/web/start
    const auth = getAuth(); // get the auth api
    createUserWithEmailAndPassword(auth, email.value, password.value) 
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Successfully registered!');
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
    <main>
      <h1 class="mainTitle">Sign Up</h1>
      <div class="authenticate-block">
        <p> <input type='text' placeholder="Email" v-model='email'/> </p>
        <p> <input type='password' placeholder="Password" v-model='password'/> </p>
        <p> <button @click="register"> Submit </button> </p> 
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
