<template>
    <div class="consultar_paciente">
        <div class="contenido_consultar_paciente">
            <h3>Asignar Medico a Paciente</h3>
            <form class="formulario_consultar_paciente" v-on:submit.prevent="consultarUnPaciente">
                <input id="campoId" v-model="registro.id" type="text" placeholder="ID de Paciente">
                <button type="submit">Consultar</button>
            </form><br><br>
            <label>Nombre Paciente: </label><input type="text" v-model="registro.nombre" disabled><br><br>
            <label>Asignar al Medico: </label>
            <select class="selector_medico" v-model="medicoSelecionado">
                <option value=""></option>
                <option v-for="item in lista" v-bind:value="item.id">{{item.nombre+" "+item.apellido}}</option>
            </select><br><br>

            <input id="botonAsignar" class="boton-editar" type="button" value="Asignar" v-on:click="asignarPaciente">
            <span>Selected: {{ medicoSelecionado }}</span>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'editarInfoPaciente',
    data: function () {
        return {
            registro: {
                id: "",
                nombre: "",
                cedula: this.id,
            },

            lista: [{
                cedula: "",
                user_name: "",
                nombre: "",
                apellido: "",
                direccion: "",
                telefono: "",
                correo: "",
                fecha_registro: "",
                activo: "",
                id_rol: "",
            }],

            medicoSelecionado: {},
        }
    },

    methods: {
        asignarPaciente: function () {
            alert("Item: " + this.medicoSelecionado)
            /* const url = "http://127.0.0.1:8000/user/" + this.registro.id + "/";
            axios.put(url, this.registro)
                .then((result) => {
                    alert("Edicion exitosa: " + result.status);
                    this.resetForm();
                })
                .catch((error) => {
                    alert("ERROR: Fallo la actualiacion del registro: " + error);
                });*/
        },

        consultarUnPaciente: function () {
            const url = "http://127.0.0.1:8000/paciente/" + this.registro.id + "/";
            axios.get(url)
                .then((result) => {
                    this.registro.nombre = result.data.nombre + " " + result.data.apellido;
                    this.registro.cedula = result.data.cedula;
                    document.getElementById("campoId").disabled = true;
                    this.consultarMedicos();
                })
                .catch((error) => {
                    alert("ERROR: Paciente no registrado " + error);
                    this.resetForm();
                });
        },

        consultarMedicos: function () {
            const url = "http://127.0.0.1:8000/medicos/";
            axios.get(url)
                .then((result) => {
                    this.lista = result.data;
                    document.getElementById("campoId").disabled = true;
                })
                .catch((error) => {
                    alert("ERROR: Paciente no registrado " + error);
                    this.resetForm();
                });
        },

        resetForm: function () {
            this.registro.id = "";
            this.registro.id_rol = "";
            this.registro.nombre = "";
            this.registro.apellido = "";
            this.registro.cedula = "";
            this.registro.telefono = "";
            this.registro.direccion = "";
            this.registro.correo = "";
            this.registro.create_date = "";
            this.registro.user_name = "";
            this.registro.password = "";
            document.getElementById("campoId").disabled = false;
        },


    }
}
</script>


<style>
body {
    margin: 0 0 0 0;
}

.consultar_paciente {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contenido_consultar_paciente {
    border: 3px solid #283747;
    border-radius: 20px;
    width: 40%;
    height: auto;
    padding: 10px;
    background: white;
}

.formulario_consultar_paciente {
    width: 100%;
    display: flex;
}

.contenido_consultar_paciente label {
    display: inline-block;
    width: 38%;
}

.contenido_consultar_paciente button {
    width: 50%;
    height: 30px;
    color: #E5E7E9;
    background: #2B63A0;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 0px 0px;
}

.contenido_consultar_paciente button:hover {
    color: white;
    border: 3px solid #E5E7E9;
}

.contenido_consultar_paciente input[type=button] {
    position: relative;
    margin: 10px;
    width: 95%;
    height: 30px;
    background: #2B63A0;
    color: #E5E7E9;
    border: 1px solid white;

}

.contenido_consultar_paciente input[type=button]:hover {
    border: 3px solid #E5E7E9;
    color: white;
}

.contenido_consultar_paciente input[type=text] {
    width: 60%;
}

.selector_medico {
    width: 60%;
}
</style>