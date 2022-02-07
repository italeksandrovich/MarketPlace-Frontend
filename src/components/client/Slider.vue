<template>
  <VueSlickCarousel v-bind="settings">
    <div>
      <h3>{{ name }}</h3>
      <p>
        {{ text }}
      </p>
    </div>
  </VueSlickCarousel>
</template>

<script>
export default {
  name: "slider",
  props: {
    name: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      },
    };
  },
};
</script>

<style></style>
