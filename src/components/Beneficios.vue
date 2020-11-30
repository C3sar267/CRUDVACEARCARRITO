<template>
    <div class="contain">
        <h3>Beneficios</h3>

        <div class="card">
            <img src="@/assets/bene1.png" alt="">
            <div>
                <h4>Aprende de Expertos</h4>
                <p>Aprende directamente de expertos del mercado a través del análisis y solución de 
                problemas de programación. Utilizando los frameworks y herramientas de mayor 
                relevancia dentro del mundo del coding.</p>
            </div>
        </div>
        
        <div class="card">
            <img src="@/assets/bene2.png" alt="">
            <div>
                <h4>Clases Virtuales</h4>
                <p>Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa 
                presencialmente de nuestras hackathones semanales para conocer y participar de la 
                comunidad profesional que liderará la transformación tecnológica del Perú.</p>   
            </div>

        </div>
                
        <div  class="card">
            <img src="@/assets/bene3.png" alt="">
            <div id="formulario">
                <h4>Empleabilidad</h4>
                <p>Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas 
                laborales especialmente identificadas para la comunidad PachaQTec, a través de 
                nuestra plataforma de empleabilidad IDAT JOB.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Beneficios'
}
</script>

<style scoped>
    .contain {
        width: 375px;
        height: 490px;
        background: #F2F3F5;
        margin: 0 auto;
        padding: 0 10px;
    }

    .card {
        width: 355px;
        height: 108px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: #FFFFFF;
        border: unset;
        border-radius: 10px;
        margin-bottom: 20px;
        padding: 29px 45px;
    }

    h3 {
        color:#000425;
        font-size: 16px;
        font-weight: bold;
        padding-top: 40px;
        margin-bottom: 26px;
    }

    h4 {
        color:#000425;
        font-size: 16px;
    }

    img {
        margin-right: 50px;
    }

    p {
        display: none;
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 890px;
            height: 750px;
            padding-top: 129px;
            padding-left: 86px;
        }

        .card {
            width: 718px;
            height: 160px;
            margin-bottom: 30px;
            padding: 30px 40px;
        }

        h3 {
            padding: 0;
            font-size: 20px;
            margin-bottom: 30px;
        }

        h4 {
            margin-bottom: 20px;
        }

        img {
            margin-right: 40px;
            height: 60px;
        }  

        p {
            display: initial;
            font-size: 14px;
        }
    }
</style>