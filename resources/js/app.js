import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';

import Layout from "./Layout.js";

let App = `<div><Header></Header><GitListTable></GitListTable></div>`;

createApp(Layout).mount("#app")
