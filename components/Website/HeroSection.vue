<template>
  <div class="container">
    <div class="content">
      <div class="text-content">
        <h1>Value-Driving Innovative Solutions for Food Enterprises</h1>
        <p>
          Independent Purchasing Company Ltd (IPC) provides streamlined solutions which
          revolutionalise value and supply chain systems of restaurants and other food
          service industry players.
        </p>
        <DynamicButtonMain
          class="w-auto text-button-large"
          buttonText="Get started"
          size="large"
          type="primary"
          icon="right"
          :cornered="false"
          @clickButton="openDropdown()"
        />
      </div>
      <img src="~/assets/images/food-store.svg" />
    </div>
  </div>
</template>

<script setup>
function openDropdown() {
  console.log("openDropdown");
}
</script>

<style scoped>
.container {
  width: 100%;
  background-color: var(--grey-g-50);
  border-radius: 24px;
}
h1 {
  font-size: 56px;
  font-family: var(--secondary---font--family);
  letter-spacing: -0.31px;
  font-weight: 600;
  color: var(--grey-g-900);
  text-align: center;
}
p {
  font-size: 20px;
  font-family: var(--primary---font--family);
  letter-spacing: 0.5%;
  font-weight: 400;
  color: var(--grey-g-700);
  text-align: center;
}
.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
.content {
  max-width: 986px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
  padding-top: 80px;

  margin: auto;
}
</style>
