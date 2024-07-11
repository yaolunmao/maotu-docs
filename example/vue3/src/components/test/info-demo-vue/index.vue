<template>
  <div>
    <div>当前图元的id是:{{ props.mtItemJson.id }}</div>
    <div>标题是:{{ props.mtItemJson.title }}</div>
  </div>
</template>
<script setup lang="ts">
import type { IDoneJson } from '@/components/mt-edit/store/types';
const props = withDefaults(defineProps<{ mtItemJson: IDoneJson }>(), {});
</script>
