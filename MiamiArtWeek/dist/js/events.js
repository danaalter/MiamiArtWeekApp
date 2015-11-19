// JavaScript Document
$(document).ready( function() {
  // init Isotope
  var $card = $('.card').isotope({
    itemSelector: '.artfair'
  });

  function onArrange() {
  console.log('arrange done');
}
// bind event listener
$card.on( 'arrangeComplete', onArrange );

  // store filter for each group
  var filters = {};

  $('.filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
    $card.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

  var jqxhr = $.ajax({
                    url: 'dist/js/test.json',
                    dataType: 'json' })
    .done(function(data) {
            $.each(data.fairs, function(i,item){
              console.log(item);
              //adding classes for filtering
              var $li = $("<li class='table-view-cell media navigate-right artfair'>").addClass(item.location + " " +item.dates);
              //adding link to details
              var $a = $("<a href='details.html#" + item.name + "' data-transition='slide-in'>");
              var $div = $("<div class='media-body'>");
              //var $name = $("<b class='eventname'").append(item.name);
              var $fair = "<b class='eventname'>" + item.name + "</b> "+ "<br>Address:" + item.address.street_address + " " + item.address.city + " " + item.address.state + " " + item.address.zip_code + "<br>";
              var $link = $("<a>").attr("href", item.website).append(item.website);
              $div.html($fair).append($link);
              $div.appendTo($a);
              // <b class="eventname">Art Basel Miami Beach</b><br>
              // Phone: (305) 674-1292<br>
              // Address: 1901 Convention Center Dr, Miami Beach, FL 33139<br>
              // <a href="http://artbasel.com/" >Visit Website</a>
              $li.append($a);
              $li.appendTo(".table-view");
            }
            );
            $(".card").css("height", "auto");
    })
    .fail(function(e) {
    console.log(e);
    });
