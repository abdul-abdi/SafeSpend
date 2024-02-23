import { NavLink } from "react-router-dom";
import styles from "../../styles/Navbar/ListItemLink.module.scss"

const ListItemLink = ({ url, children, clickHandler, optionClass}) => {
    return (
        <li className = {`${styles.listItem} ${optionClass}`} onClick={clickHandler}> 
            <NavLink 
            to={`/${url}`}
            className={({ isActivate }) => (isActivate ? styles.active : undefined)}
            >
                {children}
            </NavLink>
        </li>
    );
};

ListItemLink.defaultProps ={
    url: "",
    optionClass: undefined,
}

export default  ListItemLink;