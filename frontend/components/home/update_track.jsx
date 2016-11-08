import React from 'react';
import {Link, withRouter} from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../auth/modal_style';

class UpdateTrack extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "", trackUrl: "", coverUrl: "", modalOpen: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleUploadClick = this._handleUploadClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this._handleUploadTrack = this._handleUploadTrack.bind(this);
    this._handleUploadCover = this._handleUploadCover.bind(this);
    this._handleUploadTrackUrl = this._handleUploadTrackUrl.bind(this);
    this._handleUploadCoverUrl = this._handleUploadCoverUrl.bind(this);
  }

  componentDidMount(){
    this.setState({title: this.props.track.title, trackUrl: this.props.track.track_url, coverUrl: this.props.track.cover_url});
  }

  handleSubmit(e){
    e.preventDefault();
    const track = {id: this.props.track.id, title: this.state.title, track_url: this.state.trackUrl, cover_url: this.state.coverUrl};
    this.props.updateTrack(track);
    this.closeModal();
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors(){
    return (
      <ul className="upload-errors">
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
      </ul>
    );
  }

  _handleUploadClick(){
    this.setState({modalOpen: true});
  }

  closeModal(){
    this.setState({modalOpen: false});
  }

  _handleUploadTrack(error, trackUrls){
    if(error === null){
      this.setState({trackUrl: trackUrls[0].secure_url});
    }
  }

  _handleUploadCover(error, coverUrls){
    if(error === null){
      this.setState({coverUrl: coverUrls[0].secure_url});
    }
  }

  _handleUploadTrackUrl(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      this._handleUploadTrack
    );
  }

  _handleUploadCoverUrl(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      this._handleUploadCover
    );
  }

  render(){
    return (
      <div>
        <span className="log-in-button" onClick={this._handleUploadClick}>Update Track</span>
        <Modal
          className='auth-form-modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="form-errors">
                {this.renderErrors()}
              </div>
              <div className="login-form">
                <h1 className="upload-title">Update Track</h1>
                <input type="text"
                  placeholder="Track title"
                  onChange={this.update("title")}
                  className="upload-input"/>
                <br/>
                <button className="upload-button" onClick={this._handleUploadCoverUrl}>Update Album Cover</button>
                <button className="upload-button" onClick={this._handleUploadTrackUrl}>Update Track File</button>
                <input className="auth-form-submit-button" type="submit" value="Upload"/>
                <br/>
                <button className="modal-close" onClick={this.closeModal}>Close</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(UpdateTrack);
