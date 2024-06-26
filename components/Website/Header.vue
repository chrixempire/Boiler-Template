<template>
  <div class="container">
    <div v-html="logo"></div>
    <div class="buttons">
      <div class="menu-btn">
        <DynamicButtonMain
          class="w-auto text-button-large"
          buttonText="About us"
          size="large-neutral-ghost"
          type="neutral-ghost"
          icon="right"
          :cornered="false"
          @clickButton="openDropdown()"
        />
        <DynamicButtonMain
          class="w-auto text-button-large"
          buttonText="Products"
          size="large-neutral-ghost"
          type="neutral-ghost"
          icon="right"
          :cornered="false"
          @clickButton="openDropdown()"
        >
          <template v-slot:svg>
            <div
              v-html="caretDown"
              class="caretdown-icon"
              :class="{ rotate: showDropdown }"
            ></div>
          </template>
        </DynamicButtonMain>

        <DynamicButtonMain
          class="w-auto text-button-large"
          buttonText="Career"
          size="large-neutral-ghost"
          type="neutral-ghost"
          icon="right"
          :cornered="false"
          @clickButton="openDropdown()"
        />
      </div>
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { logo, caretDown } from "~/utils/svg";
const showDropdown = ref(false);
function openDropdown(){
  showDropdown.value = !showDropdown.value
}
</script>

<style scoped>
.container {
  max-width: 100%;
  width: 100%;
  padding: 32px;
  

  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rotate {
  transform: rotate(180deg);
}
.menu-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

@media screen and (max-width: 600px) {
  .buttons{
    display: none;
  }
}

</style>
<style>
.caretdown-icon{
  transition: transform 0.5s ease-in-out;
}
</style>