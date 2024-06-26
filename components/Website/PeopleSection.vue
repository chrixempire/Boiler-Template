<template>
  <div class="overall-container">
    <div class="meeting-header">
      <h1 class="section-title">We're an Awesome Place to Work Too</h1>
      <p class="section-subtitle ">
        IPC is constantly on the lookout for innovative minds and problem solvers. We've
        got efficient and trusted employees across continents and we're always looking to
        grow our workforce
      </p>
      <DynamicButtonMain
        class="w-auto text-button-large btn"
        buttonText="View open roles"
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
    </div>
    <img src="/images/people.svg" alt="" />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.overall-container {
  max-width: 1180px;
  width: 100%;
  margin: auto;
  background-color: #02042d;
  padding: 24px 24px 24px 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 180px;
}
.meeting-header {
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-items: center;
  align-content: flex-start;
}
.section-title {
  font-family: var(--secondary---font--family);
  font-size: 34px;
  line-height: 44px;
  font-weight: 600;
  color: var(--white);
  text-align: left;
}
.section-subtitle {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: var(--grey-g-300);
}
.w-auto{
  width: fit-content;
}

@media screen and (max-width: 1150px) {
  .overall-container {
  max-width: 100%;
  width: 100%;
  gap: 80px;
  border-radius: 0px;
  }
  img{
    width: 50%;
  }
}
@media screen and (max-width: 800px) {
  .overall-container {
  max-width: 100%;
  width: 100%;
  gap: 48px;
  border-radius: 0px;
  padding: 24px;
  flex-direction: column;
  }
  .meeting-header {
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-items: center;
  align-content: flex-start;
}
  img{
    width: 100%;
  }
  
}
@media screen and (max-width: 600px) {
  .overall-container {
  max-width: 100%;
  width: 100%;
  gap: 48px;
  border-radius: 0px;
  padding: 24px;
  flex-direction: column;
  }
  .meeting-header {
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-items: center;
  align-content: flex-start;
}
  img{
    width: 100%;
  }
  .section-title{
  font-family: var(--secondary---font--family);
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.3px;
    font-weight: 600;
    text-align: left;
}
}

</style>
