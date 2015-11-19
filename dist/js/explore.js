 function position(){
          if( window.location.hash == '#hotel' ){
              alert("Display Hotels");
          }else if( window.location.hash == '#restaurant' ){
              alert("Display Restaut");
          }else if( window.location.hash == '#landmark' ){
              alert("Display Landmarks");
          }
      }
position();