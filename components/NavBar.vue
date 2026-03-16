<template>
  <nav>
    <ul>
      <li>
        <NuxtLink
          id="github-link"
          to="https://github.com/chris-paganon"
          target="_blank"
        >
          <img
            src="/images/logos/github.png"
            alt="GitHub"
            class="icon"
            width="24px"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath({ name: 'index' })">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="31.Home">
              <path
                d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"
              />
              <path
                d="M18.293 13.707 12 7.414l-6.293 6.293-1.414-1.414L12 4.586l7.707 7.707-1.414 1.414z"
              />
              <path d="M17 18H7v-8h2v6h6v-6h2v8z" />
            </g>
          </svg>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath({ path: '/', hash: '#portfolio' })">{{
          $t('NavBar.portfolio')
        }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath({ path: '/', hash: '#work-experience' })">{{
          $t('NavBar.work-experience')
        }}</NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="localePath({ path: '/', hash: '#contact-me' })"
          class="contact-me-btn button"
        >
          {{ $t('NavBar.contact-me') }}
        </NuxtLink>
      </li>
      <li v-if="$i18n.locale !== 'en'">
        <NuxtLink :to="switchLocalePathWithoutHash('en')">EN</NuxtLink>
      </li>
      <li v-if="$i18n.locale !== 'fr'">
        <NuxtLink :to="switchLocalePathWithoutHash('fr')">FR</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

function switchLocalePathWithoutHash(locale: 'en' | 'fr') {
  const path = switchLocalePath(locale);

  return path ? path.split('#')[0] : '/';
}
</script>

<style scoped>
nav {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0;
  justify-content: flex-end;
  align-items: center;
}

ul {
  display: flex;
  align-items: center;
  border: 1px solid rgba(42, 32, 24, 0.1);
  border-radius: 10px;
  background: rgba(255, 250, 243, 0.92);
  backdrop-filter: blur(8px);
  padding: 12px 24px;
  margin-right: 0;
  margin-bottom: 0;
}
li {
  margin-left: 30px;
}
li:first-child {
  margin-left: 0;
}
a {
  display: block;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}
a:not(.contact-me-btn) {
  color: black;
  transition:
    transform 250ms ease-out,
    opacity 250ms ease-out;
}
a:not(.contact-me-btn):hover {
  transform: translateY(-1px);
  opacity: 0.75;
}
#github-link img {
  transition: transform 250ms ease-out;
  margin-top: 2px;
}
#github-link img:hover {
  transform: translateY(-2px) rotate(-4deg);
}

svg {
  width: 24px;
  margin-bottom: -5px;
  transition: transform 250ms ease-out;
}
svg:hover {
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  nav {
    width: 100%;
    box-sizing: border-box;
  }

  ul {
    padding: 12px 14px;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px 12px;
  }
  li {
    margin-left: 0;
  }
}
@media (max-width: 420px) {
  ul {
    padding: 10px 12px;
  }
  a {
    letter-spacing: 0px;
  }
}
@media (max-width: 375px) {
  ul {
    border-radius: 0;
  }
}
</style>
