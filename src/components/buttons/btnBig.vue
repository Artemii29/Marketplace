<template>
  <div class="flex h-full items-center justify-center">
    <button @click="$emit" class="rounded-sm bg-yellow text-[#000] hover:bg-yellowHover active:bg-yellowActive">
      {{ title }}
    </button>
  </div>
</template>

<script setup>
const title = ref("Hello World");
title.value = "Hello";


</script>

<style>
@media (min-width: 0)  and (max-width: 767px) {
  button{
    width:157px;
    height: 40px;
  }
}
@media (min-width: 768px)  and (max-width: 991px) {
  button{
    width:157px;
    height: 40px;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  button{
    width: 185px;
    height: 44px;
  }
}

</style>
