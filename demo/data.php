<?php

	error_reporting(E_ALL);
    $samples = range(1,160);
    shuffle($samples);
    $data = array('uid'=>'asdfasdfsfd','samples'=>$samples);
    die(json_encode($data));


