<template>
    <div class="row row-loggin">
        <BannerLoggin/>
        <div class="col-sm-4 sm-4">
            <b-nav tabs fill class="m-auto">
                    <b-nav-item to="/loggin" exact-active-class="active">Iniciar Sesión</b-nav-item>
                    <b-nav-item to="/register" active-class="active">Registrarse</b-nav-item>
            </b-nav>   
            <IniciarSesion/> 
        </div>
    </div>
</template>

<script>
import BannerLoggin from "@/components/BannerLoggin.vue"
import IniciarSesion from "@/components/IniciarSesion.vue"
import Header from '../components/Header.vue'

export default {
    name: 'Loggin',
    components: {
        BannerLoggin,
        IniciarSesion
    }
}
</script>


<style scoped>
/*Versión celular*/
    .row-loggin {
        width: 375px;
        height: 100vh;
        margin: 0 auto;
        background: #F8F8FA;
    }
    
    .sm-4 {
        padding: 0;
    }

    @media screen and (min-device-width:1366px){
        .row-loggin {
            width: 1366px;
        }
    }
</style>