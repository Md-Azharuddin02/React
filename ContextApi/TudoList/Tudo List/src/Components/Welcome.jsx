import { ItemContext } from "../store/ItemContext"
import { useContext } from "react"
import style from "./Container.module.css"

export default function Welcome() {
    const {item}= useContext(ItemContext)
    return  item.length == 0 && <p className={style.welcome}>No Task left, Enjoy your daya</p>

}
