import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Add.css'


class AddForm extends Component {
  render() {
    return (
      <div className='addForm'>
          <form>
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
              <label htmlFor="addNewMeal">Title</label>
              <input type="text" id="addNewMeal" name="title" required />
              <label htmlFor="link">Attach your recipe</label>
              <input type="url" id="link" name="url" />
              <label htmlFor="desc">Description</label>
              <textarea type="text" id="desc" name="desc" required rows="4" cols="50"></textarea>
              <div class="buttons">
                <Link to='/home'>
                  <button type="cancel">Cancel</button>
                </Link>
                <Link to='/home'>
                <button type="submit">Add</button>
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
    )
  }
}

export default AddForm;