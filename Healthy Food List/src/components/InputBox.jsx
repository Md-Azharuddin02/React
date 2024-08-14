function InputBox({changeOnKeyDown}) {
    return (
        <>
        <input type="text" placeholder="Search food" onKeyDown={changeOnKeyDown}/>
        </>
    )
}
export default InputBox