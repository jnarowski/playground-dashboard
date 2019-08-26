<template>
  <div>
    <HabitsTable :meta="habitData.meta" :data="habitData.results"></HabitsTable>
  </div>
</template>

<script>
import { fetchHabits } from '~/services/apiService'
import HabitsTable from '@/components/HabitsTable'

export default {
  components: {
    HabitsTable,
  },
  data: () => ({
    habitData: {
      meta: {},
      results: [],
    },
  }),
  async created() {
    const habits = await fetchHabits()
    this.habitData = habits.data
  },
}
</script>
