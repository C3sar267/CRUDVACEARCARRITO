<template>
    <div class="col-sm-8 sm-8 border border-dark">
        <div><img class="col-sm-8-img-1" align="left" src="@/assets/logo.png"></div>
        <div><h2 class="col-sm-8-tittle">¡Explota todo tu potencial <br> tecnológico!</h2></div>
        <div><p class="col-sm-8-text">Con nuestros programas <br> de especialización</p></div>
        <div class="col-sm-8-img-2"><img src="@/assets/respaldo-light.png"></div>
    </div>
</template>

<script>
export default {
    name: 'BannerLoggin'
}
</script>

<style scoped>
/*Versión celular*/
    .sm-8 {
        display:none;
    }

    @media screen and (min-device-width:1366px){
        .sm-8 {
            display:initial;
            padding: 0;
            height: 100vh;
            width: 100%;
            background-image: url("../assets/banner.png"); 
            background-repeat: no-repeat;
            background-size: cover;
        }

        .col-sm-8-img-1 {
            margin: 24px 0px 0px 80px;
            text-align: left;
        }

        .col-sm-8-tittle {
            text-align: right;
            color: #FFFFFF;
            margin: 259px 86px 0px 0px;
            font-size: 26px;
            font-weight: bold;
        }

        .col-sm-8-text {
            font-size: 16px;
            color: #FFFFFF;
            margin: 20px 86px 0px 0px;
            text-align: right;
        }

        .col-sm-8-img-2 {
            margin-top: 163px;
            margin-left: 86px;
        }   
    }
</style>