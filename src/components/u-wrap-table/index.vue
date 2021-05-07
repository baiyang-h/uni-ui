<template>
  <view class="u-wrap-table" :style="{
    margin: margin + 'rpx'
  }">
    <u-table>
      <u-tr key="tr-th">
        <u-th v-for="col in columns" :key="col.dataIndex || col.key">{{ col.title }}</u-th>
      </u-tr>
      <u-tr v-for="(row, index) in dataSource" :key="row.key || index">
        <u-td v-for="col in columns" :key="col.dataIndex || col.key">{{ row[col.dataIndex || col.key] }}</u-td>
      </u-tr>
    </u-table>
  </view>
</template>

<script>
export default {
  name: "WrapTableCom",
  props: {
    columns: {
      type: Array,
      default() {
        return [
          {
            title: '参数',
            dataIndex: 'param',
            key: 'param',
          },
          {
            title: '说明',
            dataIndex: 'explain',
            key: 'explain',
          },
          // {
          //   title: '类型',
          //   dataIndex: 'type',
          //   key: 'type',
          // },
          {
            title: '默认值',
            dataIndex: 'default',
            key: 'default',
          },
          // {
          //   title: '可选值',
          //   dataIndex: 'optional',
          //   key: 'optional',
          // },
        ]
      }
    },
    dataSource: {
      type: Array,
      default() {
        return []
      }
    },
    margin: {
      type: [String, Number],
      default: '20'
    }
  }
}
</script>

<style scoped lang="scss">
.u-wrap-table {
  border-radius: 8rpx;
  overflow: hidden;
}
</style>
