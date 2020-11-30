<template>

<!--Lado izquierdo del contenedor-->

<div class="row row-1">

  <div class="col-sm-8">
      <div class="container-tittle"><img class="container-tittle-img" src="../assets/Componente 1 – 1.png" alt="" width="20px" height="17.01px"><p class="container-tittle-text">Carrito de compras</p></div>

      
<div class="container-col">
          <div class="container-col-img"><img class="container-col-imgn" src="../assets/Estrategia de Precios-1@2x.png" alt=""></div>
          <div class="container-col-content">

              <div class= "container-col-content-1">
                <p class="container-col-content-1-tittle">Gestión de envases, empaques y embajales</p> 
                <p class="container-col-content-1-price">S/ 269.00</p>
              </div>
                
               <div><p class="container-col-dto">Dto. 25%</p></div> 
               <div><p class="container-col-delete">Eliminar</p></div> 
          </div>
         
</div>


<div class="container-col">
          <div class="container-col-img"><img class="container-col-imgn" src="../assets/Estrategia de Precios-1@2x.png" alt=""></div>
          <div class="container-col-content">

              <div class= "container-col-content-1">
                <p class="container-col-content-1-tittle">Gestión de envases, empaques y embajales</p> 
                <p class="container-col-content-1-price">S/ 269.00</p>
              </div>
                
               <div><p class="container-col-dto">Dto. 25%</p></div> 
               <div><p class="container-col-delete">Eliminar</p></div> 
          </div>
         
</div>


<div class="container-col">
          <div class="container-col-img"><img class="container-col-imgn" src="../assets/Estrategia de Precios-1@2x.png" alt=""></div>
          <div class="container-col-content">

              <div class= "container-col-content-1">
                <p class="container-col-content-1-tittle">Gestión de envases, empaques y embajales</p> 
                <p class="container-col-content-1-price">S/ 269.00</p>
              </div>
                
               <div><p class="container-col-dto">Dto. 25%</p></div> 
               <div><p class="container-col-delete">Eliminar</p></div> 
          </div>
         
</div>

     
</div>



<!--Lado derecho del contenedor-->

    <div class="col-sm-4" id="col-4">
        <div class="col-sm-4-contain">
            <div class="compras-total" >
                <div>Subtotal</div>
                <div>S/ 600</div>
            </div>

            <div>
                <input class= "compras-input" type="text" placeholder="Agrega un código de descuento">
                <button class="compras-btn">Continuar</button>
            </div>
 
        </div>

    </div>

</div>
  
         
</template>

<script>
export default {

}
</script>

<style>

/* Estilo del contenedor */

.row-1 {
    background-color: #F8F8FA;
    width: 100vw;
    height: 660px;
}

/* Estilo título Carrito de compras */


.container-tittle-img {
    margin: 25px 5px 10px 0px;
}

.container-tittle-text {
    margin: 20px 0px 20px 10px;
    font-size: 20px;
    font-weight:bold;
    color: #222222;
}


/* Estilo lado izquierdo del contenedor */

.container-col {
    width: 85%;
    height: 100px;
}

.container-col-content-1 {
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 0px 15px;
}

.container-col-imgn {
    border-radius: 5px;
    width: 133px;
    height: 100px;
}

.container-tittle {
    /*falta font family*/
    font-size: 20px;
    font-weight: bold;
    color: #222222;
    text-align: left;
    margin: 10px 0px 0px 80px;
    display: flex;

}

.container-col-content-1-tittle {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /*roboto*/
    font-size: 16px;
    font-weight: bold;
    color: #222222;
}

.container-col-content-1-price {
    /*falta font family*/
    font-size: 16px;
    font-weight: bold;
    color: #222222;
}

.container-col-dto {
    margin: 0px 0px 0px 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #5640FF;
}

.container-col-delete {
    margin: 0px 0px 0px 15px;
    font-size: 12px;
    font-weight: bold;
    color: #5640FF;
    text-decoration: underline;
}

/* Estilo lado derecho del contenedor */

.col-sm-container {
    border: 1px solid red;
    padding: 20px 20px 0px 20px;
    width: 433px;
    height: 283px;
    display: block;
}



.container-col-content {
    margin: 0px 0px 2px 0px;
    width: 100%;
}


.container-col {
    text-align: left;
    margin: 10px 0px 0px 80px;
    display: flex;
}

.compras-total {
    display: flex;
    justify-content: space-around;
    /*falta font family*/
    font-size: 20px;
    font-weight: bold;
    color: #5640FF;
    
}

.compras-input{
  width: 333px;
  height: 50px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /*roboto*/
  font-size: 12px;
  padding: 0px 0px 0px 15px;
  margin: 50px;
}

.compras-btn{
  width: 333px;
  height: 50px;
  background-color: #5640FF;
  border-radius: 10px;
  border: 1px solid #5640FF;
  color: white;
  /*Falta el font family */
  font-size: 14px;
  font-weight: bold;
  margin: 20px;
}

.col-sm-4-contain {
    border: none;
    background-color: white;
    width: 433px;
    height: 283px;
    margin: 200px 20px 80px 20px;
}

/*Versión celular*/

@media screen and (max-width: 600px) {
    .row-1 {
    background-color: #F8F8FA;
    width: 100vw;
    height: 500px;
    }
    
}


</style>