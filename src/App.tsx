import Home from "./routes/Home.tsx";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import HostedCheckout from "./routes/HostedCheckout.tsx";
import Success from "./routes/Success.tsx";
import Failure from "./routes/Failure.tsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Home/>
            ),
        },
        {
            path: "/hosted-checkout",
            element: (
                <HostedCheckout/>
            )
        },
        {
            path: '/success',
            element: (
                <Success/>
            )
        },
        {
            path: '/failure',
            element: (
                <Failure/>
            )
        },
    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default App