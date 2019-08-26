<template>
  <td
    class="habits-table-column text-center"
    :class="{ hasNoValue: item.all_empty, hasValue: hasValue }"
    >{{ valueDisplay }}</td
  >
</template>

<script>
// https://dashkit.goodthemes.co/index.html - nice dark theme
// http://colormind.io/bootstrap/ - color scheme generator
import dayjs from 'dayjs'

export default {
  props: {
    field: {
      type: Object,
      default: () => {},
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    valueRaw() {
      return this.item[this.field.label]
    },
    valueDisplay() {
      switch (this.field.type) {
        case 'time':
          if (!this.valueRaw) {
            return '-'
          }
          return parseInt(this.valueRaw) / 60
        default:
          return this.valueRaw || '-'
      }
    },
    hasValue() {
      return this.valueRaw && this.valueRaw !== '0' && this.valueRaw !== 0
    },
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format('D')
    },
  },
}
</script>

<style lang="css" scoped>
.hasValue {
  background: #e0f7ff;
}
.hasNoValue {
  background: #fff8e7;
}
.habits-table-column {
  font-size: 0.9em;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
}
</style>
