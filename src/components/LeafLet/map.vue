<template>
  <div class="row">
    <div class="col">
      <h1>{{ msg }}</h1>
      <l-map
        style="height: 700px; width: 100%"
        ref="map"
        :center="center"
        :zoom="zoom"
        @click="hMarkerClick"
      >
        <l-tile-layer :url="urlOSM"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng">
          <l-popup>Hello!!!</l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
export default {
  props: {
    msg: {
      type: String,
      default: _ => ({})
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data: _ => ({
    zoom: 13,
    urlOSM: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    urlYandex: 'http://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU',
    center: [55.753745192950454, 37.61985898017884],
    markerLatLng: [55.753745192950454, 37.61985898017884]
  }),
  mounted () {
    this.$nextTick(_ => {
      console.log(this.$refs.map.mapObject)
      // TODO --> some methods will be here
      // this.$refs.map.mapObject.options = [35, 75]
    })
  },
  methods: {
    hMarkerClick (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
