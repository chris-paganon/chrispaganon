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
            autocomplete="name"
            required
          />
          <label for="email">{{ $t('ContactMe.form.email') }}</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            autocomplete="email"
            required
          />
          <label for="description">{{
            $t('ContactMe.form.description')
          }}</label>
          <textarea
            id="description"
            v-model="description"
            name="description"
            autocomplete="off"
            required
            rows="4"
            :placeholder="$t('ContactMe.form.description-placeholder')"
          ></textarea>
          <p>{{ formResponse }}</p>
          <button class="button" type="submit">
            {{ $t('ContactMe.form.button') }}
          </button>
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
        <div class="cv-download-card">
          <button
            class="button cv-download-button"
            type="button"
            :disabled="isDownloadingCv"
            @click="handleCvDownload"
          >
            {{
              isDownloadingCv
                ? $t('ContactMe.cv.generating')
                : $t('ContactMe.cv.button')
            }}
          </button>
          <p v-if="cvResponse" class="cv-response">
            {{ cvResponse }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { downloadCv } from '~/utils/cv';

const { locale, t } = useI18n();
const name = ref('');
const email = ref('');
const description = ref('');
const formResponse = ref('');
const cvResponse = ref('');
const isDownloadingCv = ref(false);

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
    formResponse.value = t('ContactMe.form.response.success');
  } catch (error) {
    formResponse.value = t('ContactMe.form.response.failure');
    return;
  } finally {
    name.value = '';
    email.value = '';
    description.value = '';
  }
}

async function handleCvDownload() {
  if (import.meta.server || isDownloadingCv.value) {
    return;
  }

  isDownloadingCv.value = true;
  cvResponse.value = '';

  try {
    await downloadCv(locale.value === 'fr' ? 'fr' : 'en');
  } catch (error) {
    cvResponse.value = t('ContactMe.cv.failure');
  } finally {
    isDownloadingCv.value = false;
  }
}
</script>

<style scoped>
.contact-me-section-wrapper {
  position: relative;
  padding-top: 70px;
  padding-bottom: 90px;
}

.contact-me-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  margin: 40px 0;
}

.contact-me-col {
  min-width: 0;
  position: relative;
  padding: 28px;
  border: 1px solid rgba(42, 32, 24, 0.12);
  border-radius: 10px;
  background: #fffaf3;
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
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  margin: 10px 0 20px 0;
  border: 1px solid rgba(42, 32, 24, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.72);
  padding: 15px;
}
.button {
  font-size: 20px;
}

.contact-info {
  font-size: 22px;
  margin: 15px 0;
}

.cv-download-card {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(42, 32, 24, 0.12);
}

.cv-download-copy,
.cv-response {
  margin: 0 0 16px 0;
}

.cv-download-button {
  width: 100%;
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
  .cv-download-card {
    text-align: center;
  }
}
@media (max-width: 450px) {
  .button {
    font-size: 18px;
  }
}
</style>
