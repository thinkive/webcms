<?php

// Scan all the photos in the folder
$files = glob('assets/photos_preview/large/*.jpg');

$data = array();
foreach($files as $f){
	$data[] = array(
		'thumb' => str_replace('large', 'thumbs', $f),
		'large' => $f,
		'title'=>$f
	);
}

// Duplicate the elements a few times, so that we have what to paginate in the demo.
// You most certainly wouldn't want to do this with real photos.
$data = array_merge($data, $data);
$data = array_merge($data, $data);
$data = array_merge($data, $data);

header('Content-type: application/json');

echo json_encode(array(
	'data' => $data,
));
?>