import style from "./Container.module.css"
function Container(props) {
    return <div className={`${style.container} w-50 `}>{props.children}</div>
}
export default Container