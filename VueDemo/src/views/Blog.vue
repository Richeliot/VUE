// composition-api
<script setup>
    import { ref, onMounted } from 'vue'

    const state = ref([
        {
            id:     1,
            text:   `This demo contains the blog of an Author/ me while practising vue ecosystem for the first time.
                    I would love to add a text field, to dynamically write inside the demo application.
                    `,
        },
        {
            id:     2,
            text:   `Trying the id workaround`,
        },
    ])

    const newText = ref("")

    function addText() {
        state.value.push({
            id: state.value.length + 1,
            text: newText.value
        })

        newText.value = ''
    }

    // I guess to add some local storage handling right here... Does vue has service, or what is the alternative ? 
    onMounted(() => {
    })
</script>

<template>
    <div>
        <li v-for="text in state">
            {{ text.text }}
        </li>
        <p>
            {{ newText }}
        </p>
    </div>

    <textarea v-model="newText">

    </textarea>

    <button @click="addText">
        Add comment to the list
    </button>
</template>

<style scoped>
    textarea{
        width: 90VW;
        height: 20VH;
    }
</style>