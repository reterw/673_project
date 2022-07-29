import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import mongoose from 'mongoose';
import { MONGO_URL } from "../config";
import { SurveyModel } from '../models/survery.model';
mongoose.connect(MONGO_URL);
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const {questionnaire_id} = req.query;
    await SurveyModel.findByIdAndDelete(questionnaire_id);
    context.res = {
        status: 200, /* Defaults to 200 */
    };

};

export default httpTrigger;