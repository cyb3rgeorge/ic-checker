let isValid = true;
let error;
let leapYear;

var currentTime = new Date();
var currentMonth = currentTime.getMonth() + 1;
var currentDay = currentTime.getDate();
var currentYear = currentTime.getFullYear();

// const pronouns = {
//     "Male": ["he", "him", "his"],
//     "Female": ["she", "her", "hers"]
//     // "Neutral": ["they", "them", "theirs"]
// }

function sex(idNumber) {
    var idLastDigit = idNumber[idNumber.length - 1];
    var remainder = idLastDigit % 2;
    return (remainder == 0) ?  "Female" : "Male";
}

function dateOfBirth(idNumber){
    var year = parseInt(idNumber.slice(0, 2));
    var monthNumber = parseInt(idNumber.slice(2, 4));
    var day = parseInt(idNumber.slice(4, 6));


    if (year <= parseInt(currentYear.toString().slice(2))){
        year += 2000;
    } else {
        year += 1900;
    }

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        leapYear = true;
    } else {
        leapYear = false;
    }

    if (monthNumber === 1 && day > 31){
        isValid = false;
        error = "There is no more than 31 days in January.";
    }
    if (monthNumber === 2 && leapYear && day > 29){
        isValid = false;
        error = "There is no more than 29 days in February in a leap year."
    } else if (monthNumber === 2 && !leapYear && day > 28) {
        isValid = false;
        error = "There is no more than 28 days in February in a non-leap year."
    }
    if (monthNumber === 3 && day > 31){
        isValid = false;
        error = "There is no more than 31 days in March.";
    }
    if (monthNumber === 4 && day > 30){
        isValid = false;
        error = "There is no more than 30 days in April.";
    }
    if (monthNumber === 5 && day > 31){
        isValid = false;
        error = "There is no more than 31 days in May.";
    }
    if (monthNumber === 6 && day > 30){
        isValid = false;
        error = "There is no more than 30 days in June.";
    }
    if (monthNumber === 7 && day > 31){
        isValid = false;
        error = "There is no more than 31 days in July.";
    }
    if (monthNumber === 8 && day > 31){
        isValid = false;
        error = "There is no more than 31 days in August.";
    }
    if (monthNumber === 9 && day > 30){
        isValid = false;
        error = "There is no more than 30 days in September.";
    }
    if (monthNumber === 10 && day > 31){
        isValid = false;
        error = "There is no more than 31 days in October.";
    }
    if (monthNumber === 11 && day > 30){
        isValid = false;
        error = "There is no more than 30 days in November.";
    }
    if (monthNumber === 12 && day > 31){
        isValid = false;
        error = "There is no more than 31 days in December.";
    }
    

    var month = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }

    month = month[monthNumber]


    var date = day + " " + month + " " + year;
    return date;
}

