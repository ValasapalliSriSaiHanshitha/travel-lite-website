document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var checkInDate = document.getElementById('checkInDate').value;
    var checkOutDate = document.getElementById('checkOutDate').value;
    var guests = document.getElementById('guests').value;

    // Here you can add further functionality such as sending data to a server or processing the booking.
    // For simplicity, this example will just log the values.
    console.log("Check-in Date: " + checkInDate);
    console.log("Check-out Date: " + checkOutDate);
    console.log("Number of Guests: " + guests);

    // You can also redirect the user to another page after form submission.
    // window.location.href = "confirmation.html";
});
