<script setup lang="ts">
</script>

<template>
  <main>
    <body>
      <div class="leaderboard">
      <h1 class="welcome">welcome to</h1>
      <h1 class="titles">Wolf Hack Leaderboards</h1>
      
      <div class = "global">
        <h2 class="titles">Global Leaderboard</h2>
      <div class = "board">
        <div v-for="(usernames, rank) in displayedUsers" :key="rank">
          <div class = "player">
            <span>{{ rank }}</span>
            <span>@{{ usernames }}</span>
            <span>1000</span>
          </div>
        </div>
      </div>
      <div class="navigation">
        <button class="page-button" @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <button class="page-button" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>
    </div>
  </body>
  </main>
</template>

<script lang ="ts">
import { query, collection, getDocs } from "firebase/firestore"
import db from '../firebase/init.js'

  export default {
    data() {
      return {
        usernames: [] as string[],
        pointValues: [] as number[],
        modules: [] as string[],
        currentPage: 1,
        pageSize: 2
      };
    },
    created() {
      this.getUsers()
    },
    computed: {
      totalPages() {
        return Math.ceil(this.usernames.length / this.pageSize);
      },
      displayedUsers() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.usernames.slice(startIndex, endIndex);
      }
    },
    methods: {
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      async getUsers() {
      const queryModules = await getDocs(query(collection(db, 'lessonModules')));
      const queryUsers = await getDocs(query(collection(db, 'users')));
      const queryLessonPoints = await getDocs(query(collection(db, 'userLessonPoints')));
      queryModules.forEach((doc) => {
        const moduleID = doc.data().lessonID;
        this.modules.push(moduleID)
      })
      queryUsers.forEach((doc) => {
        const uname = doc.data().username;
        this.usernames.push(uname)
      })
    }
  }};
</script>

<style scoped>

.leaderboard {
  position: fixed;
  top: 75px;
  left: 0;
  width: 100%;
  height: calc(100% - 75px);
  background-color: #001E4C;
  background-image: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  padding: 20px;
}

.welcome {
  text-align: center;
  color: silver;
  font-style: italic;
  font-size: 16px;
}
.titles {
  text-align: center;
  margin-bottom: 15px;
  color: white;
}

.global {
  width: 40%;
}

.board {
  justify-content: center; 
  background-color: black;
  color: silver;
  font-weight: bolder;
  border: 5px solid silver;
}

.player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid silver; /* Border for each player box */
  margin-top: 3px;
  margin-bottom: 3px; /* Adjust spacing between players */
}

.navigation {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-button {
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: silver;
  color: #001E4C;
  font-weight: bold;
}

.page-button:disabled {
  background-color: rgb(71, 71, 160);
  cursor: not-allowed;
}

.page-button:hover:not(:disabled) {
  background-color: gray;
}



</style>