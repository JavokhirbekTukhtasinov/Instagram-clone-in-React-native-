import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider} from 'react-native-elements';
const Posts = ({post}) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage />
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentsSection post={post} />
      <Comment post={post} />
    </View>
  );
};

const PostHeader = ({post}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10,
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={require('../../assets/ronaldo.jpg')}
        />
      </TouchableOpacity>
      <Text style={{color: 'white', marginLeft: 10}}>{post?.userName}</Text>
    </View>
    <TouchableOpacity>
      <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>...</Text>
    </TouchableOpacity>
  </View>
);

const PostImage = ({post}) => (
  <View style={{width: '100%', height: 400}}>
    <Image
      style={{height: '100%', resizeMode: 'cover'}}
      source={require('../../assets/ronaldo.jpg')}
    />
  </View>
);

const PostFooter = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
    }}>
    <View style={{flexDirection: 'row'}}>
      <Icon
        imageStyle={{width: 30, height: 30}}
        imageUrl={{
          uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/like--v1.png',
        }}
      />
      <Icon
        imageStyle={{width: 30, height: 30}}
        imageUrl={{
          uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/speech-bubble--v1.png',
        }}
      />

      <Icon
        imageStyle={{width: 30, height: 30}}
        imageUrl={{
          uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/telegram-app.png',
        }}
      />
    </View>
    <Icon
      imageStyle={{width: 30, height: 30}}
      imageUrl={{
        uri: 'https://img.icons8.com/fluency-systems-regular/50/ffffff/bookmark-ribbon.png',
      }}
    />
  </View>
);

const Caption = ({post}) => (
  <View style={{marginTop: 5, flexDirection: 'row'}}>
    <Text style={{fontWeight: '700', color: 'white', marginHorizontal: 5}}>
      {post?.userName}
    </Text>
    <Text style={{color: 'white'}}>{post?.caption}</Text>
  </View>
);
const Likes = ({post}) => (
  <View style={{marginLeft: 5}}>
    <Text style={{color: 'white', fontWeight: 'bold'}}>
      {post?.likes.toLocaleString('en')} likes
    </Text>
  </View>
);

export const Icon = ({imageStyle, imageUrl}) => (
  <TouchableOpacity>
    <Image style={[imageStyle, {marginRight: 5}]} source={imageUrl} />
  </TouchableOpacity>
);

const CommentsSection = ({post}) => (
  <View style={{marginLeft: 5}}>
    {!!post.comments.length && (
      <View>
        <Text style={{color: 'gray'}}>
          View{' '}
          {post.comments.length > 1
            ? `all ${post.comments.length} comments`
            : 'a comment'}
        </Text>
      </View>
    )}
  </View>
);

const Comment = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row'}}>
        <Text style={{color: 'white', fontWeight: '500', marginHorizontal: 5}}>
          {comment.user}
        </Text>
        <Text style={{color: 'white'}}>{comment.comment}</Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'yellow',
  },
});
export default Posts;
