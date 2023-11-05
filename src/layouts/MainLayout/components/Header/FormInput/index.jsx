const FormInput = () => {

    return (
        <div className="header-right">
            <button className="inherit"><i className="icon fas fa-arrow-left"></i></button>
            <button className="inherit"><i className="icon fa-solid fa-arrow-right-long"></i></button>
            <form action="">
                <div className="form--wrapper">
                    <button><i class="icon-search fa-solid fa-magnifying-glass"></i></button>
                    <div className="input-wrapper">
                        <input type="text" name="" id="" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormInput;