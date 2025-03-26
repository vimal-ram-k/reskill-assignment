import { useEffect } from "react"
import { LandingPage } from "./pages/landingpage"
import { GainNotificationPermission } from "./helper/gainnotificationpermission"

function App() {

  useEffect(() =>{
    GainNotificationPermission()
  })

  return (
    <LandingPage />
  )
}

export default App
