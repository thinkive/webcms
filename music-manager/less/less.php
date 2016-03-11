<?php
	set_time_limit(0);
	require_once("lessc.inc.php");
	$input = $_SERVER['REQUEST_URI'];
	// see if it from direct request
	if(strpos($input, '?')){
		$q = explode("?", $input);
		$input = $q[1];
	}
	$lc = new lessc($input);
	try{
		if($input == "app.less"){
			$fp = fopen('../css/app.css',"wb");
			fwrite($fp, $lc->parse());
			fclose($fp);
		}else{
			header("Content-Type: text/css");
			echo $lc->parse();
		}		
	} catch (exception $ex){
		echo "LESSC Error:";
		echo $ex->getMessage();
	}
?>