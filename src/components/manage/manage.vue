<script type="text/babel">
import Categories  from './categories'
import Receipients from './receipients'

export default {
  name: 'manage',
  props: ['config', 'triggerSet', 'saveTriggerSetCb'],
  components:{Categories, Receipients},
  data() {
    this.triggerSet.triggers.sort()
    return {
      configCopy      : _.cloneDeep(this.config, false),
      triggerSetCopy  : _.cloneDeep(this.triggerSet, false)
    }
  },

  methods:{

    onChange() {
      if( _.isEqual(this.triggerSet, this.triggerSetCopy) )
        this.$el.classList.remove('dirty')
      else
        this.$el.classList.add('dirty')
    },

    save() {
      this.saveTriggerSetCb(this.triggerSet.id, this.triggerSetCopy, (data)=>{
        if( data.error !== null ){
          console.log( "HANDLE THIS ERROR:" )
          console.log( data.error )
        }
      })
    }
  },

  watch: {
    "triggerSetCopy.name": function(val, oldVal) {
      this.onChange()
    }
  },

  mounted() {
    castShadows(this.$el[0])
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .manage.blue-item(ref="manage")
    .close(v-on:click="$emit('close')" )
      img.shadow-icon(data-src="close-x" )
      .txt Back
    input(v-model="triggerSetCopy.name" )
    categories(:config="configCopy", :triggerSet="triggerSetCopy" v-on:changed="onChange"  ref="categories")
    receipients(:config="configCopy", :triggerSet="triggerSetCopy" v-on:changed="onChange" ref="recipients")
    .save-section
      .cancel(v-on:click="$emit('close')" ) Cancel
      .button.lifecycle(v-on:click="save") Save
    .delete-section(v-if="triggerSetCopy.id != 'new'")
      .title Danger Zone
      .button.lifecycle(v-on:click="$emit('delete-set', triggerSet.id)") Delete this Alerts Set
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .manage           {display: flex; flex-direction: column;
    > .close        {margin-left: auto; display: flex; font-size:15px; font-style: italic; color: #7B949E; align-items: center; cursor: pointer;
      .txt          {margin-left: 6px; }
    }
    > input         {width:100%; margin:10px 0; }
    .save-section   {margin-top:15px; display: none}
    &.dirty         {
      .save-section {display: flex;}
    }
    .delete-section {margin-top:40px; display: flex; flex-direction: column; width: 100%;
      .title        {border-bottom:solid 1px #C5CBD0; font-size:15px; font-style:italic; padding-bottom: 5px; margin-bottom:15px; color:#57717C; }
      .button       {background: #EF3942; flex-grow: 0; align-self: flex-end;}
    }
  }
</style>
