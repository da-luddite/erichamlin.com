<html>
<head>
    <link rel="stylesheet" href="admin.css">
    <script>
        function addImage(imageId, imagePath="", imageDescription="", imageSequence=0) {
            if(!imageId) {
                imageId = Math.round((Math.random() * 100)) + 10000;
            }
            let tr = document.createElement("tr");
            tr.id = `image-${imageId}`;
            tr.innerHTML = `
                <input type="hidden" name="images[${imageId}][image_sequence]" value="${imageSequence}"/>
                <input type="hidden" name="images[${imageId}][image_path]" value="${imagePath}"/>
                <td><img src="/images/pieces/${imagePath}" height="100" /></td>
                <td>
                    <textarea name="images[${imageId}][image_description]" style="width:400px; height:100px;">${imageDescription}</textarea>
                </td>
                <td>
                    <a href="#" onclick="deleteImage(${imageId}); return false;">Delete</a>
                </td>
            `;
            document.getElementById("images").appendChild(tr);
        }

        function deleteImage(imageId) {
            if (confirm("Do you want to delete this image?")) {
                document.getElementById('image-' + imageId).remove();

                let deleted = document.createElement("input");
                deleted.setAttribute("type", "hidden");
                deleted.setAttribute("name", "deletedImages[]");
                deleted.setAttribute("value", imageId);
                document.getElementById("piece-form").appendChild(deleted);
            }
        }
    </script>
</head>
<body>
    <header>
        <a href="index.php">&lt;&lt;</a>
        <span><? if ($piece_id) { echo "Editing Piece $piece_id"; } else { echo "New Piece for <i>$project[project_title]</i>"; } ?></span>
    </header>
    <form action="piece.php" method="post" id="piece-form">
        <input type="hidden" name="piece_id" value="<?=$piece_id?>"/>
        <input type="hidden" name="project_id" value="<?=$project_id?>"/>
        <table>
            <tr>
                <td>Title </td>
                <td><input type="text" name="title" id="title" value="<?=$piece['title']?>"/></td>
            </tr>
            <tr>
                <td>Description</td>
                <td><textarea name="description" id="description"><?=$piece['description']?></textarea></td>
            </tr>
            <tr>
                <td>Media</td>
                <td><input type="text" name="media" id="media" value="<?=$piece['media']?>"/></td>
            </tr>
            <tr>
                <td>Dimensions</td>
                <td><input type="text" name="dimensions" id="dimensions" value="<?=$piece['dimensions']?>"/></td>
            </tr>
            <tr>
                <td>Date Created</td>
                <td><input type="text" name="date_created" id="date_created" value="<?=$piece['date_created']?>"/></td>
            </tr>
            <tr>
                <td colspan="2">
                    <table id="images">

                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center"><a href="#" onclick="addImage(); return false;">Add Image</a></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><input type="submit" value="Save" /></td>
            </tr>
        </table>
    </form>
<script>
    <? foreach($images as $image) {
        extract($image);
        echo "addImage($image_id, \"$image_path\", \"$image_description\", $image_sequence);\n";
    } ?>
</script>
</body>
</html>
