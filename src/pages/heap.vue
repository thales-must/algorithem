<template>
  <article class="algorithm">
    <h1>Heap</h1>
    <v-card >
      <v-form @submit.prevent="onSubmit">
        <v-card-title>Input</v-card-title>
        <v-card-text>
          <v-text-field v-model="form.str" variant="outlined" label="Number Series" hint="输入数字，用空格分隔，如 1,2,3,4"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" variant="outlined" >Submit</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-spacer style="height: 2em"></v-spacer>
    <v-card>
      <v-card-title>
        Init
      </v-card-title>
      <v-card-actions>
        <v-btn variant="outlined" @click.stop="onStart">start</v-btn>
      </v-card-actions>
      <v-card-text>
        <v-chip-group>
          <v-chip v-for="item in origin" :key="item" :text="String(item)"></v-chip>
        </v-chip-group>
        <heap-tree :step="initStep" animate></heap-tree>
        <heap-tree :step="step"></heap-tree>
      </v-card-text>
    </v-card>

  </article>
</template>
<script setup lang="ts">
import HeapTree from '@/components/heap-tree.vue';
import { useHeap } from '@/store';
import { computed, onMounted, ref } from 'vue';

const store = useHeap();
const form = computed(() => store.form);
const origin = computed(() => store.origin);
const step = computed(() => store.step);
const initStep = computed(() => store.initStep);

function onSubmit() {
  store.input(form.value.str);
}
function onStart() {
  store.start();
}

onMounted(() => {
  store.init();
})
</script>
