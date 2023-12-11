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
            <h2>What is Cybersecurity? Although it is a very broad term, it can be defined as the practice of protecting computer systems, networks, and data from theft, damage, or unauthorized access.</h2>
            <div class="padding"></div>
            <h2>Some common cybersecurity threats usually involve the exploitation of vulnerabilities, such as injecting unrelated data into databases. They can also include things like social engineering, malware attacks, or shoulder surfing.</h2>
          </div>
    </div>
    <div class="padding"></div>
    <div class="lessons">
      <h1><u>Ethics</u></h1>
          <div class="lessonContent">
            <h2>Before delving into the world of hacking, it is essential to discuss the ethical implications. Under no circumstances are you allowed to replicate the use of the tools you learn from this website unless you are given explicit and documented permission. Otherwise, you face extreme consequences. </h2>
            <div class="padding"></div>
            <h2>An example of this is the Computer Fraud and Abuse Act, which details that accessing a computer/system without authorization with the intent to defraud, extort, etc. may result in fines up to $5,000, imprisonment for up to 10 years, or both. It is important to practice the use of these tools in a controlled sandbox environment that will not affect any individuals or organizations. An example of ethical hacking is conducting penetration testing on a corporate network with proper authorization to identify and address potential security vulnerabilities.</h2>
            <div class="padding"></div>
            <h2> This is why cyber competitions are valuable: you can practice password cracking and network analysis in a controlled environment and even win prize money for placing!</h2>
          </div>
    </div>
    <div class="padding"></div>
    <div class="lessons">
      <h1><u>CIA Triad</u></h1>
          <div class="lessonContent">
            <h2>The CIA triad is a foundational concept in cybersecurity that represents three core principles aimed at ensuring the security of information systems. The CIA triad stands for Confidentiality, Integrity, and Availability. These principles are essential for designing and implementing secure systems and protecting sensitive information.</h2>
          <div class="padding"></div>
            <h2>Let's get into what each of these principles means:</h2>
            <h2>Confidentiality is the idea that there will be no unauthorized reading of data. That is, if you do not have access to data or information, you should not be able to see that data or information.</h2>
            <h2>Integrity describes the idea that there will be no unauthorized writing of data. That is, if you do not have access to change data or information, you should not be able to manipulate it or modify it in any way.</h2>
            <h2>Lastly, Availability describes the idea that information or data is available when it is needed (by authorized users).</h2>
            <div class="padding"></div>
            <h2>There are a few other principles that are important to note when discussing proper cybersecurity practices. These principles are Authorization, Authentication, and Non-Repudiation.</h2>
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
    width: 750px;
  }

  .lessons {
    margin: auto;
    text-align: center;
    padding-top: 25px;
    color: white;
    font-size: 13px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 20%;
    width: 650px;
  }

  .lessonContent{
    margin: auto;
    text-align: left;
    padding-left:15px;
    padding-right:15px;
    padding-bottom: 25px;
    color: white;
    font-size: 10px;
    height: 20%;
    width: 650px;
  }
</style>
