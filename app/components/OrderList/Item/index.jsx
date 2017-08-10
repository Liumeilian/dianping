import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            commentState:2//0-未评价  1-评价中 2-已评价
        }
    }
    render() {
    	const data=this.props.data
        return (
            <div className="clear-fix order-item-container">
            	<div className="order-item-img float-left">
					<img src={data.img} />
            	</div>
            	<div className="order-item-comment float-right">
                    {
            		    
                        this.state.commentState===0
                        ? //未评价
                            <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                        :
                            this.state.commentState===1
                            ?
                                ''//评价中
                            :    //已评价
                                <button className="btn unselected-btn">已评价</button>

                    }
            	</div>
            	<div className="order-item-content">
            		<span>商户：{data.title}</span>
            		<span>数量：{data.count}</span>
            		<span>价格：￥{data.price}</span>
            	</div>
                {
                    this.state.commentState===1
                    ?
                        <div className="comment-text-container">
                            <textarea style={{width:'100%',height:'80px'}} ref="commentText" className="comment-text"></textarea>
                            <button className="btn" onClick={this.submitClickHandle.bind(this)}>提交</button>
                            <button className="btn unselected-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                    :
                        ''

                }
            </div>
        )
    }
    componentDidMount(){
        const data=this.props.data

        this.setState({
            commentState:data.commentState
            
        })
    }
    showComment(e){
        this.setState({
            commentState:1
        })
    }
    hideComment(e){
        this.setState({
            commentState:0
        })
    }
    submitClickHandle(e){
        const submitComment=this.props.submitComment

        const id=this.props.data.id
        const commentTextDOM=this.refs.commentText
        const value=commentTextDOM.value.trim()
        if(!value){
            return
        }
        submitComment(id,value,this.commentOK.bind(this))

    }
    commentOK(){
        //已经评论，修改状态
        this.setState({
            commentState:2
        })
    }
}

export default Item