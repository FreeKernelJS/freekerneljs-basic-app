<?php

$list = array();

array_push($list, array('id' => 1,  'name' => 'Item 1', 'description'  => 'Routing and sharing data between different sections in the application.'));
array_push($list, array('id' => 2,  'name' => 'Item 2', 'description'  => 'Modular architecture that can be extended.'));
array_push($list, array('id' => 3,  'name' => 'Item 3', 'description'  => 'Best practices for performance.'));
array_push($list, array('id' => 4,  'name' => 'Item 4', 'description'  => 'Responsive UI'));
array_push($list, array('id' => 5,  'name' => 'Item 5', 'description'  => 'Http service'));
array_push($list, array('id' => 6,  'name' => 'Item 6', 'description'  => 'Localization'));
array_push($list, array('id' => 7,  'name' => 'Item 7', 'description'  => 'Sass CSS preprocessors.'));
array_push($list, array('id' => 8,  'name' => 'Item 8', 'description'  => 'Documentation format and configurations, to be used with ngdoc.'));
array_push($list, array('id' => 9,  'name' => 'Item 9', 'description'  => 'Unit testing with Jasmine.'));
array_push($list, array('id' => 10, 'name' => 'Item 10', 'description' => 'HTML 5 structure.'));

echo json_encode($list);
?>