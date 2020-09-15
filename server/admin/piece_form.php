<html>
<head>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <header>
        <a href="index.php">&lt;&lt;</a>
        <span><? if ($piece_id) { echo "Editing Piece $piece_id"; } else { echo "New Piece for <i>$project[project_title]</i>"; } ?></span>
    </header>
    <form action="piece.php" method="post">
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
                <td colspan="2" align="center"><input type="submit" value="Save" /></td>
            </tr>
        </table>
    </form>
</body>
</html>
