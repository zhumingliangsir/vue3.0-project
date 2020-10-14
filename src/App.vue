<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
        <router-view></router-view>
        <global-footer></global-footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

/* 登录状态 */
const currentUser: UserProps = {
    isLogin: true,
    name: "koma",
};
export default defineComponent({
    name: "App",
    components: {
        GlobalHeader,
        GlobalFooter,
    },
    setup() {
        return {
            currentUser,
        };
    },
});
</script>

<style>
</style>
