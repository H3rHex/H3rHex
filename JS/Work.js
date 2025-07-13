class proyect {
    constructor(tittle, body, img, linkGit, linkWeb) {
        this.tittle = tittle; // Title of the project
        this.body = body; // Description of the project
        this.img = img; // Image associated with the project
        this.linkGit = linkGit; // GitHub link for the project
        this.linkWeb = linkWeb; // Web link for the project (if any)
    }

    createElement() {
        // Create a section element for the project
        let workSection = document.createElement('section');
        workSection.attributes.setNamedItem(document.createAttribute('project')); // Set an empty id attribute
        workSection.setAttribute('project', this.tittle); // Set an empty project attribute
        workSection.classList.add('workSection');

        // Create and append the title
        let workTitle = document.createElement('h3');
        workTitle.classList.add('workTitle');
        workTitle.textContent = this.tittle;
        workSection.appendChild(workTitle);

        // Create and append the image
        let workImage = document.createElement('img');
        workImage.classList.add('workImage');
        workImage.src = `../ASSETS/OTHER/PROJECT-MEDIA/${this.img}`;
        workImage.setAttribute("loading", "lazy");
        workSection.appendChild(workImage);

        // Create and append the description
        let workDescription = document.createElement('p');
        workDescription.classList.add('workDescription');
        workDescription.textContent = this.body;
        workSection.appendChild(workDescription);

        // Create links container
        const linksContainers = document.createElement('div');
        linksContainers.classList.add('linksContainer');
        workSection.appendChild(linksContainers);

        // Create and append GitHub link
        let gitLink = document.createElement('a');
        gitLink.classList.add('wLinks');
        gitLink.href = this.linkGit;

        //GIT ICON
        const gitIcon = document.createElement('img');
        gitIcon.classList.add('wLinks');
        gitIcon.src = `../ASSETS/OTHER/SVG-ICONS/github-svgrepo-com.svg`;
        gitLink.appendChild(gitIcon);
        linksContainers.appendChild(gitLink); // <--- AQUI SE AÑADE EL ENLACE DE GITHUB

        // Modificación en la condición y la asignación del icono web
        if (this.linkWeb) { // Condición más robusta para comprobar si linkWeb tiene un valor
            let webLink = document.createElement('a');
            webLink.classList.add('wLinks');
            webLink.href = this.linkWeb;

            let webIcon = document.createElement('img'); // Crear un NUEVO elemento img para el icono web
            webIcon.classList.add('wLinks');
            webIcon.src = `../ASSETS/OTHER/SVG-ICONS/browser-svgrepo-com.svg`; // Asignar la ruta al icono web
            webLink.appendChild(webIcon);

            linksContainers.appendChild(webLink); // <--- AQUI SE AÑADE EL ENLACE WEB
        }
        return workSection; // Return the created section element
    }
}

async function loadData() {
    // Fetch the JSON data from the specified path
    try {
        const response = await fetch('../SUB-PAGES/Work-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} `);
        }
        const data = await response.json();
        return data; // Return the parsed JSON data
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
        return {}; // Return an empty object in case of error
    }


}

function loadWork(data) {
    if (!data || Object.keys(data).length === 0) {
        console.error('No data available to load work sections.');
        return; // Exit if no data is available
    }

    try {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const projectData = data[key];
                const project = new proyect(
                    projectData.Tittle, // Title of the project
                    projectData.Body, // Description of the project or body text
                    projectData.Img, // Image file name for the project
                    projectData.LinkGit, // GitHub link for the project
                    projectData.LinkWeb // Web link for the project (if any)
                );
                const projectsContainer = document.getElementById('projectsContainer'); // Get the container where projects will be displayed
                if (projectsContainer) {
                    const projectElement = project.createElement(); // Create the project element
                    projectsContainer.appendChild(projectElement); // Append the project element to the container
                }
            }
        }
    } catch (error) {
        console.error('Error loading work sections:', error);
    }

}

// Initialize the work sections when the document is ready
document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData(); // Load the data from the JSON file
    loadWork(data); // Load the work sections with the fetched data
}
);
