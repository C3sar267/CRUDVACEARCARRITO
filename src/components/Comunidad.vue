<template>
    <div class="contain">
        <img src="@/assets/Chinita.png" alt="">
        
        <h3>Sé parte de la comunidad</h3>
        
        <p>Programas semi-presenciales para el desarrollo de 
        habilidades de programación a lo largo 
        de todo el Stack tecnológico.</p>          
        <p> Al finalizar sabrás cómo crear una página web y 
        desarrollar la lógica detrás del 
        funcionamiento de una aplicación, así como formar 
        parte de una gran comunidad de 
        desarrolladores.</p>

    </div>
</template>

<script>
export default {
    name: 'Comunidad'
}
</script>

<style scoped>
    .contain {
        width: 375px;
        height: 516px; 
        margin: 0 auto; 
        margin-top: 100px;
        background: linear-gradient(#3015FD, #5640FF);
        position: relative;
    }

    h3 {
        color: #ffffff; 
        font-size: 16px; 
        font-weight: bold;
        padding-left: 10px;
        padding-top: 250px;
        margin-bottom: 33px;
    }

    p {
        color: #ffffff;
        font-size: 14px;
        padding-left: 10px;
        padding-right: 42px;
        margin-bottom: 22px;
    }

    img {
        position: absolute;
        top: -110px;
        left: 55px;
        z-index: 10;
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 890px;
            height: 282px;
            margin-top: 119px;
        }

        h3 {
            font-size: 20px; 
            padding-left: 242px;
            padding-top: 60px;
            margin-bottom: 20px;
        }

        p {
            font-size: 14px;
            padding-left: 242px;
            padding-right: 86px;
            margin-bottom: 20px;
        }

        img {
            position: absolute;
            top: -86px;
            left: -120px;
            z-index: 10;
            height: 450px;
        }
    }
</style>