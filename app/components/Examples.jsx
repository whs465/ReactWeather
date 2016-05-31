var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few examples locations to try out</p>
        <ol>
          <li>
            <Link to='/?location=Yangon'>Yangon, YG</Link>
          </li>
          <li>
            <Link to='/?location=Bogota'>Bogota, BOG</Link>
          </li>
        </ol>
      </div>
    )
  };

module.exports = Examples;
