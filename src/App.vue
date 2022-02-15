<template>
  <div class="frame-container">
    <button @click="test">Change sphere color</button>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="blue"></a-sphere>
      <a-sky color="#ECECEC"></a-sky>
      <a-entity id="rig" position="0 0 0">
            <a-entity id="camera" camera look-controls></a-entity>
        </a-entity>
    </a-scene>
  </div>
</template>

<script>

export default {
  methods: {
    test() {
      const sphere = document.querySelector("a-sphere");
      const color = sphere.getAttribute("color")
      sphere.setAttribute("color", color === "blue" ? "green" : "blue")
    }
  }
}
</script>

<style>
  .red {
    color: #f00;
  }
  button {
    position: fixed;
    z-index: 9999;
  }
  .frame-container {
    position: absolute; 
    height: 100%; 
    width: 100%;
  }
</style>