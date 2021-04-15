import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";
import Blogpost from "../components/Blogpost";

class Blogposts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    let postToRender;
    if(posts) {
      postToRender = posts.map((post) => {
        return (
          <li key={post.id}>
            <Blogpost post={post} />
          </li>
        );
      });
    }
    return (
      <div>
        <ul> {postToRender}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Blogposts);
