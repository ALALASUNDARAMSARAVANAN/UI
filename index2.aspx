<%@ Page Title="Hello" Language="CS" %>
<!doctype html>
<head>
<meta charset="utf-8"  />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>My Page</title>
<meta name="viewport" content="width=device-width height=device-height initial-scale=1">
<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css">
<link rel="stylesheet" href="css/jquery-mobile-local.css">
  <style type="text/css">
	
html, body {
    height: 100%;
}
.first
{
	height : 30vw;
	width:  100vw;
	background-color: rgba(17,43,66,1.00);
}
.first2{
   width:  30vw;
}
.first3{
  width:  70vw;
}
.first5{
	width: 100vw;
	height: 20vw;
		background-color: rgb(5,24,43) ;
	border: 0pt !important;
	cellspacing: 0pt !important;
	cellpadding: 0pt !important;   
}
.first7
{
    background-color: rgb(3,12,22) ;
	border:0pt  !important;
	cellspacing: 0pt !important;
	cellpadding: 0pt !important;
    height:10vw;	
	display:block;
	
}
.first6
{
  width:100px;
  word-wrap:break-word;
  overflow:hidden;
  line-height:.9;
  font-size:14px;
 }
.fourth
{
   display: table-data;
   padding:0px;
}		
.box1
{
  position:absolute;
  top:0;
}	

.first3
{
position:relative;
}
.first4
{
 width:40px;
 	background-color: rgb(5,24,43) ;
	height:10vw;
}
 .ninth
	 {
        height:400px;
		width:400px;
        margin-top:calc((30vw - 400px)/2);
        margin-left:calc((30vw - 400px)/2);
		
		vertical-align:middle
 }	
 .eleventh
		 { width:100%;
		  height:calc((30vw -  400px)/2);
         }
.cation-height{
 height:30px;
 width:100%;
 background-color: rgb(3,12,22) ;
}		 
		  .fourteenth
			   {
				   float:right;
				   width:126px;
				   height:25px;
				   margin-right:60px
				}
		 .eon-back-color-4
						{
						background-color: rgb(189,191,55) !important;
						font-size:21pt !important;
						color:white !important;
						font-family:open sans !important; 
						margin:auto;
						}
		 .thirteenth
		   {
	font-family: open sans bold;
	font-size: 27pt;
	color: white;
	text-align: left;
	bottom: 0;
	margin-top: 3vh ;
	line-height: 1.4286;
			   }
        .sixteenth
				{
			    height:calc(30vw - ( ((30vw -  400px)/2)+ 1vh + 5vh));
				width:70vw;
				text-align: justify;
				top:0;
		    	}
              .twenty
				{
				   font:open sans;
				   font-size:12pt;
				   color:white;
				   width:70vw;
				   top:0;
				   
             	}

                .twentyone
					{
				   font:Courier New;
				   font-size:20px;
				   color:white;
				   	}
					     .seventh{
						 height:100px;
						 width:100px;
						 opacity: 0.6;
                      display:block;						 
							}
						.seventh-after
						{
						
						height:100px;
						width:100px;
						opacity: 1.0;
                        display:block;
                        
						}
	                    .eon-back-color-3
						{
background-color: rgb(3,12,22) ;
						}
						.eon-caption
						{
						font-size:12pt;
						color:white;
						font-family: open sans;
						background-color: rgba(17,43,66,1.00);
						}
						.headerE
						{
						font-size:14pt;
						color:white;
						font-family: open sans;
						margin-left:100px;
						}
						.rating{
						line-height:.9;
                        font-size:14px;
						}
						.rowwidth{
						 width:100%;
						}
						
						
			
  </style>	

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></scripts>
<![endif]-->
</head>
<html>
<body>
<form id="Form1" method="post" runat="server">
<asp:ScriptManager runat="server" ID="ScriptManager1">
	<Scripts>
		<asp:ScriptReference
			Path="~/Scripts/jquery-2.1.4.min.js"  />
			
		<asp:ScriptReference
			Path="~/Scripts/jquery.mobile-1.4.5.min.js"  />
        <asp:ScriptReference
			Path="~/Scripts/jquery.mobile-local.js"  />			
	</Scripts>
    <Services>
	   
    </Services>	
