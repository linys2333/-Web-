<template>
    <div>
        <div class="logo">
            <img src="../../static/img/logo.png" alt="" class="logo-icon" />
        </div>
        <group gutter="0">
            <x-input v-model="userInfo.userName" type="email" title="账号">
            </x-input>
            <x-input v-model="userInfo.password" type="password" title="密码">
            </x-input>
        </group>
        <div style="padding:15px;">
            <x-button type="primary" v-saving="saving" @click.native="login">登录</x-button>
        </div>
    </div>
</template>

<script>
    import {
        Group,
        XInput,
        XButton
    } from 'vux'

    export default {
        components: {
            Group,
            XInput,
            XButton
        },
        data() {
            return {
                userInfo: {
                    userName: '',
                    password: ''
                },
                saving: false
            }
        },
        created() {},
        computed: {},
        methods: {
            login() {
                this.saving = true

                this.$store.dispatch('login', this.userInfo)
                    .then(() => this.$router.push('/'))
                    .catch(msg => {
                        alert(msg)
                        this.userInfo.password = ''
                        this.saving = false
                    })

            }
        }
    }
</script>

<style lang="less" src='./Login.less' scoped/>