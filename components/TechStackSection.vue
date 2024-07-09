<template>
  <div class="tech-stack-wrapper">
    <h3>{{ $t(`TechStack.${title}`) }}</h3>
    <div class="tech-logos-wrapper">
      <div
        class="tech-logos-overlay"
        :class="{
          'vertical-icons-on': verticalIconsOn,
          'showing-details': showingDetails,
        }"
        @click="toggleInteractiveStack"
      ></div>
      <ul
        class="tech-logos"
        :class="{
          'vertical-icons-on': verticalIconsOn,
          'showing-details': showingDetails,
          'showing-details-wrapper': showingDetailsWrapper,
          'hiding-details-wrapper': hidingDetailsWrapper,
        }"
      >
        <li v-for="(tech, index) in techlist" :key="index + tech">
          <img :src="`/images/logos/${tech}.png`" :alt="tech" class="icon" />
          <div v-if="showingDetailsWrapper">
            <TechStackDetails :tech="tech" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  techlist: string[];
}>();

const verticalIconsOn = ref(false);
const showingDetails = ref(false);
const showingDetailsWrapper = ref(false);
const hidingDetailsWrapper = ref(false);

function toggleInteractiveStack() {
  hidingDetailsWrapper.value = false;
  // I use 2 animations running sequentially. So they need to be ran in the inverse order on reset.
  // Turn off to hide
  if (showingDetails.value) {
    showingDetails.value = false;
    hidingDetailsWrapper.value = true;
    setTimeout(() => {
      showingDetailsWrapper.value = false;
      setTimeout(() => {
        verticalIconsOn.value = false;
      }, 50);
    }, 1100);
    return;
  }

  // Turn on to show
  verticalIconsOn.value = true;
  setTimeout(() => {
    showingDetailsWrapper.value = true;
    setTimeout(() => {
      showingDetails.value = true;
    }, 100);
  }, 1000);
}
</script>

<style scoped>
h3 {
  margin-bottom: 0.5em;
}
.tech-stack-intro,
.tech-stack-wrapper {
  margin-bottom: 2.5em;
}

.tech-logos-wrapper {
  position: relative;
  padding: 20px 0px;
}
.tech-logos-overlay {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: -100px;
  height: 100%;
  width: calc(100% + 200px);
  transition: all 0.5s;
}
.tech-logos-overlay:not(.vertical-icons-on):hover {
  background-color: rgba(255, 255, 255, 0.8);
}
.tech-logos-overlay:not(.vertical-icons-on):hover::after {
  content: '+';
  padding: 0px 10px 2px;
  line-height: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: 800;
  border: 2px solid black;
  border-radius: 1000px;
}
.tech-logos-overlay.showing-details:hover {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 80%,
    rgba(255, 255, 255, 0.8) 100%
  );
}
.tech-logos-overlay.showing-details:hover::after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  right: 100px;
  width: 15px;
  height: 15px;
  border-left: 4px solid black;
  border-bottom: 4px solid black;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0% {
    transform: rotate(45deg) translate(0, 0);
  }
  70% {
    transform: rotate(45deg) translate(8px, -8px);
  }
  100% {
    transform: rotate(45deg) translate(0, 0);
  }
}

ul {
  transition: width 1s cubic-bezier(1, 0, 0.85, 0.25);
}
ul.vertical-icons-on {
  width: 50px;
  transition: width 1s cubic-bezier(0.1, 0.75, 0.25, 0.85);
}
ul.vertical-icons-on.showing-details-wrapper {
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
}
/* This overwrites the transition on width when removing showing-details-wrapper */
ul.vertical-icons-on.hiding-details-wrapper {
  transition: none;
}
li div {
  display: flex;
  flex-direction: column;
  width: 0;
  max-height: 60px;
  overflow: hidden;
  transition:
    width 1s ease-in-out 0.15s,
    max-height 0.5s linear;
}
ul.showing-details li div {
  width: 100%;
  max-height: 200px;
  transition:
    width 1s ease-out,
    max-height 0.5s linear 0.7s;
}
</style>
