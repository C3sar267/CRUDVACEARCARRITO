<template>
    <div class="contain">
        <img src="@/assets/respaldo-dark.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'Respaldo'
}
</script>

<style scoped>
    .contain {
        width: 375px;
        height: 150px;
        margin: 0 auto; 
        padding: 10px;
        padding-top: 40px;
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 890px;
            height: 180px;
            padding: 48px 86px;
            margin: 0;
        }
    }
</style>