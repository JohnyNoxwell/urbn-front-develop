<template>
  <a :href="data.url" target="_blank" rel="noopener noreferrer">
    {{data.text}}
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        url: '/',
        text: 'Ссылка'
      })
    }
  }
}
</script>
