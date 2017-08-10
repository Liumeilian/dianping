import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router'
import { bindActionCreators } from 'redux'
import * as storeActionsFromFile from '../../../actions/store.js'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	isStore:false
        }
    }
    render() {
        return (
            <div>
            	<BuyAndStore 
            		isStore={this.state.isStore} 
            		buyHandle={this.buyHandle.bind(this)} 
            		storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
    }

    //检验当前商户是否已经被收藏
    checkStoreState(){
        const id=this.props.id
        const store =this.props.store
        //some只要一个为真就返回真
        store.some(item=>{
            if(item.id===id){
                this.setState({
                    isStore:true
                })
                //跳出循环
                return true
            }
        })
    }

    //购买事件
    buyHandle(){
    	//验证登录
    	const loginFlag=this.loginCheck()
    	if(!loginFlag){
    		return
    	}
    	//购买的流程
    	

    	hashHistory.push('/User')

    }
    //收藏事件
    storeHandle(){

        //验证登录
        const loginFlag=this.loginCheck()
    
        if(!loginFlag){
            return
        }
        const id=this.props.id
        const storeActions=this.props.storeActions
         if (this.state.isStore) {
            // 已经被收藏了，则取消收藏
            storeActions.rm({id: id})
        } else {
            // 未收藏，则添加到收藏中
            storeActions.add({id: id})
        }
        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })

    }

    //验证登录
    loginCheck(){
    	const id=this.props.id;
    	const userinfo=this.props.userinfo;
    	if(!userinfo.username){
    		//跳转到登录页面
    		hashHistory.push('/login/'+encodeURIComponent('/detail/'+id));
    		return false;
    	}
    	return true;
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store:state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions:bindActionCreators(storeActionsFromFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)
