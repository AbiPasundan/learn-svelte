import { mount } from 'svelte'
import Box from './lib/Box.svelte'
import "./app.css"
const app = mount(Box, {
  target: document.getElementById('app')!,
})

export default app
