<template>
	<div>
    这是组件A
    <slot v-for="item in lists" :item="item"></slot>
    <div>{{count}}</div>
  </div>
</template>
<script>
  import store from '@/store/store'
	export default {
	  name: 'ComponentA',
		props:[],
    data () {
		  return {
        lists: [5,4,3,2,1],
      }
    },
    computed: {
	    count () {
	      return store.state.count
      }
    },
		methods:{

		}
	}
</script>
<style scoped>
	div{
		width: 100%;
		height: 50px;
	}
</style>
