<script setup lang="ts">  // write functions here
</script>


<template>  <!-- format webpage here -->
  <html>
    <header>@username</header> <!-- get pfp from googl scope -->
    <body>
      <div class="wrapper">
        <div class="lessons">
          <div class="in-progress">
            In-Progress
          </div>
          <div class="brush-up">
            Brush-Up
          </div>
        </div>
        <div class="profile-summary">
          <div class="profile-photo"></div> <!-- grab profile photo (initially) from google login -->
          <div class="profile-stats"> <!-- get points from database -->
            xxxx points
          </div>
        </div>
      </div>
    </body>
  </html>
</template>






<style scoped>
  .wrapper{
    display: grid;
    grid-template-columns: 5fr 1fr ;
    margin-top: 50px;
    gap: 1.5rem;

    height: fit-content;
    width: fit-content;
    justify-content: center;
    
    font-family: 'garet', Garet-Book;
  }

  .lessons{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    width: 100vh;
    height: 70vh;
  }

  .profile-summary{
    display: grid;
    grid-column: 2;
    justify-content: center;
    padding: 20px;
    /* border: 2px solid #333; */
    height: 100%;
    max-height: fit-content;
    width: 100%;
    grid-template-rows: 1fr 1fr;
  }

  .profile-photo{
    border: 3px solid #333;
    border-radius: 50%;
    color: #333;

    width: 33vh;
    min-width: 110px;
    height: 33vh;
    min-height: 110px;

    position: relative;
    top: max(5vh, 25px);
    margin-bottom: max(10vh, 40px);
  }

  .profile-stats{
    font-size: max(3vh, 16px);
    font-family: 'garet', Garet-Book;
    position: relative;
    text-align: center;
  }

  body{
    display: grid;
    min-height: 100vh;
    min-width: 100vw;
  }

  header{
    font-size: 30px;
    font-family: 'garet', Garet-Book;
    height: 20px;
  }
</style>