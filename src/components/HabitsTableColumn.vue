<template>
  <td
    class="habits-table-column text-center"
    :class="{
      hasNoValue: item.all_empty,
      hasValue: hasValue,
      [field.id + '-column']: true,
      [field.type + '-column-type']: true,
    }"
    v-html="valueDisplay"
  ></td>
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
      if (this.field.id === 'day-type') {
        return this.valueDisplayDayType
      }

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
    valueDisplayDayType() {
      switch (this.valueRaw) {
        case 'Free Day':
          return "<div class='day-type--free'>Fr</div>"
        case 'Buffer Day':
          return "<div class='day-type--buffer'>Bu</div>"
        case 'Focus Day':
          return "<div class='day-type--focus'>Fo</div>"
        default:
          return ''
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

<style lang="css">
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
.day-type-column {
  padding-top: 5px;
  background: #fff;
}
.day-type--focus {
  border-radius: 5px;
  background: #ff994b;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}
.day-type--buffer {
  border-radius: 5px;
  background: #979797;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}
.day-type--free {
  border-radius: 5px;
  background: #2c8d82;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
