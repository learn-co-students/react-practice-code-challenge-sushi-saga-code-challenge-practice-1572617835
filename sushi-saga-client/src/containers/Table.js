import React, { Fragment, Component } from 'react'

class Table extends Component {

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  render () {
    console
    let plateArray = new Array(this.props.sushisEaten)

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ this.props.money } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            this.renderPlates(this.props.sushisEaten)
          }
        </div>
      </div>
    </Fragment>
  )
        }
}

export default Table