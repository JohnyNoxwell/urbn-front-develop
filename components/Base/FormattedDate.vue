<template>
  <span>{{ formatDate(date) }}</span>
</template>

<script>
export default {
  name: 'FormattedDate',
  props: {
    date: {
      type: String,
      required: true
    }
  },
  methods: {
    formatDate (date) {
      const dd = new Date(date)
      const year = dd.getFullYear()
      const day = dd.getDate()
      const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'декабря'
      ]
      const mm = dd.getMonth()
      return `${day} ${months[mm]} ${year}`
    }
  }
}
</script>
