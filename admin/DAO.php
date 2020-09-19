<?php

function getPiece($piece_id) {
    global $mysqli;
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

    return array($piece, $images);
}


function replacePiece($pieceId, $title, $description, $media, $dateCreated, $dimensions) {
    global $mysqli;

    if (is_numeric($pieceId)) {
        $update_piece_sql = "
            UPDATE erichamlin_pieces
            SET 
              title='$title',
              description='$description',
              media='$media',
              date_created='$dateCreated',
              dimensions='$dimensions'
            WHERE piece_id=$pieceId  
        ";
        $mysqli->query($update_piece_sql);
        echo ($mysqli->error);

    } else {
        $create_piece_sql = "
        ";
    }
}


function replaceImage($imageId, $imagePath, $imageDescription, $imageSequence, $pieceId) {
    global $mysqli;
    $check_image_sql = "SELECT image_id FROM erichamlin_images WHERE image_id=$imageId";
    $check_image_result = $mysqli->query($check_image_sql);
    if ($check_image_result->fetch_assoc()) {
        $update_image_sql = "
            UPDATE erichamlin_images
            SET
              image_path='$imagePath',
              image_description='$imageDescription',
              image_sequence='$imageSequence'
            WHERE image_id=$imageId  
            ";
        $mysqli->query($update_image_sql);
    } else {
        $create_image_sql = "
            INSERT INTO erichamlin_images
            (image_path, image_description, image_sequence, piece_id)
            VALUES('$imagePath', '$imageDescription', $imageSequence, $pieceId)
        ";
        $mysqli->query($create_image_sql);
    }
}


function deleteImages($imageIds) {
    global $mysqli;
    $deletedImageIds = implode(",", $imageIds);
    $delete_images_sql = "
            DELETE FROM erichamlin_images
            WHERE image_id IN ($deletedImageIds)
        ";
    $mysqli->query($delete_images_sql);
    echo $mysqli->error;
}
