import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieListPage from '../pages/MovieListPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MovieListPage/>} />
            <Route path='/details/:id' element={<MovieDetailsPage/>} />
        </Routes>
    );
};

export default MainRoutes;