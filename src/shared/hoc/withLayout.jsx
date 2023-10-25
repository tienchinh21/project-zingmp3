const withLayout = (Component,Layout ) => {
    const LayoutWrapper = () => {
        return (
            <Layout>
                <Component/>
            </Layout>
        )
    };
    return LayoutWrapper;
};


export default withLayout;