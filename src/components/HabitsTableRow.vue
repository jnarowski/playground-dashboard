<template>
  <tr>
    <td class="column text-right">
      <div>
        <strong>{{ field && field.label }}</strong>
      </div>
    </td>
    <HabitsTableColumn
      :field="field"
      :item="item"
      v-for="item in data"
      :key="item.Date"
    ></HabitsTableColumn>
  </tr>
</template>

<script>
import HabitsTableColumn from '@/components/HabitsTableColumn'

export default {
  props: {
    field: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    HabitsTableColumn,
  },
}
</script>

<style scoped>
.column {
  font-size: 0.9em;
  border-top: 1px solid #fff;
}
</style>
