function getTicketPrice(buyerAge) {// creating function
    let ticketCategory;// ticket category variable

    if (buyerAge < 5) {// conditions
        ticketCategory = "Free Entry";
    } else if (buyerAge >= 5 && buyerAge <= 17) {
        ticketCategory = "Child Discount ($8)";
    } else if (buyerAge >= 18 && buyerAge <= 64) {
        ticketCategory = "Full Price ";
    } else {
        ticketCategory = "Senior Discount ($10)";
    }

    return ticketCategory;
}

console.log("Age 3:", getTicketPrice(3));
console.log("Age 14:", getTicketPrice(14));
console.log("Age 30:", getTicketPrice(30));
console.log("Age 70:", getTicketPrice(70));











const score = 30;

// Convert the score into a grade range
const gradeNumber = Math.floor(score / 10);

let finalGrade;

switch (gradeNumber) {
    case 10:
    case 9:
        finalGrade = "A";
        break;

    case 8:
        finalGrade = "B";
        break;

    case 7:
        finalGrade = "C";
        break;

    case 6:
        finalGrade = "D";
        break;

    default:
        finalGrade = "F";
}

console.log("Score:", score);
console.log("Final Grade:", finalGrade);