import { Router } from "express";
import holidaysController from "../controllers/holidaysController";

const router = Router();

router.get('/year/:year', holidaysController.getHolidaysByYear);
router.get('/month/:month/:year', holidaysController.getHolidaysByMonthAndYear);
router.get('/date/:date', holidaysController.checkIfDateIsHoliday);

export default router