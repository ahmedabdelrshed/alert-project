import {  X } from "lucide-react"
import './alert.scss'
import { ReactNode } from "react"
import { AlertType } from "../types/Alerttypes"
interface IProps {
type: AlertType
icon:ReactNode // for pass Component to Component
title:string 
children?:ReactNode
}

const Alert = ({type ,icon ,title ,children}: IProps) => {
  return (
    <div className={type}>
       <div className="alert-header">
        <div className="">
        {icon}
        <h4>{title}</h4>
        </div>
        <span>
            <X/>
        </span>
       </div> 
       <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti vero laborum nobis quisquam sunt iusto, minima obcaecati est doloremque voluptatum libero dolore corporis debitis nam pariatur! Fugit, incidunt dolore!
        </p>
        {children}
    </div>
  )
}

export default Alert