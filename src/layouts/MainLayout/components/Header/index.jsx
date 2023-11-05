import FormInput from "./FormInput";
import SectionUser from "./SectionUser";

import './index.css';

const Header = () => {

    return (
        <header>
            <div className="header-wrapper">
                <FormInput />
                <SectionUser />
            </div>
        </header>
    );
};

export default Header;
