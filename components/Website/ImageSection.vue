<template>
  <div class="container">
    <img src="/images/Victoria.svg" alt="" class="vic0 animated-image">
    <div class="rider-food">
      <img src="/images/rider.svg" alt="" class="vic1 animated-image">
      <img src="/images/swallow.svg" alt="" class="vic2 animated-image">
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 1180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: auto;
}

.rider-food {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
}

@keyframes clearImage {
  0% {
    filter: blur(10px);
    opacity: 0.5;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.animated-image:hover {
  cursor: pointer;
  animation: clearImage 2s ease-out forwards;
}
</style>
