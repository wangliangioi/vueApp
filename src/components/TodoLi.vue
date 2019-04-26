<template>
	<li>
    {{item.title}} -- {{item.content}}
    <el-button
      size="mini"
      type="danger"
      plain
      round
      icon="el-icon-delete"
      @click="$emit('deleteLi',index)">
      删除
    </el-button>
  </li>
</template>
<script>
	export default {
		props:['item','index'],
		methods:{

		}
	}
</script>
<style scoped lang="scss">

</style>
