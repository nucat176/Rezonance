import React from 'react';
import {hashHistory} from 'react-router';
import UpdateTrackContainer from './update_track_container';
import TrackItem from './track_item';
import CommentItem from './comment_item';
import {Link} from 'react-router';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: "",
      trackId: parseInt(this.props.params.id),
      userId: this.props.currentUser.id,
      user: this.props.track.user
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleFetchCurrentTrack = this.handleFetchCurrentTrack.bind(this);
    this.renderTrackButtons = this.renderTrackButtons.bind(this);
  }

  componentDidMount(){
    this.setState({user: this.props.track.user});
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

  renderTrackButtons(){
    if(this.props.currentUser.id === this.props.track.user_id){
      return (
        <div className="track-buttons">
          <button onClick={this.handleDelete} className="delete-button">Delete Track</button>
          <UpdateTrackContainer/>
        </div>
      );
    } else {
      return (<span></span>);
    }
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
        <div className="brightness-show">
          <img src={this.props.track.cover_url}
            className="show-img"
            onClick={this.handleFetchCurrentTrack(this.state.trackId)}/>
        </div>
        <div className="comments-box">
          <h1 className="track-show-title">{this.props.track.title}</h1>
          <h2 className="uploaded-by">Uploaded by:
            &nbsp;
            <Link to={`/home/users/${this.props.track.user_id}`}
              className="profile-link">
              {this.props.track.user.username}
            </Link>
          </h2>
          {this.renderTrackButtons()}
          <h1 className='comments-title'>Join the discussion!</h1>
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
