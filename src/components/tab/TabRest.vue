<script setup lang="ts">
import Dot from '../base/Dot.vue';

const props = defineProps({
  duration:{type:Number,default:4},
  dot:{type:Number,default:0},
});
</script>

<template>
<div class=" flex items-center">
  
      <svg v-if="duration <= 4" class=" shrink-0 scale-75" width="11" height="28"><path transform="matrix(0.039,0,0,-0.039,1,15.5)" d="m -23,-116 c 0,28 11,42 40,42 33,0 78,-13 119,-31 L 4,53 c -7,9 -10,17 -10,25 0,34 50,66 87,99 25,22 37,52 37,83 0,24 -8,49 -25,69 l -35,42 c -3,3 -4,7 -4,10 0,9 9,15 17,15 4,0 8,-1 11,-5 L 233,211 c 7,-9 10,-17 10,-25 0,-34 -50,-66 -87,-99 -25,-22 -37,-52 -37,-83 0,-24 7,-49 24,-69 l 84,-99 c 3,-3 4,-7 4,-10 0,-9 -8,-16 -16,-16 -4,0 -9,2 -12,6 -18,21 -63,38 -97,38 -41,0 -53,-26 -53,-67 0,-35 11,-74 28,-94 5,-6 0,-13 -6,-13 -2,0 -4,0 -6,2 -45,54 -92,148 -92,202 z" tyle="fill: currentcolor;"></path></svg>
      <svg v-if="duration == 8" class=" shrink-0 scale-100" width="10" height="19"><path data-v-54505f2c="" transform="matrix(0.039,0,0,-0.039,0,8)" d="M 72,-250 189,76 C 155,64 120,54 84,54 38,54 -3,87 -3,133 c 0,40 33,72 73,72 25,0 48,-15 56,-39 10,-28 6,-59 35,-59 16,0 54,48 61,63 6,12 23,12 28,0 L 127,-250 c -8,-7 -17,-10 -27,-10 -10,0 -20,3 -28,10 z" style="fill: currentcolor;"></path></svg>
      <svg v-if="duration == 16" class=" shrink-0 scale-75" width="13" height="28"><path transform="matrix(0.039,0,0,-0.039,1,8)" d="m 66,-500 101,327 c -34,-12 -70,-23 -106,-23 -46,0 -87,33 -87,79 0,40 32,72 72,72 25,0 49,-15 57,-39 10,-28 5,-59 34,-59 16,0 55,51 60,68 L 243,76 C 209,64 175,54 139,54 93,54 52,87 52,133 c 0,40 33,72 73,72 25,0 48,-15 56,-39 10,-28 5,-59 34,-59 15,0 50,49 57,63 6,12 23,12 28,0 L 121,-500 c -8,-7 -17,-10 -27,-10 -10,0 -20,3 -28,10 z" style="fill: currentcolor;"></path></svg>
      <svg v-if="duration == 32" class=" shrink-0 scale-75" width="11" height="28">
              <g transform="translate(-4.5,15),scale(0.8,0.8)">
                <g transform="matrix(1.8045484,0,0,1.813574,-950.67414,-140.743307)" style="fill: rgb(0, 0, 0); fill-rule: evenodd; stroke: rgb(0, 0, 0); stroke-width: 0; stroke-linecap: butt; stroke-linejoin: round; stroke-miterlimit: 10;">
                  <g transform="matrix(0.99547219,0,0,0.98660779,528.27135,66.836074)">
                    <g transform="matrix(1.0045484,0,0,1.013574,-528.16668,-75.472665)" style="fill: rgb(0, 0, 0); fill-rule: evenodd; stroke: rgb(0, 0, 0); stroke-width: 0; stroke-linecap: butt; stroke-linejoin: round; stroke-miterlimit: 10;">
                      <path d="m 531.098,74.847 c -0.52,0.098 -0.918,0.457 -1.098,0.953 -0.039,0.16 -0.039,0.199 -0.039,0.418 0,0.301 0.019,0.461 0.16,0.699 0.199,0.399 0.617,0.719 1.094,0.836 0.5,0.141 1.336,0.02 2.293,-0.297 l 0.238,-0.082 -1.3996,3.471611 -0.41066,2.655038 c 0,0 -3.16596,8.071848 -3.10296,8.114848 0.0817,0.05447 1.81009,-4.090153 2.41544,-5.885007 0.33307,-0.987564 0.68225,-1.66049 0.72478,-1.66049 0.238,0 0.0173,-0.06313 0.0563,-0.18413 0,-0.039 -0.0892,0.90846 0.58679,-1.34154 l 2.36395,-7.04133 -0.039,-0.058 c -0.097,-0.121 -0.296,-0.16 -0.418,-0.063 -0.039,0.039 -0.101,0.121 -0.14,0.18 -0.18,0.301 -0.637,0.836 -0.875,1.035 -0.219,0.18 -0.34,0.199 -0.539,0.121 -0.18,-0.098 -0.239,-0.199 -0.36,-0.738 -0.117,-0.535 -0.257,-0.778 -0.558,-0.977 -0.278,-0.179 -0.637,-0.238 -0.953,-0.156 z" style="fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);"></path></g>
                      <g transform="matrix(1.0045484,0,0,1.013574,-529.50416,-71.607986)" style="fill: rgb(0, 0, 0); fill-rule: evenodd; stroke: rgb(0, 0, 0); stroke-width: 0; stroke-linecap: butt; stroke-linejoin: round; stroke-miterlimit: 10;">
                        <path d="m 531.098,74.847 c -0.52,0.098 -0.918,0.457 -1.098,0.953 -0.039,0.16 -0.039,0.199 -0.039,0.418 0,0.301 0.019,0.461 0.16,0.699 0.199,0.399 0.617,0.719 1.094,0.836 0.5,0.141 1.336,0.02 2.293,-0.297 l 0.238,-0.082 -1.176,3.25 -0.78333,3.024389 c 0,0 -0.59605,1.859943 -0.53305,1.902943 0.117,0.078 0.57838,-1.481332 0.71938,-1.481332 0.238,0 -0.95011,4.103701 -0.91111,3.982701 0,-0.039 2.04715,-6.174701 2.72315,-8.424701 l 1.195,-4.125 -0.039,-0.058 c -0.097,-0.121 -0.296,-0.16 -0.418,-0.063 -0.039,0.039 -0.101,0.121 -0.14,0.18 -0.18,0.301 -0.637,0.836 -0.875,1.035 -0.219,0.18 -0.34,0.199 -0.539,0.121 -0.18,-0.098 -0.239,-0.199 -0.36,-0.738 -0.117,-0.535 -0.257,-0.778 -0.558,-0.977 -0.278,-0.179 -0.637,-0.238 -0.953,-0.156 z" style="fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);"></path></g></g>
                        <path d="m 531.04322,74.847 c -0.49495,0.098 -0.87377,0.457 -1.04511,0.953 -0.0371,0.16 -0.0371,0.199 -0.0371,0.418 0,0.301 0.0181,0.461 0.15229,0.699 0.1894,0.399 0.58727,0.719 1.04128,0.836 0.47592,0.141 1.27162,0.02 2.18252,-0.297 l 0.22652,-0.082 c 0.18534,-0.164295 0.0273,0.148966 0.0313,0.170463 l -2.97641,8.083325 c 0,0 0.27896,-0.139799 0.33896,-0.0968 0.11136,0.078 0.0973,-0.234868 0.11254,-0.102698 0.22653,1.970468 0.85484,0.390415 0.89196,0.265117 0,-0.039 2.05961,-7.87827 2.70303,-10.12827 l 0.0733,-0.06214 -0.0371,-0.058 c -0.0923,-0.121 -0.28175,-0.16 -0.39787,-0.063 -0.0371,0.039 -0.0961,0.121 -0.13325,0.18 -0.17133,0.301 -0.60631,0.836 -0.83282,1.035 -0.20846,0.18 -0.32363,0.199 -0.51304,0.121 -0.17132,-0.098 -0.22749,-0.199 -0.34264,-0.738 -0.11137,-0.535 -0.24462,-0.778 -0.53112,-0.977 -0.2646,-0.179 -0.60631,-0.238 -0.90707,-0.156 z" style="fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0); stroke-width: 0;"></path></g>
                      </g>
                      </svg>
      <Dot v-if="dot" :num="dot" ></Dot>
    </div>
  
</template>

<style scoped>

</style>
