uniform sampler2D from;
uniform sampler2D to;
uniform float progress;
// uniform vec2 r;

varying vec2 vUv;

const vec2 center = vec2(0.5, 0.5);

float quadraticInOut(float t) {
  float p = 2.0 * t * t;
  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

// borrowed from wind.
// https://glsl.io/transition/7de3f4b9482d2b0bf7bb
float rand(vec2 co) {
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}


void main() {
  // vec2 p = gl_FragCoord.xy / r.xy;
  
  if (progress == 0.0) {
    gl_FragColor = texture2D(from, vUv);
  } else if (progress == 1.0) {
    gl_FragColor = texture2D(to, vUv);
  } else {
    float x = progress;
    float dist = distance(center, vUv);
    float r = x - min(rand(vec2(vUv.y, 0.0)), rand(vec2(0.0, vUv.x)));
    float m = dist <= r ? 1.0 : 0.0;
    gl_FragColor = mix(texture2D(from, vUv), texture2D(to, vUv), m);    
  }
  
}