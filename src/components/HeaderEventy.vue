<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="img/logo.png" width="50%" alt="logo"></a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#slider">Cerita Sukses</a> -->
                            
                            <router-link to="/cerita-sukses" class="nav-link">Cerita Sukses</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Kontak Kami</a>
                        </li>
                    </ul>
                    <a href="#0" class="btn-1">Request  Demo</a>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
  name: "HeaderEventy",
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.photo-item {
  width: 80px;
  height: 80px;
}

.nav-link.router-link {
   background-color: indianred;
   cursor: pointer;
 }

</style>