function placeOfBirth(idNumber){
    var placeID = parseInt(idNumber.slice(6, 8));

    const PLACE_LOOKUP = {
        1: ["Johor", "Malaysia"], 
        2: ["Kedah", "Malaysia"], 
        3: ["Kelantan", "Malaysia"], 
        4: ["Malacca", "Malaysia"], 
        5: ["Negeri Sembilan", "Malaysia"], 
        6: ["Pahang", "Malaysia"], 
        7: ["Penang", "Malaysia"], 
        8: ["Perak", "Malaysia"], 
        9: ["Perlis", "Malaysia"], 
        10: ["Selangor", "Malaysia"], 
        11: ["Terengganu", "Malaysia"], 
        12: ["Sabah", "Malaysia"], 
        13: ["Sarawak", "Malaysia"], 
        14: ["Federal Territory of Kuala Lumpur", "Malaysia"], 
        15: ["Federal Territory of Labuan", "Malaysia"], 
        16: ["Federal Territory of Putrajaya", "Malaysia"], 
        // 17: 
        // 18: 
        // 19: 
        // 20: 
        21: ["Johor", "Malaysia"], 
        22: ["Johor", "Malaysia"], 
        23: ["Johor", "Malaysia"], 
        24: ["Johor", "Malaysia"], 
        25: ["Kedah", "Malaysia"], 
        26: ["Kedah", "Malaysia"], 
        27: ["Kedah", "Malaysia"], 
        28: ["Kelantan", "Malaysia"], 
        29: ["Kelantan", "Malaysia"], 
        30: ["Malacca", "Malaysia"], 
        31: ["Negeri Sembilan", "Malaysia"], 
        32: ["Pahang", "Malaysia"], 
        33: ["Pahang", "Malaysia"], 
        34: ["Penang", "Malaysia"], 
        35: ["Penang", "Malaysia"], 
        36: ["Perak", "Malaysia"], 
        37: ["Perak", "Malaysia"], 
        38: ["Perak", "Malaysia"], 
        39: ["Perak", "Malaysia"], 
        40: ["Perlis", "Malaysia"], 
        41: ["Selangor", "Malaysia"], 
        42: ["Selangor", "Malaysia"], 
        43: ["Selangor", "Malaysia"], 
        44: ["Selangor", "Malaysia"], 
        45: ["Terengganu", "Malaysia"], 
        46: ["Terengganu", "Malaysia"], 
        47: ["Sabah", "Malaysia"], 
        48: ["Sabah", "Malaysia"], 
        49: ["Sabah", "Malaysia"], 
        50: ["Sarawak", "Malaysia"], 
        51: ["Sarawak", "Malaysia"], 
        52: ["Sarawak", "Malaysia"], 
        53: ["Sarawak", "Malaysia"], 
        54: ["Federal Territory of Kuala Lumpur", "Malaysia"], 
        55: ["Federal Territory of Kuala Lumpur", "Malaysia"], 
        56: ["Federal Territory of Kuala Lumpur", "Malaysia"], 
        57: ["Federal Territory of Kuala Lumpur", "Malaysia"], 
        58: ["Federal Territory of Labuan", "Malaysia"], 
        59: ["Negeri Sembilan", "Malaysia"], 
        60: ["Brunei"], 
        61: ["Indonesia"], 
        62: ["Cambodia"], 
        63: ["Laos"], 
        64: ["Myanmar"], 
        65: ["Philippines"], 
        66: ["Singapore"], 
        67: ["Thailand"], 
        68: ["Vietnam"], 
        // 69:
        // 70: 
        71: ["Outside of Malaysia", "A person born outside of Malaysia prior to 2001, excluding those born abroad without holding High Quality Identity Card."], 
        72: ["Outside of Malaysia", "A person born outside of Malaysia prior to 2001, excluding those born abroad without holding High Quality Identity Card."], 
        // 73:   
        74: ["China"], 
        75: ["India"], 
        76: ["Pakistan"], 
        77: ["Saudi Arabia"], 
        78: ["Sri Lanka"], 
        79: ["Bangladesh"], 
        82: ["Unknown state"], 
        83: ["Asia-Pacific", "American Samoa / Australia / Christmas Island / Cocos (Keeling) Islands / Cook Islands / Fiji / French Polynesia / Guam / Heard Island and McDonald Islands / Marshall Islands / Micronesia / New Caledonia / New Zealand / Niue / Norfolk Island / Papua New Guinea / Timor Leste / Tokelau / United States Minor Outlying Islands / Wallis and Futuna Islands"], 
        84: ["South America", "Anguilla / Argentina / Aruba / Bolivia / Brazil / Chile / Colombia / Ecuador / French Guinea / Guadeloupe / Guyana / Paraguay / Peru / South Georgia and the South Sandwich Islands / Suriname / Uruguay / Venezuela"], 
        85: ["Africa", "Algeria / Angola / Botswana / Burundi / Cameroon / Central African Republic / Chad / Congo-Brazzaville / Congo-Kinshasa / Djibouti / Egypt / Eritrea / Ethiopia / Gabon / Gambia / Ghana / Guinea / Kenya / Liberia / Malawi / Mali / Mauritania / Mayotte / Morocco / Mozambique / Namibia / Niger / Nigeria / Rwanda / Réunion / Senegal / Sierra Leone / Somalia / South Africa / Sudan / Swaziland / Tanzania / Togo / Tonga / Tunisia / Uganda / Western Sahara / Zaire / Zambia / Zimbabwe"], 
        86: ["Western Europe", "Armenia / Austria / Belgium / Cyprus / Denmark / Faroe Islands / Finland / France, Metropolitan / Germany / Germany, Democratic Republic / Germany, Federal Republic / Greece / Holy See (Vatican City) / Italy / Luxembourg / Malta / Mediterranean / Monaco / Netherlands / North Macedonia / Norway / Portugal / Republic of Moldova / Slovakia / Slovenia / Spain / Sweden / Switzerland / United Kingdom-Dependent Territories / United Kingdom-National Overseas / United Kingdom-Overseas Citizen / United Kingdom-Protected Person / United Kingdom-Subject"], 
        87: ["British Isles", "Britain / Great Britain / Ireland"], 
        88: ["Middle East", "Bahrain / Iran / Iraq / Israel / Palestine / Jordan / Kuwait / Lebanon / Oman / Qatar / Republic of Yemen / Syria / Turkey / United Arab Emirates / Yemen Arab Republic / Yemen People's Democratic Republic"], 
        89: ["Far East", "Japan / North Korea / South Korea / Taiwan"], 
        90: ["Caribbean", "Bahamas / Barbados / Belize / Costa Rica / Cuba / Dominica / Dominican Republic / El Salvador / Grenada / Guatemala / Haiti / Honduras / Jamaica / Martinique / Mexico / Nicaragua / Panama / Puerto Rico / Saint Kitts and Nevis / Saint Lucia / Saint Vincent and the Grenadines / Trinidad and Tobago / Turks and Caicos Islands / Virgin Islands (USA)"], 
        91: ["North America", "Canada / Greenland / Netherlands Antilles / Saint Pierre and Miquelon / United States of America"], 
        92: ["Eastern Europe", "Albania / Belarus / Bosnia and Herzegovina / Bulgaria / Byelorussia / Croatia / Czech Republic / Czechoslovakia / Estonia / Georgia / Hungary / Latvia / Lithuania / Montenegro / Poland / Republic of Kosovo / Romania / Russian Federation / Serbia / Ukraine"], 
        93: ["Other states and territories", "Afghanistan / Andorra / Antarctica / Antigua and Barbuda / Azerbaijan / Benin / Bermuda / Bhutan / Bora Bora / Bouvet Island / British Indian Ocean Territory / Burkina Faso / Cape Verde / Cayman Islands / Comoros / Dahomey / Equatorial Guinea / Falkland Islands / French Southern Territories / Gibraltar / Guinea-Bissau / Hong Kong / Iceland / Ivory Coast / Kazakhstan / Kiribati / Kyrgyzstan / Lesotho / Libya / Liechtenstein / Macau / Madagascar / Maghribi / Malagasy / Maldives / Mauritius / Mongolia / Montserrat / Nauru / Nepal / Northern Marianas Islands / Outer Mongolia / Palau / Palestine / Pitcairn Islands / Saint Helena / Saint Lucia / Saint Vincent and the Grenadines / Samoa / San Marino / São Tomé and Príncipe / Seychelles / Solomon Islands / Svalbard and Jan Mayen Islands / Tajikistan / Turkmenistan / Tuvalu / Upper Volta / Uzbekistan / Vanuatu / Vatican City / Virgin Islands (British) / Western Samoa / Yugoslavia"], 
        98: ["Stateless"], 
        99: ["Other", "Mecca / Neutral Zone / No Information / Refugee / Refugee Article 1/1951 / United Nations Specialized Agency / United Nations Organization / Unspecified Nationality"]
    };

    var place = PLACE_LOOKUP[placeID]?.[0]
    var placeInfo = PLACE_LOOKUP[placeID]?.[1]

    if (place === undefined) {
        isValid = false
        error = "Place of birth ID is invalid."
    }

    if (placeInfo === undefined) {
        placeInfo = ""
    }

    return place + "\n   " + placeInfo;
}


const form = document.getElementById("icForm");
const input = document.getElementById("icInput");
const output = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Remove all non-digit characters
    const idNumber = input.value.replace(/\D/g, "");

    // Reset validation
    isValid = true;
    error = "";

    // Check the number of digits
    if (idNumber.length !== 12) {
        output.textContent = "Please enter exactly 12 digits.";
        return;
    }

    // Run your functions
    const resultSex = sex(idNumber);
    const resultDateOfBirth = dateOfBirth(idNumber);
    const resultPlaceOfBirth = placeOfBirth(idNumber);

    // Display results
    if (isValid) {
        output.textContent =
            "Sex: " + "\n   " + resultSex + "\n" +
            "Date of Birth: " + "\n   " + resultDateOfBirth + "\n" +
            "Place of Birth: " +  "\n   " +resultPlaceOfBirth;
    } else {
        output.textContent = "ID is invalid.\n" + error;
    }
});
