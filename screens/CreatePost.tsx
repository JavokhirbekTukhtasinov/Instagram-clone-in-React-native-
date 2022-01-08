import React from 'react'
import { useState } from 'react'
import { Button, Image, Pressable, TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
navigation: any
}
const CreatePost: React.FC<Props> = ({navigation}) => {
    const [caption, setCaption] = useState<any>()
    const [imageUrl, setImageUrl] = useState<any>()

    const submitHandler = () => {
        
        console.log('caption: ', {
            caption,
            imageUrl
        })
navigation.goBack()
    }
    return (
        <View style={styles.root}> 
        <View style={styles.topHeader}>
            <View style={styles.placeholder}>
             <Image style={{width: 100, height: 100}} source={{uri: imageUrl ? imageUrl : 'https://i.pinimg.com/280x280_RS/0e/b0/5f/0eb05fd878bbd84eef86552ad1cef71e.jpg'}}/>
            </View>
            <View style={{width: '100%'}}>
                <TextInput onChangeText={setCaption} value={caption} placeholderTextColor={'gray'} style={styles.input}  placeholder='Write a post' />
            </View>
            </View>
            <View style={{marginVertical: 20, marginLeft: 10}}>
                <TextInput onChangeText={setImageUrl} style={styles.input} placeholder='Write image url' placeholderTextColor={'gray'}/>
            </View>
            <Button onPress={submitHandler} title='Post'/> 
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    },
    topHeader:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeholder: {
        marginHorizontal: 10
    },
    input:{
        color: 'white', borderBottomWidth: 1, borderBottomColor: 'gray', paddingVertical: 1
    }
})
export default CreatePost
