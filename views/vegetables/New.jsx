const React = require('react');

class New extends React.Component {
  render() {
    return (
      <>
        <h1>New Vegetable Page</h1>
        <form action='/vegetables' method='POST'>
          <label htmlFor='name'>Name: 
            <input type='text' id='name' name='name' /><br />
          </label>
          <label htmlFor='color'>Color: 
            <input type='text' id='color' name='color' /><br />
          </label>
          <label htmlFor='readyToEat'>Is Ready To Eat: 
            <input type='checkbox' id='readyToEat' name='readyToEat' /><br />
          </label>
          <input type='submit' value='Create Vegetable' />
        </form>
        <a href='/vegetables'>Go Back</a>
      </>
    );
  }
}

module.exports = New;