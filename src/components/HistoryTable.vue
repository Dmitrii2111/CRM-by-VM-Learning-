<template>
   <table>
      <thead>
        <tr>
          <th>#</th>
          <th>{{'History_Table_Sum' | localize}}</th>
          <th>{{'History_Table_Date' | localize}}</th>
          <th>{{'History_Table_Category' | localize}}</th>
          <th>{{'History_Table_Type' | localize}}</th>
          <th>{{'History_Table_Open' | localize}}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(record, idx) of records" :key="record.id">
          <td>{{idx + 1}}</td>
          <td>{{record.amount | currency('RUB')}}</td>
          <td>{{record.date | date('datetime')}}</td>
          <td>{{record.categoryName}}</td>
          <td>
            <span 
							:class="[record.typeClass]"
							class="white-text badge"
						>{{ record.typeText }}</span>
          </td>
          <td>
            <button 
							class="btn-small btn" 
							@click="$router.push('/detail-record/' + record.id)"
							v-tooltip="'Посмотреть запись'"
						>
              <i class="material-icons">open_in_new</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  data: () => ({
    isRuLocal: true
  }),
	props: {
		records: {
			required: true,
			type: Array
		}
  },
  // mounted() {
  //   this.isRuLocal = this.info.Local === 'ru-RU'
  //   this.name = this.info.name
  //   setTimeout(() =>{
  //     M.updateTextFields()
  //   })
  // },
}
</script>