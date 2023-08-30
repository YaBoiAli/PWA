const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Store the event for later use

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior (automatically showing the install prompt)
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Display a custom "Install" button or UI element
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    // Clear the deferred prompt
    deferredPrompt = null;
    // Hide the custom "Install" button
    butInstall.style.display = 'none';
  }
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App was successfully installed');
});
