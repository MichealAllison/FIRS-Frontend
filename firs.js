// index.html

document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var enteredUsername = document.getElementById("loginUsername").value;
        var enteredPassword = document.getElementById("loginPassword").value;

        // Retrieve user data from local storage
        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");

        // Validate login credentials
        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            alert("Login successful!");
            // Redirect to the dashboard page
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid login credentials. Please try again.");
        }
    });
});

// index.html

document.addEventListener("DOMContentLoaded", function () {
    var registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var username = document.getElementById("registerUsername").value;
        var password = document.getElementById("registerPassword").value;

        // Store user data in local storage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        // Redirect to login page
        window.location.href = "index.html";
    });
});


// dashboard

document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch intruder data from the server
    function fetchIntruderData() {
        // Make an API request to the server to get intruder data
        // Replace 'api/intruders' with the actual endpoint on your server
        fetch('api/intruders')
            .then(response => response.json())
            .then(data => {
                // Update the dashboard with the retrieved data
                document.getElementById("intruderCount").innerText = data.count;
                document.getElementById("lastDetectionTime").innerText = data.lastDetectionTime;
            })
            .catch(error => console.error('Error fetching intruder data:', error));
    }

    // Call fetchIntruderData when the page loads
    fetchIntruderData();

    // Optionally, you can set up a timer to periodically update the data
    // setInterval(fetchIntruderData, 5000); // Update every 5 seconds
});

// dashboard


// live

document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch intruder data from the server
    function fetchIntruderData() {
        // Placeholder data - replace with actual data when the backend is ready
        const intruderData = [
            {
                id: 1,
                alert: "Intruder Alert",
                time: "12:30 PM"
            },
            {
                id: 2,
                alert: "Intruder Alert",
                time: "12:25 PM"
            },
            {
                id: 3,
                alert: "Intruder Alert",
                time: "12:20 PM"
            }
            // Add more intruder data as needed
        ];

        // Assuming the 'live-container' div is available
        const liveContainer = document.querySelector('.live-container');

        // Display intruder alerts as wider cards with options
        intruderData.forEach(intruder => {
            const intruderCard = document.createElement('div');
            intruderCard.classList.add('wider-notification-card');

            const alertText = document.createElement('p');
            alertText.innerText = intruder.alert;

            const timeText = document.createElement('p');
            timeText.innerText = intruder.time;

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options-container');

            // 'View' option with an icon
            const viewOption = document.createElement('div');
            viewOption.classList.add('option', 'view-option');
            viewOption.innerHTML = '<i class="fas fa-eye"></i>';
            viewOption.onclick = () => showIntruderDetails(intruder.id);

            // 'Delete' option with an icon
            const deleteOption = document.createElement('div');
            deleteOption.classList.add('option', 'delete-option');
            deleteOption.innerHTML = '<i class="fas fa-trash"></i>';
            deleteOption.onclick = () => deleteIntruder(intruder.id);

            optionsContainer.appendChild(viewOption);
            optionsContainer.appendChild(deleteOption);

            intruderCard.appendChild(alertText);
            intruderCard.appendChild(timeText);
            intruderCard.appendChild(optionsContainer);

            liveContainer.prepend(intruderCard);
        });
    }

    // Call fetchIntruderData when the page loads
    fetchIntruderData();

    // Optionally, you can set up a timer to periodically update the data
    // setInterval(fetchIntruderData, 5000); // Update every 5 seconds

    // Function to show details when 'View' option is clicked
    function showIntruderDetails(intruderId) {
        // Navigate to the detailed view page with intruder id
        window.location.href = 'detailed.html?id=' + intruderId;
    }

    // Function to handle 'Delete' option
    function deleteIntruder(intruderId) {
        // Implement your logic to delete the intruder with the given id
        console.log('Deleting intruder with id:', intruderId);
    }
});

// live


// detailed

document.addEventListener("DOMContentLoaded", function () {
    // Activate the "Detailed" menu in the sidebar
    document.querySelector('.sidenav a[href="#"]').classList.remove('active');
    document.querySelector('.sidenav a[href="live.html"]').classList.remove('active');
    document.querySelector('.sidenav a[href="dashboard.html"]').classList.remove('active');
    document.querySelector('.sidenav a[href="detailed.html"]').classList.add('active');
    document.querySelector('.sidenav a[href="#"]').classList.remove('active');

    // Parse the intruder time and image URL from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const intruderId = urlParams.get('id');
    const intruderTime = urlParams.get('time');
    const intruderImageUrl = urlParams.get('imageUrl');

    // Display the intruder time in the placeholder content
    document.getElementById('intruderTime').innerText = intruderTime;

    // Display the intruder ID in the placeholder content
    document.getElementById('intruderId').innerText = intruderId;

    // Placeholder data for detailed information - replace with actual data when the backend is ready
    const detailedInfo = {
        id: intruderId,
        time: "IntruderTime",
    };

    // Create an image element and set its source to the intruder image URL
    const intruderImage = document.createElement('img');
    intruderImage.src = intruderImageUrl;
    intruderImage.alt = 'Intruder Image';
    
    // Append the image to the intruder image holder
    document.getElementById('intruderImageHolder').appendChild(intruderImage);
});

// Function to activate the selected section in the sidebar
function activateSection(section) {
    // Deactivate all sections
    document.querySelectorAll('.sidenav a').forEach(link => link.classList.remove('active'));

    // Activate the selected section
    document.querySelector(`.sidenav a[href="${section}.html"]`).classList.add('active');
}

// detailed




// live


function activateSection(section) {
    // Deactivate all sections
    document.querySelectorAll('.sidenav a').forEach(link => link.classList.remove('active'));

    // Activate the selected section
    document.querySelector(`.sidenav a[href="#${section}"]`).classList.add('active');
    
    // Fetch data for the selected section
    if (section === 'live') {
        fetchIntruderData();
    }
    // Add other section activation logic as needed
}


// live