<template>
  <div>
    <AppHeader />
    <slot />
  </div>
</template>

<style>
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
  font-weight: normal;
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
  transition: transform 150ms ease-out;
}
p a:hover {
  transform: skew(-1.5deg, -1.5deg);
}

.button {
  display: block;
  cursor: pointer;
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 15px 25px;
  border-radius: 25px;
  border: 0px;
  font-size: 16px;
  font-weight: 600;
  margin: auto;
  width: fit-content;
  transition: background-color 250ms ease-out, transform 250ms ease-out;
}
.button:hover {
  background-color: rgb(44, 44, 44);
  transform: scale(1.03, 1.03);
}

.hero-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background-color: #c9e5f9;
  padding: 0 20%;
}
@media (max-width: 925px) {
  .hero-banner {
    padding: 0 10%;
  }
}
@media (max-width: 450px) {
  .hero-banner {
    padding: 0 5%;
    text-align: center;
  }
  .button {
    font-size: 14px;
    padding: 13px 18px;
  }
}
</style>
