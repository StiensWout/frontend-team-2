<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
    viewType: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
      //check if btnType is Add
        if (this.viewType === 'garagist') {
          this.$emit('toggle-add-garagist')
        }
        if (this.viewType === 'vrachtwagen') {
          this.$emit('toggle-add-vrachtwagen')
        }
        if (this.viewType === 'onderhoud') {
          this.$emit('toggle-add-onderhoud')
        }
      }
    }
}
</script>