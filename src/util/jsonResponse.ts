import { Response } from 'express';

export const successResponse = (res: Response<any>, code: number, message: string, data?: any) => {
    res.status(code).send({
        success: true,
        message,
        data
    })
};

export const failedResponse = (res: Response<any>, code: number, message: string, data?: any) => {
    res.status(code).send({
        success: false,
        message,
        data
    })
};