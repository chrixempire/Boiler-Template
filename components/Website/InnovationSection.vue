<template>
  <div class="card-section">
    <div class="header-text">
      <h1>
        Providing innovative solutions that drive value for the restaurant supply chain
      </h1>
    </div>
    <div v-for="(item, index) in sections" :key="index" class="card-container">
      <div class="card-content" :class="{ 'reverse-order': index % 2 !== 0 }">
        <div class="card">
          <div class="card-text">
            <div class="category-tag">
              <span class="category">{{ item.category }}</span>
            </div>
            <h2>{{ item.title }}</h2>
            <p class="desc text-body-large-regular regular">{{ item.description }}</p>
          </div>
          <DynamicButtonMain
            v-if="item.buttonText"
            class="w-auto text-button-large btn"
            :buttonText="item.buttonText"
            size="large-neutral-ghost"
            type="primary-ghost"
            icon="right"
            :cornered="false"
            :disabled="index === 1 || index === 2"
            @clickButton="openDropdown()"
          >
            <template v-slot:svg>
              <div
                v-html="caretLeft"
                :class="['caretLeft-icon', { 'index-1': index === 1 || index === 2 }]"
              ></div>
            </template>
          </DynamicButtonMain>
        </div>
        <img
          :src="item.image"
          alt="Card Image"
          :class="['card-image', { active: activeIndex === index }]"
        />
      </div>
      <img v-if="index === 0" class="div" src="\images\curly-line.svg" />
      <img v-if="index === 1" class="div" src="\images\curl.svg" />
    </div>
  </div>
</template>

<script setup>
import { caretLeft } from "~/utils/svg";
import { ref, onMounted } from "vue";
const sections = ref([
  {
    class: "procurement",
    category: "PROCUREMENT",
    title: "Manage Procurement Procedures and Enjoy Stress-Free Experience.",
    description:
      "GoSource eliminates hassles associated with sourcing food commodities, through swift, effective, and pocket-friendly procurement services.",
    buttonText: "Get started",
    image: "/images/procurements.svg",
  },
  {
    class: "logistics",
    category: "LOGISTICS",
    title: "Swift Deliveries to your Doorstep",
    description:
      "Have your orders and inventory delivered promptly and safely, at your convenience.",
    image: "/images/logistics.svg",
    buttonText: "Get started",
  },
  {
    class: "food-chain",
    category: "FOOD CHAIN",
    title: "When hunger strikes, we deliver everything you want",
    description:
      "GoSource is a strong force in food sourcing and delivery, lifting responsibilities from businesses and consumers to keep the supply chain smooth.",
    buttonText: "Get started",
    image: "/images/FoodChain.svg",
  },
]);
const activeIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % sections.value.length;
  }, 3000); // Change the interval as needed
});
</script>
<style scoped>
.category-tag {
  max-width: 120px;
  width: 100%;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #ffcdb0;
  background: #ffefe6;

  display: flex;
  justify-content: center;
  align-items: center;
}
.category {
  color: #ff5f00;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-family: var(--primary---font--family);
}
h1 {
  font-family: var(--secondary---font--family);
  font-size: 34px;
  line-height: 44px;
  font-weight: 600;
  color: var(--grey-g-900);
  text-align: center;
}
.header-text {
  max-width: 660px;
  width: 100%;
  margin-bottom: 64px;
}
h2 {
  font-family: var(--secondary---font--family);
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: var(--grey-g-900);
  text-align: left;
}
.desc {
  color: #828282;
}
.card-section {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 64px; */
}
.card-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
}
.card-container {
  max-width: 1180px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.card {
  max-width: 480px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
}
.card-content {
  max-width: 1180px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 153px;
}
.div {
  margin: 24px 0px;
}
.card-image {
  object-fit: cover;
  opacity: 0.5;
  transform: scale(0.8);
  transition: opacity 0.5s, transform 1s;
}
.card-image.active {
  opacity: 1;
  transform: scale(1);
}
.reverse-order {
  flex-direction: row-reverse;
}
/* .get-started span {
  margin-left: 0.5rem;
  transition: transform 0.3s;
}

.get-started:hover span {
  transform: translateX(5px);
} */
 @media screen and (max-width: 1400px) {
  .card-content {
    gap: 50px;
  }
 }
@media screen and (max-width: 1250px) {
  .card-content {
    gap: 50px;
  }
  .card-container {
    max-width: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .card-container {
    max-width: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* border: 1px solid red; */
  }
}
@media screen and (max-width: 1100px) {
  .card-content {
    gap: 30px;
  }
 }
@media screen and (max-width: 900px) {
  .div{
    display: none;
  }
  .card-section{
    padding:0px 30px;
  }
  .card-content {
  max-width: 1180px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
}
.card-container {
    max-width: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 64px;
  }

}
@media screen and (max-width: 600px) {
  h1 {
  font-family: var(--secondary---font--family);
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.3px;
  font-weight: 600;
  color: var(--grey-g-900);
  text-align: center
}
h2 {
  font-family: var(--secondary---font--family);
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.2px;
  font-weight: 600;
  color: var(--grey-g-900);
  text-align: left;
}
.card-section{
    padding:72px 24px;
  }
}
</style>

<style>
.caretLeft-icon {
  transition: transform 0.3s ease;
}
.index-1 svg path {
  stroke: var(--grey-g-50);
}
.btn:hover .caretLeft-icon {
  transform: translateX(5px);
}
</style>
