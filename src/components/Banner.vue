<template>
    <div> 
        <div v-if="bgcurso == undefined" class="banner">
            <img class="banner-img" src="@/assets/banner.png" alt="">
            <div class="contain">
                <h1>!Explota todo tu potencial <br> tecnológico!</h1>
                <p>Con nuestro programas de especialización</p>
                <a href="#formulario"><b-icon icon="pencil"></b-icon><span>Inscríbite</span></a>
            </div>
        </div>

        <div v-else class="banner">    
            <img class="banner-img" :src="`/img/${bgcurso.imagen}.jpg`" alt="">
            <div class="bg">
                <h1 class="nombre-curso">{{bgcurso.nombre}}</h1>
                <a href="#formulario"><b-icon icon="pencil"></b-icon><span>Inscríbite</span></a>
            </div>
        </div>
     </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        bgcurso: {}
    }
}
</script>

<style scoped>
    .banner {
        width: 100vw;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner-img {
        width: 100vw;
        height: 300px;
        position: relative;
    }

    .contain {
        width: 375px;
        height: 300px;
        margin: 0 auto;
        padding-top: 40px;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ffffff;
        position: absolute;
        z-index: 10;
    }

    .bg {
        width: 100vw;
        height: 300px;
        position: absolute;
        color: #ffffff;
        z-index: 9;
        background: linear-gradient(rgba(0, 4, 37, 0), rgb(0, 4, 37));
        display: flex;
        align-items: flex-end;
        padding-left: 20px;
    }

    h1 {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        width: 130px;
        height: 50px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FF1558;
        position: fixed;
        top: 233px;
        left: 62.5%;
        z-index: 100;
    }

    span {
        margin-left: 10px;
    }

    .nombre-curso {
        margin-bottom: 100px;
    }

    @media screen and (min-device-width:1366px){
        .banner {
            height: 500px;
        }

        .banner-img {
            width: 100vw;
            height: 500px;
        }
        .contain {
            width: 1366px;
            padding-top: 204px;
            padding-left: 86px;
        }

        .bg {
            height: 500px;
            padding-left: 86px;
        }

        h1 {
            font-size: 54px;
            margin-bottom: 40px;
        }

        p {
            font-size: 20px;
        }

        a {
            display: none;
        }
    }
</style>