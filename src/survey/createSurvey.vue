<template>
    <div class="mt-35 z-10" style="z-index: 1">
        <div class="flex flex-col w-full mt-10">
            <div class="inline-flex items-center mb-10">
                <div class="mr-5">Please choose a type</div>
                <Dropdown v-model="selectedType" :options="types" optionLabel="name" placeholder="--Type--" />
            </div>
            <div v-if="selectedType?.value > -2">
                <InputText
                    placeholder="title"
                    type="text"
                    class="bg-dark-200 w-full text-light-300 rounded-xl"
                    v-model="title"
                />
            </div>
            <div class="flex flex-col gap-2 text-xl pt-10">
                <div
                    :key="e"
                    v-for="(e, i) in choices"
                    class="flex items-center bg-dark-200 p-2 justify-between px-5 rounded-xl hover:cursor-pointer"
                >
                    <div class>{{ i + 1 }}. {{ e }}</div>
                    <i class="pi pi-times" @click="deleteChoice(e)"></i>
                </div>
            </div>
            <div v-if="selectedType?.value === 0 || selectedType?.value === 1" class="flex items-center pt-5 sm:flex-row flex-col sm:h-auto w-full h-full">
                <div class="inline-flex w-full">
                    <InputText
                        placeholder="choice content"
                        type="text"
                        class="bg-dark-300 w-full text-light-300 rounded-xl"
                        v-model="choice"
                    ></InputText>
                    <i class="pi pi-plus mx-5 my-5 hover:bg-dark-200 cursor-pointer" style="fontSize:1.5rem" @click="addChoice"></i>
                </div>
            </div>
            <div
                v-if="selectedType?.value > -2"
                class="flex gap-1 items-center cursor-pointer flex-shrink rounded-xl sm:p-2 p-5 md:w-40 sm:p mt-10 place-self-end"
                style="fontSize:1.5rem"
            >
                <Button @click="addSurveyList" class="md:w-40" label="Add" />
            </div>
            <div class="flex flex-col gap-2 text-xl mt-5 pt-10">
                <div
                    v-for="(item, index) in surveyList"
                    class="flex-row mb-15 border-b-1 border-indigo-200"
                >
                    <div class="flex justify-between mb-10">
                        <div v-if="item.type === -1" class="w-full mb-20 text-center" style="fontSize:3rem">
                            {{ item.title }}
                        </div>
                        <div v-if="item.type === -1" class="grow">
                            <i style="fontSize:1.5rem" class="pi pi-times cursor-pointer hover:bg-dark-300" @click="deleteSurveyList(item)"></i>
                        </div>
                    </div>
                    <div v-if="item.type !== -1">
                        <div class="flex justify-between mb-10">
                            <div class="flex-none mr-5 " style="fontSize:2rem">{{ index }}. {{ item.title }}</div>
                            <div class="grow">
                                <i style="fontSize:1.5rem" class="pi pi-times cursor-pointer hover:bg-dark-300" @click="deleteSurveyList(item)"></i>
                            </div>
                        </div>
                        <div class="flex mb-10" v-for="(e, i) in item.content">  
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
            <div
                v-if="surveyList?.length > 1"
                class="mb-40 place-self-end"
                style="fontSize:1.5rem"
            >
                <Button @click="createSurvey" class="md:w-40" label="Create" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useSurveyStore } from "../stores/surveyStore";
import { v4 } from 'uuid';
import { SurveyQuestionnaireItem } from '../../shared/survey'
import { useUserInfo } from "../stores/store";

export default defineComponent({
    setup() {
        const { username } = useUserInfo()
        onMounted(() => {
            if (!username) {
                window.alert("Please login to create survey!");
                push('/')
            }
        })
        const types = [
            {name: 'Survey Name', value: -1},
            {name: 'Single', value: 0},
            {name: 'Multiple', value: 1},
            {name: 'Input', value: 2}
        ];
        const selectedType = ref(null);
        let choices = ref([]);
        let choice = ref('');
        let title = ref('');
        const surveyStore = useSurveyStore();
        const { push } = useRouter()
        let surveyList = ref([]);


        return {
            types,
            selectedType,
            choices,
            choice,
            title,
            surveyList,
            addChoice() {
                if (!choice.value) {
                    return
                }
                choices.value.push(choice.value);
                if (choice.value !== '') {
                    choice.value = '';
                }
            },
            deleteChoice(e) {
                choices.value.splice(choices.value.indexOf(e), 1);
            },
            addSurveyList() {
                const hasTitle = surveyList.value.filter(item => item.type === -1)
                if (!title.value || 
                        ((selectedType?.value?.value === 0 || selectedType?.value?.value === 1) 
                        && choices.value.length === 0)
                        || (hasTitle.length > 0 && selectedType?.value?.value === -1) 
                        || (surveyList.value.length === 0 && selectedType?.value?.value !== -1)) {
                    return
                }
                surveyList.value.push({
                    id: v4(),
                    type: JSON.parse(JSON.stringify(selectedType?.value?.value)),
                    title: JSON.parse(JSON.stringify(title.value)),
                    content: JSON.parse(JSON.stringify(choices.value)),
                    checked: false,
                    inputText: '',
                    selectedChoices: []
                })
                title.value = ''
                choices.value.splice(0, choices.value.length)
            },
            deleteSurveyList(e) {
                surveyList.value.splice(surveyList.value.indexOf(e), 1);
            },
            async createSurvey() {
                const surveyItem: Array<SurveyQuestionnaireItem> = []
                surveyList.value.map(item => {
                    if (item.type !== -1) {
                        surveyItem.push({
                            title: item.title,
                            type: item.type,
                            options: item.content
                        })
                    }
                })
                const res = await surveyStore.createSurvey({
                    user_id: username,
                    name: surveyList.value.filter(item => item.type === -1)[0]?.title,
                    items: surveyItem
                });
                push('/survey/' + res._id)
            }
        };
    },

});

</script>