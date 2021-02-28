<template>
  <div class="home">
    <HeaderEventy />
    <HeadStory />
    <SucessStory />
    <FooterShayna />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderEventy from "@/components/HeaderEventy.vue";
import SucessStory from "@/components/SucessStory.vue";
import HeadStory from "@/components/HeadStory.vue";
import FooterShayna from "@/components/FooterShayna.vue";

export default {
  name: "about",
  components: {
    HeaderEventy,
    SucessStory,
    HeadStory,
    FooterShayna
  }
};
</script>
