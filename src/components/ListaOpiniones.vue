<template>
  <div class="container">
    <h2 class="text-center mt-5">Lista de Opiniones</h2>
    <div v-if="arrayOpiniones.length > 0" data-cy="opinionesVisible">
      <div class="accordion" id="accordionExample">
        <div
          class="accordion-item mt-4"
          v-for="(item, index) in arrayOpiniones"
          :key="index"
        >
          <h2 class="accordion-header" :id="'headingOne' + index">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapseOne' + index"
              aria-expanded="true"
              :aria-controls="'collapseOne' + index"
            >
              Opinión creada por:
              <span :data-cy="'nombre' + index">{{ item.nombre }}</span
              >. Para el juego: {{ item.juego.name }}
            </button>
          </h2>
          <div
            :id="'collapseOne' + index"
            class="accordion-collapse collapse show"
            :aria-labelledby="'headingOne' + index"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Opinión: </strong> {{ item.opinion }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="alert alert-danger mt-5"
      role="alert"
      v-else
      data-cy="noOpiniones"
    >
      No existen opiniones para mostrar.
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ListaOpiniones",
  computed: {
    ...mapGetters(["arrayOpiniones"]),
  },
};
</script>
