<script setup lang="ts">

const coords = [
  {
    name: 'Максима Горького, 21',
    position: [58.014460, 56.252809],
  },
  // {
  //   name: 'Ленина, 20',
  //   position: [58.010057, 56.234101],
  // },
]

const initMap = () => {
  const map = new ymaps.Map('map', {
    center: [58.0102, 56.2405],
    zoom: 14,
    controls: ['zoomControl'],
  },
    {
      suppressMapOpenBlock: true, // Убираем ссылку "Открыть в Яндекс.Картах"
    }
  )
  map.behaviors.disable([
    'scrollZoom',
    'dblClickZoom',
    // 'multiTouch', 
    // 'drag',    

  ])
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    map.behaviors.disable('drag')
    // map.behaviors.disable('scrollZoom')
  }

  map.setType('yandex#map')
  map.options.set('mapAutoFocus', false)


  coords.forEach(({ name, position }) => {
    const [lat, lon] = position
    const placemark = new ymaps.Placemark(position, {
      balloonContent: `
        <div style="font-family: Arial; font-size: 14px;">
          <strong>${name}</strong><br/>
          <a href="https://3.redirect.appmetrica.yandex.com/route?end-lat=${lat}&end-lon=${lon}&appmetrica_tracking_id=1178268795219780156"
             target="_blank"
             rel="noopener"
             style="display:inline-block;margin-top:8px;padding:6px 10px;background:#EA4431;color:#fff;border-radius:4px;text-decoration:none;">
             🚕 Доехать на такси
          </a>
        </div>
      `
    }, {
      preset: 'islands#redIcon',
    })

    map.geoObjects.add(placemark)
  })
}

onMounted(() => {
  if (typeof ymaps !== 'undefined') {
    ymaps.ready(initMap)
  }
})
</script>

<template>
  <v-row class="pt-md-8 pb-md-8 ma-0"  style="background:rgb(20, 20, 20);">
    <v-col cols="12" md="4">
      <div class="justify-center align-start align-md-center d-flex text-center  h-100">

        <div ref="card" class="card">

          <v-divider color="accent" opacity="1" :thickness="5">

          </v-divider>


          <div style="font-size: clamp(1.5rem, 0.5625rem + 3vw, 2.25rem); font-weight: 900; color: white; " ref="phone">
            Пермь <br> Максима Горького <br>
            21
          </div>



        </div>
      </div>
    </v-col>
    <v-col cols="12" md="8">
      <div id="map" style=" width: 100%; height: 400px; filter: grayscale(1); "></div>
    </v-col>
  </v-row>


</template>
