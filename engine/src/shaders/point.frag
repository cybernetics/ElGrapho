#version 300 es

//https://www.desultoryquest.com/blog/drawing-anti-aliased-circular-points-using-opengl-slash-webgl/
//#extension GL_OES_standard_derivatives : enable

//https://www.desultoryquest.com/blog/drawing-anti-aliased-circular-points-using-opengl-slash-webgl/
precision mediump float;
in vec4 vVertexColor;
out vec4 fragColor;

void main(void) {
  float r = 0.0, delta = 0.0, alpha = 1.0;
  vec2 cxy = 2.0 * gl_PointCoord - 1.0;

  r = dot(cxy, cxy);
  if (r > 1.0) {
    discard;
  }

  // r = dot(cxy, cxy);
  // delta = fwidth(r);
  // alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
  // if (r > 1.0) {
  //   discard;
  // }



  fragColor = vVertexColor * alpha;
}