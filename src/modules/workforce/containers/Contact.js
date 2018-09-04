import React from 'react';
import { connect } from "react-redux";
import { getAccount } from "../../../store/actions";
class Contact extends React.Component {
 
  constructor(props)
  {
    super(props);
    this.state= {success:false};
  }


  componentDidMount() {

    this.props.getAccount();
  }
  render() {
    return (
      <div>
        <h2>{this.props.account.name}</h2>
      </div>

    );
  }
}

const mapStateToProps = (state) => {

  return {
    account: state.accountReducer.account,
  };

};
const contact = connect(mapStateToProps, { getAccount })(Contact);
export default contact;
