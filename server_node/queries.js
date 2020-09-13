exports.allPiecesSql = `
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
  `;

exports.categoriesSql = `
  SELECT cat.*
  FROM erichamlin_categories cat
  ORDER BY cat.category_order ASC
  `;
