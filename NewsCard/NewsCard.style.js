import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin: 10,
        borderRadius:10,
        width : Dimensions.get('window').width/2.2,
    },
    image:{
        height: Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        resizeMode: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    price:{
        marginTop: 3,
    },

    inner_container:{
        padding: 5,
    },

    stock:{
        fontStyle: 'italic',
        textAlign: 'right',
        color: 'red',
        fontWeight: 'bold',
    }
});