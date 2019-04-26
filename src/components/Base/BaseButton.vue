<template>
    <div>
      <el-button :type="ButtonType()" @click="$emit('click')">
        <slot></slot>
      </el-button>
    </div>
</template>

<script>
    export default {
        name: "BaseButton",
        props:['type'],
        data() {
            return {
              types: {

              }
            }
        },
        mounted() {
          this.ButtonType()
        },
        computed: {
        },
        methods: {
          ButtonType () {
            return this.type
          }
        },
    }
</script>

<style scoped lang="scss">

</style>
