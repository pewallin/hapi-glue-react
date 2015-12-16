'use strict';
const Layout = require('./layout.jsx');
const React = require('react');

module.exports = React.createClass({
  displayName: 'contents',

  getInitialState: function(){
    return {playTrailer: false};
  },

  clickPlayTrailer: function(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    this.setState({playTrailer: true});
  },

  render: function render() {
    function genreNodes(genres) {
      if (genres) {
        const returnValue = [];
        let i = 0;
        for (const genre of genres) {
          returnValue.push(<a key={'genre-'+i} href={genre.href} itemProp="genre"> {genre.title} </a>);
          returnValue.push(<span key={'genre-span-'+i} className="slash">/</span>);
          i++;
        }
        returnValue.pop(); // remove the last slash
        return returnValue;
      }
    }

    function peopleNodes(people) {
      if (people) {
        const returnValue = [];
        let i = 0;
        for (const person of people) {
          returnValue.push(<a key={'person-'+i} href={'/search?query=&quot;' + person}> {person} </a>);
          returnValue.push(<span key={'person-span-'+i}>, </span>);
          i++;
        }
        returnValue.pop(); // remove the last comma
        return returnValue;
      }
    }

    return (
      <Layout title="About Us">
      <div className="content-transition">
        <div id="content">
          <section className="block product" itemScope itemType="http://schema.org/Movie">
                <div className="scaffold">
                  <div className="player-wrapper">
                    { this.state.playTrailer ?
                      <figure className="mediaplayer">
                        <iframe width="100%" height="100%" src={'//v.traileraddict.com/' + this.props.film.trailer.trailer_id} allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" frameBorder="0"></iframe>
                      </figure> :
                      <figure className="mediaplayer">
                      <img className="poster" src={this.props.film.product.content.images.boxart.url} alt={this.props.film.product.content.title} />
                      <div className="backdrop large">
                        <div className="box">
                          <a className="play-link large" onClick={this.clickPlayTrailer} href="#"></a>
                        </div>
                      </div>
                    </figure> }
                  </div>
                  <div className="metadata">
                    <div className="group">
                      <h1 itemProp="name">{this.props.film.product.content.title}</h1>
                      <p className="summary">
                        <span className="genre divider">
                          { genreNodes(this.props.film.product._links['viaplay:genres']) }
                        </span>
                        <span className="year divider">
                          <span>{this.props.film.product.content.production.year}</span>
                        </span>
                        <span className="duration divider">
                          <span>{this.props.film.product.content.duration.readable}</span>
                        </span>
                      </p>
                    </div>
                    <div className="imdb-container" itemType="http://schema.org/AggregateRating" itemScope itemProp="aggregateRating">
                      <a className="imdb-link" href={this.props.film.product.content.imdb.url} target="_blank" rel="nofollow">
                        {this.props.film.product.content.imdb.rating} från {this.props.film.product.content.imdb.votes} användare
                      </a>
                    </div>
                    <div className="group">
                      <div className="synopsis" itemProp="description">
                        {this.props.film.product.content.synopsis}
                      </div>
                    </div>
                    <div className="group">
                      <div className="people-list actors">
                        <h2>Skådespelare: </h2>
                        <p>
                          {peopleNodes(this.props.film.product.content.people.actors)}
                        </p>
                      </div>
                      <div className="people-list directors">
                        <h2>Regissör: </h2>
                        <p>
                          {peopleNodes(this.props.film.product.content.people.directors)}
                        </p>
                      </div>
                      <div className="country">
                        <h2 onClick={this.test}>Land</h2>:
                        <p> {this.props.film.product.content.production.country}</p>
                      </div>
                    </div>
                    <span className="flag">hd</span>
                    <span className="flag">{this.props.film.product.content.parentalRating}</span>
                    <div className="group">
                      <a href data-action="https://star2.viaplay.se/setStar/pcdash-se/V51705/{starred}" data-tooltip-default="Stjärnmärk" data-tooltip-active="Ta bort stjärnmärkning" className="icon starred ">
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          </Layout>
    );
  }
});
