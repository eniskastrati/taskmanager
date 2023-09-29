import { StyleSheet, Text, View } from "react-native";

export default function Task(props){
    const {code, name, description, status, note} = props;
    return(
        <View style={styles.item}>
            <View>
                <Text style={styles.title}>Todo Code: {code}</Text>
                <Text style={styles.date}>Name: {name}</Text>
                <Text style={styles.date}>Description: {description}</Text>
                {note.length > 0 ? <Text style={styles.date}>Note: {note}</Text> : null }
                <Text style={styles.date}>status: {status}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f4f5f8',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222428'
    },
    date: {
        fontSize: 17
    },
    result:{
        fontSize: 22
    }
})