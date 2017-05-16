<template>
    <div class="box">
        <flexbox>
            <div class="icon">
                <icon type="waiting"></icon>
            </div>
            <div>
                <div style="font-size: 11pt">{{testData.title}}</div>
                <div class="minFont gray">{{testData.size}}</div>
            </div>
        </flexbox>
    </div>
</template>

<script>
    import {
        XHeader,
        Group,
        Box,
        Icon,
        Flexbox
    } from 'vux'

    export default {
        components: {
            XHeader,
            Group,
            Box,
            Icon,
            Flexbox
        },
        props: {
            testData: {
                required: true
            }
        },
        data() {
            return {}
        },
        created() {},
        computed: {},
        methods: {}
    }
</script>

<style lang="less" src='./Test.less' scoped/>