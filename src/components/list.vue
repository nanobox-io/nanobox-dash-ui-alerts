<script type="text/babel">
export default {
  name: 'list',
  props: ['config']
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .list.blue-list
    .item(v-for="triggerSet in config.triggerSets" )
      .info
        .name {{triggerSet.name}}
        .details Details
      .button(v-on:click="$emit('manage', triggerSet)" ) Manage
    .btn.basic(v-on:click="$emit('addNew')" ) Add a Set of Alerts
</template>

<!--
  ***** C S S *****
-->

<style lang="scss">
  .list {}
</style>
