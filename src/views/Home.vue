<template>
  <!-- Vista principal de la pagina -->
  <div class="container">
    <h1 class="text-center mt-5">Lista de Juegos Disponibles</h1>
    <div class="row mt-5">
      <div
        class="col-12 col-sd-12 col-md-6 col-lg-4 col-xl-4 my-3"
        v-for="(juego, index) in dataJuegos"
        :key="index"
      >
        <!-- Cards Juegos -->
        <div class="card">
          <img
            :src="juego.background_image"
            class="card-img-top"
            :alt="juego.name"
          />
          <div class="card-body">
            <h5 class="card-title" v-text="juego.name"></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{ juego.rating }}</li>
            <li class="list-group-item">Released: {{ juego.released }}</li>
            <li class="list-group-item">
              Updated:
              {{ Intl.DateTimeFormat("CLP").format(new Date(juego.updated)) }}
            </li>
          </ul>
          <div class="card-body text-center">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              :data-bs-target="'#modal-' + index"
              :data-cy="'opinando' + index"
            >
              Opinar
            </button>
          </div>
        </div>
        <!-- modal opinion-->
        <div
          class="modal fade"
          :id="'modal-' + index"
          tabindex="-1"
          :aria-labelledby="'exampleModalLabel' + index"
          aria-hidden="true"
          ref="modalOpinion"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" :id="'exampleModalLabel' + index">
                    Escribe tu opinión para: {{ juego.name }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre:</label>
                    <input
                      type="text"
                      class="form-control"
                      :id="'nombre' + index"
                      placeholder="Escribe tu nombre aquí..."
                      v-model="nombre"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="opiniones" class="form-label">Opiniones</label>
                    <textarea
                      class="form-control"
                      :id="'opiniones' + index"
                      rows="3"
                      v-model="opinion"
                      placeholder="Tu opinion debe ir aquí..."
                    ></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    @click="agregarOpinion(juego, index)"
                    :data-cy="'guardarOpinion' + index"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      nombre: " ",
      opinion: " ",
    };
  },
  computed: {
    ...mapGetters(["dataJuegos"]),
  },
  methods: {
    agregarOpinion(juego) {
      if (this.nombre && this.opinion != " ") {
        let opinionUsuario = {
          nombre: this.nombre,
          opinion: this.opinion,
          juego: juego,
          id: Math.floor(Math.random() * 100 + 1),
        };
        this.$store.dispatch("guardarOpinion", opinionUsuario);
        alert("Opinion agregada con exito!");
        this.nombre = "";
        this.opinion = "";
      } else {
        alert("Debes completar todos los campos antes de enviar tu opinión");
      }
    },
  },
};
</script>

<style scoped>
.card-img-top {
  min-height: 180px;
  max-height: 180px;
}
</style>
