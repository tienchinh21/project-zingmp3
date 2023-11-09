import FormInput from "./FormInput";
import SectionUser from "./SectionUser";

import './index.css';

const Header = () => {

    return (
        <header className="header-zmp3">
            <div className="header-wrapper">
                <FormInput />
                <SectionUser />
            </div>
        </header>
    );
};

export default Header;
