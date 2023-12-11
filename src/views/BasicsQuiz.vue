<script setup lang="ts">
</script>

<template>
  <div class="title">
    <h1>Wolf Hack Lessons</h1>
  </div>
  <div class="lessons">
    <p>this is a quiz</p>
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
  .title {
    max-width: 300px;
    padding-top: 200px;
    margin: 0 auto;
    padding: 20px;
    background-color: silver;
    border-radius: 10px;
    text-align: center;
    color: rgb(0, 0, 72);
    margin-bottom: 20px;
  }

  .lessons {
    max-width: 300px;
    padding-top: 200px;
    margin: 0 auto;
    padding: 20px;
    background-color: silver;
    border-radius: 10px;
    text-align: center;
    color: rgb(0, 0, 72);
    margin-bottom: 20px;
  }
</style>
