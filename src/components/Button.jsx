import PropTypes from "prop-types";
import style from '../css/Button.module.css'



const Button = ({handleValue,label}) => {
    
    return(
        <>
            <button type="button" className={style.btn} onClick={handleValue}>{label}</button>
        </>
    );
};


Button.propTypes = {
    label: PropTypes.string.isRequired,
    handleValue: PropTypes.func.isRequired
  };
export default Button;