<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-nav id="carro" class="submenu">
        <b-nav-item href="#"> <b-icon icon="cart3"></b-icon></b-nav-item>
                                <div id="carrito">

                                <table id="lista-carrito" class="u-full-width">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>

                                <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                            </div>

      </b-navbar-nav>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.submenu {
    position: relative;
}

.submenu #carrito{
    display: none;
}
.submenu:hover #carrito{
    display: block;
    position: absolute;
    right:0;

    top:100%;
    z-index: 1;
    background-color: white;
    padding: 20px;
    min-height: 400px;
    min-width: 300px;
}

.submenu {
    margin-left: 100px;
}


    @media screen and (min-device-width:900px){

        .submenu {
    margin-left: 1000px;
}
    }

</style>