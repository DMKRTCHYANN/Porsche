<template>
  <div>
    <div class="flex justify-between items-center px-[70px] h-[81px]">
      <div class="flex items-center gap-3">
        <img src="/images/menu.svg" alt="Menu Icon" class="h-7 w-auto"/>
        <p class="text-2xl">Ընտրացանկ</p>
      </div>
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300" class="h-5 w-auto">
          <path
              d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
        </svg>
      </div>
      <div class="flex items-center gap-3">
        <img src="/images/location.svg" alt="Location Icon" class="h-7 w-auto"/>
        <p class="text-2xl font-medium">Պորշե Կենտրոն</p>
      </div>
    </div>
    <div>
      <Flicking/>
    </div>
    <div class="flex justify-around items-center bg-[#212225] px-[200px] h-[70px] sticky w-full  filter brightness-90">
      <div class="flex items-start gap-3">
        <img src="/images/phone.svg" alt="Phone Icon">
        <p class="text-white">(+374) 10-739403</p>
      </div>
      <div class="flex items-center gap-3">
        <img src="/images/location_white.svg" alt="Location Icon">
        <p class="text-white"> Երթուղի </p>
      </div>
      <div class="flex items-center gap-3">
        <img src="/images/highway.svg" alt="Highway Icon">
        <p class="text-white"> Սպասարկում </p>
      </div>
      <div class="flex items-center gap-3">
        <img src="/images/steering_wheel.svg" alt="Wheel Icon">
        <p class="text-white">  Թեստ-դրայվ </p>
      </div>
      <div class="flex items-center gap-3">
        <img src="/images/mail.svg" alt="Mail Icon">
        <p class="text-white"> info@porsche.am</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import Flicking from "~/component/Flicking.vue";


</script>
