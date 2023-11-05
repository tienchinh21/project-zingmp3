import { AddList } from "../../../../../shared/Svgs";

const AddPlayList = () => {

    return (
        <div className="add-play-list">
            <button className="btn-add">
                <AddList />
                <span>Tạo playlist mới</span>
            </button>
        </div>
    )
};

export default AddPlayList;