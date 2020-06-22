import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage'


class HomePage extends Component {
  render() {
    return (
      <div className='homePage'>
        <Link to='/add'>
        <button id="addMeal" class="button">Add new meal</button>
        </Link>
        <section class="first entry">
          Dinner Monday
      </section>
        <section class="sec entry">
          Lunch Tuesday
      </section>
      <Link to='/'>
        <button type="submit">Logout</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;