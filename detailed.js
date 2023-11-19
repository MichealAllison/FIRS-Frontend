// firs.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to extract parameters from the URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Function to fetch and display detailed intruder information
    function fetchAndDisplayIntruderDetails() {
        // Get the intruder ID from the URL
        var intruderId = getParameterByName("id");

        // Example placeholder data - replace with actual data when the backend is ready
        var intruderData = {
            id: intruderId,
            time: "12:30 PM",
            imageUrl: "/path/to/intruder/image.jpg"
            // Add more details as needed
        };

        // Display intruder details on the page
        document.getElementById("intruderId").innerText = intruderData.id;
        document.getElementById("intruderTime").innerText = intruderData.time;

        // Display intruder image
        var intruderImageHolder = document.getElementById("intruderImageHolder");
        var intruderImage = document.createElement("img");
        intruderImage.src = intruderData.imageUrl;
        intruderImage.alt = "Intruder Image";
        intruderImageHolder.appendChild(intruderImage);
        // Add more detailed information display as needed
    }

    // Call the function to fetch and display intruder details when the page loads
    fetchAndDisplayIntruderDetails();
});
