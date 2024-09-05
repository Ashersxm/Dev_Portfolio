const projectData = {
    passengerPrediction: {
      title: "Passenger Flow Prediction Web App",
      description: `
        <p>Passenger Flow Algorithm developed for Princess Juliana International Airport.</p>
        <p>This web application predicts passenger flow using advanced algorithms to optimize airport operations.</p>
        <p>This includes user interface, server and database integration. Programming languages here involved C#, XML, Javascript, SQL, VB and XML.</p>
        <p>To make the prediction as reliable and accurate as possible, the webpage will communicate with various systems and extract real-time and past data.</p>

      `,
      category: 'Fullstack Development & Database Management',
      client: "Princess Juliana International Airport",
      projectDate: "July 2024 - Ongoing",
      company : "",
      companyUrl: "",
      projectURL: "https://www.sxmairport.com",
      media: `<video src="assets/video/Passenger Prediction Demo.mp4" class="img-fluid" autoplay muted loop></video>`
    },
    metroLineRennes: {
      title: "Metro Line Management System",
      description: `
        <p>Metro Line Management System maintained and enhanced for Metro Trainlines in Rennes, France.</p>
        <p>This system allows real-time management and monitoring of metro line schedules, devices and operations. It also facilitates communication between users and operators.</p>
        <p>This includes user interface, backend and database integration.</p>
        <p>The languages used here include C#, SQL and VB.</p>

      `,
      category: 'Fullstack Development & Database Management',
      client: "Keolis Rennes",
      company : "Enfrasys",
      companyUrl: "https://www.enfrasys.fr",
      projectDate: "March 2023 - Ongoing",
      projectURL: "https://www.keolis-rennes.com/",
      media: `<img src="assets/img/projects/Metro_de_Rennes_P1040075.png" class="img-fluid" alt="">`
    },
    metroLineLyon: {
      title: 'Metro Line Database Management',
      description: `
        <p>Metro Line Database Management system maintained and enhanced for the autonomous Metro Line D in the city of Lyon, France.</p>
        <p>The languages used here include SQL and PL/SQL. Through a professional use of Oracle SQL Developer, we were able to increase the calculation capabilies of the database to ensure that the data is more reliable, for example, calculating the distance traveled by each individual train.</p> 
        <p>This data is used to alert the operators when a train needs to be service therefore keeping the transport system secure and ensuring passenger safety</p>
      `,
      category: 'Database Management',
      client: 'Lyon Public Transport',
      company : "Enfrasys",
      companyUrl: "https://www.enfrasys.fr",
      projectDate: 'September 2022 - February 2023',
      projectURL: 'https://www.tcl.fr/',
      media: `<img src="assets/img/projects/ligneD_Lyon.jpg" class="img-fluid" alt="">`
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const projectID = localStorage.getItem('selectedProject');
    
    console.log('Loaded project ID from localStorage:', projectID);
    
    const project = projectData[projectID];
    
    function updatePortfolioDetails(project) {
      if (project) {
        // Update portfolio-description
        const projectDetails = `
          <h2>${project.title}</h2>
          ${project.description}
        `;
        document.getElementById('project-details').innerHTML = projectDetails;
    
        // Update portfolio-info
        const projectInfo = `
          <li><strong>Category:</strong>${project.category}</li>
          <li><strong>Client:</strong> ${project.client}</li>
          <li><strong>Company:</strong> ${project.company}</li>
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
    
    if (project) {
      updatePortfolioDetails(project);
    } else {
      console.error('No project found in projectData for ID:', projectID);
    }
  }); 