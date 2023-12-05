<script setup lang="ts">
</script>

<template>
  <main>
    <div class="leaderboard">
    <h1 class="title">Wolf Hack Leaderboard</h1>
    <div v-for="(usernames, rank) in displayedUsers" :key="rank">
      <span>@{{ usernames }}</span>
    </div>
    <div class="navigation">
    <button class="page-button" @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <button class="page-button" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
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
  max-width: 1000px;
  padding-top: 200px;
  margin: 0 auto;
  padding: 20px;
  background-color: silver;
  border-radius: 10px;
}

.title {
  text-align: center;
  color: rgb(0, 0, 72);
  margin-bottom: 20px;
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
  background-color: rgb(169, 169, 190);
  color: white;
}

.page-button:disabled {
  background-color: silver;
  cursor: not-allowed;
}

.page-button:hover:not(:disabled) {
  background-color: navy;
}

</style>