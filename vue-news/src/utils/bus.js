import Vue from 'vue'

// event bus
export default new Vue();

/**
 * export 로 했을 경우
// bus.js
export const bus = new Vue();
// App.vue
import { bus } from './bus.js'
**/

/**
 * export default 로 했을 경우
// bus.js
export default new Vue();
// App.vue
import bus from './bus.js';
**/