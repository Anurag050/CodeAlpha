function GetDOB() {

    const data =
        document.getElementById("inputDOB").value;
        document.getElementById("myimage").AriaReadOnly;

    // Convert input data to day,month and year
    const dob = new Date(data);
    const day = dob.getDate();
    const month = dob.getMonth();
    const year = dob.getFullYear();

    // Getting current date and calculating the difference
    const now =
        new Date(document.getElementById("Cdate").value);
    console.log(now);
    const yearDiff = now.getFullYear() - year;
    const monthDiff = now.getMonth() - month;
    const dateDiff = now.getDate() - day;
    
    // Calculating the Age
    if (yearDiff < 0) console.log("invalid date");
    else if (monthDiff > 0) {
        console.log(yearDiff);
    } else if (monthDiff === 0 && dateDiff >= 0) {
        console.log(yearDiff);
    }else {
        yearDiff = yearDiff - 1;
        if (monthDiff <= 0)
            if (dateDiff > 0) monthDiff = 12 + monthDiff;
            else monthDiff = 11 - monthDiff;
    }

    if (yearDiff < 0)
        document.getElementById("CurrentAge").innerHTML = "Invalid Date";
    else
        document.getElementById("CurrentAge").innerHTML =
            "Your current Age is " + yearDiff + " years "
            + monthDiff + " months " + dateDiff + " days ";
}

function currentDate() {
    console.log(formatted());
    let date_ = document.getElementById("Cdate");
    date_.value = formatted();
}

function formatted(date = new Date()) {
    return [
        date.getFullYear(),
        long(date.getMonth() + 1),
        long(date.getDate()),
    ].join("-");
}
function long(num) {
    return num.toString();
}

//current date function
currentDate();
