import React from 'react'
import TableCell from './TableCell'

class TableRow extends React.Component{
    render(){
        let columns = []
        for( let i = 0; i<this.props.columns; i++){
            columns.push(<TableCell color= {this.props.color}/>)
        }
        return(
            <tr> {columns} </tr>
        )
    }
}

export default TableRow