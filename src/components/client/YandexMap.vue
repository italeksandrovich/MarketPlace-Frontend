<template>
  <div class="map">
    <div class="map-inner" style="width: 600px; height: 400px" ref="map"></div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  name: "YandexMap",
  components: {
    yandexMap,
    ymapMarker,
  },

  props: {
    adresses: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      map: null,
      myPlacemarks: [],
      myPlacemark: null,
      balloonLayout: null,
      balloonContentLayout: null,
    };
  },
  mounted() {
    var self = this;
    window.ymaps.ready(() => {
      this.init();
      console.log(this.myPlacemarks);
      this.myPlacemarks.forEach((mark, index) => {
        this.map.geoObjects.add(mark);
        mark.events.add(["click"], function (e) {
          self.$emit("input", index);
        });
      });
    });
  },
  beforeDestroy() {
    if (this.map) {
      this.map.destroy();
    }
  },
  methods: {
    init() {
      this.map = new window.ymaps.Map(this.$refs["map"], {
        center: [55.883655, 37.484518],
        zoom: 8,
      });
      this.myPlacemarks = this.adresses.map(({ coords, name }) => {
        return new window.ymaps.Placemark(coords, {
          hintContent: name,
        });
      });
    },
  },
};
</script>

<style lang="scss">
.map {
  height: 300px;
  border-radius: 15px;
  overflow: hidden;

  .ymap-container {
    height: 100%;
  }
}
</style>
