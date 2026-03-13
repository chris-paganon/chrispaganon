<template>
  <div>
    <AppHeader />
    <slot />
  </div>
</template>

<style>
:root {
  --page-bg: #fffdf8;
  --panel-cream: #fffaf3;
  --panel-blue: #f4f8fc;
  --panel-peach: #fff2e5;
  --panel-border: rgba(42, 32, 24, 0.12);
  --panel-blue-border: rgba(58, 79, 102, 0.12);
  --ink-soft: rgba(36, 28, 22, 0.78);
}

html,
body {
  font-size: 16px;
  background: var(--page-bg);
  color: #1f1712;
}
html,
body,
div,
form,
ul,
li,
label {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

th,
td {
  text-align: center;
  vertical-align: middle;
}

h1,
h2,
h3,
h4,
h5,
h6,
th,
td,
p,
a,
li,
label,
caption,
input,
textarea {
  font-family: 'Ubuntu', Serif;
  font-style: normal;
  font-weight: 500;
  margin: 0;
}

img {
  border: 0;
}

h1 {
  font-size: 55px;
  font-weight: 600;
  line-height: 1.25;
}
h2 {
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 50px;
}
h3 {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
}
p,
ul {
  font-size: 20px;
  margin-bottom: 20px;
}
input,
textarea {
  font-size: 18px;
}

@media (max-width: 925px) {
  h1 {
    font-size: 48px;
  }
}
@media (max-width: 600px) {
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 38px;
  }
  h3 {
    font-size: 25px;
  }
  p,
  ul {
    font-size: 19px;
  }
}
@media (max-width: 450px) {
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 23px;
  }
}

p a {
  display: inline-block;
  color: black;
  transition:
    transform 150ms ease-out,
    opacity 150ms ease-out;
}
p a:hover {
  transform: translateY(-1px);
  opacity: 0.8;
}

.button {
  display: block;
  cursor: pointer;
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 15px 25px;
  border-radius: 10px;
  border: 0px;
  font-size: 16px;
  font-weight: 600;
  margin: auto;
  width: fit-content;
  transition:
    background-color 250ms ease-out,
    transform 250ms ease-out,
    box-shadow 250ms ease-out;
}
.button:hover {
  background-color: rgb(44, 44, 44);
  transform: translateY(-2px);
  box-shadow: 6px 6px 0 rgba(31, 23, 18, 0.12);
}

.hero-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background-color: #c9e5f9;
  padding: 0 46px;
}
.hero-banner h1 {
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
}
@media (max-width: 925px) {
  .hero-banner {
    padding: 0 40px;
  }
  .hero-banner h1 {
    max-width: none;
  }
}
@media (max-width: 450px) {
  .hero-banner {
    padding: 0 24px;
    text-align: center;
    justify-content: center;
  }
  .hero-banner h1 {
    max-width: none;
  }
  .button {
    font-size: 14px;
    padding: 13px 18px;
  }
}
</style>
