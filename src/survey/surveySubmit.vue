<template>
    <div class="mt-35 z-10 flex flex-col w-full" style="z-index: 1">
        <div
        v-for="e in surveyForm"
        :key="e._id"
        class="mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"
        >
        <div class="w-full mb-20 pb-10 text-center border-b-1 border-indigo-200" style="fontSize:3rem">
            {{e.name}}
        </div>
        <div class="flex flex-col gap-2 text-xl mt-5 pt-10">
                <div
                    v-for="(item, index) in e.items"
                    :key="index"
                    class="flex-row mb-15 border-b-1 border-indigo-200"
                >
                    <div class="w-full mb-10" style="fontSize:1.5rem">
                        {{ item.title }}
                    </div>
                    <div v-if="item.type !== -1">
                        <div class="flex mb-10" :key="i" v-for="(e, i) in item.options">  
                            <div v-if="item.type === 0" class="cursor-pointer field-radiobutton" style="line-height: 1;">
                                <RadioButton class="mr-2 pb-5" :value="e" :id="'singleOption'+e" :name="item.title" v-model="item.checked"/>
                                <label :for="'singleOption'+e">{{e}}</label>
                            </div>
                            <div v-if="item.type === 1" class="cursor-pointer field-checkbox" style="line-height: 1;">
                                <Checkbox class="mr-2 pb-5" :value="e" :id="'multiOption'+e" :name="item.title" v-model="item.selectedChoices"/>
                                <label :for="'multiOption'+e">{{e}}</label>
                            </div>
                        </div>
                        <div v-if="item.type === 2" class="flex">
                            <Textarea :autoResize="true" class="mb-10 w-full" v-model="item.inputText" rows="5" cols="30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="surveyForm?.length > 0"
            class="mb-40 place-self-end"
            style="fontSize:1.5rem"
        >
            <Button @click="submitForm" class="md:w-40" label="Submit" />
        </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useSurveyStore } from "../stores/surveyStore";
import { useRouter } from "vue-router";
import { answerSurveyDto, SurveyQuestionnaireItemType } from '../../shared/survey'

export default defineComponent({
  setup() {
    const { push, currentRoute } = useRouter()
    const { submitSurvey } = useSurveyStore()
    let surveyForm = ref([])
    onMounted(async () => {
        const res = await (await fetch(import.meta.env.VITE_GET_SURVEY_URL, { method: "GET", headers: { 'Content-Type': 'application/json' }, mode: 'cors' })).json()
        surveyForm.value = res.filter((item:any) => item._id === currentRoute.value.params.id)
    })
    return {
        surveyForm,
        async submitForm() {
            const result:any = surveyForm.value
            const answerItems:any = []
            result[0].items.map(item => {
                if (item.type === SurveyQuestionnaireItemType.SingleChoice) {
                    answerItems.push({
                        answer: item.checked
                    })
                } else if (item.type === SurveyQuestionnaireItemType.MultipleChoice) {
                    answerItems.push({
                        answer: item.selectedChoices?.join()
                    })
                } else if (item.type === SurveyQuestionnaireItemType.BlankFill) {
                    answerItems.push({
                        answer: item.inputText
                    })
                }
            })
            const formatRes:answerSurveyDto = {
                questionnaire_id: currentRoute.value.params.id.toString(),
                answerItems: answerItems
            }
            await submitSurvey(formatRes);
            push('/survey-list');
        }
    }
  }
})
</script>