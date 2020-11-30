<template>
    <div class="contenedor">
        <div class="columna">
            <h4> <b-icon icon="check"></b-icon> Front End</h4>
            <h4> <b-icon icon="check"></b-icon> Back End</h4>
            <h4> <b-icon icon="check"></b-icon> Desarrollo Digital</h4>
        </div>

        <div class="columna">
            <h4> <b-icon icon="check"></b-icon> Estadistica</h4>
            <h4> <b-icon icon="check"></b-icon> Desarrollo videojuegos</h4>
            <h4> <b-icon icon="check"></b-icon> mas</h4>
        </div>

        <div class="columna">
            <h4> <b-icon icon="check"></b-icon> Desarrollo videojuegos</h4>
            <h4> <b-icon icon="check"></b-icon> mas</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cursos'
}
</script>

<style scoped>
    .contenedor {
        width: 830px;
        height: 200px;
        padding: 20px 0;
        display: flex;
        background: linear-gradient(rgba(59, 0, 255, 0.5),rgba(59, 0, 255, 0.5));
    }

    .columna {
        margin-left: 40px;
    }

    h4 {
        font-size: 20px;
    }
</style>