<?php

class Project {
    public $id;
    public $name;

    public function __construct($id, $name) {
        $this->id = $id;
        $this->name = $name;
    }
}

class Piece {
    public $id;
    public $title;
    public $description;
    public $media;
    public $sequence;
    public $date_created;
    public $thumbnail_path;
    public $dimensions;

    public function __construct($id, $title, $description, $media, $sequence, $date_created, $thumbnail_path, $dimensions) {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->media = $media;
        $this->sequence = $sequence;
        $this->date_created = $date_created;
        $this->thumbnail_path = $thumbnail_path;
        $this->dimensions = $dimensions;
    }
}

?>
