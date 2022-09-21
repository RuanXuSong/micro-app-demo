AMapLoader.load({
  key: 'e55aa23a5df31e98b5f04109f347abae', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.DistrictSearch',
    'AMap.CitySearch',
    'AMap.Geocoder',
  ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})
  .then((AMap) => {
    var map = new AMap.Map('container');
    map.addControl(new AMap.Scale());
  })
  .catch((e) => {
    console.error(e); //加载错误提示
  });
