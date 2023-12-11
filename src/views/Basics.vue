<script setup lang="ts">
</script>

<template>
  <div class="banner">
  <div class="title">
    <h1>Wolf Hack Lessons</h1>
  </div>
  <div class="padding"></div>
  <div class="module">
    <h1>Basics</h1>
    <div class="lessons">
      <h1><u>Introduction to Cybersecurity</u></h1>
          <div class="lessonContent">
            <h2>test</h2>
          </div>
    </div>
    <div class="padding"></div>
    <div class="lessons">
      <h1><u>Ethics</u></h1>
          <div class="lessonContent">
            <h2>test</h2>
          </div>
    </div>
    <div class="padding"></div>
    <div class="lessons">
      <h1><u>CIA Triad</u></h1>
          <div class="lessonContent">
            <h2>test</h2>
          </div>
    </div>
    <div class="padding"></div>
    <p><RouterLink to="/lessons/basics/quiz" class="quiz">Take the Quiz!</RouterLink></p>
  </div>
  <div class="padding"></div>
</div>
</template>

<script lang="ts">
import {query, collection, getDocs, QuerySnapshot} from "firebase/firestore"
import db from '../firebase/init.js'

  export default{
    data(){
      return {
        lessons: [] as Array<{ lessonID: string; points: number }>
      }
    },
    created(){
      this.getLesson()
    },
    methods: {
      async getLesson(){
        const querySnapshot = await getDocs(query(collection(db, 'lessonModules')));
        
        querySnapshot.forEach((doc) => {
          const lessonName = doc.data().lessonID;
          const pts = doc.data().points;
          this.lessons.push({lessonID: lessonName, points: pts});
        })
      },
      async getQuiz(){

      }
    }
  }

</script>

<style>    
.banner {
  background-image: url(https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-color: #001E4C;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  min-height: 100vh;
  min-width: 100vw;
  align-content: center;
  text-align: center;
}

.title {
  margin: auto;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  color: white;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 4px solid silver;
  border-radius: 20px 20px 0 0;
  height: 20%;
  width: 500px;
}

  .quiz {
    margin: auto;
    text-align: center;
    padding-bottom: 25px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 20%;
    width: 300px;
    border: 2px solid greenyellow;
    padding: 5px;
    color: greenyellow;
    text-decoration:underline;
    padding-top: 1px;
  }
.padding{
  padding:10px;
}

.module {
    margin: auto;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    color: white;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 3px solid silver;
    height: 20%;
    width: 500px;
  }

  .lessons {
    margin: auto;
    text-align: center;
    padding-top: 25px;
    color: white;
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 20%;
    width: 350px;
  }

  .lessonContent{
    margin: auto;
    text-align: center;
    padding-bottom: 25px;
    color: white;
    font-size: 10px;
    height: 20%;
    width: 350px;
  }
</style>
