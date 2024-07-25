document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var date = document.getElementById("date").value;
    var passengers = document.getElementById("passengers").value;
    var status = "Booking confirmed! From: " + from + ", To: " + to + ", Date: " + date + ", Passengers: " + passengers;
    document.getElementById("booking-status").innerText = status;
});
