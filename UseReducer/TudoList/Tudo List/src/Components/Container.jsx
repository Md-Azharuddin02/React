import style from "./Container.module.css"

function Container(props) {
    return <div className={style.containerStyle}>{props.children}</div>
}
export default Container