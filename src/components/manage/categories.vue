<script type="text/babel">
import {checkbox} from 'lexi'
import _ from 'lodash'

export default {
  name       : 'categories',
  props      : ['config', 'triggerSet'],
  components : {checkbox},
  data() {
    let obj = { alerts:{} }
    // Create a local object that stores all the values of the checkboxes
    // so we can bind their value directly to a variable
    for ( let alertCategory of this.config.alertCategories ){
      for ( let alert of alertCategory.alerts ){
        obj.alerts[alert.id] = this.triggerSet.triggers.indexOf(alert.id) != -1
      }
    }
    return obj
  },
  methods    : {
    onChange(isChecked, id) {
      this.addOrRemoveAlertFromList(isChecked, id)
      this.sortAndPublish()
    },
    changeAllChecks(isChecked) {
      // Loop through our local alerts object and flip each one on or off
      for ( var key in this.alerts ) {
        this.alerts[key] = isChecked
        this.addOrRemoveAlertFromList(isChecked, key)
      }
      this.sortAndPublish()
    },
    // Add or Remove a specific alert from the array of alerts this set is interested in
    addOrRemoveAlertFromList(isChecked, id) {
      if(isChecked)
        this.triggerSet.triggers.push(id)
      else
        _.pull(this.triggerSet.triggers, id);
    },
    // Sort the alerts into comparison order and notify the parent that we _may_ have changed
    sortAndPublish() {
      this.triggerSet.triggers.sort()
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
          checkbox(v-for="(alert, i) in category.alerts" :key="i" :label-is-after="true" v-model="alerts[alert.id]" :id="alert.id" @changed="onChange")
            .label {{alert.txt}}
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
