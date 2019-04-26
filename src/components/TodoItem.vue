<template>
  <el-col
    :span='1'
    class="listItem"
    @click="handleClick">
    {{content}}{{index}}
  </el-col>
</template>

<script>
export default {
  props:['content','index'],
  methods:{
    handleClick: function () {
      this.$emit('deleteItem',this.index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
