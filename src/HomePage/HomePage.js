import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'



class HomePage extends Component {

  state = {
    meals: []
  }

  componentDidMount() {

    fetch('http://localhost:8000/meals', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
      },
    })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e));

        return res.json();
      })
      .then((data) => {
        console.log(data)
        this.setState({
          meals: data
        })
      })


      .catch(error => { console.error({ error }); });
  }

  render() {
    const meals = this.state.meals
    console.log(meals)
    return (

      <div className='homePage'>
        <Link to='/addForm'>
          <button id="addMeal" className="button">Add new meal</button>
        </Link>
        <div className='meal-entry'>
          {meals.map(meal => {
            return <div className='meal'>
              <Link className='mealID' to={'/meal/' + meal.id}>
                <p>{meal.day}<br/>{meal.kind_of_meal}<br/>{meal.title}</p>
              </Link>
            </div>
          })
          }
        </div>
        <Link to='/'>
          <button type="submit">Logout</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;