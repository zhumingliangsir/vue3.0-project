<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
        <router-view></router-view>
        <global-footer></global-footer>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

export default defineComponent({
    name: "App",
    components: {
        GlobalHeader,
        GlobalFooter,
    },
    setup() {
        // 从 vuex 中获取登录状态
        const store = useStore();
        const currentUser = computed(() => store.state.user);
        return {
            currentUser,
        };
    },
});
</script>

<style>
</style>
