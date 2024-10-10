import PropTypes from "prop-types";
import style from '../css/Button.module.css'



const Button = ({handleChange,label}) => {
    
    return(
        <>
            <button type="button" className={style.btn} onClick={handleChange}>{label}</button>
        </>
    );
};


Button.propTypes = {
    good:PropTypes.any,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func
  };
export default Button;