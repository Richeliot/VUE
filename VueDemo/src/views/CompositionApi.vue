<template>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>
        Count is: {{ count }}
    </p>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

function decrement() {
  count.value--
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>