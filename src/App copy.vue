<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
        <column-list :list="list"></column-list>
    </div>

</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";

const currentUser: UserProps = {
    isLogin: true,
    name: "koma",
};
const testData: ColumnProps[] = [
    {
        id: 1,
        title: "test1的专栏",
        description:
            "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作",
        avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602566932107&di=c1f626f64207fcaa7bf857cfe1f6ac5f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181116%2Fa677a422791a413290810061f9d1682a.jpeg",
    },
    {
        id: 2,
        title: "test1的专栏",
        description:
            "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作",
        avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602566932107&di=c1f626f64207fcaa7bf857cfe1f6ac5f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181116%2Fa677a422791a413290810061f9d1682a.jpeg",
    },
    {
        id: 3,
        title: "test1的专栏",
        description:
            "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作",
        // avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602566932107&di=c1f626f64207fcaa7bf857cfe1f6ac5f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181116%2Fa677a422791a413290810061f9d1682a.jpeg',
    },
    {
        id: 4,
        title: "test1的专栏",
        description:
            "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作",
        avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602566932107&di=c1f626f64207fcaa7bf857cfe1f6ac5f&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181116%2Fa677a422791a413290810061f9d1682a.jpeg",
    },
];

export default defineComponent({
    name: "App",
    components: {
        ColumnList,
        GlobalHeader,
    },
    setup() {
        return {
            list: testData,
            currentUser,
        };
    },
});
</script>

<style>
</style>
