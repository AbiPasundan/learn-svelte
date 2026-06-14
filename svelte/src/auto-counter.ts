import { mount } from 'svelte'
import AutoCounter from './lib/AutoCounter.svelte'

const app = mount(AutoCounter, {
  target: document.getElementById('app')!,
})

export default app
