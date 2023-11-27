"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const task_controller_1 = require("./task.controller");
const task_validation_1 = require("./task.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(task_validation_1.taskValidation.createTaskZodSchema), task_controller_1.taskController.createTask);
router.get('/', (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(task_validation_1.taskValidation.filtersTaskZodSchema), task_controller_1.taskController.getAllTasks);
exports.taskRoutes = router;
