<script type="text/babel">
import Receipient from './receipient'

export default {
  name       : 'receipients',
  props      : ['config', 'triggerSet'],
  // ------------------------------------ Components
  components : {
    Receipient
  },

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
    .add-new(v-on:click="addReceipient" )
      img.shadow-icon(data-src="circle-add")
      .txt Add Receipients
</template>

<style lang="scss" scoped>
  .receipients  {background:#DEE4E8; display: flex; padding:30px 30px 10px; justify-content: space-between; flex-wrap: wrap; box-sizing: content-box; margin-top:30px;
    .add-new    {color:#034C66; font-size:15px; font-style: italic; display: flex; align-items: center; margin: 20px 0 15px; cursor: pointer;
      .txt      {margin-left:7px; }
    }
  }
</style>
