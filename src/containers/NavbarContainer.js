import { connect } from 'react-redux';
// import { addToCart } from '../service/Actions/actions';
import Navbar from "../components/Navbar";


//send data from redux store to component
const mapStateToProps = state => ({
    cardData: state.cardItems.cardData
});

//send data from component to redux store
const mapDispatchToProps = dispatch => ({
    // addToCartHandler: (data) => dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);