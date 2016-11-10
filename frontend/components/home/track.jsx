import React from 'react';
import {hashHistory} from 'react-router';
import UpdateTrackContainer from './update_track_container';
import TrackItem from './track_item';
import CommentItem from './comment_item';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: "", trackId: parseInt(this.props.params.id), userId: this.props.currentUser.id};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleDelete(){
    this.props.deleteTrack(this.props.track.id);
    hashHistory.push("/home");
  }

  handleFetchCurrentTrack(id){
    return (
      e => {
        this.props.fetchCurrentTrack(id);
        this.props.receivePlaying(true);
      }
    );
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = {body: this.state.body, track_id: this.state.trackId, user_id: this.state.userId};
    this.props.createComment(comment);
    this.setState({body: ""});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return (
      <div className="track-page">
        <img src={this.props.track.cover_url} className="show-img"/>
        <div className="comments-box">
          <h1 className="track-show-title">{this.props.track.title}</h1>
          <div className="track-buttons">
            <button onClick={this.handleDelete} className="delete-button">Delete Track</button>
            <UpdateTrackContainer/>
          </div>
          <ul className="comments">
            {this.props.track.comments.map(comment => (
              <CommentItem
                key={comment.id}
                comment={comment}
                currentUserId={this.state.userId}
                deleteComment={this.props.deleteComment}
                track={this.props.track}/>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit} className="add-comment-form">
            <input type="text-area"
              className="body-input"
              placeholder="Add Comment"
              value={this.state.body}
              onChange={this.update("body")}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Track;