</asp:ScriptManager>

<div data-role="page"  id="gallery" data-fullscreen="true"  data-theme="b">
  <div data-role="header" data-position="fixed">
    <div class="headerE">Select one 3D Model for your scene</div>
    <a class="ui-btn ui-icon-bars ui-btn-icon-notext ui-corner-all" href="#bars">No text</a> 
	<a class="ui-btn ui-icon-search ui-btn-icon-notext ui-corner-all" href="#">No text</a> 
	</div>
  <!-- /header -->
  
  <div data-role="main"  class="ui-content " data-fullscreen="true" >
    
    <table data-role="table"  class="ui-responsive first" id="myTable2">
	<thead>
	<tr> 
	  
	</tr>
	</thead>  
    <tbody>
     <tr>
	     <td class="first2" id="selectedimg" > <img src="img/image010.png" class="ninth ui-corner-all" alt="Placeholder image"></td>
		 <td class="first3">
			 <div class="eleventh">  </div>
			 <div class="eleventh"> 
			         <a class="ui-btn btn-default fourteenth  eon-back-color-4 ui-corner-all"  href="#">CREATE</a>
			         <div  class="thirteenth " id="ContentName" >Synapsis</div>
					 
			 </div>
			 <div class="sixteenth"> <p class="twenty " id="mydesc" >A neuron is an electrically excitable cell that processes and transmits information by electrical and chemical signaling. Chemical signaling occurs via synapses, specialized connections with other cells. Neurons connect to each other to form networks. Neurons are the core components of the nervous system, which includes the brain, spinal cord, and peripheral ganglia. A number of specialized types of neurons exist: sensory neurons respond to touch, sound, light and numerous other stimuli affecting cells of the sensory organs that then send signals to the spinal cord and brain. Motor neurons receive signals from the brain and spinal cord, cause muscle contractions, and affect glands. Interneurons connect neurons to other neurons within the same region of the brain or spinal cord
			 </p> </div>
		 </td>
		 <td class="first4"> 
		 </td>
	 </tr>
	   
	</tbody>
  </table>
	  <table data-role="table"  data-mode="reflow" class="ui-responsive ui-shadow first5" id="myTable" >
	<thead>
	<tr> 
	</tr>
	</thead> 
   	 
    <tbody>
	                        <tr class="eon-back-color-3 rowwidth" >
							  <div class="cation-height"> RECENT MODELS </div>
							</tr>
	                        <tr class="first7" id="Imagelist">
							<td class="first4"> 
		                    </td>
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
            
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
            
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
            
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
            
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
                                <td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
								<td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
								<td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
								<td >
									<div class=" fourth twentyone eon-back-color-3"> <img   src="img/image010.png" class="ui-corner-all img-responsive seventh-after" alt="Placeholder image"><p class="first6">Name</p><div  class="rating"><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>
									</div>
                                </td>
								
								<td class="first4"> 
		                        </td>
								<td class="first4"> 
		                        </td>
                                
            
      </tr>
	</tbody>
  </table>
        		
      
      
    </div>
      
      <!-- /content --> 
      
      <!-- /ui-body demo page--> 
      
      <!-- /content --> 

    <div data-role="footer" data-position="fixed">
      <h4></h4>
    </div>
	
    <!-- /footer -->
    <div data-role="panel"  data-display="overlay" id="bars">
      <ul data-role="listview"  data-inset="true">
        <li><a href="#">Astronomy</a></li>
        <ul data-role="listview" data-inset="true">
          <li><a href="#">Astronomy</a></li>
        </ul>
        <li><a href="#">Space</a></li>
      </ul>
      
      <!-- panel content goes here --> 
    </div>
    <!-- /panel --> 
    
  
</div><!-- /page --> 
  
</form>
</body>
</html>