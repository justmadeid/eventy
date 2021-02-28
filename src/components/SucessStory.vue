<template>
  <!-- Women Banner Section Begin -->
  <section class="women-banner spad" style="margin-top:80px;margin-bottom:80px;">
    <div class="container justify-item-center">
      <div class="row">
        <div class="col-lg-12 mb-2 mt-3" v-if="blogs.length > 0">
          <div class="card-deck text-left">

            <div class="col-md-4 mb-3" v-for="itemBlog in blogs" v-bind:key="itemBlog.id">
            <div class="card" style="box-shadow: 8px 15px 40px rgba(0, 0, 0, 0.1); border-radius: 13px; border:none;min-height:440px;">
              <!-- <div class="card" v-for="itemProduct in products" v-bind:key="itemProduct.id"> -->
              <!-- <img class="card-img-top p-3" style="border-radius: 30px;" src="img/banner-1.jpg" alt="Card image cap"> -->
              <img class="card-img-top p-3 img-fluid rounded" style="border-radius:30px !important" v-bind:src="itemBlog.photo" alt="Photo" />
              <div class="card-body">
                <h5 class="card-title" style="font-style: normal;font-weight: bold;font-size: 25px;line-height: 40px;color: #1D4C62;">{{ itemBlog.title.substr(0, 25) | stripHtml }}...</h5>
                <p v-html="itemBlog.content.substr(0, 100)">...</p>
                <p class="card-text"><small class="text-muted" style="font-style: normal;font-weight: bold;font-size: 16px;line-height: 26px;color: #06D6A0;"><router-link v-bind:to="'/detail/'+itemBlog.slug" style="color: #06D6A0;">Baca Selengkapnya</router-link></small></p>
              </div>
            </div>
          </div>

          </div>
        </div>

        <div class="col-lg-12" v-else>
          <p>Blog terbaru belum tersedia untuk saat ini.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Women Banner Section End -->
</template>

<script>
import axios from "axios";

export default {
  name: "SucessStory",
  data() {
    return {
      blogs: [],
      keranjangUser: []
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/blogs")
      .then(res => (this.blogs = res.data.data.data))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.product-item {
  margin-right: 25px;
}
.pi-pic img {
  height: 450px;
}
</style>