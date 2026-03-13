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
        <p class="intro-secondary">{{ $t('homepage.intro3') }}</p>
      </section>
      <hr class="separator" />
      <TechStack />
      <CodingAgents />
      <div class="background-section-wrapper portfolio-section-background">
        <PortfolioProjects />
      </div>
      <div class="background-section-wrapper work-section-background">
        <WorkExperience />
        <Education />
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
  position: relative;
  background-color: rgb(255, 251, 246);
}

.work-section-background {
  background: linear-gradient(180deg, rgb(255, 251, 246), rgb(255, 245, 235));
}

.portfolio-section-background {
  background: linear-gradient(180deg, rgb(255, 251, 246), rgb(244, 248, 252));
}

.introduction {
  position: relative;
  z-index: 0;
  isolation: isolate;
  padding: 135px 46px 90px 46px;
  border: 1px solid rgba(42, 32, 24, 0.12);
  border-radius: 0 0 10px 10px;
  background: #fffaf3;
}

.introduction p {
  font-size: 1.85em;
  margin-right: 170px;
  margin-bottom: 1em;
}
.introduction p:last-child {
  margin-bottom: 0;
}
.intro-secondary {
  font-size: 1.5em;
  opacity: 0.85;
}
img {
  position: absolute;
  top: -75px;
  right: 20px;
  width: 200px;
  border-radius: 50%;
  margin: 0;
  border: 8px solid #fffaf3;
  transition: transform 500ms ease-out;
  animation: portraitFloat 6s ease-in-out infinite;
}
img:hover {
  transform: translateY(-6px);
}

.separator {
  border-top: 1px solid rgba(42, 32, 24, 0.18);
  max-width: 66%;
}

@keyframes portraitFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  img {
    animation: none;
  }
}

@media (max-width: 925px) {
  .introduction {
    padding: 140px 40px 90px 40px;
  }
  .introduction p {
    font-size: 1.7em;
    margin-right: 0;
    text-align: center;
  }
  .intro-secondary {
    font-size: 1.4em;
  }
  .introduction::before {
    inset: 12px -12px -12px 12px;
  }
  img {
    top: -90px;
  }
}
@media (max-width: 600px) {
  .introduction::before {
    content: none;
  }
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
  .introduction {
    padding: 120px 24px 56px 24px;
  }
  .introduction::before {
    inset: 10px -10px -10px 10px;
  }
  .introduction p {
    font-size: 1.4em;
    margin: 30px 0 10px 0;
  }
  .intro-secondary {
    font-size: 1.2em;
  }
  img {
    width: 150px;
    top: -120px;
    right: calc(50% - 150px / 2);
  }
}
</style>
