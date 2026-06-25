window.CESIUM_BASE_URL = '/cesium';

import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNzRiNDg2OC1lMjE4LTRmZTgtOWM5OC1kMDAwY2E3NmJiOWUiLCJpZCI6NDQ1Nzk4LCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidW5kZWZpbmVkX2RlZmF1bHQiLCJpYXQiOjE3ODE3MDg4ODV9.RwLJW7uCTchNFXaKXqo-COoFk7sdFPTk8X_PAly40K0';

const viewer = new Cesium.Viewer('cesiumContainer', {
  terrain: Cesium.Terrain.fromWorldTerrain(),
  infoBox: false,
  selectionIndicator: false,
});

const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(4954020);
viewer.scene.primitives.add(tileset);
viewer.zoomTo(tileset);