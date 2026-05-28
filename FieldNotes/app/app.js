import Vue from 'nativescript-vue'
import GoogleMaps from "@nativescript/google-maps/vue";
Vue.use(GoogleMaps);

import Home from './components/Home'

new Vue({
    render: (h) => h('frame', [h(Home)]),
}).$start()

// import JournalEntries from './components/JournalEntries';

// new Vue({
//     render: h => h('frame', [h(JournalEntries)]),
// }).$start();

// import ExampleEntry from './components/ExampleEntry';

// new Vue({
//   render: h => h('frame', [h(ExampleEntry)]),
// }).$start();

// import NewEntry from './components/NewEntry';

// new Vue({
//     render: h => h('frame', [h(NewEntry)]),
// }).$start();

// import FindEvents from './components/FindEvents';
// import { GoogleMap } from '@nativescript/google-maps';

// new Vue({
//     render: h => h('frame', [h(FindEvents)]),
// }).$start();