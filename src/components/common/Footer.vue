<template>
    <div class="footer">
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
    export default {
        name:'footer',
        data () {
            return {
                msg: '这是footer设置'
            }
        }
    }
</script>

<style lang="">
    .footer{
        background: #000;
        color: #fff;
        height: 50px;
        line-height: 50px;
        position: fixed;
        width: 100%;
        bottom: 0;
    }
</style>