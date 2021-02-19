import * as React from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import db from '../config'
import SearchFilter, { createFilter } from 'react-native-search-filter';

export default class Write extends React.Component {
    constructor(){
        super();
        this.setState({
            search:'',
        });
    }
    updateSearch = (search) =>{
        this.setState({search});
    }
    retrieveStories=()=>{
        var storiesRef = await db.collection("stories")
        .where("title","==",this.state.search)
        .get()
        transaction.docs.map((doc)=>{
            var allstories = doc;
        })
    }
    render(){
        const {search} = this.state;
        const filterdata = allstories.filter(allstories)
        return(
            <FlatList>
            <SearchBar
            placeholder = "Search for Stories"
            onChangeText = {this.updateSearch}
            value = {search}
            />
            </FlatList>
        )
    }
}