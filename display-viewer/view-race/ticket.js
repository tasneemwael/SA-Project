document.getElementById('ticketForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the values of the checkboxes
    const isVIP = document.getElementById('vipOption').checked;
    const hasParking = document.getElementById('parkingOption').checked;

    // Create the confirmation message
    let message = "Your ticket has been booked successfully!";
    if (isVIP) {
        message += "\nYou are now a VIP!";
    }
    if (hasParking) {
        message += "\nYou have reserved a parking space.";
    }

    // Display the message as a popup
    alert(message);
});
