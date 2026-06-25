import { mount } from 'svelte'
import "./app.css"
import StoreCounterApp from './StoreCounterApp.svelte'
// import StoreCounter from './lib/StoreCounter.svelte'

const app = mount(StoreCounterApp, {
  target: document.getElementById('app')!,
})

export default app
