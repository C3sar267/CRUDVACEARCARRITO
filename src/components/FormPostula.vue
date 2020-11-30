<template>
    <div  class="contain">
        <img src="@/assets/mobile-form.png" alt="">
        <h3>Postula y obtén un 10% de descuento en el programa</h3>
        <form>
            <b-form-input 
                id="input-1"
                v-model="form.nombre"
                type="text" 
                placeholder="NOMBRE"

            >
            </b-form-input>

            <b-form-input 
                id="input-2"
                v-model="form.telefono"
                type="number" 
                placeholder="TELEFONO / CELULAR"
            >
            </b-form-input>

            <b-form-input 
                id="input-3"
                v-model="form.email"
                type="email" 
                placeholder="CORREO ELECTRÓNICO"
            >
            </b-form-input>

            <b-form-select
                id="input-4"
                v-model="form.programa"
                :options="programas"
            >
            </b-form-select>

            <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
            >
            <p>Acepto las Políticas de privacidad</p> 
            <p>{{form.nombre}} {{form.telefono}} {{form.email}} {{form.programa}}</p>
            </b-form-checkbox>
            
            <b-button type="submit">Quiero Postular</b-button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormPostula',
    data() {
        return {
            form: {
                nombre:'',
                telefono:'',
                email:'',
                programa: null
            },
            programas: [
                { text: 'Programa', value: null }, 
                'Front-End', 
                'Back-end', 
                'Desarrollo de Aplicativos Móviles', 
                'Diseño de Experiencia de Usuario',
                'Desarrollo de Videojuegos'
            ]
        }
    },
}
</script>

<style scoped>
    .contain {
        width: 375px;
        height: 530px;
        margin: 0 auto;
        background: #ffffff;
        position: relative;
        z-index: 50;
    }

    img {
        display: none;
    }

    h3 {
        color:#000425;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-top: 20px;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    input, select {
        width: 355px;
        height: 50px;
        border-radius: 5px;
        margin-bottom: 15px;
        padding-left: 10px;
        border: unset;
        border: 1px solid #8B9099;
    }

    input::placeholder {
            font-size: 12px;
        }

    button {
        width: 355px;
        height: 50px;
        margin-top: 30px;
        background: #5640FF;
        font-size: 14px;
        font-weight: bold;
        color: #FFFFFF;
    }

    p {
            font-size: 12px;
        }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 476px;
            padding: 75px 0;
            padding-left: 50px;
            padding-right: 160px;
            position: sticky;
            top: 60px;
            background:#F2F3F5;
        }

        img {
            display: initial;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0px;
        }

        h3 {
            padding: 0 25px;
            padding-top: 15px;
        }

        input, select {
            width: 216px;
            height: 50px;
            margin-bottom: 15px;
        }

        button {
            width: 216px;
            margin-top: 20px;
        }
    }
</style>