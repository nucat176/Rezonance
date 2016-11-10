import React from 'react';

class CommentItem extends React.Component {
  constructor(props){
    super(props);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  renderDeleteButton(){
    if(this.props.currentUserId === this.props.comment.user.id){
      return (
        <button onClick={this.handleDelete} className="delete-button">Delete</button>
      );
    } else {
      return (<span></span>);
    }
  }

  handleDelete(){
    this.props.deleteComment(this.props.comment.id);
    this.setState({});
  }

  render(){
    return (
      <li className = "comment-item">
        <h1 className="comment-author">
        </h1>
        <p className="comment-body">
          {this.props.comment.body}
        </p>
        {this.renderDeleteButton()}
      </li>
    );
  }
}

export default CommentItem;
