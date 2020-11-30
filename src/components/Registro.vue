<template>
    <div>
        <div class="col-sm-4-body">
            <p class="text">Si ya tienes una cuenta ve a la pestaña <span>Iniciar Sesion</span> </p>
            <div>
                <input class="col-sm-4-body-input-1" type="text" placeholder="Nombres y apellidos">
            </div>
            <div>
                <input class="col-sm-4-body-input-2" type="email" placeholder="Correo electrónico" >
            </div>
            <div>
                <input class="col-sm-4-body-input-3 input-password" type="password" placeholder="Contraseña" >
            </div>
            <div>
                <input class="col-sm-4-body-input-4 input-password" type="password" placeholder="Repite contraseña">
            </div>
            <div>
                <input class="col-sm-4-body-input-5" type="checkbox"> Aceptar Terminos y condiciones
            </div>
            <div>
                <button class="btn-loggin" type="submit">Registrarse</button>
            </div>

            <a href="/" class="salir">Salir del registro</a>
        </div>
    </div>        
</template>

<script>
export default {
    name: 'Registro'
}
</script>

<style scoped>
/*Versión celular*/
    .col-sm-4-header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-around;
    }

    .text {
        font-size: 12px;
        margin-bottom: 60px;
    }

    span {
        color: #5640FF;
        font-weight: bold;
    }

    .col-sm-4-header-text-session, .col-sm-4-header-text-register {
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        color: #222222;
        cursor: pointer;
        border: 2px solid gray;
    }

    .col-sm-4-body {
        width: 100%;
        height: 100%;
        margin-top: 25px;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #F8F8FA;
    }

    .col-sm-4-body-input-1,.col-sm-4-body-input-2, .col-sm-4-body-input-3, .col-sm-4-body-input-4 {
        width: 335px;
        height: 50px;
        border: 1px solid #8B9099;
        border-radius: 5px;
        margin-bottom: 20px;
        padding-left: 15px;
    }

    .btn-loggin {
        width: 335px;
        height: 50px;
        background-color: #5640FF;
        border-radius: 10px;
        border: unset;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        margin: 60px 0px 0px 0px;
    }

    .salir {
        border: unset;
        border-radius: 5px;
        background: #308aad;
        padding: 5px 10px;
        margin-top: 40px;
        margin-left: 170px;
        color: #FFFFFF;
        text-decoration: none;
    }

    @media screen and (min-device-width:1366px){
        .col-sm-4-header {
            border-bottom: 2px solid gray;
        }

        .text {
            margin-bottom: 50px;
        }

        .col-sm-4-header-text-session, .col-sm-4-header-text-register {
            border: none;
        }

        .col-sm-4-body {
            margin-top: 50px;
        }

        .col-sm-4-body-input-1,.col-sm-4-body-input-2, .col-sm-4-body-input-3, .col-sm-4-body-input-4 {
            width: 350px;
        }

        .btn-loggin {
            width: 350px;
            margin: 50px 0px 0px 0px;
        }

        .salir {
            margin-left: 210px;
        }
    }
</style>