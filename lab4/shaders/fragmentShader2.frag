uniform sampler2D texture1;
varying vec2 vUv;

void main() {
                vec2 tiles = vec2(4.0,4.0);
                vec2 vUv2 = fract( vUv * tiles);
                gl_FragColor = texture2D(texture1, vUv2);
}