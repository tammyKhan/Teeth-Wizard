import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../pages/AllTreatments";
import Profile from "../pages/Profile";
import MyAppointments from "../pages/MyAppointments";


const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/allTreatments',
        element: <AllTreatments></AllTreatments> ,
      },
      {
        path:'/profile',
        element: <Profile></Profile>,
      },
      {
        path:'/appointments',
        element: <MyAppointments></MyAppointments> ,
      },
    ]
  }
])

export default router;