import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/info.jsx'
import Comment from './subpage/Comment.jsx'
import Buy from './subpage/buy.jsx'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const id=this.props.params.id;
        return (
            <div>
                <Header title="商户详情" type="share"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id} />
            </div>
        )
    }
}

 export default Detail