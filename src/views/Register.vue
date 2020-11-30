<template>
    <div class="row row-loggin">
        <BannerLoggin/>
        <div class="col-sm-4 sm-4">
            <b-nav tabs fill class="m-auto">
                    <b-nav-item to="/loggin" exact-active-class="active">Iniciar Sesión</b-nav-item>
                    <b-nav-item to="/register" active-class="active">Registrarse</b-nav-item>
            </b-nav>   
            <Registro/> 
        </div>
    </div>
</template>

<script>
import BannerLoggin from "@/components/BannerLoggin.vue"
import Registro from "@/components/Registro.vue"
import Header from '../components/Header.vue'

export default {
    name: 'Register',
    components: {
        BannerLoggin,
        Registro
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