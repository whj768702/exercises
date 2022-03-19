// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function format(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    console.log(`mm-dd-yyyy: ${month+1}-${day}-${year}`);
    console.log(`mm/dd/yyyy: ${month+1}/${day}/${year}`);
    console.log(`dd-mm-yyyy: ${day}-${month+1}-${year}`);
    console.log(`dd/mm/yyyy: ${day}/${month+1}/${year}`);
}
format(new Date());