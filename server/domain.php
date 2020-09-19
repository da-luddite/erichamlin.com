<?php
require('../config.php');

class Project {
    public $id;
    public $name;

    public function __construct($id, $name) {
        $this->id = $id;
        $this->name = $name;
    }
}

class Piece {
    public $pieceId;
    public $title;
    public $description;
    public $media;
    public $sequence;
    public $dateCreated;
    public $thumbnail;
    public $dimensions;
    public $projectTitle;
    public $images = [];

    public function __construct(
        $id,
        $title,
        $description,
        $media,
        $sequence,
        $date_created,
        $thumbnail_path,
        $dimensions,
        $projectTitle
        ) {
            $dateTimeCreated = DateTime::createFromFormat('Y-m-d' , $date_created);

            $this->pieceId = $id;
            $this->title = $title;
            $this->description = $description;
            $this->media = $media;
            $this->sequence = $sequence;
            $this->dateCreated = $dateTimeCreated->getTimestamp() * 1000;
            $this->thumbnail = new Thumbnail($thumbnail_path);
            $this->dimensions = $dimensions;
            $this->projectTitle = $projectTitle;
    }

    function addImage($path, $description) {
        $this->images[] = new DisplayImage($path, $description);
    }
}

class Image {
    public $url;

    public function __construct($url) {
        $this->url = $url;
    }
}

class DisplayImage extends Image {
    public $description;

    public function __construct($path, $description) {
        parent::__construct(BASE_URL . '/images/pieces/' . $path);
        $this->description = $description;
    }
}

class Thumbnail extends Image {
    public function __construct($path) {
        parent::__construct(BASE_URL . '/images/thumbnails/' . $path);
    }
}

?>
