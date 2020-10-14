<template>
    <div class="dropdown" ref="dropdownRef">
        <a class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
            {{title}}
        </a>

        <ul class="dropdown-menu" v-if="isOpen" :style="{display:'block'}">
            <slot></slot>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from "vue";
import useClickOutside from "../hooks/useClickOutside";
export default defineComponent({
    name: "Dropdown",
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    setup() {
        const isOpen = ref(false);
        const dropdownRef = ref<null | HTMLElement>(null);
        const toggleOpen = () => {
            isOpen.value = !isOpen.value;
        };
        // 监听 isClickOutside 的状态
        const isClickOutside = useClickOutside(dropdownRef);
        watch(isClickOutside, () => {
            // 如果点击了外部，并且当前 dropdown 为显示的情况下，将其隐藏
            if (isOpen.value && isClickOutside.value) {
                isOpen.value = false;
            }
        });

        return {
            isOpen,
            toggleOpen,
            dropdownRef,
        };
    },
});
</script>