<template>
    <div class="footer">
        <div class="contain">
            <img src="@/assets/footer.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer {
        width: 100vw;
        height: 102px;
        background: #000D29;
        position: relative;
        z-index: 50;
    }

    .contain {
        width: 375px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    
    img {
        width: 360px;
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 1366px;
            padding-left: 70px;
            margin-top: 50px;
        }
    }
</style>