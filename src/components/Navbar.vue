<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="fas fa-headset"></i> Games Opinion</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" :to="{ name: 'Home' }">
            <i class="fas fa-home"></i>
            Home</router-link
          >
          <router-link
            class="nav-link"
            data-cy="opinionesClick"
            :to="{ name: 'Opiniones' }"
            ><i class="fas fa-comments"></i> Opiniones</router-link
          >
          <router-link
            class="nav-link"
            data-cy="administraClick"
            :to="{ name: 'Administracion' }"
            ><i class="fas fa-users-cog"></i> Administración</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
