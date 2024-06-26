<template>
  <div class="overall-container">
    <section class="intro">
      <h1>Providing Affordable Services that Guarantee Efficiency</h1>
      <p class="text-body-large-regular regular">
        We exist to satisfy your needs, inject value in systems and optimize operational
        procedures.
      </p>
      <DynamicButtonMain
        class="w-auto text-button-large btn"
        buttonText="Get Started"
        size="large"
        type="filled"
        icon="right"
        :cornered="false"
        @clickButton="openDropdown()"
      >
        <template v-slot:svg>
          <div v-html="caretLeft" class="caretLeft-icons"></div>
        </template>
      </DynamicButtonMain>
    </section>
    <section class="services">
      <div v-for="(service, index) in services" :key="index" class="service">
        <div v-html="service.icon" class="icons"></div>
        <div class="service-text">
          <h4 class="text-heading-4-bold">{{ service.title }}</h4>
          <p class="text-body-large-regular regular">{{ service.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  caretLeft,
  procurement,
  specialOperation,
  resturant,
  logistics,
} from "~/utils/svg";

const services = ref([
  {
    title: "Procurement",
    description:
      "Convenient and satisfactory purchasing routines for first-rate, budget-friendly food products.",
    icon: procurement,
  },
  {
    title: "Social operation",
    description:
      "Content creation, marketing campaigns, increased brand awareness and customer interaction, through potent digital channels and expert techniques.",
    icon: specialOperation,
  },
  {
    title: "Restaurant setup",
    description:
      "Valuable insights and operations that help establish efficient food service businesses.",
    icon: resturant,
  },
  {
    title: "Logistics",
    description: "Speedy and secure delivery of ordered food items, bulky or otherwise.",
    icon: logistics,
  },
]);
</script>

<style scoped>
.overall-container {
  width: 100%;
  background-color: #02042d;
  padding: 130px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 130px;
}
.intro {
  max-width: 456px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  flex-direction: column;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1.5s ease-out forwards;
}
.intro h1 {
  font-family: var(--secondary---font--family);
  font-size: 34px;
  line-height: 44px;
  font-weight: 600;
  color: var(--white);
  text-align: left;
}
.intro p {
  color: var(--grey-g-200);
}
.service:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.w-auto {
  width: fit-content;
}
h4 {
  font-size: 18px;
  font-family: var(--secondary---font--family);
  font-weight: 600;
  color: var(--white);
}

p {
  color: var(--white);
}
.service {
  max-width: 238px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  transition: transform 0.3s ease;
}
.service-text {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  width: 100%;
  opacity: 0;
  align-items: start;
  transform: translateY(20px);
  animation: fadeIn 1.5s ease-out forwards;

}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (max-width: 1300px) {
  .overall-container {
    padding: 50px;
  }
}
@media screen and (max-width: 800px) {
  .overall-container {
    padding: 72px 24px;
    gap: 64px;
  }
  .service{
    max-width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .overall-container {
    padding: 72px 24px;
    gap: 64px;
  }
  .intro h1 {
    font-family: var(--secondary---font--family);
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.3px;
    font-weight: 600;
    color: var(--white);
    text-align: left;
  }
}
</style>

<style>
.caretLeft-icons {
  transition: transform 0.3s ease;
}
.caretLeft-icons svg path {
  stroke: var(--grey-g-800);
}
.btn:hover .caretLeft-icons {
  transform: translateX(5px);
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
}
.icons {
  transition: transform 0.3s ease;
}
.service:hover .icons {
  animation: shake 0.5s ease-in-out infinite;
}
</style>
