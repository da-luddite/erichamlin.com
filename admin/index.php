<?php
require($_SERVER['DOCUMENT_ROOT'] . "/db.php");

$select_clients_sql = "
    SELECT
      clients.*
    FROM
      erichamlin_clients clients
";

$clients_result = $mysqli->query($select_clients_sql);
$clients = [];
while($client_row = $clients_result->fetch_assoc()) {
    $client_row['projects'] = [];
    $clients[$client_row['client_id']] = $client_row;
}

$select_projects_sql = "
    SELECT
      projects.*
    FROM
      erichamlin_projects projects
    ORDER BY projects.client_id
";

$projects_result = $mysqli->query($select_projects_sql);
$projects = [];
while($project_row = $projects_result->fetch_assoc()) {
    $project_row['pieces'] = [];
    $project_id = $project_row['project_id'];
    $projects[$project_id] = $project_row;
}



$select_pieces_sql = "
    SELECT
      pieces.*
    FROM 
      erichamlin_pieces pieces
    ORDER BY pieces.project_id
";

$pieces_result = $mysqli->query($select_pieces_sql);
$pieces = [];
while($piece_row = $pieces_result->fetch_assoc()) {
    $project_id = $piece_row['project_id'];
    $projects[$project_id]['pieces'][] = $piece_row;
}

foreach($projects as $project) {
    $client_id = $project['client_id'];
    $clients[$client_id]['projects'][] = $project;
}

include ("index_form.php");
