var id = "123456671235";

function sex(id) {
    var idLastDigit = id[id.length - 1];
    var remainder = idLastDigit % 2;
    if (remainder == 0) {
        return "Female";
    }
    return "Male";
}

function dateOfBirth(id){
    var year = id.slice(0, 2);
    var monthNumber = id.slice(2, 4);
    var day = id.slice(4, 6);

    switch(monthNumber) {
        
    }


    var date = year + "-" + month + "-" + day;
    return date;
}

function placeOfBirth(id){
    var placeID = Number(id.slice(6, 8));
    placeID = Number(placeID);

    var place = [
        "Johor", "Kedah", "Kelantan", "Malacca", "Negeri Sembilan", 
        "Pahang", "Penang", "Perak", "Perlis", "Selangor", 
        "Terengganu", "Sabah", "Sarawak", "Federal Territory of Kuala Lumpur", "Federal Territory of Labuan", 
        "Federal Territory of Putrajaya", "Brunei", "Indonesia", "Cambodia", "Laos", 
        "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam", 
        "Outside of Malaysia", "China", "India", "Pakistan", "Saudi Arabia", 
        "Sri Lanka", "Bangladesh", "Unknown state", "Asia-Pacific", "South America", 
        "Africa", "Western Europe", "British Isles", "Middle East", "Far East", 
        "Caribbean", "North America", "Eastern Europe", "Other states and territories", "Stateless", 
        "Other"
    ];

    switch(placeID) {
        case 1:
        case 21:
        case 22:
        case 23:
        case 24:
            place = place[0]; // Johor
            break;
        
        case 2:
        case 25:
        case 26:
        case 27:
            place = place[1]; // Kedah
            break;
        
        case 3:
        case 28:
        case 29:
            place = place[2]; // Kelantan
            braeak;

        case 4:
        case 30:
            place = place[3]; // Malacca
            break;

        case 5:
        case 31:
        case 59:
            place = place[4]; // Negeri Sembilan
            break;

        case 6:
        case 32:
        case 33:
            place = place[5]; // Pahang
            break;

        case 7:
        case 34:
        case 35:
            place = place[6]; // Penang
            break;

        case 8:
        case 36:
        case 37:
        case 38:
        case 39:
            place = place[7]; // Perak
            break;

        case 9:
        case 40:
            place = place[8]; // Perlis
            break;

        case 10:
        case 41:
        case 42:
        case 43:
        case 44:
            place = place[9]; // Selangor
            break;

        case 11:
        case 45:
        case 46:
            place = place[10]; // Terengganu
            break;

        case 12:
        case 47:
        case 48:
        case 49:
            place = place[11]; // Sabah
            break;

        case 13:
        case 50:
        case 51:
        case 52:
        case 53:
            place = place[12]; // Sarawak
            break;

        case 14:
        case 54:
        case 55:
        case 56:
        case 57:
            place = place[13]; // Federal Territory of Kuala Lumpur
            break;

        case 15:
        case 58:
            place = place[14]; // Federal Territory of Labuan
            break;

        case 16:
            place = place[15]; // Federal Territory of Putrajaya
            break;

        case 60:
            place = place[16]; // Brunei
            break;

        case 61:
            place = place[17]; // Indonesia
            break;

        case 62:
            place = place[18]; // Cambodia
            break;

        case 63: 
            place = place[19]; // Laos
            break;

        case 64:
            place = place[20]; // Myanmar
            break;

        case 65:
            place = place[21]; // Philippines
            break;

        case 66:
            place = place[22]; // Singapore
            break;
        
        case 67:
            place = place[23]; // Thailand
            break;

        case 68:
            place = place[24]; // Vietnam
            break;

        case 71:
        case 72:
            place = place[25]; // Outside of Malaysia
            break;

        case 74:
            place = place[26]; // China
            break;

        case 75:
            place = place[27]; // India
            break;

        case 76:
            place = place[28]; // Pakistan
            break;

        case 77:
            place = place[29]; // Saudi Arabia
            break;

        case 78:
            place = place[30]; // Sri Lanka
            break;

        case 79:
            place = place[31]; // Bangladesh
            break;

        case 82:
            place = place[32]; // Unknown state
            break;

        case 83:
            place = place[33]; // Asia Pacific
            break;

        case 84:
            place = place[34]; // South America
            break;

        case 85:
            place = place[35]; // Africa
            break;

        case 86:
            place = place[36]; // Western Europe
            break;

        case 87:
            place = place[37]; // British Isles
            break;

        case 88:
            place = place[38]; // Middle East
            break;

        case 89:
            place = place[39]; // Far East
            break;

        case 90:
            place = place[40]; // Caribbean
            break;

        case 91:
            place = place[41]; // North America
            break;

        case 92:
            place = place[42]; // Eastern Europe
            break;
        
        case 93:
            place = place[43]; // Other states and territories
            break;

        case 98:
            place = place[44]; // Stateless
            break;

        case 99:
            place = place[45]; // Other
            break;


        default:
            place = "Invalid place of birth";
            break;
    }

    return place;
}

if (id.length == 12) {
    console.log(sex(id));
    console.log(dateOfBirth(id));
    console.log(placeOfBirth(id));
}
else {
    console.log ("ID is invalid");
}