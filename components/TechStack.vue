<template>
  <section class="tech-stack-section content-section">
    <h2>{{ $t('TechStack.heading') }}</h2>
    <div class="tech-stack-wrapper interactive" @click="toggleInteractiveStack">
      <h3>{{ $t('TechStack.favorites') }}</h3>
      <ul
        class="tech-logos"
        :class="{
          'show-details': showDetails,
          'details-ready': isDetailsReady,
        }"
      >
        <li>
          <img src="/images/logos/html.png" alt="HTML5" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="html" />
          </div>
        </li>
        <li>
          <img src="/images/logos/css.png" alt="CSS3" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="css" />
          </div>
        </li>
        <li>
          <img
            src="/images/logos/typescript.png"
            alt="TypeScript"
            class="icon"
          />
          <div v-if="showDetails">
            <TechStackDetails tech="typescript" />
          </div>
        </li>
        <li>
          <img src="/images/logos/vuejs.png" alt="Vue.js" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="vuejs" />
          </div>
        </li>
        <li>
          <img src="/images/logos/nuxt.svg" alt="Nuxt.js" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="nuxt" />
          </div>
        </li>
        <li>
          <img src="/images/logos/php.png" alt="PHP" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="php" />
          </div>
        </li>
        <li>
          <img src="/images/logos/sql.png" alt="SQL" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="sql" />
          </div>
        </li>
        <li>
          <img src="/images/logos/docker.png" alt="Docker" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="docker" />
          </div>
        </li>
        <li>
          <img src="/images/logos/linux.png" alt="Linux" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="linux" />
          </div>
        </li>
      </ul>
    </div>
    <div class="tech-stack-wrapper interactive" @click="toggleInteractiveStack">
      <h3>{{ $t('TechStack.others') }}</h3>
      <ul
        class="tech-logos"
        :class="{
          'show-details': showDetails,
          'details-ready': isDetailsReady,
        }"
      >
        <li>
          <img src="/images/logos/nodejs.png" alt="Node.js" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="nodejs" />
          </div>
        </li>
        <li>
          <img
            src="/images/logos/expressjs.png"
            alt="Express.js"
            class="icon"
          />
          <div v-if="showDetails">
            <TechStackDetails tech="expressjs" />
          </div>
        </li>
        <li>
          <img src="/images/logos/python.png" alt="Python" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="python" />
          </div>
        </li>
        <li>
          <img
            src="/images/logos/llamaindex.svg"
            height="60px"
            alt="LlamaIndex"
            class="icon"
          />
          <div v-if="showDetails">
            <TechStackDetails tech="llamaindex" />
          </div>
        </li>
        <li>
          <img src="/images/logos/wordpress.png" alt="WordPress" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="wordpress" />
          </div>
        </li>
        <li>
          <img
            src="/images/logos/tailwind.png "
            alt="Tailwind CSS"
            class="icon"
          />
          <div v-if="showDetails">
            <TechStackDetails tech="tailwind" />
          </div>
        </li>
        <li>
          <img src="/images/logos/bootstrap.png" alt="Bootstrap" class="icon" />
          <div v-if="showDetails">
            <TechStackDetails tech="bootstrap" />
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

const showDetails = ref(false);
const isDetailsReady = ref(false);

function toggleInteractiveStack() {
  isDetailsReady.value = false;
  showDetails.value = !showDetails.value;
  setTimeout(() => {
    isDetailsReady.value = true;
  }, 950);
}
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
  width: 1024px;
  max-width: 100%;
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
ul.show-details {
  animation-name: showDetails;
  animation-duration: 2s;
  animation-timing-function: linear;
  /* animation-timing-function: cubic-bezier(0, 1, 0.25, 0.85); */
}
ul.show-details.details-ready {
  flex-direction: column;
  align-items: flex-start;
}
@keyframes showDetails {
  0% {
    width: 100%;
  }
  50% {
    width: 50px;
  }
  100% {
    width: 100%;
  }
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
    width 1s linear,
    max-height 0.25s linear 0.75s;
}
ul.show-details.details-ready li div {
  width: 100%;
  max-height: 400px;
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
