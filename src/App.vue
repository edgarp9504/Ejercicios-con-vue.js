<template>
  <div id="app">
    <b-navbar type="dark" variant="info">

          <b-navbar-brand href="#"></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'About'}">About</b-nav-item>
            <b-nav-item :to="{name: 'grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name: 'card'}">Cards</b-nav-item>
            <b-nav-item :to="{name: 'Fotos'}">Fotografia</b-nav-item>
            <b-nav-item :to="{name: 'form'}">Form</b-nav-item>
          </b-navbar-nav>

          </b-collapse>


    </b-navbar>

    <b-container>
     <router-view/>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
