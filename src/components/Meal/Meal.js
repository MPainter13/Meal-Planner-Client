import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import config from '../../config';
import './Meal.css'


class Meal extends Component {

  state = {
    meal: {}
  }

  componentDidMount() {

    fetch(`${config.API_ENDPOINT}/meals/${this.props.match.params.id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
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

    fetch(`${config.API_ENDPOINT}/meals/${this.props.match.params.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
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
    <h3>{meal.title}</h3>
        </header>
        <h4>{meal.day}</h4><br/>
    <h4>{meal.kind_of_meal}</h4>
        <section>
          {meal.description}
    </section>
    <p>{meal.link}</p>

        
          <button  onClick={this.onDelete} type="button" className="button-delete">Delete</button>
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