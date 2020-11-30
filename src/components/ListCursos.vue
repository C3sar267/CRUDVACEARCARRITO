<template>
    <div class="list">
        <h2>Conoce nuestros Programas de Especialización</h2>
        <ul class="items" >
            <li v-for="curso in cursos" :key="curso.id">
                <ItemCurso :curso="curso"/>
            </li>
        </ul>
    </div>
</template>

<script>
import ItemCurso from "@/components/ItemCurso.vue"
import { mapActions, mapState } from "vuex";

export default {
    name: 'ListCursos',
    components: {
        ItemCurso
    },
    methods: {
        ...mapActions(['getCursosAction'])
    },
    computed: {
        ...mapState(['cursos'])
    },
    created() {
        this.getCursosAction()
    }
}
</script>

<style scoped>
    .list {
        width: 375px;
        margin: 0 auto;
    }

    .items {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    h2 {
        margin-bottom: 30px;
        padding-left: 10px;
        color: #222222;
        font-size: 20px;
        font-weight: bold;
    }

    ul {
        list-style: none;
    }


    @media screen and (min-device-width:1366px){
        .list {
            width: 890px;
            padding: 0 86px;
        }

        .items {
            justify-content: space-between;
        }

        h2 {
            padding: 0;
        }
    }
</style>