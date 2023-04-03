import Home from "../components/Home";
import { connect } from 'react-redux';
import { addToCart,removeToCart } from '../service/Actions/actions';


//send data from redux store to component
const mapStateToProps = state => ({
    cardData: state.cardItems.cardData
});

//send data from component to redux store
const mapDispatchToProps = dispatch => ({
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeToCartHandler: (data) => dispatch(removeToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;