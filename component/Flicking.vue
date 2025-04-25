<template>
  <Flicking :options="{ circular: true }" :plugins="plugins">
    <div
        class="plugins-panel"
        v-for="(image, index) in images"
        :key="index"
        style="position: relative"
    >
      <img class="panel-image" :src="image.src" alt="Flicking Image" />
      <div
          :class="['image-text', image.textType]"
      >
        {{ image.text }}
      </div>
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
      <div class="flicking-pagination"></div>
    </template>
  </Flicking>
</template>

<script setup>
import {AutoPlay} from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import {Arrow} from "@egjs/flicking-plugins";
import "@/assets/css/arrow.css";

const images = [
  {
    src: "/images/all_porsches.jpg",
    text: "2025-ն սկսում ենք նոր, թարմ մոտեցմամբ.",
    textType: "long",
  },
  {
    src: "/images/all_porsches_2.jpg",
    text: "Porsche Next, Arial Narrow, Arial, Heiti SC, SimHei, sans-serif",
    textType: "short",
  },
  {
    src: "/images/macan.jpg",
    text: "Porsche Macan - A premium SUV experience.",
    textType: "long",
  },
  {
    src: "/images/new_911.jpg",
    text: "The new Porsche 911 - A blend of tradition and innovation.",
    textType: "long",
  },
  {
    src: "/images/porsche_center_yerevan.jpg",
    text: "Porsche Center Yerevan - Where dreams come true.",
    textType: "short",
  },
  {
    src: "/images/taycan.jpg",
    text: "Porsche Taycan - The future of electric driving.",
    textType: "short",
  },
];

const plugins = [
  new AutoPlay({duration: 5000, direction: "NEXT", stopOnHover: true}),
  new Arrow(),
];
</script>

<style scoped>
.flicking-arrow-prev,
.flicking-arrow-next {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.flicking-arrow-prev {
  left: 10px;
}

.flicking-arrow-next {
  right: 10px;
}

.plugins-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  flex-shrink: 0;
}

.panel-image {
  width: 100%;
  max-width: 1880px;
  height: auto;
  transition: border 0.3s ease;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

/* Общий стиль для текста */
.image-text {
  position: absolute;
  left: 20px;
  bottom: 50px;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  max-width: 600px;
  white-space: pre-line;
  line-height: 1.5;
  text-align: left;
  grid-column: 1 / -1;
}

/* Стиль для длинного текста */
.image-text.long {
  font: normal normal 400 clamp(1.8rem, 2.41vw + 1.32rem, 4.21rem) / calc(6px + 2.125ex) "Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;
  max-width: 80%;
}

/* Стиль для короткого текста */
.image-text.short {
  font: normal normal 400 clamp(1.2rem, 1.81vw + 1.02rem, 2.21rem) / calc(4px + 2.125ex) "Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;
  max-width: 60%;
}
</style>
