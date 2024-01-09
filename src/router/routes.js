import RouteConst from "../shared/constanst/RouteConst";
import Home from "../pages/Home";
import ZingChart from "../pages/ZingChart";
import Album from "~/pages/Album";


const publicRoutes = [
    {
        path: RouteConst.home,
        page: Home,
    },
    {
        path: RouteConst.zing_chart,
        page: ZingChart,
    },
    {
        path: RouteConst.album,
        page: Album,
    }
];


const privateRoutes = [];


export { publicRoutes, privateRoutes };





