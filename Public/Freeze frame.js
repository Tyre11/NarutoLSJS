// -----JS CODE-----
//@input Component.Camera camera
//@input Asset.Texture deviceCameraTexture
//@input Component.MeshVisual meshVisual

var textureCopy = script.deviceCameraTexture.copyFrame();
script.meshVisual.mainPass.baseTex = textureCopy;

script.meshVisual.mainPass.cullMode = 1;
