import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css'


class LandingPage extends Component {
  render() {
    return (
      <div className='landingPage'>
        <section>
          <p>
          As a parent of a toddler I understand how difficult it can be finding time to plan healthy meals for my family.
          Doing this, on top of cleaning, laundry, school work, etc. can sometimes feel like just another thing that I don't have time for.
          My capstone app will help parents plan and keep track of meals for their kids and entire family. The app has a simple design with an
          easy to use interface. Once signed up, users are able to access previous meal plans, edit details, save changes, even add links to
          their favorite receipes. Meal plans are created by day of the week, time of day seperated into 5 categories (Breakfast, Morning Snack,
          Lunch, Afternoon Snack, and Dinner). Additional details can be entered in the Description section to give the user the flexibility in
          choosing what they want to eat, maybe based off items they already have to avoid having to go to the store.
          </p>
    </section>
        <Link to='/login'>
          <button type="submit">Login</button>
        </Link>
        <Link to='/signUp'>
          <button type="submit">Sign up</button>
        </Link>
      </div>
    )
  }
}

export default LandingPage;
