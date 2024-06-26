<template>
  <footer class="footer">
    <div class="footer-main-container">
      <div class="footer-container">
      <div class="logo-section">
        <img src="/images/logo.svg" alt="Company Logo" class="logo" />
      </div>
      <div class="footer-sections">
        <div class="footer-column" v-for="(section, index) in footerSections" :key="index">
          <h5 class="text-heading-5-small-medium">{{ section.title }}</h5>
          <ul>
            <li v-for="item in section.items" :key="item.name">
              <a class="links" :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h5 class="text-heading-5-small-medium">Contact</h5>
          <ul>
            <li v-for="contactItem in contact" :key="contactItem.value">
              <a class="tel" v-if="contactItem.type === 'tel'" :href="`tel:${contactItem.value}`">{{ contactItem.value }}</a>
              <a v-else class="links" :href="`mailto:${contactItem.value}`">{{ contactItem.value }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-media">
        <a v-for="social in socialMedia" :key="social.name" :href="social.link">{{ social.name }}</a>
      </div>
      <span class="reserved">IPC 2022. All rights reserved</span>
    </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const products = ref([
  { name: "Gosource", link: "#" },
  { name: "Findeat", link: "#" },
]);

const company = ref([
  { name: "About us", link: "#" },
  { name: "Career", link: "#" },
  { name: "Contact us", link: "#" },
]);

const privacyPolicy = ref([
  { name: "Terms & Conditions", link: "#" },
  { name: "Cookies", link: "#" },
  { name: "Private Policy", link: "#" },
]);

const contact = ref([
  { type: "tel", value: "+234 806 4432 187" },
  { type: "email", value: "info@ipc-africa.com" },
  { type: "email", value: "help@ipc-africa.com" },
  { type: "email", value: "business@ipc-afrca.com" },
]);

const socialMedia = ref([
  { name: "Twitter", link: "#" },
  { name: "LinkedIn", link: "#" },
  { name: "Instagram", link: "#" },
]);

const footerSections = ref([
  { title: "Products", items: products.value },
  { title: "Company", items: company.value },
  { title: "Privacy Policy", items: privacyPolicy.value },
]);
</script>

<style scoped>
.footer {
  background-color: #f9f9f9;
  padding: 120px;
}
.footer-main-container{
  max-width: 100%;
  width: 100%;
  margin: auto;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom:32px ;
}

h5{
  font-weight: 500;
  color: #333333;
}
li .links{
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1px;
  font-weight: 400;
  font-family: var(--primary---font--family);
  text-decoration: none;
  color: var(--grey-g-700);
}
.tel{
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1px;
  font-weight: 400;
  font-family: var(--primary---font--family);
}
.tel:hover{
  cursor: pointer;
}
.footer-sections {
  max-width: 61%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.footer-column {
  display: flex;
flex-direction: column;
gap: 32px;
align-items: flex-start;
}

.footer-column ul{
  list-style: none;
  padding: 0;
display: flex;
flex-direction: column;
gap: 16px;
align-items: flex-start;
}



.footer-column ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  border-top: 1px solid #eaeaea;
  padding-top: 48px;
}

.social-media {
  display: flex;
  align-items: center;
  gap: 20px;
}

.social-media a {
  text-decoration: none;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: var(--grey-g-700);
}

.social-media a:hover {
  text-decoration: underline;
}
.reserved{
  color: #333;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family:sans-serif;
  letter-spacing: 1%;
  color: #333333;
}
</style>
