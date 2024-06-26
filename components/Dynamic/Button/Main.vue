<template>
  <button
    @click="$emit('clickButton')"
    class="button"
    :class="buttonClasses"
    :disabled="disabled || isLoading"
  >
    <span v-if="showText && !isLoading">{{ buttonText }}</span>
    <slot v-if="!isLoading" name="svg"></slot>
    <DynamicLoader :size="size" :isLoading="isLoading"/>
  </button>
</template>

<script setup>
import { ref, computed } from "vue";

const { buttonText, size, type, icon, showText, disabled, isLoading, cornered } =
  defineProps({
    buttonText: {
      type: String,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    cornered: {
      type: Boolean,
      default: false,
    },
  });

const buttonClasses = computed(() => {
  return {
    "large-neutral-ghost": size === "large-neutral-ghost",
    "medium-neutral-ghost": size === "medium-neutral-ghost",
    "small-neutral-ghost": size === "small-neutral-ghost",

    "text-button-micro micro": size === "micro",
    "text-button-small small": size === "small",
    "text-button-medium medium": size === "medium",
    "text-button-large large": size === "large",

    // Button type
    "primary-button": type === "primary",
    "primary-ghost-button": type === "primary-ghost",
    "secondary-button": type === "secondary",
    "neutral-outline": type === "outline",
    "neutral-filled": type === "filled",
    "neutral-ghost": type === "neutral-ghost",
    destructive: type === "destructive",
    "link-primary": type === "link-primary",
    "link-neutral": type === "link-neutral",

    // icon position
    "icon-left": icon === "left",
    "icon-right": icon === "right",
    "icon-button": !showText,

    // button shape
    "cornered": cornered,
  };
});

</script>

<style>
button {
    outline: 0;
    border: 0;
    background: none;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    border-radius: 8px;
    letter-spacing: -0.2px;

    width: 100%;

    outline: 0;
    border: 0;

    cursor: pointer;
    overflow: hidden;

    transition: 0.3s;

    font-family: var(--primary---font--family);
}
.text-button-large {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.31px;
    font-weight: 600;
}

.text-button-medium {
  font-size: 16px;
    line-height: 21px;
    letter-spacing: 0px;
    font-weight: 600;
}

.text-button-small {
  font-size: 12px;
    line-height: 17px;
    letter-spacing: 0px;
    font-weight: 600;
}

.text-button-micro {
    font-size: var(--buttons---button--micro);
    line-height: var(--buttons---button--micro);
}
.button.cornered {
    border-radius: 4px;
}

.button:disabled {
    cursor: not-allowed;
}

.button.large {
    height: 44px;
    padding: 0px 20px;
    gap: var(--spacing-unit);
}

.button.medium {
    height: 38px;
    padding: 0px 16px;
    gap: calc(var(--spacing-unit)/2);
}

.button.small {
    height: 32px;
    padding: 0px 12px;
    gap: calc(var(--spacing-unit) / 2);
}

.button.micro {
    height: 24px;
    padding: 0px 8px;
    gap: calc(var(--spacing-unit) / 2);
}





.primary-button {
    background: var(--primary-p200);
    color: var(--white);
}

.primary-button:hover {
    background: var(--primary-p400);
}

.primary-button:active {
    background: var(--primary-p400);
}

.primary-button:disabled {
    background: var(--grey-g-50);
}


.secondary-button {
    background: var(--white);
    color: var(--primary-primary-500-base);
}

.secondary-button:hover {
    background: var(--primary-primary-50);
}

.secondary-button:active {
    background: var(--primary-primary-75);
}

.secondary-button:disabled {
    color: var(--grey-300);
}

.neutral-ghost {
    background: var(--White);
    color: var(--grey-g-700);
}
.neutral-ghost:hover {
    background: var(--White);
    color: var(--grey-g-800);
}
.neutral-ghost:active {
    background: var(--White);
    color: var(--grey-g-900);
}
.primary-ghost-button {
    background: var(--White);
    color: var(--primary-p300);
}
.primary-ghost-button:hover {
    background: var(--White);
    color: var(--primary-p400);
}
.primary-ghost-button:active {
    background: var(--White);
    color: var(--primary-p500);
}
.primary-ghost-button:disabled {
    background: var(--White);
    color: var(--grey-g-50);
}
.large-neutral-ghost {
  height: 24px;
}

.medium-neutral-ghost {
  height: 21px;
}

.small-neutral-ghost {
  height: 17px;
}

.neutral-ouline {
    border: 1px solid var(--grey-100);
    background: var(--White);
    color: var(--grey-900-base);
    /* Neutral Button shadow */
    box-shadow: var(--neutral--button-shadow);
}
.neutral-outline:hover {
    border: 1px solid var(--grey-100);
    background: var(--grey-75);
}

.neutral-outline:active {
    border: 1px solid var(--grey-100);
    background: var(--grey-100);
}

.neutral-outline:disabled {
    border: 1px solid var(--grey-100);
    background: var(--white);
    color: var(--grey-400);
}


.neutral-filled {
    background: var(--white);
    color: var(--grey-g-800);
    border: 1px solid var(--grey-g-200) ;
}

.neutral-filled:hover {
    background: var(--grey-g-200);
    color: var(--grey-g-900);
    border: 1px solid var(--grey-g-50) ;
}

.neutral-filled:active {
  background: var(--grey-g-300);
  color: var(--grey-g-900);
  border: 1px solid var(--grey-g-100) ;
}

.neutral-filled:disabled {
    background: var(--grey-100);
    color: var(--grey-400);

}

.destructive {
    background: var(--negative-400);
    color: var(--White);
}

.destructive:hover {
    background: var(--negative-600);
}

.destructive:active {
    background: var(--negative-700);
}

.destructive:disabled {
    background: var(--grey-300);
    color: var(--white);
}

.link-primary {
    color: var(--primary-primary-500-base);
}

.link-primary:hover {
    color: var(--primary-primary-600);
}

.link-primary:active {
    color: var(--primary-primary-700);
}

.link-primary:disabled {
    color: var(--grey-300);
}

.link-neutral {
    color: var(--grey-700);
}

.link-neutral:hover {
    color: var(--grey-900-base);
}

.link-neutral:active {
    color: var(--grey-900-base);
}

.link-neutral:disabled {
    color: var(--grey-300);
}

button.icon-right {
    flex-direction: row;
}

button.icon-left {
    flex-direction: row-reverse;
}
</style>