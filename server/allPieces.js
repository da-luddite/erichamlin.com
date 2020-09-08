let { allPiecesSql } = require('./queries');
let connection = require('./db');
let { Piece } = require('./domain');

let allPieces = [];
connection.query(allPiecesSql, (error, pieces, fields) => {
  if (error) {
    console.error('An error occurred while executing the query');
    throw error;
  }
  for (let idx in pieces) {
    let piece;
    let pieceData = pieces[idx];
    if (allPieces[pieceData.piece_id]) {
      piece = allPieces[pieceData.piece_id];
    }
    else {
      allPieces[pieceData.piece_id] = piece = new Piece({
        pieceId:       pieceData.piece_id,
        title:         pieceData.title,
        description:   pieceData.description,
        thumbnailPath: pieceData.thumbnail_path,
        dateCreated:   pieceData.date_created,
        dimensions:    pieceData.dimensions,
        category:      pieceData.category,
        media:         pieceData.media
      });
    }

    if (pieceData.image_path) {
      piece.addImage(pieceData.image_path)
    }
  }
});

module.exports = allPieces;
