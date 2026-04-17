export const sortReservations = (reservations, sortType) => {
    const sorted = [...reservations];

    switch (sortType) {
        case "petName":
            return sorted.sort((a, b) => a.petName.localeCompare(b.petName)
            );

        case "petType":
            return sorted.sort((a, b) => a.petType.localeCompare(b.petType)
            );

        case "checkOutDate":
            return sorted.sort((a, b) => new Date(a.checkOutDate) - new Date(b.checkOutDate)
            );

        default:
            return reservations;
    }
};