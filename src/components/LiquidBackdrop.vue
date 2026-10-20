<template>
  <div aria-hidden="true" class="backdrop">
    <span class="blob blob-one" />
    <span class="blob blob-two" />
    <span class="blob blob-three" />
    <span class="grain" />
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: var(--site-page);
}

.blob {
  position: absolute;
  border-radius: 50%;
  opacity: var(--aurora-opacity);
  filter: blur(80px);
  will-change: transform;
}

.blob-one {
  top: -18vmax;
  right: -10vmax;
  width: 55vmax;
  height: 55vmax;
  background: radial-gradient(circle at 40% 40%, var(--aurora-1), transparent 68%);
  animation: drift-one 38s ease-in-out infinite alternate;
}

.blob-two {
  bottom: -25vmax;
  left: 5vmax;
  width: 60vmax;
  height: 60vmax;
  background: radial-gradient(circle at 50% 50%, var(--aurora-2), transparent 66%);
  animation: drift-two 46s ease-in-out infinite alternate;
}

.blob-three {
  top: 30vh;
  left: 45vw;
  width: 34vmax;
  height: 34vmax;
  background: radial-gradient(circle, var(--aurora-3), transparent 65%);
  animation: drift-three 52s ease-in-out infinite alternate;
}

/* Fine film grain stops the gradients from banding and adds texture */
.grain {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@keyframes drift-one { to { transform: translate(-12vmax, 10vmax) scale(1.1); } }
@keyframes drift-two { to { transform: translate(14vmax, -8vmax) scale(0.92); } }
@keyframes drift-three { to { transform: translate(-18vmax, -10vmax) scale(1.2); } }
</style>
