<script setup lang="ts">
</script>

<template>
  <div class="banner">
  <div class="title">
    <h1>Wolf Hack Lessons</h1>
  </div>
  <div class="padding"></div>
  <div class="lessons">
    <h1>Basics Quiz (100pts)</h1>
  </div>
  <div class="padding"></div>
  <div class="question">
    <h3><u>Question 1</u></h3>
    <h4>What does the CIA acronym stand for in terms of cybersecurity?</h4>
    <div class="answer">
      <ul>
        <p><label><input type="radio" name="q1" value="a"> Confidentiality, Integrity, Authorization</label></p>
        <p><label><input type="radio" name="q1" value="b"> Certification, Integrity, Authentication</label></p>
        <p><label><input type="radio" name="q1" value="c"> Confidentiality, Integrity, Availability</label></p>
        <p><label><input type="radio" name="q1" value="d"> Certification, Incident Response, Availability</label></p>
      </ul>
    </div>
  </div>
  <div class="padding"></div>
  <div class="question">
    <h3><u>Question 2</u></h3>
    <h4>What is the definition of cybersecurity?</h4>
    <div class="answer">
      <ul>
        <p><label><input type="radio" name="q2" value="a"> Cybersecurity is the practice of protecting computer systems, networks, and data from theft, damage, or unauthorized access.</label></p>
        <p><label><input type="radio" name="q2" value="b"> Cybersecurity is a form of advanced virtual reality designed for immersive online experiences.</label></p>
        <p><label><input type="radio" name="q2" value="c"> In the context of urban planning, cybersecurity is the strategic protection of digital assets for a connected city.</label></p>
        <p><label><input type="radio" name="q2" value="d"> Cybersecurity encompasses the ethical considerations and protocols involved in online marketing and advertising.</label></p>
      </ul>
    </div>
  </div>
  <div class="padding"></div>
  <div class="question">
    <h3><u>Question 3</u></h3>
    <h4>Which of the following describes ethical hacking?</h4>
    <div class="answer">
      <ul>
        <p><label><input type="radio" name="q3" value="a"> Creating viruses to test the resilience of computer systems or networks</label></p>
        <p><label><input type="radio" name="q3" value="b"> Using packet sniffing tools in a Starbucks to spy on customers</label></p>
        <p><label><input type="radio" name="q3" value="c"> Cracking your neighbors wifi password just to see if you can</label></p>
        <p><label><input type="radio" name="q3" value="d"> Conducting penetration testing on a corporate network with proper authorization to identify and address potential security vulnerabilities</label></p>
      </ul>
    </div>
  </div>
  <div class="padding"></div>
  <div class="question">
    <h3><u>Question 4</u></h3>
    <h4>What are some common cybersecurity threats?</h4>
    <div class="answer">
      <ul>
        <p><label><input type="radio" name="q4" value="a"> The exploitation of vulnerabilities, such as injecting unrelated data into databases.</label></p>
        <p><label><input type="radio" name="q4" value="b"> The manipulation of weather patterns to disrupt digital communication.</label></p>
        <p><label><input type="radio" name="q4" value="c"> Unauthorized access to computer systems through the injection of cooking recipes into databases.</label></p>
        <p><label><input type="radio" name="q4" value="d"> The deployment of trained squirrels to physically sabotage network cables.</label></p>
      </ul>
    </div>
  </div>
  <div class="padding"></div>
  <div class="question">
    <h3><u>Question 5</u></h3>
    <h4>What does non-repudiation refer to?</h4>
    <div class="answer">
      <ul>
        <p><label><input type="radio" name="q5" value="a"> Non-repudiation is the process of creating multiple copies of digital data for backup purposes.</label></p>
        <p><label><input type="radio" name="q5" value="b"> Non-repudiation refers to the encryption of sensitive information to prevent unauthorized access.</label></p>
        <p><label><input type="radio" name="q5" value="c"> Non-repudiation is the assurance that a party cannot deny the validity of their own digital signature on a document or the transmission of a message.</label></p>
        <p><label><input type="radio" name="q5" value="d"> Non-repudiation is the practice of regularly updating passwords and access credentials to enhance system security.</label></p>
      </ul>
    </div>
  </div>
  <div class="padding"></div>
  <button class="submit" type="submit">Submit Answers</button>
  <div class="padding"></div>
  <div class="padding"></div>

</div>
</template>


<style scoped>
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
  .padding{
    padding:10px;
  }
  .question {
    margin: auto;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    color: white;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 3px solid silver;
    height: 20%;
    width: 750px;
  }

  .answer{
    margin: auto;
    text-align: left;
    padding-top: 15px;
    padding-bottom: 15px;
    color: white;
    font-size: 17px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 3px solid silver;
    height: 20%;
    width: 550px;
    
  }

  .submit {
      background-color: silver; 
      color: 001E4C; 
      padding: 10px 20px;
      border: none; 
      border-radius: 5px; 
      cursor: pointer; 
      font-size:25px;
    }

    .submit:hover {
      background-color: rgba(192, 192, 192, 0.438)
    }

    .correct-answer {
      color: green;
    }

    .incorrect-answer {
      color: red;
    }

    #result {
      margin-top: 20px;
    }

</style>
