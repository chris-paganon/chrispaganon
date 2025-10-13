<template>
  <section id="contact-me" class="contact-me-section-wrapper content-section">
    <h2 class="contact-me-heading">{{ $t('ContactMe.heading') }}</h2>
    <div class="contact-me-wrapper">
      <div class="contact-me-form-wrapper contact-me-col">
        <h3>{{ $t('ContactMe.form-sub-heading') }}</h3>
        <form name="contact-me-form" @submit.prevent="handleSubmit">
          <label for="fullName">{{ $t('ContactMe.form.name') }}</label>
          <input
            id="fullName"
            v-model="name"
            type="text"
            name="name"
            required
          />
          <label for="name">{{ $t('ContactMe.form.email') }}</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            required
          />
          <label for="name">{{ $t('ContactMe.form.description') }}</label>
          <textarea
            id="description"
            v-model="description"
            name="description"
            required
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
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const name = ref('');
const email = ref('');
const description = ref('');
const formResponse = ref('');

async function handleSubmit() {
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        name: name.value,
        email: email.value,
        description: description.value,
      },
    });
    formResponse.value = 'Your message has been sent. Thank you!';
  } catch (error) {
    formResponse.value = 'An error occurred. Please try again later.';
    return;
  } finally {
    name.value = '';
    email.value = '';
    description.value = '';
  }
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
