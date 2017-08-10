import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
const initialState={
    data:[],
    hasMore:false,
    isLoadingMore:false,
    page:0
}
class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state=initialState;
    }
    render() {
        return (      
            <div>{
                this.state.data.length
                ?<ListComponent data={this.state.data}/>
                :<div>{/*加载中*/}</div>
            }
            {
                this.state.hasMore
                ? <LoadMore isLoadingMore={this.state.isLoadingMore} />
                :''

            }
            </div>
      )
    }
    
}

 export default SearchList