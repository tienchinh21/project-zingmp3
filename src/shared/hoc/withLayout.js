import { lazy } from "react";

const withLayout = (Component, LayoutName) => {

    const LayoutComponents = lazy(() => import(`../../layouts/${LayoutName}`));

    const LayoutWrapper = (props) => {
        return (
            <LayoutComponents {...props}>
                <Component />
            </LayoutComponents >
        )
    };
    return LayoutWrapper;
};


export default withLayout;