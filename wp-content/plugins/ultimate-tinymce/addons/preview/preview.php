<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
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
<script type="text/javascript" src="jscripts/embed.js"></script>
<script type="text/javascript"><!--
document.write('<base href="' + tinyMCEPopup.getWindowArg("base") + '">');
// -->
</script>
<title>{#preview.preview_desc}</title>
</head>
<body id="content">
<script type="text/javascript">
	document.write(tinyMCEPopup.editor.getContent());
</script>
</body>
</html>
