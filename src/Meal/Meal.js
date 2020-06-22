import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'


class Meal extends Component {
  render() {
    return (
      <div className='meal'>
        <header>
          <h2>Chicken with broccoli</h2>
        </header>
        <h4>Dinner</h4>
        <h4>Monday</h4>
        <section>
          Chicken with broccoli,penne pasta and white sos.
    </section>
        <p>Recipe: https://www.gimmesomeoven.com/chicken-broccoli-recipe/</p>

        <Link to='/home'>
        <button type="button" class="button-delete">Delete</button>
        </Link>
        <button type="submit">Edit</button>
        <Link to='/home'>
        <button type="button">Cancel</button>
        </Link>
      </div>
    )
  }
}

export default Meal;