<script setup lang="ts">
interface Props {
  placeholder: string;
  size?: Size ;
  typeDisplay?: string;
  value?: string;

}

enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}
</script>

<template>
  <input type="date" class=""
  :class="{
  'sm:h-[40px] sm:w-[162px] md:h-[44px] md:w-[185px]': size === Size.small,
  'sm:h-[44px] sm:w-[185px] md:h-[48px] md:w-[200px]': size === Size.medium,
  'sm:h-[48px] sm:w-[220px] ': size === Size.large,
  }"
  @input="$emit('broadcast',userInput)">
</template>
