const butInstall = document.getElementById('buttonInstall');

// The install button appears before the installation happens
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
});

// Prompt the user when they press either one of the installation buttons
butInstall.addEventListener('click', async () => {
    
    const promptEvent = window.deferredPrompt;

    if(!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.style.visibility = 'hidden';
});

// After the installation, signal completion
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    console.log('App is installed.', 'appinstalled', event);
});
