<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.png" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Agência Digital 4fun">
          Agência Digital
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <!-- <span class="xl:after:content-[''] after:content-[',']">Desenvolvimento</span> -->
          <span class="xl:after:content-[''] after:content-['']">Desenvolvimento</span>
          <span>& Comunicação</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Mostrar contatos</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-whatsapp" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Whatsapp
            </p>

            <a href="https://twitter.com/agencia4.fun" class="contact-link" target="_blank">agencia4.fun</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-instagram" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Instagram
            </p>

            <a href="https://twitter.com/agencia4.fun" class="contact-link" target="_blank">agencia4.fun</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="paper-plane-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Telegram
            </p>

            <a href="https://twitter.com/agencia4.fun" class="contact-link" target="_blank">agencia4.fun</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-twitter" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Twitter
            </p>

            <a href="https://twitter.com/agencia4.fun" class="contact-link" target="_blank">agencia4.fun</a>
          </div>
        </li>

        <!-- <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              GitHub
            </p>

            <a href="https://github.com/agencia4.fun" class="contact-link" target="_blank">agencia4.fun</a>
          </div>
        </li> -->

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://id.linkedin.com/in/agencia4.fun" class="contact-link" target="_blank">agencia4.fun</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Localização
            </p>

            <address>Brasil - PE</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:contato@agencia4.fun" class="social-link" target="_blank">
            <ion-icon name="mail-outline" />
          </NuxtLink>
        </li>
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>
