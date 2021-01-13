
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="imagetoolbar" content="no" />
<meta http-equiv="cache-control" content="no-cache">
<link href="../../control/css/global.css" rel="stylesheet" type="text/css" />
<link href="../../control/css/lightbox.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" type="text/JavaScript" src="../../control/js/common.js"></script>
<script language="JavaScript" type="text/JavaScript" src="../../control/js/flash.js"></script>
<script type="text/javascript" src="../../control/js/ticker.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="../../css/lightwindow.css" />
    
	<!-- JavaScript -->
	<script type="text/javascript" src="../../javascript/prototype.js"></script>
	<script type="text/javascript" src="../../javascript/effects.js"></script>
	<script type="text/javascript" src="../../javascript/lightwindow.js"></script>

<script language="javascript" type="text/javascript">
function toggleLayer( whichLayer ){  
var elem, vis;  
if( document.getElementById ) // this is the way the standards work    
elem = document.getElementById( whichLayer );  
else if( document.all ) // this is the way old msie versions work      
elem = document.all[whichLayer];  
else if( document.layers ) // this is the way nn4 works    
elem = document.layers[whichLayer];  
vis = elem.style;  // if the style.display value is blank we try to figure it out here  
if(vis.display==''&&elem.offsetWidth!=undefined&&elem.offsetHeight!=undefined)   
 vis.display = (elem.offsetWidth!=0&&elem.offsetHeight!=0)?'block':'none';  
 vis.display = (vis.display==''||vis.display=='block')?'none':'block';
}
</script>


<script type="text/javascript" src="../../control/js/slideshow.js"></script>

<title>Optima Legal - about us</title>
</head>

<body id="about_us">
	<div id="wrap">
		
		<div id="header">
	<a href="index.asp"><h1 title="Welcome to Optima Legal"><span>Optima Legal</span></h1></a>
	<p class="topTel" ></p>
	<hr />
</div><!-- end Header -->
		
		<div id="inner">
			
			<div id="innerRight">
				<h2 id="t_about">About Us</h2>
				
				
				<div id="quote" style="height:300px; padding:0; margin:0 0 0 10px; background:url(../../images/quotes/quote7.gif) top left no-repeat transparent;">&nbsp;</div>
				<p class="lead">Optima Legal is a multi-jurisdictional law firm providing a range of litigation and legal property services for a variety of business sectors throughout England, Wales and Scotland. Previously a division of DLA Piper, we have decades of experience in providing first class services delivered through our established legal heritage.  </p>

				<p>With over 650 employees based across three offices in the UK, we have invested heavily in creating innovative new services for our clients, delivered through a combination of first class I.T. infrastructure and excellent people. </p>
				
				<p>The firm has ambitious growth plans and is going through a period of significant expansion, both organically and by a merger partnership approach. We know that this innovative and strategic vision of business growth enables our clients to gain real benefit from a truly experienced multi-jurisdictional and multi-service legal partner.</p>
				
				<div class="breaker"></div>
				<h3>Our Merger Dateline</h3>
				<p>Below is a summary of the journey from May 2006 when DLA Direct began trading as Optima Legal. Click an image below for our interactive timeline.</p>
				
				
				<a href="../flash/timeline.swf?pSection=&sSection=&tSection=" class="lightwindow" id="timeline" params="lightwindow_width=777,lightwindow_height=300,lightwindow_loading_animation=false,lightwindow_iframe_embed=true" title="Our Merger Dateline" ><img src="../../images/about/timeline3.jpg" alt="our merger dateline" /></a>
				<div class="breaker"></div><!-- end breaker to clear innerr8ight  -->
				<hr />
			</div><!-- end InnerRight -->
			
			
			
			<div id="innerLeft">
				
				<div id="navigation">
	<h2 title="Optima Legal Options"><span>Navigation</span></h2>
	<ul>
		<li><a href="index.asp" title="Optima Legal Home" >Home</a>
        	<!--<ul>
            	<li><a href="about.asp" title="about <\%=clientName%>" <\% if  UCASE(secondarySection) =  UCASE("about_us") then %>class="navon"<\% end if %>>About Us</a></li>
        		<li><a href="full_360.asp" title="Legal solutions" <\% if  UCASE(secondarySection) =  UCASE("full_360_&deg;") then %>class="navon"<\% end if %>>360<sup>o</sup> Legal solutions</a></li>
        		<li><a href="sectors.asp" title="Sectors" <\% if  UCASE(secondarySection) =  UCASE("sectors") then %>class="navon"<\% end if %>>Sectors</a></li>
        		<li><a href="our_clients.asp" title="Clients" <\% if  UCASE(secondarySection) =  UCASE("our_clients") then %>class="navon"<\% end if %>> Clients</a></li>
        		<li><a href="values_promises.asp" title="Our promises and values" <\% if  UCASE(secondarySection) =  UCASE("promises_and_values") then %>class="navon"<\% end if %>>Our business values</a></li>
             </ul>-->
       	</li>
        <!--<li><a href="about.asp" title="about Optima Legal" class="navon">About Us</a></li>-->
		<li><a href="our_people.asp" title="Our People" >Our People</a></li>
		<li><a href="online_case_tracking.asp" title="online case tracking" >Online Case Tracking</a></li>
		<li><a href="news_and_insight.asp" title="latest Optima Legal news" >News and Publications</a></li>
		<li><a href="contact.asp" title="Contact Optima Legal" >Contact Us</a></li>
	</ul>
	<hr />
