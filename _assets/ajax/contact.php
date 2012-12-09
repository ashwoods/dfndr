<?php

$data = json_decode(stripslashes($_POST['formData']), true);

//Check for injection
if(preg_match('/[\r\n]/', $data['email']) || preg_match('/[\r\n]/', $data['name'])) {
	echo 'false';
} else {
	
	//Send the email
	$to = 'example@yourwebsite.com';
	$from = 'website@example.com';
	$subject = 'You have a new contact form submission';
	$body = "You have received the below contact form submission.\n\n";
	
	foreach($data as $key => $value) {
		
		if(empty($value)) {
			echo 'false';
			return false;
		}
		
		$body .= $key . ": " . $value . "\n\n";
		
	}
	
	$body .= "<< END OF MESSAGE >>";

	if(mail($to, $subject, $body, 'From: ' . $from)) {
		echo 'true';
	} else {
		echo 'false';	
	}
}
?>