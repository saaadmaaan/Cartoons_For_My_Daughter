// Function to play video
function playVideo(fileId) {
  const iframe = document.getElementById('videoIframe');
  const videoPlayer = document.getElementById('videoPlayer');

  // Set the source of the iframe to the Google Drive video embed URL
  iframe.src = `https://drive.google.com/file/d/${fileId}/preview`;

  // Show the video player
  videoPlayer.style.display = 'flex';
  console.log("Video player opened with file ID:", fileId);
}

// Function to close the video player
function closeVideoPlayer() {
  const iframe = document.getElementById('videoIframe');
  const videoPlayer = document.getElementById('videoPlayer');

  // Clear the iframe source to stop the video
  iframe.src = '';

  // Hide the video player
  videoPlayer.style.display = 'none';
  console.log("Video player closed");
}

// Ensure the video player does not display on load
document.addEventListener('DOMContentLoaded', () => {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.style.display = 'none'; // Explicitly hide the player on page load
});
