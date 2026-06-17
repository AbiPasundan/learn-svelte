import { mount } from 'svelte'
import Article from './lib/Article.svelte'
import "./app.css"
const app = mount(Article, {
  target: document.getElementById('app')!,
})

export default app
