import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home";
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
        loader:async ()=> {
           const servicesRes = await fetch("/service.json");
           const servicesData = await servicesRes.json()

           const feedbackRes = await fetch("/happyClients.json")
           const feedbackData = await feedbackRes.json()

           return {servicesData, feedbackData}
        }
      },
      {
        path:'/allTreatments',
        element: <AllTreatments></AllTreatments> ,
        loader:()=> fetch("/service.json")
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