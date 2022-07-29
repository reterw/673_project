import { MongoClient } from 'mongodb';
import { v4 } from 'uuid';
import { defineHandler, defineRawHandler } from '../vote/utils';

export interface SurveyItem {
    id: string
    title: string
    type: string
    inputText: string
    selectedChoices: []
    allChoices: []
}

export interface SurveyForm {
    id: string
    name: string
    content: Array<SurveyItem>
}

export interface SurveyRecord {
    _id: string
    name: string
    content: Array<SurveyItem>
}

process.on('unhandledRejection', (e) => {
    console.log(e)
})

export const survey = defineHandler(async (context, req) => {
    switch (req.method) {
        case 'OPTIONS':
            return {}
        case 'POST':
            return addSurvey(context, req)
        // case 'GET':
        //     return readSurveys(context, req)
        // case 'PUT':
        //     return doSurvey(context, req)
        // case 'DELETE':
        //     return deleteSurvey(context, req)
        default:
            throw new Error('Unimplemented')
    }
})

const addSurvey = defineRawHandler(async (context, req) => {
    const client = new MongoClient(process.env.MONGO!, { ssl: true, tls: true })
    const logger = context.log

    const body: SurveyForm = await JSON.parse(req.rawBody)
    logger.info(body)

    // const username = req.headers.username || "Anonymous"
    // logger.info(username)

    try {
        await client.connect()
    } catch (e) {
        return { error: e, type: 'dbconnection' }
    }
    logger.info('db')
    const db = client.db('test')
    const surveys = db.collection<SurveyForm>('surveys')
    
    const voteContents: SurveyForm = {
        id: v4(),
        name: body.name,
        content: body.content
    }
    logger.info(voteContents)
    await surveys.insertOne(voteContents)
})