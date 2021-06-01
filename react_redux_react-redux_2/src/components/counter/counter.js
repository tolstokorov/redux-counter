import { connect } from 'react-redux';
import * as actions from '../../store/actions/counter';

const Counter = ({ value, inc, dec }) => {
    return (
        <div class='app'>
            <button id='dec' class='btn'
                onClick={ dec }
            >&#8722;</button>
            <span id='counter' class='counter'>{ value }</span>
            <button id='inc' class='btn'
                onClick={ inc }
            >&#43;</button>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        value: state.counter.value
    };
};
export default connect(mapStateToProps, actions)(Counter);