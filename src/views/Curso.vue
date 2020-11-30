<template>
    <div class="curso">
        <Header bgdark="bgdark" />
        <Banner :bgcurso="curso"/>
        <div class="section">
            <div class="contain-desktop">
                <div class="navegador">
                    <a href="/">Pachaqtec</a> <b-icon icon="chevron-right"></b-icon> <span>{{curso.nombre}}</span>
                </div>

                <h2>¿En qué consiste el programa de {{curso.nombre}}?</h2>
                <p>{{curso.descripcion}}</p>

                <h2>Beneficios</h2>

                <div class="beneficios">
                    <div class="bene">
                        <img class="bene-img" src="@/assets/bene1.png" alt=""> 
                        <p>Aprende de Expertos</p>  
                    </div>

                    <div class="bene">
                        <img class="bene-img" src="@/assets/bene2.png" alt="">
                        <p>Clases Virtuales</p>
                    </div>

                    <div class="bene">
                        <img class="bene-img" src="@/assets/bene3.png" alt="">
                        <p>Empleabilidad</p>
                    </div>
                </div>

                <h3>Idat otorga:</h3>
                <p>Tu certificado indicará que has cursado el programa de especialización en {{curso.nombre}} y estará a nombre de Idat.</p>

                <h2>Horarios</h2>

                <div class="horario">
                    <div class="horario-col1">
                        <h4>Inicio de clases: <br> 7 de diciembre</h4>
                    </div>
                    <div class="horario-col2">
                        <div class="horario-header">
                            <h4>Frecuencia</h4>
                        </div>
                        <div class="horario-body">
                            <h5>Lunes, martes y miércoles</h5>
                            <h5>Jueves (asesoría)</h5>
                            <h5>Sábados (Hackaton)</h5>
                        </div>
                    </div>
                    <div class="horario-col2">
                        <div class="horario-header">
                            <h4>Horario</h4>
                        </div>
                        <div class="horario-body">
                            <h5>7:00 p.m a 9:00 p.m</h5>
                            <h5>7:00 p.m a 9:00 p.m</h5>
                            <h5>8:00 a.m a 2:00 p.m</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contain-mobile">
                <div class="navegador">
                    <a href="/">Pachaqtec</a> <b-icon icon="chevron-right"></b-icon> <span>{{curso.nombre}}</span>
                </div>

                <div class="accordion" role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">¿En qué consiste el programa de {{curso.nombre}}?</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                              <b-card-text>{{curso.descripcion}}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Beneficios</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <div class="beneficios">
                                        <div class="bene">
                                            <img class="bene-img" src="@/assets/bene1.png" alt=""> 
                                            <p>Aprende de Expertos</p>  
                                        </div>

                                        <div class="bene">
                                            <img class="bene-img" src="@/assets/bene2.png" alt="">
                                            <p>Clases Virtuales</p>
                                        </div>

                                        <div class="bene">
                                            <img class="bene-img" src="@/assets/bene3.png" alt="">
                                            <p>Empleabilidad</p>
                                        </div>
                                    </div>

                                    <h3>Idat otorga:</h3>
                                    <p>Tu certificado indicará que has cursado el programa de especialización en {{curso.nombre}} y estará a nombre de Idat.</p>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card id="formulario" no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle.accordion-3 variant="info">Horarios</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <div class="horario">
                                        <div class="horario-col1">
                                            <h4>Inicio de clases: <br> 7 de diciembre</h4>
                                        </div>
                                        <div class="horario-col2">
                                            <div class="horario-header">
                                                <h4>Frecuencia</h4>
                                            </div>
                                            <div class="horario-body">
                                                <h5>Lunes, martes y miércoles</h5>
                                                <h5>Jueves (asesoría)</h5>
                                                <h5>Sábados (Hackaton)</h5>
                                            </div>
                                        </div>
                                        <div class="horario-col2">
                                            <div class="horario-header">
                                                <h4>Horario</h4>
                                            </div>
                                            <div class="horario-body">
                                                <h5>7:00 p.m a 9:00 p.m</h5>
                                                <h5>7:00 p.m a 9:00 p.m</h5>
                                                <h5>8:00 a.m a 2:00 p.m</h5>
                                            </div>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </div>
            <FormPostula/>            
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Banner from "@/components/Banner.vue"
import FormPostula from "@/components/FormPostula.vue"
import Footer from "@/components/Footer.vue"
import { mapActions, mapState } from "vuex";

export default {
    name:'Curso',
    components: {
        Header,
        Banner,
        FormPostula,
        Footer
    },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getCursoAction']),
    },
    computed: {
        ...mapState(['curso'])
    },
    created(){
        this.getCursoAction(this.id);
    }
}
</script>

<style scoped>
    .curso {
        background: #F2F3F5;
        width: 100vw;
    }

    .contain-desktop {
        display: none;
    }

    .contain-mobile {
        width: 375px;
        margin: 0 auto;
        margin-bottom: 30px;
        padding: 0 10px;
    }

    .navegador {
        height: 60px;
        padding-left: 6px;
        display: flex;
        align-items: center;
    }

    .beneficios {
        display: flex;
        justify-content: space-around;
    }

    .bene {
        width: 90px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        font-size: 14px;
    }

    .bene-img {
        width: 40px;
        height: 40px;
    }

    h3 {
        margin-top: 15px;
        font-size: 16px;
        font-weight: bold;
    }

    h3 + p {
        font-size: 14px;
        margin-bottom: 0;
    }

    .horario {
        width: 313px;
        height: 220px;
        display: flex;
        justify-content: center;
    }

    .horario-col1 {
        width: 95px;
        height: 220px;
        color: #ffffff;
        background: #5640FF;
        display: flex;
        align-items: center;
        padding: 10px;
    }
     
    .horario-col2 {
        width: 109px;
        color: #000000;
        background: rgba(135, 206, 235, 0.3);
    }

    .horario-header {
        width: 100%;
        height: 40px;
        background: #000000;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .horario-body {
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding:0 10px;
        text-align: center;
    }

    h4 {
        font-size: 14px;
        font-weight: bold;
        line-height: 22px;
        text-align: center;
    }

    h5 {
        font-size: 14px;
        font-weight: normal;
    }


    @media screen and (min-device-width:1366px){
        .section {
            width: 1366px;
            margin: 0 auto;
            display: flex;
        }

        .contain-desktop {
            display: block;
            width: 890px;
            padding: 0 86px;
        }

        .navegador {
            height: 60px;
            padding-left: 6px;
            display: flex;
            align-items: center;
        }

        h2 {
            margin-top: 50px;
            margin-bottom: 20px;
        }

        h2 + p {
            text-align: justify;
            font-size: 16px;
        }

        .beneficios {
            display: flex;
            justify-content: space-around;
        }

        .bene {
            width: 90px;
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
            font-size: 14px;
        }

        .bene-img {
            width: 60px;
            height: 60px;
        }

        h3 {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
        }

        h3 + p {
            font-size: 16px;
            margin-bottom: 0;
        }

        .contain-mobile {
            display: none;
        }

        .horario {
            width: 720px;
            height: 180px;
            margin-bottom: 80px;
        }

        .horario-col1 {
            width: 180px;
            height: 180px;
            padding: 20px;
        }
        
        .horario-col2 {
            width: 270px;
        }

        .horario-body {
            height: 140px;
        }

        h4 {
            font-size: 18px;
            line-height: 30px;
        }
    }
</style>