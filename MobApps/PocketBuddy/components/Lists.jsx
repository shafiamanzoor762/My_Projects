import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

const FlatListBasics = () => {
    return (
        <View style={styles.container}>
            <Text style={{alignItems:'center',fontSize:40,}}>Flat List</Text>
            <FlatList
                data={[
                    { key: 'Alina' },
                    { key: 'Aliza' },
                    { key: 'Aliya' },
                    { key: 'Alisha' },
                    { key: 'Alish' },
                    { key: 'Bisma' },
                    { key: 'Barira' },
                    { key: 'Javeria' },
                    { key: 'Jiya' },
                    { key: 'Jin' },
                    { key: 'Julie' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
            {/* Section List */}
            <Text style={{alignItems:'center',fontSize:40,}}>Section List</Text>
            <SectionList
                sections={[
                    { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
                    { title: 'J', data: ['Javeria', 'Jiya', 'Jin', 'Julie'], },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
export default FlatListBasics;