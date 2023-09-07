import { Request, Response } from 'express';
import * as holidays from 'festivos-colombia'
import { isValidDate, parseDate } from '../utils/date';

const getHolidaysByYear = (req: Request, res: Response) => {
    const year = parseInt(req.params.year, 10);
    if (isNaN(year)) return res.status(500).json({ok: false})
    const result = holidays.getHolidaysByYear(year)
    res.json({result});
};

const getHolidaysByMonthAndYear = (req: Request, res: Response) => {
    const month = parseInt(req.params.month, 10);
    const year = parseInt(req.params.year, 10);
    if (isNaN(year) || isNaN(month)) return res.status(500).json({ok: false})
    const resultYear = holidays.getHolidaysByYear(year)
    console.log({resultYear })
    const result = resultYear.filter(day => Number(day.date.split("/")[1]) === month)
    res.json({result});
};

const checkIfDateIsHoliday = (req: Request, res: Response) => {
    const date = req.params.date;

    if (!isValidDate(date)) {
      return res.status(500).json({ok: false})
    }
    const [dd, mm, year] = parseDate(date)

    const resultYear = holidays.getHolidaysByYear(year)
    const isHoliday = Boolean(resultYear.find(day => day.date === `${dd}/${mm}/${year}`))
    
    res.json({ isHoliday });
};

export default {
  getHolidaysByYear,
  getHolidaysByMonthAndYear,
  checkIfDateIsHoliday,
}
