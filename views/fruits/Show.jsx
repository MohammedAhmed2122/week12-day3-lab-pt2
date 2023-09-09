const React = require('react');

class Show extends React.Component {
  render() {
    const { fruit } = this.props;

    return (
      <>
        <h1>{fruit.name[0].toUpperCase()}{fruit.name.substring(1)} Show Page</h1>
        <p>
          The {fruit.name} has a color of {fruit.color} and&nbsp;
          {fruit.readyToEat ? 'is ready to eat' : 'is not ready to eat...can\'t touch this'}
        </p>
        <a href='/fruits'>Go Back</a>
      </>
    );
  }
}

module.exports = Show;