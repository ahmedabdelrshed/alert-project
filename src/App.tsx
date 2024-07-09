import { CircleCheckBig, CircleX, OctagonAlert } from 'lucide-react'
import './App.css'
import Alert from './components/Alert'

function App() {


  return (
    <>
        <Alert type='alert-default' icon = {<CircleCheckBig />} title='Default'>
        <h2>Alerting</h2>
        </Alert>
        <Alert type='alert-info' icon = {<CircleCheckBig />} title='Info'/>
    <Alert type='alert-danger' icon = {<CircleX />} title='Alerting'/>
    <Alert type='alert-success' icon = {<CircleCheckBig />} title='Success'/>
    <Alert type='alert-warning' icon = {<OctagonAlert />} title='Success'/>
    </>
  )
}

export default App
