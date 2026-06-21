import { mount } from 'svelte'
import Time from './lib/Time.svelte'
import "./app.css"

const app = mount(Time, {
  target: document.getElementById('app')!,
})

export default app
