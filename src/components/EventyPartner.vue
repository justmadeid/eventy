<template>
<section class="enaction" id="enaction">
            <div class="container text-center">
                <div class="heading">
                    <h2>Eventy in Action!</h2>
                </div>
                <div class="line"></div>
                <div class="row">
                    <!-- Box-1 -->
                    <div class="col-md-3">
                        <div class="box">
                            <img src="image/logo/img_tiket_com@2x.png" alt="Logo Tiket.com">
                        </div>
                    </div>
                    <!-- Box-2 -->
                    <div class="col-md-3">
                        <div class="box">
                            <img src="image/logo/img_tiket_com@2x.png" alt="Logo Tiket.com">
                        </div>
                    </div>
                    <!-- Box-3 -->
                    <div class="col-md-3">
                        <div class="box">
                            <img src="image/logo/img_tiket_com@2x.png" alt="Logo Tiket.com">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box">
                            <img src="image/logo/img_tiket_com@2x.png" alt="Logo Tiket.com">
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="box">
                            <img src="image/logo/img_tiket_com@2x.png" alt="Logo Tiket.com">
                        </div>
                    </div>

                </div>

            </div>
            <div>
  <b-button v-b-toggle.collapse-3 class="m-1">Toggle Collapse</b-button>
  <b-collapse visible id="collapse-3">
    <b-card>I should start open!</b-card>
  </b-collapse>
</div>
        </section>
</template>

<script>
export default {
  name: "EventyPartner.vue"
};
</script>

<style scope>
.client{
    background: #FFFFFF;
    padding : 10px;
    box-shadow: 5px 10px 40px rgba(29, 97, 98, 0.08);
    border-radius: 13px;
    margin: 10px;
}

.list-client {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    margin-top: 3rem;
}
.list-client .client {
    flex-basis: 25%;
    display: flex;
    margin-bottom: 40px;
}
.list-client .client img {
    width: 100%;
}
.list-client .client .client-wrap {
    text-align: center;
    margin: auto 15px;
    width: 80%;
}
</style>