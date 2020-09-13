let config = require('./config');

class Piece {
  constructor(options) {
    this.pieceId = options.pieceId;
    this.title = options.title;
    this.description = options.description;
    this.thumbnail = new Thumbnail(options.thumbnailPath);
    this.dateCreated = (new Date(options.dateCreated)).getTime();
    this.dimensions = options.dimensions;
    this.media = options.media;
    this.category = options.category;
    this.images = [];
    this.project = new Project(options.projectTitle);
  }

  addImage(path, description) {
    this.images.push(new DisplayImage(path, description))
  }
}

class Project {
  constructor(title) {
    this.title = title
  }
}

class Image {
  constructor(url, description) {
    this.url = url;
    this.description = description;
  }
}

class DisplayImage extends Image {
  constructor(path, description) {
    super(config.site.baseUrl + '/images/pieces/' + path, description);
  }
}

class Thumbnail extends Image {
  constructor(path, description) {
    super(config.site.baseUrl + '/images/thumbnails/' + path, description);
  }
}

class Category {
  constructor(options) {
    this.categoryId = options.categoryId;
    this.categoryName = options.categoryName;
    this.categoryOrder = options.categoryOrder;
  }
}

module.exports = {Piece, Thumbnail, DisplayImage, Category};
