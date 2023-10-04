import  './style.css'

const Timer = ({time}) => {
    return(
        <div className="timer">
            <span>{time.m}</span>&nbsp;:&nbsp;
            <span>{time.s}</span>&nbsp;:&nbsp;
            <span>{time.ms}</span>
        </div>
    )
}
export default Timer