<script type="text/babel">
import {dropdown} from 'lexi'
export default {
  name: 'receipient',
  props: ['config'],
  data:function() {
    return {selectedItem:""}
  },
  components:{dropdown},
  methods:{

    onTypeChange(val) {
      this.config.mode = val
      this.$emit('changed')
    },

    getData() {
      return {}
    }

  },
  mounted(){ castShadows(this.$el[0]); }
}
</script>

<!--
  H T M L
-->

<template lang="pug">
  .receipient
    dropdown(v-on:changed="onTypeChange" v-model="config.mode")
      .option(value="email") Send email to :
      .option(value="text") Send text to :
      .option(value="email-collaborators") Send email to all collaborators
      .option(value="text-collaborators") Send text to all collaborators
    input(type=text v-model="config.target" v-on:input="$emit('changed')")
    .close(v-on:click="$emit('delete')")
      img.shadow-icon(data-src="close-x")
</template>

<!--
  C S S
 -->

<style lang="scss" scoped>
  .receipient {display: flex; justify-content: space-between; width: 100%; align-items: center; margin:5px 0;
    > *       {width:45%; }
    select    {}
    input     {height:initial; flex-grow: 1; }
    .close    {width: 20px; margin-left:10px; cursor: pointer; }
  }
</style>
