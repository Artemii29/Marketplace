<script lang="ts" setup>
type Size = 'large' | "middle" | "small";

const props = defineProps<{
  size:Size
  title:string
}>()


const title = ref("Hello World");
title.value = "Hello";


</script>
<template>
  <!--  <div class="flex h-full items-center justify-center">-->
  <button class="rounded-sm bg-yellow text-[#000] hover:bg-yellowHover active:bg-yellowActive" @click="$emit('click')">
    {{ title }}
  </button>
  <!--  </div>-->
</template>




