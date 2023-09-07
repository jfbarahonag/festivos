export function isValidDate(dateString: string) {
  // Verificar si tiene el formato correcto
  const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
  if (!regex.test(dateString)) return false;

  // Extraer día, mes y año
  const parts = dateString.split('-');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  // Febrero
  if (month === 2) {
      if (year % 4 === 0) { // Año bisiesto
          if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
              return day <= 29;
          }
      }
      return day <= 28;
  }

  // Meses con 31 días
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
      return day <= 31;
  }

  // Meses con 30 días
  return day <= 30;
}

export function parseDate(validDateString: string) {
  if (!isValidDate(validDateString)) {
    return null
  }
  const [dd, mm, aaaa] = validDateString.split("-")
  return [dd, mm, aaaa]
}