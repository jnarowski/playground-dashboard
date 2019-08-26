<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card" style="background: #fff;">
          <div class="card-header">
            <h3 class="card-title">Habits</h3>
            <h6 class="card-subtitle text-muted"
              >{{ daysLogged }} / {{ daysTotal }} days logged</h6
            >
          </div>
          <div class="card-body">
            <div class="pb-4">
              <div class="progress" style="height: 25px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: daysLoggedPercentage + '%' }"
                  :aria-valuenow="daysLoggedPercentage"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  >{{ daysLoggedPercentage }}%</div
                >
              </div>
            </div>
            <table class="table table-sm">
              <thead class="thead-dark">
                <td></td>
                <td class="text-center" v-for="item in data" :key="item.Date">
                  {{ formatDate(item.Date) }}
                </td>
              </thead>
              <HabitsTableRow
                :field="meta.schema[field]"
                :data="data"
                v-for="field in meta.habit_fields"
                :key="field"
              />
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3">
        <div class="card">
          <h6 class="card-header">Day Types - This Month</h6>
          <div class="card-body pt-0">
            <table class="table mb-0">
              <thead>
                <tr>
                  <th class="border-top-0">Type</th>
                  <th class="border-top-0">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Free Days</td>
                  <td>{{ dayTypes.free }}</td>
                </tr>
                <tr>
                  <td>Focus Days</td>
                  <td>{{ dayTypes.focus }}</td>
                </tr>
                <tr>
                  <td>Buffer Days</td>
                  <td>{{ dayTypes.buffer }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import HabitsTableRow from '@/components/HabitsTableRow'

export default {
  props: {
    meta: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    HabitsTableRow,
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format('D')
    },
  },
  computed: {
    daysTotal() {
      return this.data.length
    },
    daysLogged() {
      return this.data.filter((item) => item.logged).length
    },
    daysLoggedPercentage() {
      return Math.round(
        (parseFloat(this.daysLogged) / parseFloat(this.daysTotal)) * 100
      )
    },
    dayTypes() {
      const filterByDayType = (data, dayType) => {
        return data.filter((item) => item['Day Type'] === dayType)
      }

      return {
        buffer: filterByDayType(this.data, 'Buffer Day').length,
        free: filterByDayType(this.data, 'Free Day').length,
        focus: filterByDayType(this.data, 'Focus Day').length,
      }
    },
  },
}
</script>
