const React = require('react');

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;

    return (
      <div>
        <nav>
          <a href='/'>Home</a>
        </nav>
        <h1>Vegetables Index Page</h1>
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li key={i}>
                <a href={`/vegetables/${vegetable._id}`}>
                  {vegetable.name[0].toUpperCase()}{vegetable.name.substring(1)}
                </a>
              </li>
            )
          })}
        </ul>
        <nav>
          <a href='/vegetables/new'>Create a New Vegetable</a>
        </nav>
      </div>
    )
  }
}

module.exports = Index;