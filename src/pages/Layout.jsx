import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div>
     <Header />
     <Suspense fallback={<>...</>}>
       <Outlet /> 
     </Suspense>
    </div>
  )
}
