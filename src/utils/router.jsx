import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home";
import AllTreatments from "../pages/AllTreatments";
import Profile from "../pages/Profile";
import MyAppointments from "../pages/MyAppointments";
import Details from "../pages/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";


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
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>,
      },
      {
        path:'/appointments',
        element: <PrivateRoute>
           <MyAppointments></MyAppointments>
        </PrivateRoute> ,
      },
      {
        path:'/details/:id',
        element:<PrivateRoute>
           <Details></Details>
        </PrivateRoute> ,
        loader:async({params}) => {
            const res = await fetch("/service.json")
            const data = await res.json()

            const singleData = data.find(d => d.id == params.id)
            return singleData
        }
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
    ]
  }
])

export default router;