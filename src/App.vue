<template>
  <div id="app" class="app">
    <div class="header">
      <div class="container">
        <div class="btn-menu">
          <label for="btn-menu">☰</label>
        </div>
        <img class="logo" src="http://drive.google.com/uc?export=view&id=10esmGfVLdrKg-d_xsGhXBzy8gJpYleUX">
        <button class="boton-nav-salir" v-on:click="loadLogIn">Salir</button>
      </div>
    </div>



    <div class="main-component">
      <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp">
      </router-view>
    </div>


    <div class="footer">
      <h2>Derechos Reservados 2022 - Ciclo 3 Equipo 4</h2>
    </div>

  </div>

  <input type="checkbox" id="btn-menu">
  <div class="container-menu">
    <div class="cont-menu">
      <nav>
        <a v-on:click="registrarUsuarios">Registrar Usuarios</a>
        <a v-on:click="consultarPacientes">Consultar Pacientes</a>
        <a v-on:click="consultarUnPaciente">Consultar un Paciente</a>
        <a v-on:click="editarInfoPaciente">Editar Info Paciente</a>
        <a v-on:click="asignarMedicoPaciente">Asignar Medico a Paciente</a>
      </nav>
      <label for="btn-menu">✖️</label>
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

    editarInfoPaciente: function () {
      this.$router.push({ name: "editarInfoPaciente" });
    },

    asignarMedicoPaciente: function () {
      this.$router.push({ name: "asignarMedicoPaciente" });
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
  padding: 0 0 0 0;
  box-sizing: border-box;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 15vh;
  background-color: #333333;
  color: #E5E7E9;
  display: flex;
}

.boton-nav-salir {
  color: #E5E7E9;
  background: #DE3438;
  border: 1px solid #E5E7E9;
  width: 150px;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 35px;
  float: right;
  
}

.header nav button:hover {
  color: white;
  border: 3px solid #E5E7E9;
}

.main-component {
  width: 100%;
  height: 67vh;

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
  height: 15vh;
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

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

.container .btn-menu {
  float: left;
  line-height: 100px;
}

.container .btn-menu label {
  color: #fff;
  font-size: 30px;
  cursor: pointer;
}

.container .btn-menu a {
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.logo h1 {
  color: #fff;
  font-weight: 400;
  font-size: 22px;
  margin-left: 10px;
}

.container .menu {
  float: right;
  line-height: 100px;
}

.container .menu a {
  display: inline-block;
  padding: 15px;
  line-height: normal;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  font-size: 15px;
  margin-right: 5px;
}

.container .menu a:hover {
  border-bottom: 2px solid #c7c7c7;
  padding-bottom: 5px;
}

#btn-menu {
  display: none;
}

.container-menu {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transition: all 500ms ease;
  opacity: 0;
  visibility: hidden;
}

#btn-menu:checked~.container-menu {
  opacity: 1;
  visibility: visible;
}

.cont-menu {
  width: 100%;
  max-width: 250px;
  background: #1c1c1c;
  height: 100vh;
  position: relative;
  transition: all 500ms ease;
  transform: translateX(-100%);
}

#btn-menu:checked~.container-menu .cont-menu {
  transform: translateX(0%);
}

.cont-menu nav {
  transform: translateY(15%);
}

.cont-menu nav a {
  display: block;
  text-decoration: none;
  padding: 20px;
  color: #c7c7c7;
  border-left: 5px solid transparent;
  transition: all 400ms ease;
  cursor: pointer;
}

.cont-menu nav a:hover {
  border-left: 5px solid #c7c7c7;
  background: #1f1f1f;
}

.cont-menu label {
  position: absolute;
  right: 5px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
}
</style>
