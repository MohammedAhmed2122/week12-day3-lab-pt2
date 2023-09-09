const React = require('react');

class Show extends React.Component {
  render () {
    const { vegetable } = this.props;

    return (
      <>
        <h1>{vegetable.name[0].toUpperCase()}{vegetable.name.substring(1)} Show Page</h1>
        <p>
          The {vegetable.name} has a color of {vegetable.color} and&nbsp;
          {vegetable.readyToEat ? 'is ready to eat' : 'is not ready to eat...can\'t touch this'}
        </p>
        <a href='/vegetables'>Go Back</a>
      </>
    );
  }
}

module.exports = Show;