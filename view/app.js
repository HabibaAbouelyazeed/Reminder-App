import { AppRouter } from '../router.js'

const masterContainer = document.getElementById('masterContainer')

export const App = ()=>{
    masterContainer.innerHTML = AppRouter()
}