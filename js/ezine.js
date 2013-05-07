function getData(data) {
      if (data) {
			  //console.log(data);
			  //return;
			  //var articles = data.articles;
			  //var child = data.display_subcategory_name;
			  var bucket = "";
			  console.log(data);
			  /*
					  for (var i = 0; i < articles.length; i++){
							  var p = "<p><h5>" + articles[i].source + " (" + articles[i].publish_date + ") " + "</h5>" + articles[i].summary + "<p>";
					  bucket+=p;
					console.log(articles[i]);
				}
				*/
					  for (var i = 0; i < data.length; i++){
							  var p = "<p><h5>" + data[i].display_subcategory_name + " (" + data[i].subcategory_id + ") " + "</h5>";
					  bucket+=p;
					  }
					//console.log(articles[i]);
				
				$('#content').html(bucket);
			 // console.log(data.articles);
            // do something with the data here
        } else {
            alert(data.error);
      }
}

/*
var myurl = "http://api.ezinearticles.com/api.php?search=categories&response_format=json&key=6h1UdX9xpMvwgkbw5lTuJSAsBr09yr";
*/
//var myurl ="http://api.feedzilla.com/v1/categories/19/subcategories/980/articles.json?callback=getData";
//var myurl ="http://api.feedzilla.com/v1/subcategories.json?callback=getData";
var myurl ="http://api.feedzilla.com/v1/categories/18/subcategories/822/articles.json?callback=getData";

/*
var baseUrl = "http://api.ezinearticles.com/api.php?";
var resJSON = "response_format=json";
var accKey = "6h1UdX9xpMvwgkbw5lTuJSAsBr09yr";
var url = baseUrl + "search=categories&" + resJSON + '&' + "key=" + accKey + "callback=?";
*/

/*
$.getJSON(url,{
	tags: "jquery",
    tagmode: "any",
    format: "json"
	}, function(data) {
  console.log(data);
});
*/
/*
(function($) {
$.ajax({
       type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
		success: function(json) {
       		console.dir(json.sites);
    	},
    	error: function(e) {
       		console.log(e.message);
    	}
    });
})(jQuery);
*/

$(document).ready(function(){
	var script = document.createElement('script');
	script.setAttribute("src", myurl);
	//script.setAttribute('Content-Type','text/javascript');
	script.setAttribute('type','text/javascript');
	document.getElementsByTagName("head")[0].appendChild(script);
	 
});

/*
(function($) {
$.getJSON(
myurl+'&jsoncallback=?',
  {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  },
  function(data) {
	console.log(1);
  });
})(jQuery);
*/

