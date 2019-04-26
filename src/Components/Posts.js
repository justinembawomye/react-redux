import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/postActions';
import PropTypes from 'prop-types';



class  Posts extends Component {
    componentDidMount(){
        this.props.getPosts();
        // console.log(this.props.posts)
        console.log('mounted')
    }
// componentDidUpdate(){
//     this.props.getPosts();
//         console.log(this.props.posts)
// }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }

    }

    render() { 
        const postItems = this.props.posts.map(post =>(
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        )); 
        // const postItems = 'posts'
       
        return (
            <Fragment>
            <div className=" container card card-posts">
                <div className="card-body">
                <h1>Available Posts</h1>
                </div>
                
                {postItems}
            </div>
            </Fragment>
         );
    }
}

Posts.PropTypes = {
    getPosts: PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired, 
    newPost:PropTypes.object 
}


const mapStateToProps = state =>({
    posts:state.posts.items,
    newPost:state.posts.item
})

export default connect(mapStateToProps, {getPosts})(Posts);