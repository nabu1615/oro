$(document).ready(function(){
  // Extract the text from the template .html() is the jquery helper method for that
  var raw_template = $('#simple-template').html();
  // Compile that into an handlebars template
  var template = Handlebars.compile(raw_template);
  // Retrieve the placeHolder where the Posts will be displayed
  var placeHolder = $("#main");
  var brackets = "http://www.univision.com/sports-feed-api/soccer/standings?leagueKey=380&seasonKey=2017";
  // Fetch all Blog Posts data from server in JSON
  $.get(brackets,function(data,status,xhr){
    debugger;
    $.each(data,function(index,element){
      // Generate the HTML for each post
      var html = template(element);
      // Render the posts into the page
      placeHolder.append(html);
    });
  });
});