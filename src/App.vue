<script setup>
const title = ref("Hello World");
title.value = "Hello ";
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <button class="h-[44px] w-[185px] rounded-sm bg-yellow text-[#000] hover:bg-yellowHover active:bg-yellowActive">
      {{ title }}
    </button>
  </div>
</template>
