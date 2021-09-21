<template>
  <div class="container">
    <div v-if="editarJuego">
      <h2 class="text-center mt-5">
        Editando la opinión de: {{ editarJuego.juego.name }}
      </h2>
      <form>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre:</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="editarJuego.nombre"
          />
        </div>
        <div class="mb-3">
          <label for="opiniones" class="form-label">Opiniones</label>
          <textarea
            class="form-control"
            id="opiniones"
            rows="3"
            v-model="editarJuego.opinion"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary" @click="$router.go(-1)">
          Regresar
        </button>
        <button
          type="button"
          class="btn btn-info mx-4"
          @click.prevent="guardar"
        >
          Guardar
        </button>
      </form>
    </div>
    <div v-else>
      <div class="alert alert-danger mt-5 text-center" role="alert">
        La opinion que deseas editar no exste.
        <button
          type="button"
          class="btn btn-primary"
          @click="$router.push({ name: 'Administracion' })"
        >
          Regresar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editar",
  props: ["id"],
  data() {
    return {
      editarJuego: null,
    };
  },
  created() {
    let resultado = this.$store.getters.arrayOpiniones.find(
      (result) => result.id === this.id
    );

    if (resultado !== undefined) {
      this.editarJuego = resultado;
    } else {
      this.editarJuego = null;
    }
  },
  methods: {
    guardar() {
      let juegoEditado = {
        nombre: this.editarJuego.nombre,
        opinion: this.editarJuego.opinion,
        juego: this.editarJuego.juego,
        id: this.editarJuego.id,
      };
      this.$router.push({ name: "Administracion" });
      this.$store.dispatch("guardarEdicion", juegoEditado);
    },
  },
};
</script>
