import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Network } from './page/network'


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/network" element={<Network />} />
            </Routes>
        </BrowserRouter>
    )
}