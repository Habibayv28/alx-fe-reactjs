import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'
import RecipetDetails from './components/RecipeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <h1>Recipe</h1>
      </div>
       <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      <RecipeList/>
      <AddRecipeForm />
      <RecipeDetails/>
    </Router>
  )
}

export default App
