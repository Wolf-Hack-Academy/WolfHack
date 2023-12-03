<script setup lang="ts">  // write functions here
</script>


<template>  <!-- format webpage here -->
  <html>
    
    <!-- <header>test header here</header> -->
    <body>
    

      <div class="wrapper">
        <div class="lessons">
          <div class="in-progress">
            in-progress
          </div>
          <div class="brush-up">
            brush-up
          </div>
        </div>
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


    </body>
  </html>
</template>


<style scoped>
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 3fr ;
    margin-top: 50px;
    gap: 1.5rem;

    height: fit-content;
    width: fit-content;
    /* justify-content: center; */
    
    font-family: 'garet', Garet-Book;
    /* border: 2px solid #333; */
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
    justify-content: center; /* horizontal */
    padding: 20px;
    border: 2px solid #333;

    height: 100%;
    min-height: 350px;
    max-height: fit-content;

    width: 100%;
    min-width: 200px;
    /* max-width: fit-content; */
  }

  .profile-photo{
    border: 3px solid #333;
    border-radius: 50%;
    color: #333;

    width: 22vh;
    min-width: 110px;

    height: 22vh;
    min-height: 110px;

    position: relative;
    top: max(5vh, 25px);
    margin-bottom: max(10vh, 40px);
  }


  .profile-stats{
    font-size: max(3vh, 16px);
    font-family: 'garet', Garet-Book;
    position: relative;
    justify-content: center;
    /* height: ; */
  }


  /* body, html {
    height: 100%;
    margin: 0;
    padding: 0;
  } */

  body{
    /* justify-content: center; */
    display: grid;
    min-height: 100vh;
    min-width: 100vw;
    /* overflow: hidden; */
  }

  .e-gridheader .e-table{
    
  }
/* 
  header{
    display: none;
  } */

</style>

<!-- <style>
header {
    display: none;
}
</style> -->