<?php
require($_SERVER['DOCUMENT_ROOT'] . '/Snoopy-2.0.0.tar.gz/Snoopy.class.php');

$snoopy = new Snoopy;

$snoopy->fetch('https://datalab.naver.com/');

date_default_timezone_set('Asia/Seoul');

$today = date("Y-m-d");
$arr = explode('-', $today);
$temp = $arr[2];
$temp = intval($temp) - 1;

$temp = sprintf('%02d', $temp);

$day = intval(date("w")) - 1;
$week = array("일", "월", "화", "수", "목", "금", "토");

$yesterday = $arr[0] . '.' . $arr[1] . '.' . $temp . '.(' . $week[$day] . ')';
echo $yesterday;

$content = explode("<span class=\"title_cell\">" . $yesterday, $snoopy->results);
$content = explode("</ul>", $content[1]);

echo '<style> ul {list-style:none;} </style>';
echo $content[0];
