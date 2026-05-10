let reservationStatus = "Available";
let reservationHeadcount = 10;
let status;

if ((reservationStatus == "Available") && (reservationHeadcount <= 8)) {
    status = "Accepted";
} else {
    status = "Declined";
}

console.log("Reservation: " + status);
