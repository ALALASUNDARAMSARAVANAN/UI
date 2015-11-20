

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

		        url: "http://192.168.1.11/MobileService/MobileService.svc/" + urlstring + "/" +  ContentPoint,
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
					 $('#Imagelist').empty();
					 var Imagelisthtml = '';
					 Imagelisthtml  = 	Imagelisthtml + '<td class="first4"> </td>';
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
						  
						  
						  	  
						 
						  
						  $('#selectedimg').empty();

      $('<img  src="http://eonreality.serveraddress.com/Content/' +  contentID + '/' + url + '" class=" bigImage ui-corner-all " alt="Thumbnail Image 1" >').appendTo('#selectedimg'); 
	                      }
						   $('#mydesc').empty();
						    $("#mydesc").append(desc);
							 $('#ContentName').empty();	  

						  $("#ContentName").append(name);
							
          if(i === startImage){						  
  Imagelisthtml  = 	Imagelisthtml + '<td ><div   class="fourth twentyone eon-back-color-3"> <img  data-name="' + name + '" data-desc="' + desc  +'"   src="http://eonreality.serveraddress.com/Content/' + contentID + '/' + url +  '" class="ui-corner-all  img-responsive seventh-after" alt="Placeholder image"><p class="first6" >' + name + '</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span> </div></div></td>';
		  } else
		  {
			Imagelisthtml  = 	Imagelisthtml + '<td ><div   class="fourth twentyone eon-back-color-3"> <img  data-name="' + name + '" data-desc="' + desc  +'"   src="http://eonreality.serveraddress.com/Content/' + contentID + '/' + url +  '" class="ui-corner-all  img-responsive seventh-after" alt="Placeholder image"><p class="first6" >' + name + '</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span> </div></div></td>';
		   }
		     
						  
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
					 Imagelisthtml = Imagelisthtml + '<td class="first4"> </td><td class="first4"> </td>';

					 $("#Imagelist").append(Imagelisthtml);   
					 
					 
					 
					
                },
				
                 error: function (xhr) {
					 
	                          
					
	                
	                 alert("is error" +xhr.responseText); 
								
                } 
            });
	
	
	
	
	}
/*$(function() {
	"use strict";
		setInterval(function() {
			$('#slider .slides').animate({'margin-left' :  '-=720px'}, 1000);
	
		console.log( new Date());
}, 3000);*/


$( document ).on( "swipeleft swiperight", "#Imagelist", function( event ) {
	"use strict";
            // These are the classnames used for the CSS transition
             /*alert(  "swiped   " + event.type + "con ID is  " + prevContentID + "  first ID is " + nextContentID ); */
            /* var dir = event.type === "swipeleft" ? "1" : "2"; 
			 var nextdir = event.type === "swipeleft" ? prevContentID : nextContentID;*/
/*			 alert(dir + " the next start  " + nextdir ) ;			 */

			 populateImage(event.type);

            // Check if the browser supports the transform (3D) CSS transition

          
    });

$( "#mytable" ).click(function(evt) {
	"use strict";
  var x = evt.clientX, y = evt.clientY;

     if(document.elementFromPoint(x,y).getAttribute("src") !== null){
      $('#selectedimg').empty();
      $('<img  src="' + document.elementFromPoint(x,y).getAttribute("src") + '" class=" ui-corner-all  bigImage "   alt="Thumbnail Image 1" >').appendTo('#selectedimg'); 
	  
	  $('#ContentName').empty();
	  $("#ContentName").append( document.elementFromPoint(x,y).getAttribute("data-name"));
      
	  
	  $('#mydesc').empty();
	  $("#mydesc").append( document.elementFromPoint(x,y).getAttribute("data-desc"));
      }   
  
});
$( document ).on("click", function(evt) {
	"use strict";
  var x = evt.clientX, y = evt.clientY;
/*  alert( "hello   " + document.elementFromPoint(x,y).getAttribute("src"));*/
     if(document.elementFromPoint(x,y).getAttribute("src") !== null){
     $('#selectedimg').empty();
      $('<img  src="' + document.elementFromPoint(x,y).getAttribute("src") + '" class=" ui-corner-all  bigImage "   alt="Thumbnail Image 1" >').appendTo('#selectedimg'); 
	  
	  $('#ContentName').empty();
	  $("#ContentName").append( document.elementFromPoint(x,y).getAttribute("data-name"));
      
	  
	  $('#mydesc').empty();
	  $("#mydesc").append( document.elementFromPoint(x,y).getAttribute("data-desc"));

      }   
  
});



        $(document).ready(function () {
			"use strict";
			WCFJSON();
            $('body').height(document.documentElement.clientHeight);

			var widthMatch = window.matchMedia("(min-width: 1900px)").matches;
            if(widthMatch)
			{
				NoofImages = 16;
			} else if (window.matchMedia("(min-width: 1200px)") === true)
			{
				NoofImages = 12;
				}
				else if (window.matchMedia("(min-width: 992px)") === true)
			{
				NoofImages = 8;
				}
				else if (window.matchMedia("(min-width: 768px)") === true)
			{
				NoofImages = 3;
				}
				WCFJSON();
				/*populateImage(0);	*/
       
        });
	function () {
        WCFJSON();
    }
);
    function WCFJSON() {
        alert("13");
        CallService();
    }

    function CallService() {
        $.ajax({
            type: "GET", 
            dataType: "json",
            url: "http://localhost/MobileService/MobileService.svc/GetCategoryList", 
            success: function (msg) {
                ServiceSucceeded(msg);
            },
            error: ServiceFailed
        });
    }

    function ServiceFailed(result) {
        alert('Service call failed: ' + result.status + '' + result.statusText);
            }
    function ServiceSucceeded(result) {
        alert("succeeded for" + result.length);

    }

        function someOtherFunc(data) {
            alert(data.length);
        }

        function getData() {
            return $.ajax({
                url: 'http://192.168.1.11/ServicesFound/ContentRESTFULService.svc/GetContentList/',
                type: 'GET'
            });
        }

        function handleData(data /* , textStatus, jqXHR */) {
            alert("suc" +data);
            //do some stuff
        }

          