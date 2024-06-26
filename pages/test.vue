<template>
  <div class="overall-container">
    <WebsiteHeader />
    <div class="web-body">
      <div class="hero-section animate-on-scroll" ref="heroSection">
        <WebsiteHeroSection />
        <WebsiteTrustedSection />
      </div>
      <div class="animate-on-scroll" ref="innovationSection">
        <WebsiteInnovationSection />
      </div>
      <div class="animate-on-scroll" ref="affordableSection">
        <WebsiteAffordableSection />
      </div>
      <div class="animate-on-scroll" ref="imageSection">
        <WebsiteImageSection />
      </div>
      <div class="animate-on-scroll" ref="foodSection">
        <WebsiteFoodSection />
      </div>
      <div class="animate-on-scroll" ref="peopleSection">
        <WebsitePeopleSection />
      </div>
    </div>
    <WebsiteFooterSection />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import useIntersectionObserver from "~/composables/useIntersectionObserver";

const heroSection = ref(null);
const innovationSection = ref(null);
const affordableSection = ref(null);
const imageSection = ref(null);
const foodSection = ref(null);
const peopleSection = ref(null);

const { addElement } = useIntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
});

onMounted(() => {
  addElement(heroSection.value);
  addElement(innovationSection.value);
  addElement(affordableSection.value);
  addElement(imageSection.value);
  addElement(foodSection.value);
  addElement(peopleSection.value);
});
</script>

<style scoped>
.overall-container {
  width: 100%;
}
.web-body {
  padding: 0px 32px;
  margin-bottom: 200px;
}
.hero-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 64px;
}
.web-body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 200px;
}
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
