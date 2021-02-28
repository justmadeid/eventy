<template>
<section class="testimonials mb-5">
            <div class="container text-center">
                <div class="heading">
                    <h2>Testimonials</h2>
                </div>
                <div class="line"></div>
                <VueSlickCarousel v-bind="settings">
                    <!-- Box-1 -->
                    <div>
                        <div class="box">
                            <img src="image/logo/manulife_logo@2x.png" alt="" class="m-auto" style="width=80%;">
                            <h3>Pt..</h3>
                            <!-- <span>Graphic Designer</span> -->
                            <p>"Setelah menggunakan apps Eventy pada Event AAJI 2018 maka data registrasi cocok dengan data keikutsertaan peserta (mencapai 100%)."</p>
                        </div>
                    </div>
                    <div>
                        <div class="box">
                            <img src="image/logo/img_danamon_logo@2x.png" alt="" class="m-auto" style="width=80%;">
                            <h3>Pt...</h3>
                            <!-- <span>Graphic Designer</span> -->
                            <p>"Setelah menggunakan apps Eventy pada Event AAJI 2018 maka data registrasi cocok dengan data keikutsertaan peserta (mencapai 100%)."</p>
                        </div>
                    </div>
                    <div>
                        <div class="box">
                            <img src="image/logo/img_tiket_com@2x.png" alt="" class="m-auto" style="width=80%;">
                            <h3>Pt...</h3>
                            <!-- <span>Graphic Designer</span> -->
                            <p>"Setelah menggunakan apps Eventy pada Event AAJI 2018 maka data registrasi cocok dengan data keikutsertaan peserta (mencapai 100%)."</p>
                        </div>
                    </div>
                    <div>
                        <div class="box">
                            <img src="image/logo/img_pertamina_logo@2x.png" alt="" class="m-auto" style="width=80%;">
                            <h3>Pt...</h3>
                            <!-- <span>Graphic Designer</span> -->
                            <p>"Setelah menggunakan apps Eventy pada Event AAJI 2018 maka data registrasi cocok dengan data keikutsertaan peserta (mencapai 100%)."</p>
                        </div>
                    </div>
                </VueSlickCarousel>
            </div>
        </section>
</template>

<script>
// import carousel from "vue-owl-carousel";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "PartnerShayna",
    components: { VueSlickCarousel },
	data: () => ({
		settings: {
            "dots": true,
            "infinite": false,
            "speed": 500,
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "initialSlide": 0,
            "responsive": [
                {
                "breakpoint": 1024,
                "settings": {
                    "slidesToShow": 2,
                    "slidesToScroll": 2,
                    "infinite": true,
                    "dots": true
                }
                },
                {
                "breakpoint": 600,
                "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "initialSlide": 1
                }
                },
                {
                "breakpoint": 480,
                "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                }
                }
            ]
			}
		}),
}
</script>