<?php
if(isset($_POST["username"]) or isset($_POST["password"])){
		sleep(1);
		if($_POST["username"]=="demo" and $_POST["password"]=="demo"){ 
			$return_arr["status"]=1;		
		}else{
			$return_arr["status"]=0;	
		}  //end else
		echo json_encode($return_arr); // return value 
exit();
}
?>