import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onResetAll,
      onDelete,
      onIncrement,
      onDecrement,
      counters,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm btn-m2">
          Reset
        </button>
        <button onClick={onResetAll} className="btn btn-primary btn-sm m-2">
          Reset All
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
