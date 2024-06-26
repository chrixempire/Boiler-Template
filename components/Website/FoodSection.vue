<template>
  <div class="overall-container">
    <div class="blog-header">
      <div class="category-tag">
        <span class="category">Blog</span>
      </div>
      <h1 class="section-title">Stay Plugged In to Product and Industry Updates</h1>
      <p class="section-subtitle">
        GoSource is an innovative powerhouse in the food service industry that delivers
        quality, accessible and affordable food items to vendors and consumers.
      </p>
    </div>
    <div class="blog-container">
      <div v-for="(blog, id) in blogs" :key="blog.id" class="blog-card">
        <img :src="blog.image" :alt="blog.title" class="blog-image" />
        <div class="blog-details">
          <div class="blog-info">
          <DynamicButtonMain
            class="w-auto text-button-micro btn"
            :buttonText="blog.category"
            size="micro"
            type="filled"
            icon="right"
            :cornered="false"
            @clickButton="openDropdown()"
          />

          <p class="date text-body-large-regular regular">{{ blog.date }}</p>
        </div>
        <h4 class="blog-title text-heading-4-small-medium medium">{{ blog.title }}</h4>
        <DynamicButtonMain
          class="w-auto text-button-large btn bold"
          buttonText="Read more"
          size="large-neutral-ghost"
          type="neutral-ghost"
          icon="right"
          :cornered="false"
          @clickButton="openDropdown()"
        >
          <template v-slot:svg>
            <div v-html="caretLeft" :class="['caretLeft-iconic']"></div>
          </template>
        </DynamicButtonMain>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { caretLeft } from "~/utils/svg";
const blogs = ref([
  {
    id: 1,
    title: "Celebrating world food safety day; helping everyone...",
    image: "/images/food-safety.svg",
    category: "GOSOURCE",
    date: "July 15",
  },
  {
    id: 2,
    title: "Food vendors in Lagos are hiring procurers for there...",
    image: "/images/pizza.svg",
    category: "FINDEAT",
    date: "July 15",
  },
  {
    id: 3,
    title: "Food vendors in Lagos are hiring procurers for there...",
    image: "/images/healthy.svg",
    category: "FINDEAT",
    date: "July 15",
  },
  {
    id: 4,
    title: "Celebrating world food safety day; helping everyone...",
    image: "/images/food-safety.svg",
    category: "GOSOURCE",
    date: "July 15",
  },
]);
</script>

<style scoped>
.overall-container {
  max-width: 1180px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  flex-direction: column;
  margin: auto;
}

.section-title {
  font-family: var(--secondary---font--family);
  font-size: 34px;
  line-height: 44px;
  font-weight: 600;
  color: var(--grey-g-900);
  text-align: left;
}

.category-tag {
  width: auto;
  padding: 0px 12px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #ffcdb0;
  background: #ffefe6;

  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-header {
  max-width: 480px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  flex-direction: column;
}

.date {
  color: #828282;
}

.category {
  color: #ff5f00;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-family: var(--primary---font--family);
}

.blog-card {
  max-width: 238px;
  width: 100%;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;

  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 2s ease-out forwards;
  animation-delay: calc(var(--index) * 0.1s);
  opacity: 0;
}
.blog-details{
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.blog-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.blog-title {
  color: var(--grey-g-900);
}

.blog-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.blog-card:nth-child(1) {
  --index: 0;
}

.blog-card:nth-child(2) {
  --index: 1;
}

.blog-card:nth-child(3) {
  --index: 2;
}

.blog-card:nth-child(4) {
  --index: 3;
}

.blog-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(238px, 1fr));
  gap: 32px;
  justify-content: space-between;
}

.section-subtitle {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: var(--grey-g-700);
}
.blog-card {
  max-width: 100%;
  width: 100%;
  padding: 12px;
  }
  .blog-image{
    width: 100%;
  }
@media screen and (max-width: 1250px) {
  .overall-container {
    padding: 50px;
  }
  .blog-card {
  max-width: 100%;
  width: 100%;
  padding: 12px;
  }
  .blog-image{
    width: 100%;
  }
  .overall-container {
  max-width: 1180px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
  flex-direction: column;
  margin: auto;
}
}
@media screen and (max-width: 900px) {
  .blog-card {
  max-width: 100%;
  width: 100%;
  padding: 12px;
  }
  .blog-image{
    width: 100%;
  }
}
@media screen and (max-width: 800px) {
  .overall-container {
    padding: 30px;
  }
}
@media screen and (max-width: 700px) {
  .overall-container {
    padding: 72px 24px;
  }
  .section-title{
    font-family: var(--secondary---font--family);
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.3px;
    font-weight: 600;
    text-align: left;
  }
  .blog-title{
    font-family: var(--primary---font--family);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    font-weight: 500;
  }
  .blog-card {
  max-width: 100%;
  width: 100%;
  padding: 12px;
  }
  .blog-image{
    width: 100%;
  }
}
</style>

<style>
.caretLeft-iconic {
  transition: transform 0.3s ease;
}
.caretLeft-iconic svg path {
  stroke: var(--grey-g-700);
}

.btn:hover .caretLeft-iconic {
  transform: translateX(5px);
}
</style>
