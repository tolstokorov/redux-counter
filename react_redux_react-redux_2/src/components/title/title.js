import { connect } from 'react-redux';

const Title = ({ min, max }) => {
    return (
        <h1 class='title'>
            Счётчик от <span id='from'>{ min }</span> до <span id='to'>{ max }</span>
        </h1>
    );
};
const mapStateToProps = state => {
    return {
        min: state.counter.min,
        max: state.counter.max
    };
};
export default connect(mapStateToProps)(Title);