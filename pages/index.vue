<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')

/* Services */
const { data: about } = await useFetch('/api/about')

setTimeout(() => {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/657a241370c9f2407f7f912f/1hhihprut';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
}, 3000)
</script>

<template>
  <article class="about active" data-page="about">

    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <AboutItem v-for="about in about" :key="about.id" :about="about" />
      </ul>
    </section>

    <!-- service -->

    <section class="service">
      <br>
      <h3 class="h3">O que fazemos?</h3>
      <br />
      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <!-- testimonials -->

   <!-- <section class="testimonials">
      <h3 class="h3 testimonials-title">
        Testimonials
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials-item" @click="showTestimonial(testimonial.id)">
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="testimonial.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ testimonial.title }}
            </h4>

            <div class="testimonials-text">
              <p>{{ locale === 'en' ? testimonial.content?.en : testimonial.content?.id_ID }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section> -->

    <!-- testimonials modal -->

    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2023</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.id_ID" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Agência 4.FUN
        </div>
      </section>
    </div>

    <!-- clients -->

    <section class="clients">

      <h3 class="h3 clients-title">
        Clientes
      </h3>

      <ul class="clients-list has-scrollbar">


        <li class="clients-item">
          <a href="https://example.com" target="_blank">
            <img src="/images/icon.png" alt="Company">
          </a>
          <h3>oi</h3>
          <small>oiii</small>
        </li>

        <li class="clients-item">
          <a href="https://example.com" target="_blank">
            <img src="/images/icon.png" alt="Company">
          </a>
          <h3>oi</h3>
          <small>oiiii</small>
        </li>

        <li class="clients-item">
          <a href="https://example.com" target="_blank">
            <img src="/images/icon.png" alt="Company">
          </a>
          <h3>oi</h3>
          <small>oiii</small>
        </li>

        <li class="clients-item">
          <a href="https://example.com" target="_blank">
            <img src="/images/icon.png" alt="Company">
          </a>
          <h3>oi</h3>
          <small>oiii</small>
        </li>

        <li class="clients-item">
          <a href="https://example.com" target="_blank">
            <img src="/images/icon.png" alt="Company">
          </a>
          <h3>oi</h3>
          <small>oiii</small>
        </li>

      </ul>

      <br>

      <h3 class="h3 clients-title">
        Equipe
      </h3>

      <ul class="clients-list">

        <li class="clients-item team">
          <a href="https://example.com" target="_blank">
            <img src="/images/icon.png" alt="Company">
          </a>
          <h3>oi</h3>
          <small>oiii</small>
        </li>

        <li class="clients-item team">
          <a href="https://example.com" target="_blank">
            <img src="/images/icon.png" alt="Company">
          </a>
          <h3>oi</h3>
          <small>oiii</small>
        </li>

        <li class="clients-item team">
          <a href="https://example.com" target="_blank">
            <img src="/images/icon.png" alt="Company">
          </a>
          <h3>oi</h3>
          <small>oiii</small>
        </li>

      </ul>
    
    </section>

    <div style="text-align: center;">
      <small style="color: whitesmoke">Copyright © Agência 4FUN 2023</small>
    </div>

  </article>
</template>