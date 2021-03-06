import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {

  return ( 
    <div>
      filter <input name='filter' onChange={(event) => props.setFilter(event.target.value)} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  setFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)