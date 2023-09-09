const React = require('react');

class Index extends React.Component {
  render() {
    const { fruits } = this.props

    return (
      <div>
        <nav>
          <a href='/'>Home</a>
        </nav>
        <h1>Fruits Index Page</h1>
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li key={i}>
                <a href={`/fruits/${fruit._id}`}>
                  {fruit.name[0].toUpperCase()}{fruit.name.substring(1)}
                </a>
              </li>
            )
          })}
        </ul>
        <nav>
          <a href='/fruits/new'>Create a New Fruit</a>
        </nav>
      </div>
    );
  }
}

module.exports = Index;

