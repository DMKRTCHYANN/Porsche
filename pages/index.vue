<template>
  <div>
    <div class="flex items-center justify-center bg-white sticky top-0 z-10 px-[70px] h-[81px]">
      <div class="flex justify-center gap-3">
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300" class="h-5 w-auto">
            <path
                d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
          </svg>
        </a>
      </div>
    </div>
    <div>
      <Flicking/>
    </div>
    <div class="min-h-screen py-8 flex flex-col items-center ">
      <h1 class="text-4xl font-bold mb-[57px] w-[1230px] text-center">All Models</h1>
      <div class="grid grid-cols-3 gap-8">
        <div class="relative  shadow-md rounded-lg overflow-hidden">
            <img
                src="/images/718.jpg"
                alt="Porsche 718"
                class="object-cover w-full h-[304px] transition-transform duration-300"
            >
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Porsche 718</h2>
            <button
                onclick="window.location.href='/models/718/718.html'"
                class="flex items-start justify-center w-full box-border  border-2 border-[#010205] rounded-lg transform bg-transparent text-[#010205]  p-4 gap-2">
              See 718 in 3D
            </button>
          </div>
        </div>
        <div class="relative  shadow-md rounded-lg overflow-hidden">
            <img
                src="/images/918.jpg"
                alt="Porsche 718"
                class="object-cover w-full h-[304px] transition-transform duration-300"
            >
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Porsche 918</h2>
            <button
                onclick="window.location.href='/models/918/918.html'"
                class="flex items-start justify-center w-full box-border  border-2 border-[#010205] rounded-lg transform bg-transparent text-[#010205]  p-4 gap-2">
              See 918 in 3D
            </button>
          </div>
        </div>
        <div class="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src="/images/911-gt3-rs.webp"
                alt="Porsche 911"
                class="object-cover w-full h-[304px] transition-transform duration-300"
            >
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Porsche 911</h2>
            <button
                onclick="window.location.href='/models/911/911.html'"
                class="flex items-start justify-center w-full box-border  border-2 border-[#010205] rounded-lg transform bg-transparent text-[#010205]  p-4 gap-2">
              See 911 in 3D
            </button>
          </div>
        </div>
        <div class="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src="/images/newpanamera.jpg"
                alt="Porsche Panamera"
                class="object-cover w-full h-[304px] transition-transform duration-300"
            >
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Porsche Panamera</h2>
            <button
                onclick="window.location.href='/models/panamera/panamera.html'"
                class="flex items-start justify-center w-full box-border  border-2 border-[#010205] rounded-lg transform bg-transparent text-[#010205]  p-4 gap-2">
              See Panamera in 3D
            </button>
          </div>
        </div>
        <div class="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src="/images/macan-2.jpg"
                alt="Porsche Macan"
                class="object-cover w-full h-[304px] transition-transform duration-300"
            >
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Porsche Macan</h2>
            <button
                onclick="window.location.href='/models/macan/macan.html'"
                class="flex items-start justify-center w-full box-border  border-2 border-[#010205] rounded-lg transform bg-transparent text-[#010205]  p-4 gap-2">
              See Macan in 3D
            </button>
          </div>
        </div>
        <div class="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src="/images/newcayenne.jpg"
                alt="Porsche Cayenne"
                class="object-cover w-full h-[304px] transition-transform duration-300"
            >
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Porsche Cayenne</h2>
            <button
                onclick="window.location.href='/models/cayenne/cayenne.html'"
                class="flex items-start justify-center w-full box-border  border-2 border-[#010205] rounded-lg transform bg-transparent text-[#010205]  p-4 gap-2">
              See Cayenne in 3D
            </button>
          </div>
        </div>

      </div>
    </div>
    <div class="bg-black w-full">
      <div class="flex justify-center">
        <img
            class="w-[400px]"
            src="/images/white_logo.jpg" alt="Logo">
      </div>
    </div>
  </div>
</template>
<script setup>
import Flicking from "~/component/Flicking.vue";


</script>
