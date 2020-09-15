<?php
require("../db.php");

if ($_POST['piece_id']) {
    $piece_id = $_POST['piece_id'];

    $piece = [];
    $piece['title'] = $_POST['title'];
    $piece['description'] = $_POST['description'];
    $piece['media'] = $_POST['media'];
    $piece['date_created'] = $_POST['date_created'];
    $piece['dimensions'] = $_POST['dimensions'];

    if (is_numeric($piece_id)) {
        $update_piece_sql = "
            UPDATE erichamlin_pieces
            SET 
              title='$piece[title]',
              description='$piece[description]',
              media='$piece[media]',
              date_created='$piece[date_created]',
              dimensions='$piece[dimensions]'
            WHERE piece_id=$piece_id  
        ";
        $mysqli->query($update_piece_sql);
        echo ($mysqli->error);

    } else {
        echo "nope";
    }

    include("piece_form.php");

} elseif ($_GET['piece_id']) {
    $piece_id = $_GET['piece_id'];

    $select_piece_sql = "
        SELECT *
        FROM erichamlin_pieces
        WHERE piece_id=$piece_id
    ";

    $piece_result = $mysqli->query($select_piece_sql);
    $piece = $piece_result->fetch_assoc();


    $select_piece_images_sql = "
        SELECT *
        FROM 
          erichamlin_images
        WHERE 
          piece_id=$piece_id
    ";

    $images_result = $mysqli->query($select_piece_images_sql);
    $images = [];
    while($image = $images_result->fetch_assoc()) {
        $images[] = $image;
    }
    include('piece_form.php');

} elseif ($_GET['project_id']) {
    $project_id = $_GET['project_id'];

    $select_project_sql = "
        SELECT *
        FROM erichamlin_projects
        WHERE project_id=$project_id
    ";
    $project_result = $mysqli->query($select_project_sql);
    $project = $project_result->fetch_assoc();

    include('piece_form.php');

} else {
    ?><a href="index.php">home</a><?
}
