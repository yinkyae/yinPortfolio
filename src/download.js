function downloadFile() {
    // Specify the file URL
    var fileUrl = './';

    // Create a virtual link
    var a = document.createElement('a');
    a.href = fileUrl;

    // Set the download attribute with the desired file name
    a.download = 'example.txt';

    // Append the link to the document
    document.body.appendChild(a);

    // Trigger a click on the link to initiate the download
    a.click();

    // Remove the link from the document
    document.body.removeChild(a);
  }