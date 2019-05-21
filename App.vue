<template>
    <div>
      <p>
        {{ $store.state.count }}
      </p>
      <p>
        <button @click="increment">+</button>
      </p>
    </div>
</template>

<script>
  import Vue from 'vue'
  
  export default {
    methods: {
      increment() {
        this.$store.commit('increment')
      },
    },
  }
</script>
