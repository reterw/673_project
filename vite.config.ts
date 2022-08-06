import { defineConfig } from "vite"
import vuePlugin from "@vitejs/plugin-vue"
import windicss from "vite-plugin-windicss"
// module.exports={
//     pwa:{
//         iconPath:{
//             favicon32:'favicon.png',
//             favicon16:'favicon.png'
//         }
//     }
// }
export default defineConfig({
    base: '/673_project/',
    plugins: [vuePlugin(), windicss()]
})

