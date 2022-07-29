import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import mongoose from "mongoose";
import { MONGO_URL } from "../config";
import { AnswerModel } from "../models/answer.model";

mongoose.connect(MONGO_URL);

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const requestData = req.body;
    requestData.questionnaire_id = new mongoose.mongo.ObjectId(requestData.questionnaire_id);
    const newAnswer = await AnswerModel.create(requestData);
    context.res = {
        status: 201,
        body: newAnswer,
        headers: {
            'content-type': 'application/json'
        }
    }

};

export default httpTrigger;