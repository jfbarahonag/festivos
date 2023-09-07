const fc = require('festivos-colombia')

const year = 2023

const hd = fc.getHolidaysByYear(2020, year)

hd.forEach(element => {
  if (element.static) {
		console.log(element.date + " - " + element.name);
	} else {
		console.log(element.date + " - " + element.name);
	}
})

holidays = fc.getHolidaysByYearInterval(2021, year+2);
holidays.forEach(obj => {
	console.log("Año: " + obj.year);
	obj.holidays.forEach(element => {
		if (element.static) {
			console.log(element.date + " - " + element.name);
		} else {
			console.log(element.date + " - " + element.name);
		}
	});
});