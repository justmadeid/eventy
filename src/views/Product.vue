<template>
  <div class="product text-left">
    <HeaderEventy />
    <HeadStory />
    <div class="container mt-5 mb-5">
      <div class="nav-scroller py-1 mb-2">
      </div>

      <div class="container" style="border-radius:13px; padding:0;">
        <div class="col-md-12">
          <img class="product-big-img img-fluid" style="border-radius:13px;" v-bind:src="blogDetails.photo" alt />
        </div>
      </div>
    </div>

    <main role="main" class="container mb-5">
      
        <div class="col-md-12 blog-main">
          <div class="blog-post">
            <h2 class="blog-post-title">{{ blogDetails.title}}</h2>
            <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

             <p v-html="blogDetails.content"></p>
            
          </div><!-- /.blog-post -->

        </div><!-- /.blog-main -->

      <!-- /.row -->

    </main><!-- /.container -->

    <!-- <RelatedShayna /> -->

    <FooterShayna />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderEventy from "@/components/HeaderEventy.vue";
import FooterShayna from "@/components/FooterShayna.vue";
import HeadStory from "@/components/HeadStory.vue";
// import RelatedShayna from "@/components/RelatedShayna.vue";



import axios from "axios";

export default {
  name: "blog",
  components: {
    FooterShayna,
    HeaderEventy,
    HeadStory,
  },
  data() {
    return {
      gambar_default: "",
      blogDetails: [],
      keranjangUser: []
    };
  },
  methods: {
    changeImage(urlImage) {
      this.gambar_default = urlImage;
    },
    setDataPicture(data) {
      // replace object blogDetails dengan data dari API
      this.blogDetails = data;
      // replace value gambar default dengan data dari API (galleries)
      this.gambar_default = data.galleries[0].photo;
    }
  },
  mounted() {
    if (localStorage.getItem('keranjangUser')) {
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem('keranjangUser'));
      } catch(e) {
        localStorage.removeItem('keranjangUser');
      }
    }
    axios
      .get("http://127.0.0.1:8000/api/blogs", {
        params: {
          slug: this.$route.params.slug
        }
      })
      .then(res => this.setDataPicture(res.data.data))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.blog-thumbs .pt {
  margin-right: 14px;
}

.product-shop {
    padding-top: 80px;
    padding-bottom: 80px;
}



.checkmark:after {
    position: absolute;
    content: "";
}

/*---------------------
  Product Details
-----------------------*/

.product-shop.page-details {
    padding-bottom: 60px;
}

.product-pic-zoom {
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
}

.product-pic-zoom img {
    min-width: 100%;
    height: 650px;
}

.product-pic-zoom .zoom-icon {
    position: absolute;
    right: 20px;
    top: 20px;
}

.product-pic-zoom .zoom-icon i {
    color: #4c4c4c;
    font-size: 14px;
    width: 40px;
    height: 40px;
    border: 1px solid #d7d7d7;
    text-align: center;
    border-radius: 50%;
    line-height: 37px;
}

.product-thumbs .pt {
    cursor: pointer;
    position: relative;
}

.product-thumbs .pt.active:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 1px solid #e7ab3c;
    z-index: 1;
}

.ps-slider .owl-nav button[type=button] {
    height: 30px;
    width: 30px;
    background: #ffffff;
    color: #a7a7a7;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    font-size: 20px;
    -webkit-box-shadow: 0px 6px 10px -1px #e9e9e9;
    box-shadow: 0px 6px 10px -1px #e9e9e9;
    position: absolute;
    left: -16px;
    top: 50%;
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
}

.ps-slider .owl-nav button[type=button].owl-next {
    left: auto;
    right: -16px;
}

.product-details .pd-title {
    position: relative;
    margin-bottom: 6px;
}

.product-details .pd-title span {
    display: block;
    font-size: 12px;
    color: #b2b2b2;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    line-height: 23px;
}

.product-details .pd-title h3 {
    color: #252525;
    font-weight: 700;
}

.product-details .pd-title .heart-icon {
    color: #252525;
    font-size: 18px;
    position: absolute;
    right: 0;
    top: 0;
}



</style>
