<script lang="ts" setup>
const props = withDefaults(defineProps<{
  title: string;
  size?: Size ;

}>(), {
  title: "Button",

});

const emits = defineEmits<{
  click: (e: MouseEvent) => void;
}>();

enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}
enum Icon {
  ARROW = "ARROW",
}
const title = ref(props.title);
</script>

<template>
  <button
    class="rounded-sm bg-yellow text-[#000] hover:bg-yellowHover active:bg-yellowActive"
    :class="{
      'sm:h-[40px] sm:w-[162px] md:h-[44px] md:w-[185px]': size === Size.small,
      'sm:h-[44px] sm:w-[185px] md:h-[48px] md:w-[200px]': size === Size.medium,
      'sm:h-[48px] sm:w-[220px] ': size === Size.large,
    }"

    @click="emits.click"
  >
    {{ title }}
  </button>
</template>
