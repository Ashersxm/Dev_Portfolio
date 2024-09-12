const projectData = {
  passengerPrediction: {
    title: {
      en: "Passenger Flow Prediction Web App",
      fr: "Application Web de Prédiction du Flux de Passagers"
    },
    description: {
      en: `
        <p>Passenger Flow Algorithm developed for Princess Juliana International Airport.</p>
        <p>This web application predicts passenger flow using advanced algorithms to optimize airport operations.</p>
        <p>This includes user interface, server and database integration. Programming languages here involved C#, XML, Javascript, SQL, VB, and XML.</p>
        <p>To make the prediction as reliable and accurate as possible, the webpage will communicate with various systems and extract real-time and past data.</p>
      `,
      fr: `
        <p>Algorithme de flux de passagers développé pour l'aéroport international Princess Juliana.</p>
        <p>Cette application web prédit le flux de passagers en utilisant des algorithmes avancés pour optimiser les opérations aéroportuaires.</p>
        <p>Cela comprend l'interface utilisateur, l'intégration du serveur et de la base de données. Les langages de programmation utilisés incluent C#, XML, Javascript, SQL, VB et XML.</p>
        <p>Pour rendre la prédiction aussi fiable et précise que possible, la page Web communiquera avec divers systèmes et extraira des données en temps réel et passées.</p>
      `
    },
    category: {
      en: 'Fullstack Development & Database Management',
      fr: 'Développement Fullstack & Gestion de Base de Données'
    },
    client: {
      en: "Princess Juliana International Airport",
      fr: "Aéroport International Princess Juliana"
    },
    projectDate: "July 2024 - Ongoing",
    company: "",
    companyUrl: "",
    projectURL: "https://www.sxmairport.com",
    media: `<video src="assets/video/Passenger Prediction Demo.mp4" class="img-fluid" autoplay muted loop></video>`
  },
  metroLineRennes: {
    title: {
      en: "Metro Line Management System",
      fr: "Système de Gestion de Ligne de Métro"
    },
    description: {
      en: `
        <p>Metro Line Management System maintained and enhanced for Metro Trainlines in Rennes, France.</p>
        <p>This system allows real-time management and monitoring of metro line schedules, devices, and operations. It also facilitates communication between users and operators.</p>
        <p>This includes user interface, backend, and database integration.</p>
        <p>The languages used here include C#, SQL, and VB.</p>
      `,
      fr: `
        <p>Système de gestion de ligne de métro maintenu et amélioré pour les lignes de métro à Rennes, France.</p>
        <p>Ce système permet la gestion et la surveillance en temps réel des horaires, des dispositifs et des opérations des lignes de métro. Il facilite également la communication entre les utilisateurs et les opérateurs.</p>
        <p>Cela inclut l'interface utilisateur, l'intégration backend et base de données.</p>
        <p>Les langages utilisés ici sont le C#, SQL et VB.</p>
      `
    },
    category: {
      en: 'Fullstack Development & Database Management',
      fr: 'Développement Fullstack & Gestion de Base de Données'
    },
    client: {
      en: "Keolis Rennes",
      fr: "Keolis Rennes"
    },
    company: "Enfrasys",
    companyUrl: "https://www.enfrasys.fr",
    projectDate: "March 2023 - Ongoing",
    projectURL: "https://www.keolis-rennes.com/",
    media: `<img src="assets/img/projects/Metro_de_Rennes_P1040075.png" class="img-fluid" alt="">`
  },
  metroLineLyon: {
    title: {
      en: 'Metro Line Database Management',
      fr: 'Gestion de Base de Données de Ligne de Métro'
    },
    description: {
      en: `
        <p>Metro Line Database Management system maintained and enhanced for the autonomous Metro Line D in the city of Lyon, France.</p>
        <p>The languages used here include SQL and PL/SQL. Through a professional use of Oracle SQL Developer, we were able to increase the calculation capabilities of the database to ensure that the data is more reliable, for example, calculating the distance traveled by each individual train.</p> 
        <p>This data is used to alert the operators when a train needs to be serviced, keeping the transport system secure and ensuring passenger safety.</p>
      `,
      fr: `
        <p>Système de gestion de base de données de ligne de métro maintenu et amélioré pour la ligne de métro autonome D dans la ville de Lyon, France.</p>
        <p>Les langages utilisés ici incluent SQL et PL/SQL. Grâce à une utilisation professionnelle d'Oracle SQL Developer, nous avons pu augmenter les capacités de calcul de la base de données pour garantir que les données soient plus fiables, par exemple, en calculant la distance parcourue par chaque train.</p> 
        <p>Ces données sont utilisées pour alerter les opérateurs lorsqu'un train doit être révisé, assurant ainsi la sécurité du système de transport et des passagers.</p>
      `
    },
    category: {
      en: 'Database Management',
      fr: 'Gestion de Base de Données'
    },
    client: {
      en: 'Lyon Public Transport',
      fr: 'Transports Publics de Lyon'
    },
    company: "Enfrasys",
    companyUrl: "https://www.enfrasys.fr",
    projectDate: 'September 2022 - February 2023',
    projectURL: 'https://www.tcl.fr/',
    media: `<img src="assets/img/projects/ligneD_Lyon.jpg" class="img-fluid" alt="">`
  },
  clickAndCollect: {
    title: {
      en: 'Click and Collect Demo',
      fr: 'Démonstration Click and Collect'
    },
    description: {
      en: `
        <p>Click and collect service where clients can purchase their orders and come and pick them up from the shop without having to browse through the physical store.</p>
        <p>Save time for both you and your clients!</p>
      `,
      fr: `
        <p>Service Click and Collect où les clients peuvent acheter leurs commandes et venir les retirer en magasin sans avoir à parcourir le magasin physique.</p>
        <p>Gagnez du temps pour vous et vos clients !</p>
      `
    },
    category: {
      en: 'Fullstack Development',
      fr: 'Développement Fullstack'
    },
    client: {
      en: 'Personal Project',
      fr: 'Projet de test'
    },
    company: "",
    companyUrl: "",
    projectDate: 'Summer 2024',
    projectURL: '',
    media: `<video src="assets/video/ClickNCollectDemo.mp4" class="img-fluid" alt="click-and-collect-demo" autoplay muted loop></video>`
  }
};

  
function updatePortfolioDetails(project, lang) {
  if (project) {
    // Update portfolio-description
    const projectDetails = `
      <h2>${project.title[lang]}</h2>
      ${project.description[lang]}
    `;
    document.getElementById('project-details').innerHTML = projectDetails;

    // Update portfolio-info
    const projectInfo = `
      <li><strong>Category:</strong> ${project.category[lang]}</li>
      <li><strong>Client:</strong> ${project.client[lang]}</li>
      <li><strong>Project Date:</strong> ${project.projectDate}</li>
    `;
    document.getElementById('project-info').innerHTML = projectInfo;

    // Update the Visit Client Website button with the project URL
    document.getElementById('visit-client-site').href = project.projectURL;

    // If company URL exists, display the Visit Company Website button
    if (project.companyUrl) {
      const companySiteButton = document.getElementById('visit-company-site');
      companySiteButton.style.display = 'inline-block';
      companySiteButton.href = project.companyUrl;
    }

    // Replace the slider with project media
    document.getElementById('media-container').innerHTML = project.media;
  } else {
    console.error('Project not found!');
    document.getElementById('project-details').innerHTML = '<p>Project not found.</p>';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const projectID = localStorage.getItem('selectedProject');
  const project = projectData[projectID];
  let currentLang = 'en'; // default language is English

  // Initial load with English as default
  if (project) {
    updatePortfolioDetails(project, currentLang);
  }

  // Language switcher functionality
  const langSwitch = document.getElementById('lang-switch');
  langSwitch.addEventListener('click', function () {
    // Toggle language
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    // Update the button text based on the current language
    langSwitch.textContent = currentLang === 'en' ? 'FR' : 'EN';
    // Update project details with the new language
    updatePortfolioDetails(project, currentLang);
  });
});