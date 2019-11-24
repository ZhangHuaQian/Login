<template>
    



</template>

<script>
export default {
    methods:{
        logout(){
            window.sessionStorage.clear();
            this.$router.push('./login');
        }
    }
    
}





</script>

<style lang="scss" scoped>
  







</style>