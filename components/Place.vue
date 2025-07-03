<script setup lang="ts">

const coords = [
  {
    name: 'Максима Горького, 21',
    position: [58.010374, 56.246932],
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
    // controls: ['zoomControl'], 
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
  <div class="text-center">Пермь, Максима Горького, 21 / Пермь, Ленина, 20</div>
  <div id="map" style="width: 100%; height: 400px; filter: grayscale(1);"></div>
</template>