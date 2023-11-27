"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskStatusController = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const taskStatus_service_1 = require("./taskStatus.service");
const createTaskStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { verifiedUser } = req;
    if (!verifiedUser) {
        throw new ApiError_1.default(403, 'Forbidden');
    }
    const result = yield taskStatus_service_1.taskStatusService.createTaskStatusInDb(verifiedUser, data);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Task status created successfully',
        data: result,
    });
}));
const getAllTaskStatuses = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { verifiedUser } = req;
    if (!verifiedUser) {
        throw new ApiError_1.default(403, 'Forbidden');
    }
    const result = yield taskStatus_service_1.taskStatusService.getAllTaskStatusesFromDb(verifiedUser);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'task statuses retrieved successfully',
        data: result,
    });
}));
exports.taskStatusController = { createTaskStatus, getAllTaskStatuses };
