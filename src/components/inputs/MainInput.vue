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
  <input type="date" class="">
</template>
