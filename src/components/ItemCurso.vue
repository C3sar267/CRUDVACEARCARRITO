<template>
    <div class="item">
        <img class="imagen" :src="`/img/${curso.imagen}.jpg`" alt="">
        <div v-if="curso.descripcion != ''" class="bg">
            <h3>{{curso.nombre}}</h3>
            <p>S/. {{curso.precio}}</p>
            <div class="enlaces">
                <button @click="agregar(curso)">Agregar al carrito</button>
                <router-link 
                    :to="{name: 'Curso', params: {id: curso.id}}">
                    <img class="mas" src="@/assets/vermas.png" alt="">
                    Ver más
                </router-link>
            </div>
        </div>

        <div v-else class="bg">
            <h3 class="proximo-curso">{{curso.nombre}}</h3>
            <p class="proximo">PROXIMAMENTE</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: 'ItemCurso',
    props: {
        curso:{}
    },
    methods: {
        ...mapActions(['addCarritoAction']),
        agregar(curso){
            this.addCarritoAction(curso)
        }
    }
}
</script>

<style scoped>
    .item {
        width: 355px;
        height: 222px;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .imagen {
        width: 355px;
        height: 222px;
        border-radius: 10px;
    }
    
    .bg {
        width: 355px;
        height: 222px;
        border-radius: 10px;
        position: absolute;
        color: #ffffff;
        z-index: 9;
        background: linear-gradient(rgba(0, 4, 37, 0), rgb(0, 4, 37));
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 20px;
    }

    p {
        font-size: 20px;
        font-weight: bold;
    }

    .enlaces {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    button {
        width: 150px;
        height: 40px;
        border: unset;
        border-radius: 5px;
        outline: none;
    }

    button:hover {
        cursor: pointer;
        color: white;
        background: #3b00ff;
        transition: 0.6s;
    }

    .mas {
        margin-right: 2px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .proximo {
        margin-top: 30px;
        font-size: 16px;
        position: relative;
        text-align: right;
    }

    @media screen and (min-device-width:1366px){
        .item {
            width: 344px;
            height: 320px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .imagen {
            width: 344px;
            height: 320px;
        }

        .bg {
            width: 344px;
            height: 320px;
        }     
    }
</style>