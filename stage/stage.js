require('nanobox-core-styles/scss/_base.scss')

import DataShim from "./data-shim.js"
import alerts from '../src/main.js'
import Vue from 'vue'

let dataShim = new DataShim()

// TODO : Convert this into webpacked component
require("script-loader!../node_modules/shadow-icons/rel/app.js")

Vue.config.productionTip = false;

let callbacks = {
  // Save a trigger set, either existing or new.
  // If it is a new trigger set, the id will be `new`
  saveTriggerSetCb(id, newTriggerSet, cb) {
    console.log( "Saving of trigger:" )
    console.log( id )
    console.log( newTriggerSet )
    // cb( {error:"Some error can go here"} )
    cb( {} )
  },
  // Delete trigger set by id
  deleteTriggerSet(id, cb) {
    console.log( `Deleteing trigger Set : ${id}` )
    cb( {} )
  }
}




new Vue({
  el       : '#app',
  template : '<alerts :model="model" :callbacks="callbacks"/>',
  data     : {
    model     : dataShim.getData(),
    callbacks : callbacks,
    saveTriggerSetCb : ()=>{},
    deleteTriggerSet : ()=>{}
  },
  components:{ alerts }
})
