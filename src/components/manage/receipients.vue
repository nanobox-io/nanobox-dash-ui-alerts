<script type="text/babel">
import Receipient from './receipient'
import {add} from 'lexi'
export default {
  name       : 'receipients',
  props      : ['config', 'triggerSet'],
  components : {add, Receipient},

  // ------------------------------------ Methods
  methods:{
    addReceipient(e){
      this.triggerSet.receipients.push({mode:'email', target:''})
      this.$emit('changed')
    },

    deleteReceipient(index) {
      this.triggerSet.receipients.splice(index, 1);
      this.$emit('changed')
    },
    onReipientChange(index) {
      this.$emit('changed')
    },
    getData() {
      return 'receip data..'
    }
  },

}

</script>

<template lang="pug">
  .receipients
    receipient(v-for="(item, i) in triggerSet.receipients" :key="i" :config="item" v-on:delete="deleteReceipient(i)" v-on:changed="onReipientChange" )
    add.add-new.circle(@click="addReceipient") Add Receipients
</template>

<style lang="scss" scoped>
  .receipients  {background:#DEE4E8; display: flex; padding:30px 30px 10px; justify-content: space-between; flex-wrap: wrap; box-sizing: content-box; margin-top:30px;
    .add-new    {margin: 20px 0 15px; }
  }
</style>
