<template>
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-4">
                    <h2 class="text-dark-blue font-weight-bold section-title" tabindex="0">Eventy In Action</h2>
                </div>
            </div>
            <div class="row justify-content-center overflow-auto" style="max-height: 700px;">
                <div class="col-xl-11 col-lg-12">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 text-center wrap-box">
                            <iframe class="box-portfolio" src="https://www.youtube.com/embed/_er4R6THHUY?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                            <h5 class="text-dark-blue">Geotourism Festival 15 - 16 Juli 2020</h5>
                        </div>
                        <div class="col-lg-4 text-center wrap-box">
                            <iframe class="box-portfolio" src="https://www.youtube.com/embed/YCaoBvhuYlU?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                            <h5 class="text-dark-blue">Konser Panggih Bintang Katresnan 25 Juli 2020</h5>
                        </div>
                        <div class="col-lg-4 text-center wrap-box">
                            <iframe class="box-portfolio" src="https://www.youtube.com/embed/0ESv6XXwt0c?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                            <h5 class="text-dark-blue">Festival Bali Era Baru 18 Agustus 2020</h5>
                        </div>
                        <div class="col-lg-4 text-center wrap-box">
                            <iframe class="box-portfolio" src="https://www.youtube.com/embed/i4SshpWEgtk?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                            <h5 class="text-dark-blue">Mandiri Autofiesta 15 - 21 Agustus 2020</h5>
                        </div>
                        <div class="col-lg-4 text-center wrap-box">
                            <iframe class="box-portfolio" src="https://www.youtube.com/embed/4ZUc-uQwM9k?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                            <h5 class="text-dark-blue">Festival Ekonomi Syariah Kawasan Timur Indonesia Tahun 2020</h5>
                        </div>
                        <div class="col-lg-4 text-center wrap-box">
                            <iframe class="box-portfolio" src="https://www.youtube.com/embed/Miyy4nqGs6A?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                            <h5 class="text-dark-blue"> CTI IT Infrastructure Summit 2020</h5>
                        </div>
                        <div class="col-lg-4 text-center wrap-box">
                            <iframe class="box-portfolio" src="https://www.youtube.com/embed/l-3Tib9qOgQ?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                            <h5 class="text-dark-blue"> Sharp Virtual Exhibition</h5>
                        </div>
                        <div class="col-lg-4 text-center wrap-box">
                            <iframe class="box-portfolio" src="https://www.youtube.com/embed/T7a9sGdGJRQ?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
                            <h5 class="text-dark-blue"> BMBI Fest</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "EventyAction"
};
</script>

<style scoped>
.wrap-box {
    margin-bottom: 15px;
}
.box-portfolio {
    border-radius: 10px;
    width: 100%;
    height: 280px;
}

@media (max-width: 575.98px) {
    .box-portfolio {
        height: 220px;
    }
}
</style>