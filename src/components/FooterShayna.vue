<template>
  <!-- Footer Section Begin -->
    <footer
        class="footer-section pt-5 text-left" style="background: linear-gradient(90deg, #4ABFF6 0%, #9E6FD9 100%);">
        <div class="container" style="color:#fff;">
            <!-- <div class="row">
                <div class="col-lg-12">
                    <img tabindex="0" v-lazy="getImageUrl('icon/ic_eventy_logo_color.png')" alt="Logo Eventy" class="footer-logo">
                </div>
            </div> -->
            <div class="row mt-3">
                <div class="col-lg-5">
                    <h6 class="font-weight-bold text-dark-blue">Kantor Jakarta</h6>
                    <p>Menara Rajawali, Level 7-1 Jl. Dr.Ide Anak Agung Gde Agung Kawasan Mega Kuningan Jakarta Selatan 12950 <br> Phone : <a href="tel:02129608235" class="telephone">(021) 29608235</a> | Fax : <a href="javascript:void(0);">(021) 29608234</a> <br>
                    </p>
                </div>
                <div class="col-lg-3">
                    <h6 class="font-weight-bold text-dark-blue">Kantor Pusat</h6>
                    <p>Jalan Bina Remaja No.6 Semarang <br> Senin - Jumat : 09.00 - 17.00 WIB</p>
                </div>
                <div class="col-lg-4 consult text-center">
                    <a href="tel:081227645880">
                        <!-- <img v-lazy="getImageUrl('image/img_konsultasi_esta.png')" alt="Image Consult"> -->
                    </a>
                </div>
            </div>
            <div class="row copyright">
                <div class="col-12 d-flex py-3">
                    <p class="cpright">&copy; {{ this_year }} Eventy.id</p>
                    <ul class="d-flex ml-auto d-flex policy">
                        <li>
                            <a href="#">Term of Service</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  <!-- Footer Section End -->
</template>

<script>
export default {
    name: 'FooterShayna'
}
</script>

<style scoped>
footer {
    background-color: #FBFBFB;
}
.f-white {
    background-color: #fff;
}
footer .copyright .cpright {
    font-size: 14px;
    color: #686D70;
    margin: auto 0;
    font-weight: 700;
}
footer .copyright ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
footer .copyright ul li {
    margin-left: 30px;
}
footer .copyright ul li a {
    color: #686D70;
    font-size: 14px;
    font-weight: 700;
}

@media (min-width: 992px) {
    .consult {
        text-align: right !important;
    }
    .bg-white-lg {
        background: #fff;
    }
}
@media (max-width: 991.98px) {
    footer .copyright .cpright {
        font-size: 12px;
    }
    .copyright a {
        font-size: 12px !important;
    }
    .footer-logo {
        display: none;
    }
}
@media (max-width: 576px) {
    footer {
        text-align: center;
    }
}
</style>
