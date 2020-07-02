import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Add.css'


class AddForm extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const { selectMeal, selectDay, title, link, desc } = e.target
    const meal = {
      kind_of_meal: selectMeal.value,
      day: selectDay.value,
      title: title.value,
      link: link.value,
      description: desc.value
    }
    fetch('http://localhost:8000/meals', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
      },
      body: JSON.stringify(meal)
    })
    .then(res => res.json())
    .then(data => console.log(this.props.history.push('/home')))
  }

  render() {
    return (
      <div className='addForm'>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Add new meal</legend>
              <select id="selectMeal">
                <option>Select Meal</option>
                <option value="breakfast">Breakfast</option>
                <option value="morningSnack">Morning snack</option>
                <option value="lunch">Lunch</option>
                <option value="afternoonSnack">Afternoon snack</option>
                <option value="dinner">Dinner</option>
              </select>
              <select id="selectDay">
                <option>Select Day</option>
                <option value="Sun">Sunday</option>
                <option value="Mon">Monday</option>
                <option value="Tue">Tuesday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thu">Thursday</option>
                <option value="Fri">Friday</option>
                <option value="Sat">Saturday</option>
              </select>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" required />
              <label htmlFor="link">Favorite recipe</label>
              <input type="url" id="link" name="url" />
              <label htmlFor="desc">Description</label>
              <textarea type="text" id="desc" name="desc" required rows="4" cols="50"></textarea>
              <div class="buttons">
                <Link to='/home'>
                  <button type="cancel">Cancel</button>
                </Link>
            
                <button type="submit">Add</button>
                
              </div>
            </fieldset>
          </form>
        </div>
    )
  }
}

export default AddForm;