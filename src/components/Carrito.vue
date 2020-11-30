<template>
    <div class="my-5">
        <b-navbar-nav id="carro" class="submenu">
            <b-nav-item href="#"><b-icon class="icon-cart" icon="cart3"></b-icon></b-nav-item>
            <div id="carrito">
                <table id="lista-carrito" class="table">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="body">
                        <ItemCompra 
                            v-for="item of carrito" :key="item.id"
                            :item="item"
                        />
                    </tbody>

                   
                    <tfoot>
                            
                            <th v-if="carrito.length == 0" scope="row" colspan="5">Carrito vacío - Empieze a comprar!</th>
                            
                            
                    </tfoot>
                </table>
                
                <b-button variant="danger" id="vaciar-carrito" @click="vacearCarritoActions()" > Vaciar Carrito </b-button> 
                <b-button variant="primary" id="vaciar-carrito" > <a href="/miscompras">Ir a pagar</a> </b-button> 

                 {{ carrito.length  }}
            </div>
            
        </b-navbar-nav>
    </div>

    
</template>

<script>
import ItemCompra from "@/components/ItemCompra.vue"
import { mapActions, mapState } from "vuex"

export default {
    name: 'Carrito',
    components: {
        ItemCompra
    },
    computed: {
        ...mapState(['carrito',])
    },

      methods: {
        ...mapActions(['vacearCarritoActions'])
    }
}
</script>

<style scoped>
.icon-cart {
    color: rgb(255, 255, 255);
}

.submenu {
    position: relative;
}

.submenu #carrito{
    display: none;
}
.submenu:hover #carrito{
    display: block;
    position: absolute;
    left: -40px;
    border-radius: 5px;
    top:100%;
    z-index: 1;
    background-color: rgb(255, 255, 255);
    min-height: 10px;
    padding: 20px;
    min-width: 600px;
}

th {
    text-align: center;
}

button {
    width: 100%;
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    color: inherit;
}

    @media screen and (min-device-width:1366px){
.icon-cart {
    color: white;
}

.submenu {
    position: relative;
}

.submenu #carrito{
    display: none;
}
.submenu:hover #carrito{
    display: block;
    position: absolute;
    left: -40px;
    border-radius: 5px;
    top:100%;
    z-index: 1;
    background-color: white;
    min-height: 10px;
    padding: 20px;
    min-width: 600px;
}

th {
    text-align: center;
}

button {
    width: 100%;
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    color: inherit;
}
    }
</style>