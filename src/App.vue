<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3">
                <label class="form-label">邮箱地址</label>
                <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入内容" type="text" ref="inputRef"></validate-input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">密码</label>
                <validate-input :rules="passwordRules" v-model="passwordVal" placeholder="请输入密码" type="password"></validate-input>
            </div>
            <template #submit>
                <span class="btn btn-danger">Submit</span>
            </template>
        </validate-form>
    </div>

</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, reactive, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";

const currentUser: UserProps = {
    isLogin: true,
    name: "koma",
};
export default defineComponent({
    name: "App",
    components: {
        GlobalHeader,
        ValidateInput,
        ValidateForm,
    },
    setup() {
        const inputRef = ref<any>(null);
        const emailVal = ref("");

        /******************** 传递给 ValidateInput 组件的验证信息  start **************************/
        const emailRules: RulesProp = [
            {
                type: "required",
                message: "电子邮箱不能为空",
            },
            {
                type: "email",
                message: "请输入正确的电子邮箱地址",
            },
        ];
        const passwordVal = ref("");
        const passwordRules: RulesProp = [
            {
                type: "required",
                message: "密码不能为空",
            },
        ];

        const onFormSubmit = (result: boolean) => {
            console.log("result", result);
        };

        /******************** 传递给 ValidateInput 组件的验证信息  end **************************/

        return {
            currentUser,
            emailRules,
            emailVal,
            passwordRules,
            passwordVal,
            onFormSubmit,
            inputRef,
        };
    },
});
</script>

<style>
</style>
