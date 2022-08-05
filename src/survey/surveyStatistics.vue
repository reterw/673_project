<template>
    <div class="mt-35 z-10 flex flex-col w-full" style="z-index: 1">
        <div class="flex w-full mt-10">
            <Button @click="back()" class="md:w-40" label="Back" />
        </div>
        <div class="mt-10 pb-5 w-full text-white-400 text-center"     
            style="fontSize:2rem"
        >
            Statistics
        </div>
        <div
        v-for="e in surveyResult"
        :key="e._id"
        class="mt-10 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"
        >
            <div class="pb-5 w-full text-blue-400 cursor-pointer border-dark-100 border-b-1 text-center hover:underline "     
            @click="navigateToSurvey(e._id)"    
            style="fontSize:2rem"
            >
                {{e.name}}
            </div>
            <div
                v-for="item in e.items"
                :key="item.title"
                class="mt-10 border-dark-100 border-b-1"
            >
                <div class="mb-10" style="fontSize:1.5rem">
                    Q:
                </div>
                <div class="mb-5">
                    {{item.title}}
                </div>
                <div class="mb-5 flex justify-between" :key="option" v-for="option in item.options">
                    <div class="w-20">{{option}}</div>
                    <div class="w-10 text-center">{{finalStatistics[option]?.count}}</div> 
                    <div class="w-20">{{finalStatistics[option]?.percent}} %</div>
                </div>
            </div>
            <!-- <div
                v-for="(answer, i) in e.answers"
                :key="answer._id"
                class="mt-10 border-dark-100 border-b-1"
            >
                 <div class="mt-10 mb-10" style="fontSize:1.5rem">
                    A{{i + 1}}:
                </div>
                <div
                    v-for="answerItem in answer.answerItems"
                    :key="answerItem.answer"
                    class="mb-5 pb-5 border-dark-600 border-b-1"
                >
                    {{answerItem.answer}}
                </div>
            </div> -->
        </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const { push, back, currentRoute } = useRouter()
    let surveyResult = ref([])
    let finalStatistics = ref({})
    onMounted(async() => {
        const res = await (await fetch(import.meta.env.VITE_SURVEY_RESULT_URL, { method: "GET", headers: { 'Content-Type': 'application/json' }, mode: 'cors' })).json()
        surveyResult.value = JSON.parse(JSON.stringify(res.reverse())).filter(item => item._id === currentRoute.value.params.id)
        const answers = surveyResult.value[0].answers
        const items = surveyResult.value[0].items
        const statistics = {}
        const allTypes = []
        items.forEach((item, index) => {
            if (item.options.length > 0) {
                allTypes.push(index)
                item.options.forEach(op => {
                    statistics[op] = { count: 0, percent: 0, number: index, total: 0 }
                })
            }
        })
        answers.forEach(answer => {
            answer.answerItems.forEach(item => {
                const options = item.answer?.split(',')
                if (options?.length === 1) {
                    if (statistics[item.answer]) {
                        statistics[item.answer].count++
                    }
                } else {
                    options?.forEach(op => {
                        if (statistics[op]) {
                            statistics[op].count++
                        }
                    })
                }
            })
        })
        const totalCount = {}
        allTypes.forEach(type => {
            totalCount[type] = 0
        })
        Object.keys(statistics).forEach(item => {
            allTypes.forEach(type => {
                if (statistics[item].number === type) {
                    totalCount[type] += statistics[item].count
                }
            })
        })
        Object.keys(statistics).forEach(item => {
            statistics[item].percent = (statistics[item].count / totalCount[statistics[item].number] * 100).toFixed(2)
        })
        finalStatistics.value = statistics
    })
    return {
        surveyResult,
        back,
        finalStatistics,
        navigateToSurvey(id: string) {
            push('/survey/' +id)
        }
    }
  }
})
</script>