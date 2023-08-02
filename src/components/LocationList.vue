<template>
  <draggable class="pt-6" tag="ul" :list="locations" handle=".handle" item-key="name">
    <template #item="{ element, index }">
      <li class="list-group-item d-flex pr-2 pt-4" style="justify-content: space-between;">
        <v-icon icon="mdi-menu" class="handle"></v-icon>
        <span class="text">{{ element.name }}, {{ element.country }} </span>
        <v-icon icon="mdi-close" class="close" @click="removeAt(index)"></v-icon>
      </li>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import { computed } from 'vue';
import { LocationData } from '@/common/types';

const props = defineProps({
  modelValue: Array<LocationData>,
});

const emit = defineEmits(['update:modelValue']);

const locations = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

function removeAt(idx: number): void {
  locations.value?.splice(idx, 1);
}

</script>
