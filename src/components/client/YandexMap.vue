<template>
  <div class="map">
    <yandex-map :settings="settings" :coords="coords" zoom="10">
      <ymap-marker
        :coords="coords"
        marker-id="123123"
        marker-type="placemark"
      />
    </yandex-map>
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
  data() {
    return {
      settings: {
        apiKey: "eb2226f8-c096-4458-b74d-f53c20a25e58",
        lang: "ru_RU",
        coordorder: "latlong",
        enterprise: false,
        version: "2.1",
      },
      coords: [54.82896654088406, 39.831893822753904],
      placemarks: [
        {
          coords: [54.82896654088406, 39.831893822753904],
          properties: {
            balloonContentBody: "asdfd",
            balloonContentFooter: "1",
            balloonContentHeader: "1",
          },
          clusterName: "1",
          markerId: "1",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.map {
  height: 400px;

  .ymap-container {
    height: 100%;
  }
}
</style>
