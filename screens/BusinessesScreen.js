import * as React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
const businessDataList = require('../data.json');

function BusinessListItem(props) {
  const {business, onPress} = props;
  return (
    <View style={styles.businessListItem}>
      <Button
        style={styles.businessListItemText}
        title={business.name}
        onPress={onPress}></Button>
    </View>
  );
}

export default function BusinessesScreen({navigation}) {
  // TODO: screen needs a title
  const renderBusinessItem = (businessRowItem) => {
    return (
      <BusinessListItem
        business={businessRowItem.item}
        onPress={() =>
          navigation.navigate('Profile', {business: businessRowItem.item})
        }
      />
    );
  };

  return (
    <View style={styles.page}>
      <FlatList
        data={businessDataList}
        renderItem={renderBusinessItem}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
const businessListItemStyles = {
  businessListItem: {
    // flex: 0.5,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 18,

    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
  },
  businessListItemText: {
    fontSize: 22,
    color: '#444444',
  },
  page: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
};

const styles = StyleSheet.create({
  businessListItem: {
    // boxShadow: '2px 2px 2px rgba(0,0,0,0.2)',
  },
  ...businessListItemStyles,
});
