import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackIcon from "../svg/BackIcon";
import { useNavigation } from "@react-navigation/native";
import SearchIcon from "../svg/SearchIcon";
import basketData from './basketData.json'
function BasketOrder() {

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  }
  const goToSuccess = () => {
    navigation.navigate('BasketOrderSuccess');
  }

  const renderBasketItem = ({ item, index }: any) => {
    return (
      <View style={styles.rowItem}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={styles.symbolName} >{item.symbol} </Text>
            <Text style={styles.exchange} >{item.exc}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={styles.labelText} >{'PRICE:  '}</Text>
            <Text style={styles.symbolName} >{item.price}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2, }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={styles.labelText} >{'QTY:  '}</Text>
            <Text style={styles.symbolName} >{item.qty}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={styles.labelText} >{'LTP:  '}</Text>
            <Text style={styles.symbolName} >{item.ltp}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3, }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <View style={{borderWidth: 0.5, borderColor: 'grey', borderRadius: 3, padding: 2}}  >
              <Text style={item.orderType === 'BUY' ? styles.positive: styles.negative}>{item.orderType}</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={[styles.labelText, item.chgPer > 0 ? styles.positive: styles.negative]} >{`${item.chg} (${item.chgPer}%)`}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={styles.container}>
        <TouchableOpacity style={styles.header} onPress={goBack}>
          <View style={styles.arrow}>
            <BackIcon />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText} >My Basket 1</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.searchRowContainer}>
          <View style={styles.searchRow}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <SearchIcon />
            </View>
            <View style={{ flex: 5, justifyContent: 'center' }}>
              <Text style={styles.searchText}>Add stocks to basket</Text>
            </View>

          </View>
        </TouchableOpacity>
        <View style={styles.listView}>
          <FlatList
            data={basketData}
            renderItem={renderBasketItem}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={goToSuccess}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>EXECUTE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  header: {
    flexDirection: 'row',
    height: '8%', width: '100%',
  },
  arrow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 5,
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  searchRowContainer: {
    height: '10%', width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchRow: {
    height: '80%', width: '95%',
    borderRadius: 25,
    borderWidth: 1, borderColor: 'grey',
    justifyContent: 'center',
    backgroundColor: '#151719',
    flexDirection: 'row',
  },
  searchText: {
    color: '#888',
    fontSize: 18,
  },
  listView: {
    height: '72%', width: '100%',
  },
  button: {
    backgroundColor: '#0060A9',
    height: '8%',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: '2%',
  },
  rowItem: {
    padding: '5%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  symbolName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  exchange: {
    color: '#999',
    fontSize: 14,
    fontWeight: '200',
  },
  labelText: {
    color: '#BCBCBC',
    fontSize: 14,
    fontWeight: '400',
  },
  positive: {
    fontSize: 15,
    color: '#2DBF7C'
  },
  negative: {
    fontSize: 15,
    color: '#FA4343',
  }

})


export default BasketOrder;