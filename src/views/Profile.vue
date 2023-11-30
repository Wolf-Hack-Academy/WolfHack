<script setup lang="ts">  // write functions here

</script>


<template>  <!-- format webpage here -->
  <main>
    <div class="wrapper">

      <div class="profile-summary">
        <div class="profile-photo"></div> <!-- grab profile photo (initially) from google login -->
        <div id="username" class="profile-stats"> <!-- get username from database -->
          @username
        </div>
        <div id="points" class="profile-stats"> <!-- get points from database -->
          xxxx points
        </div>
      </div>
    </div>

  </main>
</template>


<style scoped>

.wrapper{
  position: relative;
}
  .profile-summary{
    border: 2px solid #333;
    width: 40vh;
    min-width: 200px;
    height: 70vh;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    /* margin-bottom: 50px; */
    /* padding: max(5vh, 50px); */
  }

  .profile-photo{
    border: 3px solid #333;
    border-radius: 50%;
    color: #333;
    width: 22vh;
    min-width: 110px;
    height: 22vh;
    min-height: 110px;
    position: absolute;
    top: max(5vh, 25px);
    /* margin-bottom: 50px; */
  }

  .profile-stats{
    /* top: min(5vh, 25px);
    padding: max(1vh, 10px); padding between each element */
    font-size: max(3vh, 16px);
  }

  /* * {
    margin: 20px;
  } */

</style>