import React from 'react';
import CommentItem from './CommentItem';


// 有状态的组件使用继承类的方式定义。
class CommentList extends React.Component {
    constructor() {
        super();
        this.state = {
            commentId: 6,
            comments: [
                {
                    id: 1,
                    username: '买家1',
                    comment: '没有比这个更好的额产品的了'
                },
                {
                    id: 2,
                    username: '买家2',
                    comment: '神器'
                },
                {
                    id: 3,
                    username: '买家3',
                    comment: '怎么退回，没法用'
                },
                {
                    id: 4,
                    username: '买家4',
                    comment: '十一有活动吗？还想再买几套。'
                },
                {
                    id: 5,
                    username: '买家5',
                    comment: '神在评论'
                }               
            ],
            newComment: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    render() {
        return (
                <div>
                <h1 style={{color: 'red', fontSize: 100}}>这是评论列表</h1>
                <input value={this.state.newComment} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>添加评论</button>
            {this.state.comments.map(item => (<CommentItem {...item} key={item.id}/>))}

            </div>
        )
    }

    handleClick() {
        console.log('click');
        const comment = this.state.newComment;
        const id = this.state.commentId;
        this.setState( {
            comments: [
                ...this.state.comments,
                {
                    id: id,
                    username: '买家1',
                    comment: comment
                }
            ],
            newComment: '',
            commentId: id + 1
        })
    }

    handleChange(e) {
        this.setState({
            newComment: e.target.value
        });
    }
}

export default CommentList;
