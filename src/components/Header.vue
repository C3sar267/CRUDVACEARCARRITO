<template>
    <div :class="['header', bgdark]">     
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/"> 
                <img class="logo" src="@/assets/logo.png" alt=""> 
            </b-navbar-brand>

            <Carrito/>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Cursos" right>
                        <b-dropdown-text style="height: 30px; font-weight: bold;">
                            CURSOS
                        </b-dropdown-text> 
                         <b-dropdown-divider></b-dropdown-divider>
                        <div class="lista-cursos">
                            <div>
                                <b-dropdown-item href="/curso/1"> <b-icon icon="code-square"></b-icon> Front-End</b-dropdown-item>
                                <b-dropdown-item href="/curso/2"> <b-icon icon="code-square"></b-icon> Back-End</b-dropdown-item>
                                <b-dropdown-item href="/curso/3"> <b-icon icon="code-square"></b-icon> Desarrollo de Aplicativos Móviles</b-dropdown-item>
                            </div>
                            <div>
                                <b-dropdown-item href="/curso/4"> <b-icon icon="code-square"></b-icon> Diseño de Experiencia de Usuario</b-dropdown-item>
                                <b-dropdown-item href="/curso/5"> <b-icon icon="code-square"></b-icon> Desarrollo de Videojuegos</b-dropdown-item>
                            </div>
                        </div>
                    </b-nav-item-dropdown>
                    <b-navbar-nav>
                        <b-nav-item href="/loggin">Iniciar Sesión</b-nav-item>
                        <b-nav-item href="/register">Registrarse</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import Carrito from "@/components/Carrito.vue"
import Cursos from "@/components/Cursos.vue"

export default {
    name: 'Header',
    components: {
        Carrito,
        Cursos
    },
    props: {
        bgdark:String
    }
}
</script>

<style scoped>
/* CAMBIO AL NAVBAR BOOTSTRAP */
    .bg-info {
        background: none !important;
        height: 80px !important;
    }

    .navbar-nav .nav-link {
        color:  #ffffff;
    }

/* +++++++++++++++++++++++++++++++ */

    .header {
        width: 100vw;
        height: 80px;
        background: rgba(59, 0, 255, 0.5);
        position: fixed;
        z-index: 200;
    }

    .contain {
        width: 375px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }

    .bgdark {
        background: rgba(28,28,30,0.7);
    }

    .icons {
        width: 80px;
        display: flex;
        justify-content: space-between;
    }

    .lista-cursos {
        display: flex;
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 1366px;
            padding: 0 86px;
        }

        .bg-info {
            width: 1366px !important;
            margin: 0 auto !important;
        }

        .texto {
            width: 400px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #ffffff;
        }

        .icons {
            display: none;
        }

    }
</style>