import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'
import config from '../../config';
import TokenService from '../../services/token-service'


//This component is for home page where you can see a list of your meals. 
class HomePage extends Component {
  state = {
    meals: []
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/meals`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then((res) => {
        console.log(res)
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

  handleLogOut = () => {
    TokenService.clearAuthToken()
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
            return <div className='meal' key={meal.id}>
              <Link className='mealID' to={'/meal/' + meal.id} key={meal.id}>
                <p>{meal.day}<br />{meal.kind_of_meal}</p>
              </Link>
            </div>
          })
          }
        </div>
        <Link to='/'>
          <button onClick={this.handleLogOut}>Logout</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;