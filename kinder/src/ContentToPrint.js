import { Component } from 'react';

class ContentToPrint extends Component {
  render() {
    let line = this.props.line || 8;
    const Content = (
      <span>
        {this.props.text.repeat(50)}
        <span className='cross-line'></span>
      </span>
    );
    const Line = new Array(Number(line)).fill(Content);
    console.log(Line.length);
    return (
      <div className='content'>
        {Line.map((item, i) => (
          <div className='big-text' key={i}>
            {' '}
            {item}{' '}
          </div>
        ))}

        {/* <input type='text' placeholder='Enter something' /> */}
      </div>
    );
  }
}

export default ContentToPrint;
