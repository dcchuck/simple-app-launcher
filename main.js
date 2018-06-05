const apps = [
    {
        name: 'Hyperblotter',
        manifestUrl: 'http://cdn.openfin.co/demos/hyperblotter/app.json',
        icon: 'http://cdn.openfin.co/demos/hyperblotter/images/hyperblotter_icon.ico'
    },
    {
        name: 'Hello OpenFin',
        manifestUrl: 'https://cdn.openfin.co/demos/hello/app.json',
        icon: 'https://cdn.openfin.co/demos/hello/img/openfin.ico'
    }
]

const closeIcon = document.getElementById('close');

console.log(closeIcon)

closeIcon.onclick = () => { fin.desktop.Application.getCurrent().close() }

function createAppIcons() {
    const appBar = document.getElementById('app-bar');
    apps.forEach(app => {
        let newImageLink = document.createElement('img');
        newImageLink.src = app.icon;
        newImageLink.classList.add('app-link');
        newImageLink.onclick = () => {
            fin.desktop.Application.createFromManifest(app.manifestUrl, (app) => app.run());
        }
        appBar.appendChild(newImageLink);
    })
}

createAppIcons();