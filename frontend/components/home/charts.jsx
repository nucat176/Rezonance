import React from 'react';
import TrackItem from './track_item';
import Carousel from 'nuka-carousel';

class Charts extends React.Component {
  constructor(props){
    super(props);
    this.handleFetchCurrentTrack = this.handleFetchCurrentTrack.bind(this);
    this.handleFetchTrack = this.handleFetchTrack.bind(this);
  }

  handleFetchCurrentTrack(id){
    return (
      e => {
        this.props.fetchCurrentTrack(id);
        this.props.receivePlaying(true);
      }
    );
  }

  handleFetchTrack(id){
    return e => this.props.fetchTrack(id);
  }

  componentDidMount(){
        let that = this;
        sync(function* (){
          yield sleep(2500);
          that.forceUpdate();
          yield sleep(5000);
          that.forceUpdate();
          yield sleep(5000);
          that.forceUpdate();
        });
      }

  render(){
    return (
      <section className="tracks-section">
        <ul className="tracks-list">
          <Carousel className='carousel' slidesToShow={7} cellSpacing={20}>
            {this.props.tracks.map(track => (
              <TrackItem
                key={track.id}
                track={track}
                handleCurrentClick={this.handleFetchCurrentTrack(track.id)}
                handleClick={this.handleFetchTrack(track.id)}/>
            ))}
          </Carousel>
        </ul>
      </section>
    );
  }
}

function sync(generator){
  var _generator = generator();

  function done(){
      var result = _generator.next().value;
      if(result instanceof Promise){
          result.then(done);
      }
  }

  done();
}

function sleep(ms){
    return new Promise(function(res, rej){
        setTimeout(res, ms);
    });
}

export default Charts;
