

function addImage(imageId, imagePath="", imageDescription="", imageSequence=0) {
  if(!imageId) {
    imageId = Math.round((Math.random() * 100)) + 10000;
  }
  let tr = document.createElement("tr");
  tr.id = `image-${imageId}`;
  tr.innerHTML = `
                <input type="hidden" name="images[${imageId}][image_sequence]" value="${imageSequence}"/>
                <input type="hidden" name="images[${imageId}][image_path]" value="${imagePath}"/>
                <td>
                    <img src="/images/pieces/${imagePath}" height="100"/>
                    <br/>
                    <input type="file" id="file-${imageId}" name="${imageId}" accept="image/png, image/jpeg"/>
                </td>
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
