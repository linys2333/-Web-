<template>
    <div>
        <x-header :left-options="{showBack: false}">用户中心</x-header>
        <group :title="userName">            
            <test :testData="testData"></test>
        </group>
        <div style="padding:15px;">
            <x-button @click.native="logout">退出</x-button>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    import {
        XHeader,
        XButton,
        Group,
        Cell
    } from 'vux'

    import Test from 'COMPONENT/Test/'

    export default {
        components: {
            XHeader,
            XButton,
            Group,
            Cell,
            Test
        },
        data() {
            return {
                testData: {}
            }
        },
        created() {
            this.$store.dispatch('getTestData')
                .then(data => {
                    this.testData = data
                })
        },
        computed: {
            ...mapGetters([
                'userName'
            ])
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
                    .then(() => this.$router.push('/Login'))
            }
        }
    }
</script>