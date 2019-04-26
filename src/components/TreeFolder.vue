<template>
    <div>
      <div>{{folder.name}}</div>
      <tree-folder-content :children="folder.children"></tree-folder-content>
    </div>
</template>

<script>
  // import TreeFolderContent from '@/components/TreeFolderContent'
    export default {
        name: "TreeFolder",
        props: ['folder'],
        components: {
          // TreeFolderContent
          'tree-folder-content' : () => import('@/components/TreeFolderContent.vue')
        },
        data() {
            return {
              // folders: this.folder
            }
        },
        // beforeCreate: function () {
        //   // this.$options.components.TreeFolderContent = () => import('@/components/TreeFolderContent')
        //   this.$options.components.TreeFolderContent = require('@/components/TreeFolderContent').default
        //   console.log(this.$options)
        // },
        mounted () {
          console.log(this.folder.name)
        },
        computed: {},
        methods: {
        },
    }
</script>

<style scoped lang="scss">

</style>
