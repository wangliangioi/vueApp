<template>
	<div>
    这是组件B
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <div>{{count}}</div>
  </div>
</template>
<script>
  import store from '@/store/store'
	export default {
	  name: 'ComponentB',
		props:[],
    computed: {
	    count(){
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
