<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Clker.com - The online royalty free public domain clip art</title>
    <?php
	$file = dirname(__FILE__);
	$file = substr($file, 0, stripos($file, "wp-content") );
	require( $file . "/wp-load.php");
	$url = includes_url();
	echo '<script type="text/javascript" src="'.$url.'js/tinymce/tiny_mce_popup.js'.'"></script>';
	?>
    <!--
    <script type="text/javascript" src="../../tinymce/tiny_mce_popup.js"></script>
    -->
    <script type="text/javascript" src="js/dialog.js"></script>
  </head>
  <body>
      <form onsubmit="ClkerDialog.search();return false;" action="#">
	<table width='100%'>
	  <tr>
	    <td valign='middle'>
	      <input type="text" style='font-size:1.5em' id="search" size='30' name="searchtext"/>&nbsp;&nbsp;&nbsp;
	    </td>
	    <td valign='middle'>
	      <div class="mceActionPanel">
		<input type="button" id="insert" name="searchbut" value="Search" onclick="ClkerDialog.search();" />
		<input type="button" id="cancel" name="cancel" value="{#cancel}" onclick="tinyMCEPopup.close();" />	  
	      </div>
	    </td>
	    <td valign='middle'>
	    </td>
	  </tr>
	</table>
      </form>

    <div id='results'>
    </div>

  </body>
</html>
