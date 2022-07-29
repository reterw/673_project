import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import mongoose from 'mongoose';
import { MONGO_URL } from "../config";
import {SurveyModel} from '../models/survery.model';
mongoose.connect(MONGO_URL);
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const requestData = req.body;
    const newSurvey = await SurveyModel.create(requestData);
    context.res = {
        status: 201, /* Defaults to 200 */
        body: newSurvey,
        headers: {
            'content-type': 'application/json'
        }
    };

};

export default httpTrigger;