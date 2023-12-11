<script setup lang="ts">
</script>


<template>  <!-- format webpage here -->
  <html>
    <main>
      <body>
        <header>@{{ username }}</header>
        <!-- <header>@username</header> -->

        <div class="brush-up">
          <div class="headers">In-Progress</div>
          <div class="scroll-content">
            <div class="module">
              <p><RouterLink to="/lessons/basics" class="link-text">Basics Module</RouterLink></p>
            </div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
          </div>
        </div>

        <div class="in-progress">
          <div class="headers">Brush-Up</div>
          <div class="scroll-content">
            <div class="module">
              <p><RouterLink to="/lessons/basics" class="link-text">Basics Module</RouterLink></p>
            </div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
            <div class="module">test</div>
          </div>
        </div>

        <div class="profile-summary">
          <div class="profile-photo"></div>
          <div class="profile-stats">{{ total_points }} points</div>
        </div>

      </body>
    </main>
  </html>
</template>

<script lang ="ts">
import { doc, getDoc, collection } from 'firebase/firestore';
import db from '../firebase/init.js'

  export default{
    created(){
      this.getUsername()
      this.getTotalPoints()
    },
    data(){
      return {
        username: '',
        total_points: ''
      }
    },
    methods:{
      async getUsername(){
        const user = await getDoc(doc(db, 'users', '9okIaNorlt3kqSPpKEcl'))
        this.username = user.data().username
      },
      async getTotalPoints(){
        const user = await getDoc(doc(db, 'users', '9okIaNorlt3kqSPpKEcl'))
        this.total_points = user.data().pointTotal
      }
    }
  }

</script>

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

  .link-text{
    color: #001E4C;
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
</style>