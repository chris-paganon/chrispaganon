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
        <NuxtLink
          :to="localePath({ path: '/', hash: '#contact-me' })"
          class="contact-me-btn button"
        >
          {{ $t('NavBar.contact-me') }}
        </NuxtLink>
      </li>
      <li v-if="$i18n.locale !== 'en'">
        <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
      </li>
      <li v-if="$i18n.locale !== 'fr'">
        <NuxtLink :to="switchLocalePath('fr')">FR</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>
ul {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
li {
  margin-left: 20px;
}
a {
  display: block;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}
a:not(.contact-me-btn) {
  color: black;
  transition: letter-spacing 250ms ease-out;
}
a:not(.contact-me-btn):hover {
  letter-spacing: 2.5px;
}
#github-link img {
  transition: width 250ms ease-out;
  margin-top: 2px;
}
#github-link img:hover {
  width: 27px;
}

svg {
  width: 24px;
  margin-bottom: -5px;
  transition: width 250ms ease-out;
}
svg:hover {
  width: 27px;
}

@media (max-width: 600px) {
  ul {
    margin-right: 0px;
  }
  li {
    margin-left: 15px;
  }
  a:not(.contact-me-btn):hover {
    letter-spacing: 1.5px;
  }
}
@media (max-width: 400px) {
  li {
    margin-left: 10px;
  }
  a {
    letter-spacing: 0px;
  }
}
</style>
