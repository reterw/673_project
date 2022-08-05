import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { SurveyQuestionnaire, SurveyQuestionnaireAnswer, answerSurveyDto, createSurveyDto, SurveyCreatedByUser, SurveyToDelete } from "../../shared/survey";


export const useSurveyStore = defineStore('survey-store', () => {
    const surveyForm: Ref<SurveyQuestionnaire[]> = ref([
    ])
    const surveyResult: Ref<SurveyQuestionnaireAnswer[]> = ref([
    ])

    async function createSurvey(v: createSurveyDto) {
        return await (await fetch(import.meta.env.VITE_CREATE_SURVEY_URL, { method: "POST", body: JSON.stringify(v), headers: { 'Content-Type': 'application/json' }, mode: 'cors' })).json()
    }

    async function getAllSurveys() {
        surveyForm.value = await (await fetch(import.meta.env.VITE_GET_SURVEY_URL, { method: "GET", headers: { 'Content-Type': 'application/json' }, mode: 'cors' })).json()
        return surveyForm
    }

    async function getAllSurveysResult() {
        surveyResult.value = await (await fetch(import.meta.env.VITE_SURVEY_RESULT_URL, { method: "GET", headers: { 'Content-Type': 'application/json' }, mode: 'cors' })).json()
        return surveyResult
    }

    async function submitSurvey(v: answerSurveyDto) {
        await fetch(import.meta.env.VITE_FILL_IN_SURVEY_URL, { method: "POST", body: JSON.stringify(v), headers: { 'Content-Type': 'application/json' }, mode: 'cors' })
    }

    async function getSurveyByUserId(v: SurveyCreatedByUser) {
        const res = await (await fetch(import.meta.env.VITE_GET_SURVEY_BY_USER_ID_URL + '&user_id=' + v.user_id, { method: "GET", headers: { 'Content-Type': 'application/json' }, mode: 'cors' })).json()
    }

    async function deleteSurveyById(v: SurveyToDelete) {
        await fetch(import.meta.env.VITE_DELETE_SURVEY_BY_ID_URL + '&questionnaire_id=' + v.questionnaire_id, { method: "POST", headers: { 'Content-Type': 'application/json' }, mode: 'cors' })
    }

    return {
        createSurvey,
        getAllSurveys,
        surveyForm,
        getAllSurveysResult,
        surveyResult,
        submitSurvey,
        getSurveyByUserId,
        deleteSurveyById
    }
})