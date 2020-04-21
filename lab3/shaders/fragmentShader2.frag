varying vec3 vUv;

uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 colorC;

void main() {
  gl_FragColor = vec4(mix(mix(colorA, colorB, vUv.z), colorC, vUv.z), 1.0);
}
