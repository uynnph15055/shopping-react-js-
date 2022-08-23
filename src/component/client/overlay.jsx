const OverLay = ({style ,onClick}) => {
    return (
        <div  style={style} onClick={onClick} className="fixed z-20 top-0 left-0 right-0 bottom-0  opacity-70"></div>
    )
}

export  default OverLay;