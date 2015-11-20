

/*function getNextCount(){
	"use strict";
	   return count++;
	}*/

var prevContentID ;	
var nextContentID ; 
var urlstring = "GetContentList";
var ContentPoint = "";
var NoofImages = 12;

function populateImage(direction){
	"use strict";
	var i;
	var populateMain = false;
	var startImage = 0;
	var endImage = 0;
	 if (direction === "swipeleft"){ 
	  urlstring = "GetContentPrevList"; 
	  ContentPoint = prevContentID;}
	  else if  (direction === "swiperight")
	  {urlstring = "GetContentNextList"; 
	  ContentPoint = nextContentID;
		  } else {
			ContentPoint = "";
			urlstring = "GetContentList";  
			  }
	  
	 $.ajax({
				type: "GET",

		        url: "http://localhost:59263/ContentRESTFULService.svc/" + urlstring + "/" +  ContentPoint,
                dataType: "json",
                success: function (data) {
					
					  if (data.length === 0)
					  {
						  return false;
						  }  
					if (direction === "swipeleft"){ 
								  if (data.length >= NoofImages)
									{
									  i = (NoofImages - 1);
									  startImage = i;
									  endImage = 0;
									} else 
									{
										
									  i = data.length -1 ;	
									  startImage = i;
									  endImage = 0;
									}

					}
					else if (direction === "swiperight")
					{
						i = 0;
						startImage = i;
						endImage = startImage +  (NoofImages -1);
					}
				   else 
				   {
                        i = 0;
						startImage = i;
						endImage = startImage + ( NoofImages -1);
				   }

					 var desc = '';
					 $('#Category').empty();
					 	
                     $.each( data, function() {
            							 
					var name = data[i].Name;
					var url = data[i].url;
					desc = data[i].Description;
					var contentID = data[i].ContentId;
					  
						                 if (i === startImage) {
                                    	  populateMain = true;
										  prevContentID =  contentID;									 
										 } else
										 {
											populateMain = false;									  
										 }  
						  
						  if (populateMain)  {
						  
						  
						  $('#mydesc').empty();	  
						  $('#ContentName').empty();	  
                        
                          $('<label>' + desc + '</label>').appendTo('#mydesc');
						  $('<label>' + name + '</label>').appendTo('#ContentName');
						  
						  $('#selectedimg').empty();
      $('<img  src="http://eonreality.serveraddress.com/Content/' +  contentID + '/' + url + '" class=" img-ctn img-responsive img-rounded "  width="550"  height="550"  alt="Thumbnail Image 1" >').appendTo('#selectedimg'); 
	                      }
						   
						  
  $('<div class="eon-size  img-responsive img-rounded  .eon-image-before "  ><div><img    src="http://eonreality.serveraddress.com/Content/' + contentID + '/' + url +  '"  alt=" Images"    width="100"  height="100" data-name="' + name + '"  data-desc="' + desc  +'"> </div> </div>').appendTo('#Category'); 
						  
						  if (i === endImage){
						  nextContentID  =  contentID;
						  return false;									 
						  						
					     							 
						  }
                         if (direction === "swipeleft"){ 
								                      i--;					 
									                  }
						 else if  (direction === "swiperight")
						                              {
													 i++;	  
													  }
						else { i++;	  }							  
						                                 					 
						
				        
				 
					 }); 
					
                },
				
                 error: function (xhr) {
	                          
					 $('#Category').empty();
	                  var name = "sara"	;
					  var desc = "   A neuron is an electrically excitable cell that processes and transmits information by electrical and chemical signaling. Chemical signaling occurs via synapses, specialized connections with other cells. Neurons connect to each other to form networks. Neurons are the core components of the nervous system, which includes the brain, spinal cord, and peripheral ganglia. A number of specialized types of neurons exist: sensory neurons respond to touch, sound, light and numerous other stimuli affecting cells of the sensory organs that then send signals to the spinal cord and brain. Motor neurons receive signals from the brain and spinal cord, cause muscle contractions, and affect glands. Interneurons connect neurons to ";
					  			 
    $('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before "  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"   data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before "  src="http://eonreality.serveraddress.com/Content/762/image1.jpg"  alt="682"   data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before"  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before"  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before"  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img   class=" img-ctn img-responsive img-rounded .eon-image-before" src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img   class=" img-ctn img-responsive img-rounded .eon-image-before" src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img   class=" img-ctn img-responsive img-rounded .eon-image-before"  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"  data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	                
	                 alert(xhr.responseText); 
								
                } 
            });
	
	
	
	
	}
$(function() {
	"use strict";
		setInterval(function() {
			$('#slider .slides').animate({'margin-left' :  '-=720px'}, 1000);
	
		console.log( new Date());
}, 3000);


$( document ).on( "swipeleft swiperight", "#Category", function( event ) {
            // These are the classnames used for the CSS transition
             /*alert(  "swiped   " + event.type + "con ID is  " + prevContentID + "  first ID is " + nextContentID ); */
            /* var dir = event.type === "swipeleft" ? "1" : "2"; 
			 var nextdir = event.type === "swipeleft" ? prevContentID : nextContentID;*/
/*			 alert(dir + " the next start  " + nextdir ) ;			 */
			 populateImage(event.type);

            // Check if the browser supports the transform (3D) CSS transition

          
    });

$( "#Category" ).click(function(evt) {
  var x = evt.clientX, y = evt.clientY;
/*  alert( "hello   " + document.elementFromPoint(x,y).getAttribute("src"));*/
     if(document.elementFromPoint(x,y).getAttribute("src") !== null){
      $('#selectedimg').empty();
      $('<img  src="' + document.elementFromPoint(x,y).getAttribute("src") + '" class=" img-ctn img-responsive img-rounded "  width="800"  height="800"  alt="Thumbnail Image 1" >').appendTo('#selectedimg'); 
	  
	  $('#ContentName').empty();
	  $('<label> ' +  document.elementFromPoint(x,y).getAttribute("data-name") + ' </label> ').appendTo('#ContentName');
      
	  
	  $('#mydesc').empty();
	  $( '<label> ' + document.elementFromPoint(x,y).getAttribute("data-desc") + ' </label> ').appendTo('#mydesc');
      }   
  
});

});

        $(document).ready(function () {
			"use strict";
				populateImage(0);	
           /* $.ajax({
				type: "GET",
                url: "http://localhost:65135/ProductRESTService.svc/GetProuctList/",
                dataType: "json",
                success: function (data) {  
								       
                     var i = 0;
					 var desc = '';
					 $('#Category').empty();
					 
                     $.each( data, function() {
                        var name = data[i].Name;
                        var url = data[i].url;
						desc = data[i].Description;
						var contentID = data[i].ContentId;
					
						  if ( i < 1) {
							  
						  nextContentID =  contentID;
						  $('#mydesc').empty();	  
						  $('#ContentName').empty();	  
                        
                          $('<label>' + desc + '</label>').appendTo('#mydesc');
						  $('<label>' + name + '</label>').appendTo('#ContentName');
						  
						  $('#selectedimg').empty();
      $('<img  src="http://eonreality.serveraddress.com/Content/' +  contentID + '/' + url + '" class=" img-ctn img-responsive img-rounded "  width="550"  height="550"  alt="Thumbnail Image 1" >').appendTo('#selectedimg'); 
	  
                        
						  }
						  if ( i < 12) {  
  $('<div class="eon-size  img-responsive img-rounded  .eon-image-before "  ><div><img    src="http://eonreality.serveraddress.com/Content/' + contentID + '/' + url +  '"  alt=" Images"    width="100"  height="100" data-name="' + name + '"  data-desc="' + desc  +'"> </div> </div>').appendTo('#Category'); 
						  }
						  prevContentID = contentID;
				        i++;					 
				 
					 }); 
					  $( "body" ).data( "foo", data );
                },
				
                 error: function (xhr) {
	                          
					 $('#Category').empty();
	                  var name = "sara"	;
					  var desc = "   A neuron is an electrically excitable cell that processes and transmits information by electrical and chemical signaling. Chemical signaling occurs via synapses, specialized connections with other cells. Neurons connect to each other to form networks. Neurons are the core components of the nervous system, which includes the brain, spinal cord, and peripheral ganglia. A number of specialized types of neurons exist: sensory neurons respond to touch, sound, light and numerous other stimuli affecting cells of the sensory organs that then send signals to the spinal cord and brain. Motor neurons receive signals from the brain and spinal cord, cause muscle contractions, and affect glands. Interneurons connect neurons to ";
					  			 
    $('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before "  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"   data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before "  src="http://eonreality.serveraddress.com/Content/762/image1.jpg"  alt="682"   data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before"  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before"  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img  class=" img-ctn img-responsive img-rounded  .eon-image-before"  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img   class=" img-ctn img-responsive img-rounded .eon-image-before" src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img   class=" img-ctn img-responsive img-rounded .eon-image-before" src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"    data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	$('<div class="eon-size"  ><div><img   class=" img-ctn img-responsive img-rounded .eon-image-before"  src="http://eonreality.serveraddress.com/Content/682/image3.jpg"  alt="682"  data-name="' + name + '" data-desc="' + desc  + ' width="200"  height="200"  > </div> </div>').appendTo('#Category'); 
	                
	                 alert(xhr.responseText); 
								
                } 
            });*/
        });
	