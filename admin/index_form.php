<html>
<head>
    <link rel="stylesheet" href="admin.css" type="text/css" />
</head>

<body>
<table>
    <? foreach($clients as $client) { ?>
        <tr class='client-row' onclick="editClient(<?=$client['client_id']?>);">
            <td><?=$client['client_name']?>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="3" class="project-container"><table style="width: 100%;">
                    <? foreach($client['projects'] as $project) { ?>
                        <tr class='project-row' onclick="editProject(<?=$project['project_id']?>);">
                            <td><?=$project['project_title']?>&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="piece-container">
                                <table style="width: 100%;">
                                    <? foreach($project['pieces'] as $piece) { ?>
                                        <tr class='piece-row' onclick="editPiece(<?=$piece['piece_id']?>);">
                                            <td><?=$piece['title']?></td>
                                        </tr>
                                    <? } ?>
                                </table></td>
                        </tr>
                    <? } ?>
                </table></td>
        </tr>
    <? } ?>
</table>

<script>

    function editClient(clientId) {
        window.location = "client.php?client_id=" + clientId;
    }

    function editProject(projectId) {
        window.location = "project.php?project_id=" + projectId;
    }

    function editPiece(pieceId) {
        window.location = "piece.php?piece_id=" + pieceId;
    }
</script>

</body>
</html>
