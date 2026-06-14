import { mount } from 'svelte'
import './app.css'
import GlobalCounter from './lib/GlobalCounter.svelte'

const app = mount(GlobalCounter, {
  target: document.getElementById('app')!,
})

export default app
