import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'


class Meal extends Component {

  state = {
    meal: {}
  }

  componentDidMount() {

    fetch(`http://localhost:8000/meals/${this.props.match.params.id}`, {
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
          meal: data
         }) 
        })


      .catch(error => { console.error({ error }); });
  }

  onDelete = () => {

    fetch(`http://localhost:8000/meals/${this.props.match.params.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
      },
    })
     
      .then((data) => {
        console.log(data)
        this.props.history.push('/home')
        })


      .catch(error => { console.error({ error }); });
  }




  render() {
   const meal = this.state.meal || {}
    return (
      <div className='meal'>
        <header>
    <h2>{meal.title}</h2>
        </header>
    <h4>{meal.kind}</h4>
    <h4>{meal.day}</h4>
        <section>
          {meal.description}
    </section>
    <p>{meal.link}</p>

        
          <button  onClick={this.onDelete} type="button" class="button-delete">Delete</button>
        <Link to={'/edit/' + meal.id}>
          <button>
            Edit
          </button>
        </Link>
        <Link to='/home'>
          <button type="button">Go back</button>
        </Link>
      </div>
    )
  }
}

export default Meal;