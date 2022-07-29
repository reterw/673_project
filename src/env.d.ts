interface ImportMetaEnv {
    readonly VITE_VOTE_URL: string
    readonly VITE_HOST_URL: string
    readonly VITE_CREATE_SURVEY_URL: string
    readonly VITE_GET_SURVEY_URL: string
    readonly VITE_FILL_IN_SURVEY_URL: string
    readonly VITE_SURVEY_RESULT_URL: string
    readonly VITE_GET_SURVEY_BY_USER_ID_URL: string
    readonly VITE_DELETE_SURVEY_BY_ID_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