</div><!-- end navigation --><!--

<\%

if(ourPeople <> 1) then
sqlNews = "SELECT * FROM NewsItems ORDER BY NewsDate DESC"
else
sqlNews = "SELECT TOP 1 * FROM NewsItems ORDER BY NewsDate DESC"
end if

' :: CREATE RECORDSET
Set RsNews = Server.CreateObject("ADODB.Recordset")
RsNews.open sqlNews, objConn,3,3
if RsNews.RecordCount > 1 then
%>
<script type="text/javascript">
/*Example message arrays for the two demo scrollers*/
var pausecontent2=new Array();
<\%
counter1 = 0
Do While NOT RsNews.EOF
%>	
pausecontent2[<\%=counter1%>]='<a href="latest_details.asp?id=<\%=RsNews("Index")%>" class="imgBtn"><img src="../cms/uploads/small/<\%=RsNews("SmallPic")%>" /></a><p><\%=Left(RsNews("Title"), 50)%>...</p><a class="readMore" href="latest_details.asp?id=<\%=RsNews("Index")%>">READ MORE</a>';
<\%
counter1 = counter1 + 1
RsNews.MoveNext
Loop

end if
%>
</script>



<div class="leftList1">
<div class="leftListTop"></div>
	<h2 title="<\%=clientName%> News"><span>Optima Legal News</span></h2>
	
	<\% if RsNews.RecordCount > 1 then %>
	<script type="text/javascript">
	//new pausescroller(name_of_message_array, CSS_ID, CSS_classname, pause_in_miliseconds)
	new pausescroller(pausecontent2, "pscroller2", "pscroller3", 3000)
	</script>
	<\% else %>
	<a href="latest_details.asp?id=<\%=RsNews("Index")%>" class="imgBtn"><img src="../cms/uploads/small/<\%=RsNews("SmallPic")%>" /></a><p><\%=Left(RsNews("Title"), 55)%>...</p><a class="readMore" href="latest_details.asp?id=<\%=RsNews("Index")%>">READ MORE</a>
	<\% end if %>
	<hr />
</div> -->
<div id="clientflash">
ddd
</div>
<script type="text/javascript">
  var FO = { movie:"../flash/clients.swf", width:"181", height:"102",
  majorversion:"6", build:"0", flashvars:"", wmode:"transparent" };
  UFO.create(FO, "clientflash");
</script>



				
			</div><!-- end InnerLeft -->
			
			
			<div class="breaker"></div><!-- end breaker to clear inner floats -->
		</div><!-- end Inner -->
		
		<div id="footer">
	<ul>
		<li class="first"><a href="index.asp" title="home">Home</a></li>
		<li><a href="about.asp" title="About  Optima Legal">About</a></li>
		<li><a href="latest_news.asp" title="Latest News">Latest News</a></li>
		<li><a href="online_case_tracking.asp" title="Online Case Tracking">Online Case Tracking</a></li>
		<li><a href="contact.asp" title="Contact Us">Contact Us</a></li>
		<li><a href="privacy.asp" title="Privacy Policy">Privacy Policy</a></li>
		<li><a href="terms.asp" title="Terms &amp; Conditions">Terms &amp; Conditions</a></li>
	</ul>
	<p>Registered Office: Optima Legal Services Ltd, Arndale House, Charles Street, Bradford, BD1 1UN. Registered in England and Wales (Registered No. 05781608, VAT No. 882657186). Regulated by the Solicitors Regulation Authority in accordance with the Solicitors' Code of Conduct 2007 which can be viewed at www.sra.org.uk</p>
 <br />
<p>Optima Legal Services Ltd maintains professional indemnity insurance arranged by Lockton Companies International, Lockton House, 6 Bevis Marks, London EC3A 7AF. Details of the insurers and the territorial coverage are available for inspection at our registered office.</p>

	<hr />
</div><!-- end footer --> 

	</div><!-- end Wrap -->
</body>
</html>
