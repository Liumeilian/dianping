import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import Header from '../../components/Header'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList.jsx'
class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo=this.props.userinfo
        return (
            <div>
               <Header title="用户中心" backRouter="/" />
               <UserInfo username={userinfo.username} city={userinfo.cityName} />
               <OrderList username={userinfo.username} />
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.userinfo.username){
               hashHistory.push("/Login")
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions:bindActionCreators(userInfoActionsFormOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)