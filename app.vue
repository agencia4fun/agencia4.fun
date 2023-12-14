<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

locale.value = cookieLocale.getLocale || 'en'

const loadingPage = ref()

onBeforeMount(() => {
  loadingPage.value = false
})

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true
  }, 1000)
})




</script>

<template>
  <LoadingPage v-show="!loadingPage" />

  <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout>
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.about-text {
  margin-bottom: 0;
}

.about-item {
  padding: 0px;
}

.about-item .about-item-text {
  margin-bottom: 0;
}

.clients-item {
  color: whitesmoke;
  min-width: 25%;
}

.clients-item.team {
  text-align: center;
}

.clients-item.team h3 {
  margin-top: 25px;
}

.avatar-box {
  padding: 5px;
}

.service-item {
  padding: 15px;
}

.service-icon-box {
  margin-top: 0;
}

.service-icon-box img {
  width: 145px;
  max-width: none;
}

.service-item-text {
  font-size: 12px;
} 

.sidebar.active {
  min-height: 520px;
}

.separator:last-of-type {
  margin-top: 25px;
  margin-bottom: 15px;
}

.contacts-list {
  gap: 20px !important;
}

.h3 {
  padding: 15px;
  border-radius: 15px;
  box-shadow: -10px 10px 5px 0px rgba(0,0,0,0.25);
}

.h2, .h3, .h4, .h5 {
  text-transform: none;
}

@media (min-width: 1250px) {
  .sidebar {
    max-height: 53rem !important;
  }

  .separator:last-of-type {
    margin-top: 7px;
    margin-bottom: 7px;
  }

  .social-list {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

</style>