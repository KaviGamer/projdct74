import * as React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'
import { KeyboardAvoidingView } from 'react-native-simple-toast';

export default class Write extends React.Component {

  constructor(){
    super();
    this.state={
      title:'',
      author:'',
      story:'',
    }
  }
  submitStory = ()=>{
    db.collection("stories").doc("storiesdoc").add({
        title: this.state.title,
        author: this.state.author,
        storyText: this.state.storyText,
    })
    this.setState({
        title: '',
        author: '',
        story: ''
    })
    Toast.show("Congratulations you just wrote a story!",Toast.LONG);
}
    render(){
        return(
    <KeyboardAvoidingView>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Write A Story',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput
        value={title}
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,
          }}
          placeholder="Title"
        />
        <TextInput
        value={author}
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,}}
          placeholder="Author"
        />
        <TextInput
        value={story}
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,}}
          multiline={true}
          placeholder="Write Story"
        />
        <TouchableOpacity style={styles.submitButton}
        onPress={this.submitStory}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
        )
    }
}