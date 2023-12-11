<script setup lang="ts">  // write functions here
  import { getFirestore, collection, query, orderBy, getDocs, where } from 'firebase/firestore';
  import db from '../firebase/init.js'

</script>


<template>  <!-- format webpage here -->
  <html>
    <main>
      <body>
        <header>@username</header>

        <div class="brush-up">
          <h class="headers">In-Progress</h>
          <div class="scroll-content">
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
          </div>
        </div>


        <div class="in-progress">
          <h class="headers">Brush-Up</h>
          <div class="scroll-content">
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
            <div class="module">test 1</div>
          </div>
        </div>


        <div class="profile-summary">
          <div class="profile-photo"></div>
          <div class="profile-stats">
            xxxx points
          </div>
        </div>


      </body>
    </main>
  </html>
</template>


<style scoped>
  .in-progress {
    /* overflow: hidden;
    overflow-y: auto; */
    grid-column: 1;
    grid-row: 2;
  }

  .brush-up {
    /* overflow: hidden;
    overflow-y: auto; */
    grid-column: 2;
    grid-row: 2;
  }

  .module{
    border: 1px solid white;
    height: 3rem;
    font: 25px;
    font-family: 'garet', Garet-Book;
    color: #001E4C;
    background-color: grey;
    margin: 10px;
  }

  .module-content{

  }
/* ------------------------------------------------------------------------- */
  body{
    display: grid;
    min-height: 100vh;
    min-width: 100vw;
    background-color: #001E4C;
    background-image: url('https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    background-repeat: repeat-y;
    padding-left: 2rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2;
  }

  header{
    font-size: 30px;
    font-family: 'garet', Garet-Book;
    height: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    grid-row: 1;
  }

  .headers{
    font-size: 30px;
    color: white;
  }
/* ------------------------------------------------------------------------- */
  .profile-summary{
    display: grid;
    grid-column: 3;
    grid-row: 2;
    justify-content: center;
    padding: 20px;
    height: 100%;
    max-height: fit-content;
    width: 100%;
    grid-template-rows: 1fr 1fr;
  }
  .profile-photo{
    border: 3px solid white;
    border-radius: 50%;

    width: 33vh;
    min-width: 110px;
    height: 33vh;
    min-height: 110px;

    position: relative;
    top: max(5vh, 25px);
    margin-bottom: max(10vh, 40px);

    background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff9%2F77%2F37%2Ff97737919d8c4caba9c5c73ed5005bac.jpg&f=1&nofb=1&ipt=0c26655a83865821f9bc7e02630649fc9b12a47210f4d88d796057922559b1fb&ipo=images');
    background-size: cover;
    background-position: center;
  }
  .profile-stats{
    font-size: max(3vh, 16px);
    color: white;
    font-family: 'garet', Garet-Book;
    position: relative;
    text-align: center;
  }
/* ------------------------------------------------------------------------- */
    /* .wrapper{
    display: grid;
    grid-template-columns: 5fr 1fr ;
    margin-top: 50px;
    gap: 5rem;
    justify-content: center;
    z-index: -1;
    font-family: 'garet', Garet-Book;
    width: auto-fit;
  } */
    /* body{
    display: flex;
    min-height: 100vh;
    min-width: 100vw;

    padding: 20px;
  } */
</style>