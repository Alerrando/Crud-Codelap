import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Network } from "./page/network";
import { Login } from "./page/login";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addUsername } from "./redux/crudSlice";

export function Router() {
  const { username } = useSelector((state: RootState) => state.crud);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/network" element={<Network />} />

        <Route
          path="*"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}
