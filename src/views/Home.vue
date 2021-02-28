<template>
  <div class="home">
    <HeaderEventy />
    <HeroShayna />
    <EventyAction />
    <HeadWhy />
    <WhyEventy />
    <EventyPoint />
    <CompareEventy />
    <!-- <WomanShayna /> -->
    <PartnerShayna />
    <EventyPartner/>
    <FooterShayna />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderEventy from "@/components/HeaderEventy.vue";
import HeroShayna from "@/components/HeroShayna.vue";
// import WomanShayna from "@/components/WomanShayna.vue";
import EventyAction from "@/components/EventyAction.vue";
import CompareEventy from "@/components/CompareEventy.vue";
import HeadWhy from "@/components/HeadWhy.vue";
import WhyEventy from "@/components/WhyEventy.vue";
import EventyPoint from "@/components/EventyPoint.vue";
import PartnerShayna from "@/components/PartnerShayna.vue";
import EventyPartner from "@/components/EventyPartner.vue";
import FooterShayna from "@/components/FooterShayna.vue";

export default {
  name: "home",
  components: {
    HeaderEventy,
    HeroShayna,
    EventyAction,
    EventyPartner,
    WhyEventy,
    EventyPoint,
    HeadWhy,
    PartnerShayna,
    CompareEventy,
    FooterShayna
  }
};
</script>
