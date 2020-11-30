<template>
    <div>
        <div class="col-sm-4-body">
            <p class="text">Si aún no te has registrado ve a la pestaña <span>Registrarse</span> </p>
            <div>
                <input class="col-sm-4-body-input-1" type="email" placeholder="Correo electrónico">
            </div>
            <div>
                <input class="col-sm-4-body-input-2" type="password" placeholder="Contraseña">
            </div>
            <div>
                <button class="btn-loggin" type="submit">Ingresar</button>
            </div>
            <div class="col-sm-4-body-secondtext">
                <a>¿Olvidaste tu contraseña?</a>
            </div>

            <a href="/" class="salir">Salir del registro</a>
        </div>
    </div>        
</template>

<script>
export default {
    name: 'IniciarSesion'
}
</script>

<style scoped>
/*Versión celular*/
    .text {
        font-size: 12px;
        margin-bottom: 60px;
    }

    span {
        color: #5640FF;
        font-weight: bold;
    }

    .col-sm-4-body {
        width: 100%;
        height: 100%;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #F8F8FA;
    }

    .col-sm-4-body-input-1,.col-sm-4-body-input-2 {
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

    .col-sm-4-body-secondtext {
        font-size: 12px;
        padding-top: 20px;
        font-weight: bold;
        color: #5640FF;
        text-decoration: underline;
        margin: 10px 0px 0px 0px;
        cursor: pointer;
    }

    .salir {
        border: unset;
        border-radius: 5px;
        background: #308aad;
        padding: 5px 10px;
        margin-top: 80px;
        margin-left: 200px;
        color: #FFFFFF;
        text-decoration: none;
    }

    @media screen and (min-device-width:1366px){
        .text {
            margin-bottom: 70px;
        }

        .col-sm-4-body {
            margin-top: 50px;
        }

        .col-sm-4-body-input-1,.col-sm-4-body-input-2 {
            width: 350px;
        }

        .btn-loggin {
            width: 350px;
            margin: 100px 0px 0px 0px;
        }

        .salir {
            margin-left: 210px;
        }
    }
</style>