<template>
  <section id="contact-me" class="contact-me-section-wrapper content-section">
    <h2 class="contact-me-heading">{{ $t('ContactMe.heading') }}</h2>
    <div class="contact-me-wrapper">
      <div class="contact-me-form-wrapper contact-me-col">
        <h3>{{ $t('ContactMe.form-sub-heading') }}</h3>
        <form
          name="contact-me-form"
          method="post"
          netlify
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact-me-form" />
          <label for="fullName">{{ $t('ContactMe.form.name') }}</label>
          <input
            id="fullName"
            v-model="form.fullName"
            type="text"
            name="fullName"
          />
          <label for="name">{{ $t('ContactMe.form.email') }}</label>
          <input id="email" v-model="form.email" type="email" name="email" />
          <label for="name">{{ $t('ContactMe.form.description') }}</label>
          <textarea
            id="description"
            v-model="form.description"
            name="description"
            rows="4"
            :placeholder="$t('ContactMe.form.description-placeholder')"
          ></textarea>
          <p>{{ formResponse }}</p>
          <button class="button">{{ $t('ContactMe.form.button') }}</button>
        </form>
      </div>
      <div class="contact-me-details contact-me-col">
        <h3>{{ $t('ContactMe.contact-sub-heading') }}</h3>
        <ul>
          <li class="contact-info">
            {{ $t('ContactMe.email-address') }}
            <a href="mailto:info@chrispaganon.com">info@chrispaganon.com</a>
          </li>
          <li class="contact-info">
            {{ $t('ContactMe.phone-number') }}
            <a href="tel:+15144316333">+1&nbsp;(514)&nbsp;431&nbsp;6333</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({});
const formResponse = ref('');

function handleSubmit() {
  console.log('form', form);
}
</script>

<style scoped>
.contact-me-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  margin: 40px 0;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  font-size: 18px;
}
input,
textarea {
  margin: 10px 0 20px 0;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
  padding: 15px;
}
.button {
  font-size: 20px;
  border-radius: 30px;
}

.contact-info {
  font-size: 22px;
  margin: 15px 0;
}

@media (max-width: 850px) {
  h2,
  h3 {
    text-align: center;
  }
  .contact-me-wrapper {
    grid-template-columns: 1fr;
  }
  .contact-me-form-wrapper {
    margin-bottom: 60px;
  }
  .contact-info {
    font-size: 20px;
    text-align: center;
  }
}
@media (max-width: 450px) {
  .button {
    font-size: 18px;
  }
}
</style>
