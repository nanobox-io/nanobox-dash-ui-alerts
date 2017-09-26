<script type="text/babel">
import {checkbox} from 'lexi'
import _ from 'lodash'

export default {
  name       : 'categories',
  props      : ['config', 'triggerSet'],
  components : {checkbox},
  methods    : {
    seeIfIsChecked(alertId) {
      if( this.triggerSet.triggers.indexOf(alertId) != -1 )
        return true;
      else
        return false;
    },

    getData() {
      return 'my data'
    },

    onChange(isChecked, id) {
      if(isChecked)
        this.triggerSet.triggers.push(id)
      else
        _.pull(this.triggerSet.triggers, id);
      this.triggerSet.triggers.sort()
      this.$emit('changed', this.triggerSet)
    },

    changeAllChecks(turnOn) {
      let ar = []
      for ( let check of this.$refs.checkBoxes ){
        if( turnOn ){
          check.check()
          ar.push(check.id )
        }else
          check.unCheck()
      }
      this.triggerSet.triggers = ar
      this.$emit('changed', this.triggerSet)
    }
  }
}

</script>

<!-- H T M L -->

<template lang="pug">
  .categories
    .checks
      .category(v-for="category in config.alertCategories")
        .title {{category.title}}
        .flags
          checkbox(v-for="(alert, i) in category.alerts" :key="i" :label="alert.txt" :label-is-after="true" :is-checked="seeIfIsChecked(alert.id)" v-on:changed="onChange" :id="alert.id" ref="checkBoxes" )
    .macros
      .btn(v-on:click="changeAllChecks(true)" ) Check all
      .btn(v-on:click="changeAllChecks(false)" ) Uncheck all
</template>

<!--  C S S -->

<style lang="scss" scoped>
  .categories     {background:#DEE4E8; padding:30px 30px 10px;
    .checks       {display: flex; justify-content: space-between; flex-wrap: wrap; box-sizing: content-box;
      .category   {width:45%; box-sizing: border-box; margin-bottom:20px;
        .title    {@include title;}
        .flags    {display:flex; flex-direction:column;
          label   {display: flex; align-items: center; max-height: 26px;
            input {margin-right:10px; }
          }
        }
      }
    }
    .macros{display: flex; color:#00A2ED; font-size:13px; font-style: italic;
      .btn {margin-right:12px; border-bottom: solid 1px #BAD0DF; cursor: pointer;}
    }
  }
</style>
