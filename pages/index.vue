<template>
  <main>
    <section class="hero-banner">
      <h1>{{ $t('homepage.heading1') }}</h1>
    </section>
    <div class="home-content-wrapper">
      <section class="introduction content-section">
        <img src="/images/me.jpg" alt="me" />
        <p>{{ $t('homepage.intro') }}</p>
        <p>{{ $t('homepage.intro2') }}</p>
      </section>
      <hr class="separator" />
      <ServicesTable />
      <div class="background-section-wrapper portfolio-section-background">
        <PortfolioProjects />
      </div>
      <ContactMe />
    </div>
  </main>
</template>

<style scoped>
.content-section {
  margin: auto;
  max-width: 1024px;
  padding: 60px 40px;
}
.background-section-wrapper {
  width: 100%;
  background-color: rgb(255, 251, 246);
}

.introduction {
  position: relative;
  padding: 150px 40px;
}
.introduction p {
  font-size: 2em;
  margin-right: 170px;
  margin-bottom: 1em;
}
.introduction p:last-child {
  margin-bottom: 0;
}
img {
  position: absolute;
  top: -75px;
  right: 20px;
  width: 200px;
  border-radius: 50%;
  margin: 0 10px;
  transition: transform 500ms ease-out;
}
img:hover {
  transform: translateY(-10px) scale(1.1, 1.1);
}

.separator {
  border-top: 2px solid gray;
  max-width: 66%;
}
.services-section {
  text-align: center;
}

@media (max-width: 925px) {
  .introduction {
    padding: 140px 40px 100px 40px;
  }
  .introduction p {
    font-size: 1.8em;
    margin-right: 0;
    text-align: center;
  }
  img {
    top: -90px;
  }
}
@media (max-width: 600px) {
  img {
    width: 170px;
    margin: 0;
    top: -75px;
    right: calc(50% - 170px / 2);
  }
}
@media (max-width: 450px) {
  .content-section {
    padding: 50px 20px;
  }
  .introduction p {
    font-size: 1.5em;
    margin: 30px 0 10px 0;
  }
  img {
    width: 150px;
    top: -120px;
    right: calc(50% - 150px / 2);
  }
}
</style>
