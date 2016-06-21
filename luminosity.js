var request = require('request');

var colorsUrl = 'https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json';


request.get(colorsUrl, function(err, data){
  if (err){
    console.log('Error: ' + err);
  }
  var colors = JSON.parse(data.body);

  var rgb = {};
  for (color of colors) {
    if (color.name.toLowerCase() === process.argv[2].toLowerCase()){
      rgb = color.rgb;
    }
  }

  console.log(rgb);

});
