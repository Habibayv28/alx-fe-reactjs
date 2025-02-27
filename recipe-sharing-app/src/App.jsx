import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'
import RecipetDetails from './components/RecipeDetails'

function App() {
  
  return (
    <Router>
      <div>
        <h1>Recipe</h1>
        <AddRecipeForm />
        <RecipeDetails/>
        <Routes>
        <Route path='/' element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
