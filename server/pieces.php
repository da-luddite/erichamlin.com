<?php
//ini_set('display_errors', 1);

require('domain.php');
require('../db.php');

$sql = <<<SQL

SELECT pieces.*,
    projects.project_title,
    projects.project_id,
    projects.project_sequence,
    clients.client_id,
    clients.client_name,
    clients.client_sequence,
    images.image_id,
    images.image_path,
    images.image_description,
    images.image_sequence
FROM erichamlin_pieces pieces
LEFT JOIN erichamlin_projects projects ON pieces.project_id = projects.project_id
LEFT JOIN erichamlin_clients clients ON projects.client_id = clients.client_id
LEFT JOIN erichamlin_images images ON pieces.piece_id = images.piece_id
WHERE pieces.visible = 1

SQL;

$result = $mysqli->query($sql);

$pieces = [];
while($row = $result->fetch_assoc()) {
    if ($pieces[$row['piece_id']]) {
        $piece = $pieces[$row['piece_id']];
    } else {
        $piece =
            new Piece(
                $row['piece_id'],
                $row['title'],
                $row['description'],
                $row['media'],
                $row['piece_sequence'],
                $row['date_created'],
                $row['thumbnail_path'],
                $row['dimensions'],
                $row['project_title']
            );
        $pieces[$row['piece_id']] = $piece;
    }
    $piece->addImage($row['image_path'], $row['image_description']);
}

header('Content-type: application/json');
echo json_encode(array_values($pieces));

?>
