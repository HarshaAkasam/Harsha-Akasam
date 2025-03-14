// Image data with descriptions
const imageData = {
    image1: {
        src: "assets/img/certificate/HTML.png",
        // description: "Frontend Development Certification - Successfully completed an intensive 12-week course on modern frontend technologies including React, JavaScript, and responsive design principles."
    },
    image2: {
        src: "assets/img/certificate/PYTHON_PEARSON-1.png",
       //description: "UI/UX Design Internship at Creative Design Studio - A 6-month internship focused on creating modern UI/UX experiences and branding strategies."
    },
    image3: {
        src: "assets/img/certificate/backend.jpg",
        //description: "Backend Development Certification - Completed advanced coursework in Node.js, Express, MongoDB, and building scalable web applications."
    }
};

// Modal Elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDescription");
const closeModalBtn = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevImage");
const nextBtn = document.getElementById("nextImage");

// Elements to blur
const header = document.querySelector(".cm-header");
const authorView = document.querySelector(".cm-author-view");

let currentImageIndex = 0;
const imageKeys = Object.keys(imageData);

// Function to Show Image in Modal
function showImage(index) {
    if (index >= 0 && index < imageKeys.length) {
        const imageInfo = imageData[imageKeys[index]];
        modalImg.src = imageInfo.src;
        modalDesc.textContent = imageInfo.description;
    }
}

// Open Modal Function
function openModal(imageId) {
    currentImageIndex = imageKeys.indexOf(imageId);
    showImage(currentImageIndex);

    modal.style.display = "flex"; // Show modal
    setTimeout(() => modal.classList.add("active"), 50);

    // Apply blur effect
    header?.classList.add("blur");
    authorView?.classList.add("blur");

    document.body.style.overflow = "hidden"; // Disable scrolling
}

// Function to Move to Next Image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageKeys.length;
    showImage(currentImageIndex);
}

// Function to Move to Previous Image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageKeys.length) % imageKeys.length;
    showImage(currentImageIndex);
}

// Close Modal Function
function closeModal() {
    modal.classList.add("closing");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("active", "closing");

        // Remove blur effect
        header?.classList.remove("blur");
        authorView?.classList.remove("blur");

        document.body.style.overflow = "auto"; // Enable scrolling
    }, 300);
}

// Initialize Gallery Click Events
function initGallery() {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            const imageId = this.getAttribute("data-image-id");
            openModal(imageId);
        });
    });

    // Event Listeners for buttons
    closeModalBtn.addEventListener("click", closeModal);
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);

    // Close modal when clicking outside content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// **🔥 Fix: Ensure Modal is Hidden on Page Load (No Modal on Refresh)**
document.addEventListener("DOMContentLoaded", function () {
    initGallery();
    modal.style.display = "none";  // Ensures modal is hidden on reload
    document.body.style.overflow = "auto"; // Reset scrolling
});
