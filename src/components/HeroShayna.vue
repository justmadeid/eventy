<template>
        <!-- ======== Start Slider ======== -->
        <section class="slider d-flex align-items-center" id="slider">
            <div class="container">
                <div class="content">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-12" style="margin-top: 20%;">
                            <div class="text-align-center">
                              <div class="container text-center">
                                  <div class="video-icon">
                                      <div class="icon-abs">
                                          <a href="https://www.youtube.com/watch?v=S6lzo-OWoqI" class="icon pulse expand video-link">
                                              <i class="fa fa-play" aria-hidden="true"></i>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======== End Slider ======== -->

    <!-- Hero Section End -->
</template>

<script>


export default {
    name: "HeroShayna",
    components: {
        
    }
}
</script>

<style scoped>

@media (min-width: 992px) {
    .big-image-fixed {
        width: 120%;
        position: absolute;
        right: -110px;
        top: 4rem;
    }
    .section-one .float-content {
        margin-top: 5rem;
    }
    .section-one .event-success-title {
        margin-top: 10px;
    }
    .section-one .kongrat-etty {
        margin-top: 30px;
    }
}
@media (max-width: 1199.98px) and (min-width: 992px) {
    .section-one .background-section {
        height: 43rem;
    }
    .section-one .float-content {
        margin-top: 3rem;
    }
    .section-one .event-success-title {
        margin-top: .5rem;
    }
    .big-image-fixed {
        top: .5rem;
    }
}
@media (min-width: 1200px) {
    .section-one .float-content {
        margin-top: 0;
    }
    .live-event-streaming {
        margin-top: 4rem;
    }
}
@media (min-width: 1366px) and (max-width: 1439.98px) {
    .section-one .background-section {
        height: 40rem;
    }
}
@media (min-width: 1400px) {
    .big-image-fixed {
        right: -140px;
    }
}
@media (min-width: 1440px) {
    .big-image-fixed {
        right: -170px;
    }
}
@media (min-width: 1600px) {
    .big-image-fixed {
        right: -235px;
    }
}
@media (min-width: 1920px) {
    .section-one .float-content {
        margin-top: 7rem;
    }
    .big-image-fixed {
        right: -25rem;
        top: 2rem;
        width: 140%;
    }
}
@media (max-width: 991.98px) {
    .our-partner ul {
        margin-bottom: 4rem;
    }
}
@media (min-width: 576px) {
    .partner-mobile {
        display: none !important;
    }
}
@media (max-width: 575.98px) {
    .our-partner h5  {
        text-align: center;
    }
    .our-partner ul {
        justify-content: center;
    }
    .partner-desktop {
        display: none !important;
    }
    .partner-mobile {
        margin-top: 2rem;
    }
    .live-event-streaming {
        height: 220px;
    }
    .play-video-btn {
        width: 80%;
    }
}
</style>