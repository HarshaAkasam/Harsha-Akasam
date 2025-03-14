
document.addEventListener("DOMContentLoaded", function () {
    // Portfolio data
    const portfolioData = {
        project1: {
            src: "assets/img/portfolio/01.png",
            title: "Infrastructure Tracker",
            description: "This system provides complete information about the infrastructure, including regular inspections of fans, lights, and other essential components. It ensures everything is well-maintained, safe, and functioning properly."
        },
        project2: {
            src: "assets/img/portfolio/02.png",
            title: "Infrastructure Tracker 2.0",
            description: "I developed a college infrastructure tracker with a backend for data storage, enabling real-time monitoring of buildings, operational status of components, and water availability management. FrontEnd:React JS BackEnd:MongoBD"
        },
        project3: {
            src: "assets/img/portfolio/03.png",
            title: "Personal Portfolio",
            description: "I developed a Bus Tracker project for my college to monitor the real-time locations of buses, providing students with accurate information on bus arrivals and helping them identify which bus will reach their location. FrontEnd:React JS BackEnd:MongoBD"
        },
        project4: {
            src: "assets/img/portfolio/04.png",
            title: "Live Bus Tracker",
            description: "I developed a Bus Tracker project for my college to monitor the real-time locations of buses, providing students with accurate information on bus arrivals and helping them identify which bus will reach their location. FrontEnd:React JS BackEnd:MongoBD"

        },
        project5: {
            src: "assets/img/portfolio/05.png",
            title: "Human for Humanity",
            description: "I creating an app to help elderly people. With a single press of the help button, they can send alerts to caregivers, volunteers, and doctors for quick assistance. The app also includes extra features to provide better support."
        }
    };

    // Modal Elements
    const modal = document.getElementById("portfolioModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDescription");
    const closeModalBtn = document.getElementById("closeModal");
    
    let currentProjectIndex = 0;
    const projectKeys = Object.keys(portfolioData);

    // Modify the modal content to remove the image
    document.getElementById("modalImage").style.display = "none";

    // Function to Show Project Description in Modal
    function showProject(index) {
        if (index >= 0 && index < projectKeys.length) {
            const projectInfo = portfolioData[projectKeys[index]];
            modalTitle.textContent = projectInfo.title;
            modalDesc.textContent = projectInfo.description;
        }
    }

    // Open Modal Function
    function openModal(projectId) {
        currentProjectIndex = projectKeys.indexOf(projectId);
        showProject(currentProjectIndex);
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Disable scrolling
    }

    // Close Modal Function
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Initialize Portfolio Click Events
    function initPortfolio() {
        const portfolioItems = document.querySelectorAll(".single-portfolio-content");
        
        portfolioItems.forEach((item) => {
            const projectId = item.getAttribute("data-project-id");
            item.addEventListener("click", function () {
                openModal(projectId);
            });
        });
        
        // Close modal event
        closeModalBtn.addEventListener("click", closeModal);
        
        // Close modal when clicking outside content
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Initialize
    initPortfolio();
    modal.style.display = "none"; // Ensure modal is hidden on reload
    document.body.style.overflow = "auto";
});