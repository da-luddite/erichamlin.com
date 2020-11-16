<?php
require($_SERVER['DOCUMENT_ROOT'] . "/db.php");
require("DAO.php");

const PIECES_IMAGE_PATH = "../images/pieces/";

if ($_POST['piece_id']) {
    $piece_id = $_POST['piece_id'];
    $project_id = $_POST['project_id'];

    $piece = [];
    $piece['title'] = $_POST['title'];
    $piece['description'] = $_POST['description'];
    $piece['media'] = $_POST['media'];
    $piece['date_created'] = $_POST['date_created'];
    $piece['dimensions'] = $_POST['dimensions'];

    $images = $_POST['images'];

    foreach($_FILES as $imageId => $file) {
        if ($file['size'] > 0) {
            copy($file['tmp_name'], PIECES_IMAGE_PATH . $file['name']);
            $images[$imageId]['image_path'] = $file['name'];
        }
    }

    foreach($images as $imageId => $image) {
        replaceImage($imageId, $image['image_path'], $image['image_description'], $image['image_sequence'], $piece_id);
    }

    if ($_POST['deletedImages']) {
        deleteImages($_POST['deletedImages']);
    }

    list($piece, $images) = getPiece($piece_id);

    include("piece_form.php");

} elseif ($_GET['piece_id']) {
    $piece_id = $_GET['piece_id'];
    list($piece, $images) = getPiece($piece_id);
    include('piece_form.php');

} elseif ($_GET['project_id']) {
    $project_id = $_GET['project_id'];

    $select_project_sql = "
        SELECT project_title
        FROM erichamlin_projects
        WHERE project_id=$project_id
    ";
    $project_result = $mysqli->query($select_project_sql);
    $project = $project_result->fetch_assoc();

    include('piece_form.php');

} else {
    ?><a href="index.php">home</a><?
}
