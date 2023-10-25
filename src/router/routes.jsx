import RouteConst from "../shared/constanst/RouteConst";
import Home from "../pages/Home";
import ZingChart from "../pages/ZingChart";


const publicRoutes = [
    {
        path : RouteConst.home,
        page : Home,
    },
    {
        path : RouteConst.zing_chart,
        page : ZingChart,
    }
];


const privateRoutes = [];


export {publicRoutes, privateRoutes};





