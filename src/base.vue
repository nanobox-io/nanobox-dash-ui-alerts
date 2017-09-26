<script type="text/babel">
import manage  from './components/manage/manage'
import list    from './components/list'

export default {
  name  : 'alerts',
  props : ['model', 'callbacks'],
  data() {
    return {
      state      : "list",
      triggerSet : ""
    }
  },
  components : {manage, list},
  methods    : {
    onManage(triggerSet) {
      this.state      = 'manage';
      this.triggerSet = triggerSet;
    },
    onAddNew(){
      this.onManage( this.getEmptyTriggerSet() )
    },
    getEmptyTriggerSet() {
      return {
        id          : "new",
        name        : "",
        triggers    : [],
        receipients : [
          {mode:'email', target:''},
        ]
      }
    },
    deleteSet(id) {
      this.callbacks.deleteTriggerSet( id, (data)=> {
        if( data.error != null ){
          console.log( "Data needs to be handled" )
        }
      })
    },
  },
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  #app
    list(:config="model" v-if="state=='list'" v-on:manage="onManage" v-on:addNew="onAddNew"  )
    manage(:config="model" :saveTriggerSetCb="callbacks.saveTriggerSetCb" :triggerSet="triggerSet" v-if="state=='manage'" v-on:close="state='list'" v-on:delete-set="deleteSet"  )
</template>

<!--
  **** C S S ****
-->

<style lang="scss" scoped>
  .temp{}
</style>
