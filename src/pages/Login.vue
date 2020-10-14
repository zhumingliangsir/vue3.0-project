<template>
    <div class="login-page mx-auto p-3 w-330">
        <h5 class="my-4 text-center">登录到者也</h5>
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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import ValidateForm from "@/components/ValidateForm.vue";
export default defineComponent({
    name: "Login",
    components: {
        ValidateInput,
        ValidateForm,
    },
    setup() {
        /* ref 节点 */
        const inputRef = ref<any>(null);

        const router = useRouter();

        /******************** 传递给 ValidateInput 组件的验证信息  start **************************/
        const emailVal = ref("");
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
            if (result) {
                router.push({ name: "column", params: { id: 1 } });
            }
        };
        return {
            inputRef,
            emailVal,
            emailRules,
            passwordVal,
            passwordRules,
            onFormSubmit,
        };
    },
});
</script>