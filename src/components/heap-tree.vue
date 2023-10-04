<template>
  <svg version="1.1"
      width="600" height="400"
      xmlns="http://www.w3.org/2000/svg">
    <template v-for="item, index in props.step">
      <line v-if="item.parentY!=0" :opacity="props.animate?0:1" :x2="item.x+20" :y2="item.y+20" :x1="item.parentX+20" :y1="item.parentY+20" stroke="black" stroke-dasharray="200, 20" stroke-dashoffset="200" >
        <animate v-if="props.animate" attributeName="opacity" from="0" to="1" dur="1s" :begin="`${Number(index * 0.5) + 1}s`" fill="freeze" />
      </line>
      <svg  :x="item.x" :y="item.y" viewBox="-20, -20, 40, 40" width="40" height="40" :opacity="props.animate?0:1">
        <circle cx="0" cy="0" r="20" fill="white" stroke="black" />
        <text x="0" y="5" text-anchor="middle">{{ item.value }}</text>
        <animate v-if="props.animate" attributeName="opacity" from="0" to="1" dur="1s" :begin="`${index * 0.5}s`" fill="freeze" />
      </svg>    
    </template>
    
  </svg>
</template>
<script lang="ts" setup>
const props = defineProps<{
  step:any;
  animate?:boolean;
}>();
</script>