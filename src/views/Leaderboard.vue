<script setup lang="ts">
</script>

<template>
  <html>
    <main>
      <body>

        <h1 class="mainTitle">Wolf Hack Leaderboards</h1>
  
        <!--Used much of this documentation for a Firebase-based leaderboard: https://firebase.google.com/codelabs/build-leaderboards-with-firestore#2-->
        <div class = "global">
          <h2 class="globalTitle">Global Leaderboard</h2>

          <div class = "board">
            <div v-for="(user, rank) in displayedUsers" :key="rank">
              <div class = "player">
                <span>{{ (currentPage - 1) * 10 + rank + 1 }}</span>
                <span>@{{ user.username }}</span>
                <span>{{ user.pointTotal }}</span>
              </div>
            </div>
          </div>
          <div class="navigation">
            <button class="page-button" @click="previousPage" :disabled="currentPage === 1">Previous</button>
            <button class="page-button" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div>
        </div>

        <div class = "global">
          <h2 class="globalTitle">Module Leaderboards</h2>

          <div class = "board">
            <div v-for="(user, rank) in displayedModuleUsers" :key="rank">
              <div class = "player">
                <span>{{ (currentPage - 1) * 10 + rank + 1 }}</span>
                <span>@{{ user.username }}</span>
                <span>{{ user.pointTotal }}</span>
              </div>
            </div>
          </div>
          <div class="navigation">
            <button class="page-button" @click="modulePreviousPage" :disabled="moduleCurrentPage === 1">Previous</button>
            <button class="page-button" @click="moduleNextPage" :disabled="moduleCurrentPage === moduleTotalPages">Next</button>
          </div>
        </div>
      </body>
    </main>
  </html>
</template>

<script lang ="ts">
import { getFirestore, collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import db from '../firebase/init.js'

// Documentation for export default here: https://vuejs.org/api/options-state.html
  export default {
    data() {
      return {
        leaderboardData: [] as Array<{ username: string; pointTotal: number }>,
        modulesLeaderboardData: [] as Array<{ username: string; pointTotal: number }>,
        currentPage: 1,
        moduleCurrentPage: 1,
        pageSize: 10,
      };
    },
    created() {
      this.getUsers()
      this.getModulePoints()
    },
    computed: {
      totalPages() {
        return Math.ceil(this.leaderboardData.length / this.pageSize);
      },
      moduleTotalPages() {
        return Math.ceil(this.modulesLeaderboardData.length / this.pageSize);
      },
      displayedUsers() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.leaderboardData.slice(startIndex, endIndex);
      },
      displayedModuleUsers() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.modulesLeaderboardData.slice(startIndex, endIndex);
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
      modulePreviousPage() {
        if (this.moduleCurrentPage > 1) {
          this.moduleCurrentPage--;
        }
      },
      moduleNextPage() {
        if (this.moduleCurrentPage < this.moduleTotalPages) {
          this.moduleCurrentPage++;
        }
      },
      async getUsers() {
        const usersCollection = collection(db, 'users');
        const sortedUsersQuery = query(usersCollection, orderBy('pointTotal', 'desc'));
        const querySnapshot = await getDocs(sortedUsersQuery);

        querySnapshot.forEach((doc) => {
        const uname = doc.data().username;
        const point = doc.data().pointTotal;
        this.leaderboardData.push({ username: uname, pointTotal: point });
        })

        while(this.leaderboardData.length % 10 != 0){
          this.leaderboardData.push({ username: "-", pointTotal: 0 });
          }
        },
      async getModulePoints() {
    
        }
      }
    };
</script>

<style scoped>

body{
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #001E4C;
  background-image: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-repeat: repeat-y;
  padding: 20px;
}

.mainTitle {
  margin: 20px;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  color: white;
  font-size: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 4px solid silver;
  border-radius: 20px 20px 0 0;
  height: 20%;
}

.globalTitle {
  text-align: center;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.75);
  color: silver;
  border: 4px solid silver;
  border-radius: 20px 20px 0 0;
}

.global {
  width: 40%;
  justify-content: center;
  margin: 20px;
}

.board {
  justify-content: center; 
  background-color: rgba(0, 0, 0, 0.5);
  color: silver;
  font-weight: bolder;
  
}

.player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid silver;
  margin-top: 3px;
  margin-bottom: 3px;
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
  background-color: transparent;
  color:silver;
  cursor: not-allowed;
}

.page-button:hover:not(:disabled) {
  background-color: gray;
}



</style>