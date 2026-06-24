import { mount } from 'svelte'
import Student from './lib/Student.svelte'
import "./app.css"

const app = mount(Student, {
    target: document.getElementById('app')!,
})

export default app
