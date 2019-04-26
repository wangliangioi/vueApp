<template>
	<div>
    这是组件C
    <!--<slot :user="user">-->
      <!--{{user.firstName}}-->
    <!--</slot>-->
    <slot name="header"></slot>
    <ul>
      <slot :user="user">{{user.firstName}}</slot>
    </ul>
    <slot name="footer" :other="other">{{other}}</slot>
  </div>
</template>
<script>
	export default {
	  name: 'ComponentC',
		props:[],
    data () {
		  return {
		    user: {
		      firstName: 'aaaa'
        },
        lists: [1,2,3,4,5,6],
        other: 'this is other'
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
