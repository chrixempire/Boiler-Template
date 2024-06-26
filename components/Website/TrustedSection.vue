<template>
  <div class="trusted-container">
    <h5 class="trusted-text">We are trusted by 20+ businesses & 2000 individuals</h5>
    <div class="logo-container">
      <img v-for="(logo, index) in logos" :key="index" :src="logo" class="logo" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const logos = ref([
 '/images/papa-grills.svg',
 '/images/spicy.svg',
 '/images/red.svg',
 '/images/grillsnack.svg',
 '/images/citySub.svg',
 '/images/wing.svg',
]);
</script>

<style scoped>
.trusted-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

 h5 {
  font-family: var(--secondary---font--family);
  font-weight: 600;
  font-size: 20px;
  color: #4F4F4F;
  text-align: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  gap: 48px;
  overflow: hidden;
}


@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% * 6));
  }
}

/* Additional Animations */
/* .logo:nth-child(1) {
  animation: bounce 2s infinite;
} */

/* .logo:nth-child(2) {
  animation: rotate 3s infinite linear;
} */

.logo:nth-child(odd) {
  animation: scale 4s infinite alternate;
}

.logo:nth-child(even) {
  animation: fade 5s infinite alternate;
}

/* .logo:nth-child(5) {
  animation: slide 6s infinite alternate;
} */

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scale {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50px);
  }
}
</style>
