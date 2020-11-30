<template>
        <tr class="fila">
            <td><img :src="`/img/${item.imagen}.jpg`" alt=""></td>
            <td>{{item.nombre}}</td>
            <td>S/. {{item.precio}}</td>
            <td>
                <b-button variant="success" @click="addDeleiteActions(item.id)"> X </b-button>
            </td>
        </tr>
</template>

<script>

import { mapActions} from "vuex"

export default {
    name: 'ItemCompra',
    props: ['item'],

     methods: {
        ...mapActions(['addDeleiteActions'])
    }
}
</script>

<style scoped>
    img {
        width: 60px; 
        height: 50px;
    }

    th, td {
        vertical-align: middle;
    }

</style>