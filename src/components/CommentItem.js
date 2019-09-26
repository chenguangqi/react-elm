import React from 'react';

// 没有状态的组件使用函数方式定义。
function CommentItem(props) {
    return (
            <div>
            <h3>评论人: {props.username}</h3>
            <p>评论内容: {props.comment}</p>
            </div>
    );
}

export default CommentItem;
