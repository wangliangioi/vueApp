<template>
    <div>
      <el-button type="primary">
        <slot></slot>
      </el-button>
    </div>
</template>

<script>
    export default {
        name: "BaseButtonPrimary",
        data() {
            return {}
        },
        mounted() {
        },
        computed: {},
        methods: {},
    }
</script>

<style scoped lang="scss">

</style>
