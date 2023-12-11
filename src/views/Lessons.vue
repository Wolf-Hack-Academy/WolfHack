<script setup lang="ts">
</script>

<template>
  <html>
    <main>
      <body>
        <div class="banner">
        <div class="title">
          <h1>Wolf Hack Lessons</h1>
        </div>
        <!-- <div class="lessons">
          <p v-for="lesson in lessons" :key="lesson.lessonID">
            {{ lesson.lessonID }}<br>
            Points: {{ lesson.points }}
          </p>
        </div> -->
        <div class="padding">
        </div>
        <div class="lessons">
          <p>Below are the current lesson modules that Wolf Hack Academy has to offer. Each module contains a few different lessons and ends with a quiz to test your understanding.</p>
        </div>
        <div class="padding">
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <h2>Basics (100pts)</h2>
            <h4>New to cybersecurity? Don't know where to start? Learn some of the basic fundamentals! This module contains an introduction to the cybersecurity discipline, a discussion of ethics, and the CIA triad.</h4>
            <div class="padding"></div>
            <p><RouterLink to="/lessons/basics" class="lessonRedirect">Enter Module</RouterLink></p>
            <div class="padding"></div>
          </div>
          <div class="grid-item">
            <h2>Hashcat (200pts)</h2>
            <h4>Ever wanted to learn how to crack passwords (ethically)? Want to prepare for cyber competitions and learn about hashes? This module contains an introduction to the password cracking tool Hashcat as well as a discussion of hashing and the importance of secure passwords.</h4>
            <div class="padding"></div>
            <p><RouterLink to="/lessons/hashcat" class="lessonRedirect">Enter Module</RouterLink></p>
            <div class="padding"></div>
          </div>
          <div class="grid-item">
            <h2>Wireshark (200pts)</h2>
            <h4>A lot of information can be learned through networks. Wireshark is a networking sniffing tool that allows a cybersecurity professional to analyze packets that travel through the internet. This module contains lessons about Wireshark, packet sniffers, and how to use these tools responsibly and ethically.</h4>
            <div class="padding"></div>
            <p><RouterLink to="/lessons/wireshark" class="lessonRedirect">Enter Module</RouterLink></p>
            <div class="padding"></div>
          </div>
        </div>
        </div>
      </body>
    </main>
  </html>
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
  border: 3px solid silver;
  border-radius: 20px 20px 0 0;
  height: 20%;
  width: 500px;
}

  .padding{
    padding:10px;
  }

  .lessons {
    margin: auto;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    color: white;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 3px solid silver;
    height: 20%;
    width: 1000px;
  }

  .grid-container{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    border: 2px solid silver;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .grid-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid silver;
    margin-top: 3px;
    margin-bottom: 3px;
    color:white;
  }

  .lessonRedirect{
    border: 2px solid greenyellow;
    padding: 5px;
    color: greenyellow;
    text-decoration:underline;
    padding-top: 1px;
  }
</style>
