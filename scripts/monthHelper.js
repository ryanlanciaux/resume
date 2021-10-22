var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

function getMonthName(date){
	var currentDate = new Date(date + " 19:00");
	var month = currentDate.getMonth();

	return date == null ? "Present" : monthNames[month] + " " + currentDate.getFullYear();
}
