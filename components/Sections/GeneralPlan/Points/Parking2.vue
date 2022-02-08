<template>
  <span>
    Въезд в
    <a
      :href="data.url"
      target="_blank"
    >
      подземный паркинг
    </a>
  </span>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({ url: '/' })
    }
  }
}
</script>
