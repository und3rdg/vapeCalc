<?php
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);
$file = 'testFile.json';
echo($decoded);
file_put_contents($file, $content . "\r");

