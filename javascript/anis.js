function downloadResume() {
    // Get the filename of the PDF to be downloaded
    var filename = '../pdf/CV de Mohamed Anis Chebaane (1).pdf'; // Replace this with the actual path to your PDF file
    var tempLink = document.createElement('a');
    tempLink.href = filename;
    tempLink.setAttribute('download', 'resume.pdf');
    tempLink.click();
}




function sendEmail(event) {
    event.preventDefault();
    
    // You can add more validation here if needed

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Use a `mailto` link to open the user's email client
    const mailtoLink = `mailto:anis.chebaane13@gmail.com?subject=New%20Contact%20Form%20Submission%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Show the success message
    document.getElementById('successMessage').style.display = 'block';
  }



