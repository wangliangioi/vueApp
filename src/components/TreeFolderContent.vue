<template>
    <div>
      <ul>
        <li v-for="child in children">
          <tree-folder v-if="child.children" :folder="child"></tree-folder>
          <span v-else>{{child.name}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    import TreeFolder from '@/components/TreeFolder'
    export default {
        name: "TreeFolderContent",
        props: ['children'],
        components: {
          TreeFolder
        },
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
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: block;
    margin: 0 10px;
  }
</style>
