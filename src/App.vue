<script setup lang="ts">
import Button from "@/components/buttons/MainButton.vue";

function log() {
  console.log("hello");
}
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center gap-[10px]">
    <Button class="" />
    <Button size="small" />
    <Button size="medium" @focus="log" />
    <Button size="large" icon-left="ARROW" />
    <input type="text">
  </div>
</template>
