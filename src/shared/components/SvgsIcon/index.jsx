import { lazy } from "react";

const SvgsIcon = ({ icon, width, height }) => {
    const SvgComponent = lazy(() => import(`../../Svgs/${icon}`));

    return <div style={{ width, height }}>
        <SvgComponent />
    </div>;
};

export default SvgsIcon;
