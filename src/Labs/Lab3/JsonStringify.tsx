export default function JsonStringify() { 
    // Note how the array is rendered with square brackets 
    // and items are separated by commas.

    const squares = [1, 4, 16, 25, 36];
    return (
      <div className="wd-json-stringify">
        <h3>JSON Stringify</h3>
        squares = {JSON.stringify(squares)}
        <hr />
      </div>
    );
  }
  