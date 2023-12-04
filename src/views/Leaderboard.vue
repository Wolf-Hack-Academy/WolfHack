<script setup lang="ts">
</script>

<template>
  <main>
 
  </main>
</template>

<script lang = "ts">
import { doc, getDoc } from "firebase/firestore"
import db from '../firebase/init.js'

export default {
  data() {
    return {
      username: '',
      points: ''
    }
  },
  created() {
    this.getUsers()
  },
  methods: {
    async getUsers() {

      const docSnap = await getDoc(doc(db, 'users', 'FohR54ZTccqAv0O2PmLx'))

      if (docSnap.exists()) {
        // assign document fields
        // to data properties
        this.username = docSnap.data().username
        this.points = docSnap.data().points
        console.log(this.points)
        console.log(this.username)
      } else {
        console.log('Document does not exist')
      }
    }
  }
}
</script>
