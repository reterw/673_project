import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import mongoose from "mongoose";
import { MONGO_URL } from "../config";
import { SurveyModel } from "../models/survery.model";
mongoose.connect(MONGO_URL);
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const results = await SurveyModel.aggregate([
    {
        $lookup: {
            from: 'answers',
            localField: '_id',
            foreignField: 'questionnaire_id',
            as: 'answers'
        }
    }
  ]);

  context.res = {
    status: 200,
    body: results,
    headers: {
        'content-type': 'application/json'
    }
  }

};

export default httpTrigger;