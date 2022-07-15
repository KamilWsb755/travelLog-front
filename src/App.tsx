import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Form } from './components/layout/Form';
import { Header } from './components/layout/Header';
import { List } from './components/layout/List';
import { Nav } from './components/layout/Nav';
import { SingleView } from './components/layout/SingleView';
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Form />} />
        <Route path="/travel/:id" element={<SingleView />} />
      </Routes>
    </div>
  )
}