<template>
  <div ref="threeRef" class="three h-full bg-indigo-300"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader '
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'

let scene: THREE.Scene, camera: any, renderer: THREE.Renderer
const threeRef = $ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  init()
  render()
  addGui()
})

function init() {
  //创建场景
  scene = new THREE.Scene()
  //创建相机
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20)
  camera.position.set(-1.8, 0.6, 2.7)
  camera.lookAt(scene.position)
  //RGBE纹理加载器
  const textureLoader: RGBELoader = new RGBELoader()
  textureLoader
    .setPath('../../../src/assets/textures/equirectangular/')
    .load('royal_esplanade_1k.hdr', (texture: any) => {
      texture.mapping = THREE.EquirectangularReflectionMapping
      scene.background = texture
      scene.environment = texture
      render()
      //创建gltf加载器
      const gltfLoader = new GLTFLoader()
        .setPath('../../../src/assets/glTF/')
        .load('DamagedHelmet.gltf', (gltf) => {
          scene.add(gltf.scene)
          render()
        })
    })
  //创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio) //设置设备像素比
  renderer.setSize(window.innerWidth, window.innerHeight) //设置渲染器大小
  renderer.toneMapping = THREE.ACESFilmicToneMapping //设置渲染器toneMapping
  renderer.toneMappingExposure = 1 //设置渲染器toneMappingExposure
  renderer.outputEncoding = THREE.sRGBEncoding //设置渲染器输出编码
  threeRef!.appendChild(renderer.domElement)
  //创建相机控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', render) // use if there is no animation loop
  controls.minDistance = 2
  controls.maxDistance = 10
  controls.target.set(0, 0, -0.2)
  controls.update()

  //添加resize事件
  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}

function render() {
  renderer.render(scene, camera)
  camera.lookAt(scene.position)
}

//添加dat.gui控制器
let gui: GUI
function addGui() {
  gui = new GUI()
  //改变相机
  const cameraFolder = gui.addFolder('Camera')
  cameraFolder.add(camera.position, 'x', -10, 10).name('positionX').onChange(render)
  cameraFolder.add(camera.position, 'y', -10, 10).name('positionY').onChange(render)
  cameraFolder.add(camera.position, 'z', -10, 10).name('positionZ').onChange(render)
  cameraFolder
    .add(camera.rotation, 'x', 0, Math.PI * 2)
    .name('rotationX')
    .onChange(render)
  cameraFolder
    .add(camera.rotation, 'y', 0, Math.PI * 2)
    .name('rotationY')
    .onChange(render)
  cameraFolder
    .add(camera.rotation, 'z', 0, Math.PI * 2)
    .name('rotationZ')
    .onChange(render)
  cameraFolder.open()
}

onUnmounted(() => {
  gui.destroy()
})
</script>

<style lang="scss" scoped></style>
