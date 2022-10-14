import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Routes,
  Route,
  // Link,
  NavLink,
  // useParams,
  useNavigate,
  // useParams,
} from 'react-router-dom'

import Home from './components/Home'
import RecipeList from './components/RecipeList'
import Recipe from './components/Recipe'
import Blog from './components/Blog'
import About from './components/About'
import Footer from './components/Footer'

import './App.css'
import {
  Container,
  StyledNav,
  StyledNavLinksContainer,
} from './components/styles/StyledContainers.styled'
import { StyledNavLink } from './components/styles/StyledLinks.styled'

import { NavHeader } from './components/styles/StyledText.styled'

// import { useField } from './hooks'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [filter, setFilter] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://daphnes.fly.dev/api/recipes`).then((response) => {
      setRecipes(response.data)
    })
  }, [])

  useEffect(() => {
    if (searchTerm.length > 0) {
      axios
        .get(`https://daphnes.fly.dev/api/search/${searchTerm}`)
        .then((response) => {
          setSearchResults(response.data.data)
          console.log('effect fired!')
        })
    }
  }, [searchTerm])

  let filteredRecipes = recipes
    .map((r) => ({
      ...r,
      ingredients: r.ingredients.filter((i) =>
        i.name.toLowerCase().includes(filter.toLowerCase())
      ),
    }))
    .filter((obj) => obj.ingredients.length > 0)
  // returns array of objects whose 'ingredients' array isn't empty after filtering

  const menuItems = recipes.filter((r) => r.menuItem)

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const getRandomRecipe = () => {
    const id = recipes[Math.floor(Math.random() * (recipes.length - 1))].id
    navigate(`/recipes/${id}`)
  }

  const handleTagClick = (tag) => {
    setSearchTerm(tag)
  }

  filteredRecipes = searchResults.length > 0 ? searchResults : filteredRecipes

  return (
    <Container>
      <StyledNav>
        <NavHeader>Daphne's</NavHeader>
        <StyledNavLinksContainer>
          <StyledNavLink to="/home">Home</StyledNavLink>
          <StyledNavLink to="/recipes">Recipes</StyledNavLink>
          <StyledNavLink to="/blog">Blog</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </StyledNavLinksContainer>
      </StyledNav>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              show={show}
              toggleShow={() => setShow(!show)}
              menuItems={menuItems}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              show={show}
              toggleShow={() => setShow(!show)}
              menuItems={menuItems}
            />
          }
        />
        <Route
          path="/recipes/:id"
          element={
            <Recipe
              handleTagClick={handleTagClick}
              filteredRecipes={filteredRecipes}
              recipes={recipes}
            />
          }
        />
        <Route
          path="/recipes"
          element={
            <RecipeList
              filteredRecipes={filteredRecipes}
              recipes={recipes}
              filter={filter}
              handler={handleFilterChange}
            />
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer handler={getRandomRecipe} />
    </Container>
  )
}

export default App
