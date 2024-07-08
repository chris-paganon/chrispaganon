<template>
  <section class="tech-stack-section content-section">
    <h2>{{ $t('TechStack.heading') }}</h2>
    <div class="tech-stack-wrapper interactive" @click="toggleInteractiveStack">
      <h3>{{ $t('TechStack.favorites') }}</h3>
      <ul
        class="tech-logos"
        :class="{
          'vertical-icons-on': verticalIconsOn,
          'showing-details': showingDetails,
          'showing-details-wrapper': showingDetailsWrapper,
          'hiding-details-wrapper': hidingDetailsWrapper,
        }"
      >
        <li v-for="(mainTech, index) in mainTechList" :key="index + mainTech">
          <img
            :src="`/images/logos/${mainTech}.png`"
            :alt="mainTech"
            class="icon"
          />
          <div v-if="showingDetailsWrapper">
            <TechStackDetails :tech="mainTech" />
          </div>
        </li>
      </ul>
    </div>
    <div class="tech-stack-wrapper interactive" @click="toggleInteractiveStack">
      <h3>{{ $t('TechStack.others') }}</h3>
      <ul
        class="tech-logos"
        :class="{
          'vertical-icons-on': verticalIconsOn,
          'showing-details': showingDetails,
          'showing-details-wrapper': showingDetailsWrapper,
          'hiding-details-wrapper': hidingDetailsWrapper,
        }"
      >
        <li
          v-for="(otherTech, index) in otherTechList"
          :key="index + otherTech"
        >
          <img
            :src="`/images/logos/${otherTech}.png`"
            :alt="otherTech"
            class="icon"
          />
          <div v-if="showingDetailsWrapper">
            <TechStackDetails :tech="otherTech" />
          </div>
        </li>
      </ul>
    </div>
    <div class="tech-stack-wrapper">
      <p>
        <em>{{ $t('TechStack.note') }}</em>
      </p>
      <ul>
        <li>
          <img src="/images/logos/reactjs.png" alt="React" class="icon" />
        </li>
        <li>
          <img src="/images/logos/nextjs.png" alt="Next.js" class="icon" />
        </li>
      </ul>
    </div>
    <NuxtLink
      :to="localePath({ path: '/', hash: '#contact-me' })"
      class="contact-me-btn button"
    >
      {{ $t('NavBar.contact-me') }}
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

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

const mainTechList = [
  'html',
  'css',
  'typescript',
  'vuejs',
  'nuxt',
  'php',
  'sql',
  'docker',
  'linux',
];
const otherTechList = [
  'nodejs',
  'expressjs',
  'python',
  'llamaindex',
  'wordpress',
  'tailwind',
  'bootstrap',
];
</script>

<style scoped>
.tech-stack-section {
  text-align: center;
}
h2 {
  margin-bottom: 0.5em;
}
.tech-stack-intro,
.tech-stack-wrapper {
  margin-bottom: 2.5em;
}
.tech-stack-wrapper.interactive {
  cursor: pointer;
}
ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
li {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
li img {
  height: 60px;
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
.button {
  margin: 40px auto 20px auto;
  font-size: 20px;
  border-radius: 30px;
}
@media (max-width: 450px) {
  .button {
    font-size: 18px;
    padding: 15px 25px;
  }
}
</style>
