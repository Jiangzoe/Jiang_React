import React from 'react' 

class CommentList extends React.Component{
  render(){
    const {CommentLists} = this.props
    return(
      <ul>
       {
          CommentLists.map(({userName,comment},i) => (
            <li>{userName}：
            {comment}</li>
          ))
        }
      </ul>
    )
  }
}

export default CommentList