<template>
  <div id="app" class="app">

    <div class="header">
      <img class="logo" src="http://drive.google.com/uc?export=view&id=10esmGfVLdrKg-d_xsGhXBzy8gJpYleUX">
      <nav>
        <button class="boton-nav-funciones" v-on:click="registrarUsuarios">Registrar Usuarios</button>
        <button class="boton-nav-funciones" v-on:click="consultarPacientes">Consultar Pacientes</button>
        <button class="boton-nav-funciones" v-on:click="consultarUnPaciente">Consultar un Paciente</button>
        <button class="boton-nav-salir" v-on:click="loadLogIn">Salir</button>
      </nav>
    </div>


    <div class="main-component">
      <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp">
      </router-view>
    </div>


    <div class="footer">
      <h2>MisiónTIC 2022 - Equipo 4 Ciclo 3</h2>
    </div>

  </div>
</template>




<script>
export default {
  name: 'App',

  data: function () {
    return {
      is_auth: false
    }
  },

  components: {
  },

  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "home" });
    },

    loadLogIn: function () {
      this.$router.push({ name: "logIn" })
    },

    loadSignUp: function () {
      this.$router.push({ name: "signUp" })
    },

    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },

    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },

    registrarUsuarios: function () {
      this.$router.push({ name: "registrarUsuario" });
    },

    consultarUnPaciente: function () {
      this.$router.push({ name: "consultarUnPaciente" });
    },

    consultarPacientes: function () {
      this.$router.push({ name: "consultarPacientes" });
    },

    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
  },

  created: function () {
    this.verifyAuth()
  }

}
</script>







<style>
body {
  margin: 0 0 0 0;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  background-color: #333333;
  color: #E5E7E9;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header nav {
  height: 100%;
  width: 45%;
  margin: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.boton-nav-funciones {
  color: #E5E7E9;
  background: #2B63A0;
  border: 1px solid #E5E7E9;

  border-radius: 5px;
  padding: 10px 20px;
}

.boton-nav-salir {
  color: #E5E7E9;
  background: #DE3438;
  border: 1px solid #E5E7E9;

  border-radius: 5px;
  padding: 10px 20px;
}

.header nav button:hover {
  color: white;
  border: 3px solid #E5E7E9;
}


.main-component {
  height: 70vh;


}

.app {
  background: url(https://img.freepik.com/fotos-premium/primer-plano-medico-delante-fondo-brillante_53419-4416.jpg?w=1060);
  background-size: cover;
  background-position: right;
}


.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  background-color: #333333;
  color: #E5E7E9;

}

.footer h2 {
  width: 100%;
  height: 100%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 15%;
  margin: 20px;
}
</style>
