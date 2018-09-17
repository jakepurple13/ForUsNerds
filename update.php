<?php
    $data = $_POST['data'];
    //$file = fopen("updated1.json", "w+");
    $fileToUse = $_POST['fileToUse'];

    $obj = (object) [
        'version' => 'some string',
        'link' => $data==null ? [ 1, 2, 3 ] : $data,
        'devNotes' => "adsf"
    ];

    //$post = json_decode($data, true);
    //file_put_contents($file, $data);
    
    $fp = fopen($fileToUse, 'w+');
    //fwrite($fp, "dask;lfjak;lsdfj");
    //fwrite($fp, "\n\n");
    $json_string = json_encode($obj, JSON_PRETTY_PRINT);
    fwrite($fp, $data);
    //fwrite($fp, "\n\n");
    //fwrite($fp, "\n\n");
    //fwrite($fp, $obj);
    //echo json_decode($data)//"asdf\n" + $data + "\n--\n" + $data2
    echo json_encode($obj);
?>
