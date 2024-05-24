<template>
  <section class="tech-stack-section content-section">
    <h2>{{ $t('TechStack.heading') }}</h2>
    <p class="tech-stack-intro">{{ $t('TechStack.intro') }}</p>
    <div class="tech-stack-wrapper">
      <p>
        <strong>{{ $t('TechStack.favorites') }}</strong>
      </p>
      <ul class="tech-logos">
        <li><img src="/images/logos/html.png" alt="HTML5" class="icon" /></li>
        <li><img src="/images/logos/css.png" alt="CSS3" class="icon" /></li>
        <li>
          <img
            src="/images/logos/javascript.png"
            alt="JavaScript"
            class="icon"
          />
        </li>
        <li>
          <img
            src="/images/logos/typescript.png"
            alt="TypeScript"
            class="icon"
          />
        </li>
        <li><img src="/images/logos/vuejs.png" alt="Vue.js" class="icon" /></li>
        <li><img src="/images/logos/nuxt.svg" alt="Nuxt.js" class="icon" /></li>
        <li><img src="/images/logos/sql.png" alt="SQL" class="icon" /></li>
        <li>
          <img src="/images/logos/docker.png" alt="Docker" class="icon" />
        </li>
      </ul>
    </div>
    <div class="tech-stack-wrapper">
      <p>
        <strong>{{ $t('TechStack.others') }}</strong>
      </p>
      <ul class="tech-logos">
        <li>
          <img src="/images/logos/nodejs.png" alt="Node.js" class="icon" />
        </li>
        <li>
          <img
            src="/images/logos/expressjs.png"
            alt="Express.js"
            class="icon"
          />
        </li>
        <li>
          <img
            src="/images/logos/tailwind.png "
            alt="Tailwind CSS"
            class="icon"
          />
        </li>
        <li>
          <img src="/images/logos/bootstrap.png" alt="Bootstrap" class="icon" />
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
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
li img {
  max-height: 60px;
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
