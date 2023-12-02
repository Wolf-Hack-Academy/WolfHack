<script setup lang="ts">
  const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
  requestAccessToken()
}
</script>

<template>
  <main>
    <GoogleLogin :callback="callback"/>
 
  </main>
</template>
