const React = require('react');

class Home extends React.Component {
  render() {
    return (
      <main>
        <h1>Welcome!</h1>
        <h3>Which list would you like to see?</h3>
        <ul>
          <li>
            <a href='/fruits'>Fruits</a>
          </li>
          <li>
            <a href='/vegetables'>Vegetables</a>
          </li>
        </ul>
      </main>
    );
  }
}

module.exports = Home;