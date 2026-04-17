export const searchReservations = (reservations, query) => {
    if(!query.trim()) return reservations;

    const lowerQuery = query.toLowerCase();


    // Search by reservation ID, pet name, or pet type
    return reservations.filter((res) =>
        res.reservationId.toLowerCase().includes(lowerQuery) ||
        res.petName.toLowerCase().includes(lowerQuery) ||
        res.petType.toLowerCase().includes(lowerQuery)
    );
};
