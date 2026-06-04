import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home/Home';
import { Explore } from '../pages/Explore/Explore';
import { Upload } from '../pages/Upload/Upload';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upload" element={<Upload />} />
        </Routes>
    )
}
