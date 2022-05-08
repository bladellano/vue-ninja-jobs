<template>
  <div>
    <h1>Job Details</h1>
    The job id is {{ id }}
  </div>
</template>

<script>
export default {
    props:['id'],
 /*    data(){
        return {
            id:this.$route.params.id
        }
    } */
};
</script>

<style>
</style>