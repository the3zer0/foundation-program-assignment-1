
// Question No. 1: Value Detective

function describeValue(value) {
    let type = typeof value;
    let result;

    if (value) {
        result = "truthy";
    } else {
        result = "falsy";
    }

    return `${type} | ${result}`;
}


// Question No. 2: Bangladesh Weekend Machine

function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}


// Question No. 3: Username Gatekeeper

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}

// Question No. 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + waitingMinutes * 2;

    if (isNight) {
        fare = fare * 1.2;
    }

    return fare;
}

// Question No. 5: Run Chase Commentator

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    } else if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

