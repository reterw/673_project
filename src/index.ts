import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import "virtual:windi.css";
import "./style.css";

import { useUrlSearchParams } from '@vueuse/core';
import { createPinia } from 'pinia';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Chips from 'primevue/chips';
import PrimeVue from 'primevue/config';
import Fieldset from 'primevue/fieldset';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/RadioButton';
import SpeedDial from 'primevue/speeddial';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { AUTH_SERVER_URL, deviceId } from './constant';
import createVoteVue from "./createVote.vue";
import { hoverState } from './directives/hoverState';
import index from './index.vue';
import voteList from "./voteLists.vue";
import about from "./about.vue";
import adminPage from "./adminPage.vue";
import createSurvey from "./survey/createSurvey.vue";
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import surveyList from "./survey/surveyList.vue";
import surveySubmit from "./survey/surveySubmit.vue";
import Menubar from 'primevue/menubar';
import surveyTemplate from "./survey/surveyTemplate.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/create-vote', component: createVoteVue },
        { path: '/', component: surveyList },
        { path: '/about', component: about},
        { path: '/admin-page', component:surveyTemplate},
        { path: '/create-survey', component:createSurvey},
        { path: '/survey-list', component:surveyList},
        { path: '/survey/:id', component:surveySubmit}
    ]
})
router.afterEach(
    (to, from, next) => {
        document.querySelector("body").setAttribute("style", "overflow: auto !important;")
    }
)

const app = createApp(index)

app.use(router)
app.use(PrimeVue)
app.directive('hover', hoverState)
app.component('chips', Chips)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Fieldset', Fieldset)
app.component('Checkbox', Checkbox)
app.component('Avatar', Avatar)
app.component('SpeedDial', SpeedDial)
app.component('Dropdown', Dropdown)
app.component('RadioButton', RadioButton)
app.component('Textarea', Textarea)
app.component('Menubar', Menubar)
app.use(createPinia())
app.mount('#app')
